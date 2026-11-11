/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface StreamRecord {
  id: number;
  time: string;
  level: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
  service: string;
  event: string;
  highlight?: boolean;
}

const SYSTEM_STREAM_SAMPLES: Array<Omit<StreamRecord, 'id' | 'time'>> = [
  { level: 'INFO', service: 'frontend.request_received', event: 'route=/checkout/summary client=Mozilla/5.0' },
  { level: 'WARNING', service: 'backend.response_latency', event: 'upstream_p99_latency > 840ms' },
  { level: 'ERROR', service: 'database.connection_timeout', event: 'postgres_pool active_connections=194/200' },
  { level: 'INFO', service: 'policy.cpu_threshold_evaluated', event: 'rule_eval: cpu_spike_policy -> passed', highlight: true },
  { level: 'WARNING', service: 'server.disk_usage_high', event: '/dev/nvme0n1p2 capacity > 88%' },
  { level: 'CRITICAL', service: 'incident.alert_created', event: 'dispatching oncall incident: INC-2026-8041', highlight: true },
  { level: 'INFO', service: 'network.interface_status', event: 'eth0 packet_loss=0.01% throughput=480Mbps' },
  { level: 'INFO', service: 'security.sanitizer_engine', event: 'token_redacted: bearer_hash=***9f2', highlight: true },
  { level: 'WARNING', service: 'security.auth_attempts', event: 'failed_login_count > 5 for ip=198.51.***' },
  { level: 'INFO', service: 'expert.marketplace', event: 'matched_candidate: linux_specialist_rhca', highlight: true },
];

export const LiveLogStreamBackdrop: React.FC = () => {
  const [records, setRecords] = useState<StreamRecord[]>([]);
  const [sampleIdx, setSampleIdx] = useState(0);

  useEffect(() => {
    // Initial 6 entries
    const initial: StreamRecord[] = [];
    const baseHour = 10;
    const baseMin = 42;
    for (let i = 0; i < 6; i++) {
      const sample = SYSTEM_STREAM_SAMPLES[i % SYSTEM_STREAM_SAMPLES.length];
      const sec = 15 + i;
      initial.push({
        id: i,
        time: `2026-11-08T${baseHour}:${baseMin}:${sec.toString().padStart(2, '0')}`,
        level: sample.level,
        service: sample.service,
        event: sample.event,
        highlight: sample.highlight,
      });
    }
    setRecords(initial);
    setSampleIdx(6);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRecords((prev) => {
        const sample = SYSTEM_STREAM_SAMPLES[sampleIdx % SYSTEM_STREAM_SAMPLES.length];
        const now = new Date();
        const timeStr = `2026-11-08T${now.getHours().toString().padStart(2, '0')}:${now
          .getMinutes()
          .toString()
          .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        const nextEntry: StreamRecord = {
          id: Date.now() + Math.random(),
          time: timeStr,
          level: sample.level,
          service: sample.service,
          event: sample.event,
          highlight: sample.highlight,
        };

        return [...prev.slice(1), nextEntry];
      });
      setSampleIdx((idx) => idx + 1);
    }, 2400);

    return () => clearInterval(timer);
  }, [sampleIdx]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Seamless dark gradient overlay protecting title readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/90 dark:from-[#121316] dark:via-[#121316]/85 dark:to-[#121316]/95 z-10" />

      {/* Floating Monospace Stream */}
      <div className="absolute inset-x-6 top-3 bottom-3 flex flex-col justify-end font-mono text-[11px] leading-relaxed opacity-35 dark:opacity-30">
        {records.map((rec) => {
          return (
            <div
              key={rec.id}
              className="flex items-center gap-2.5 py-0.5 animate-fadeIn whitespace-nowrap overflow-hidden transition-all text-neutral-400"
            >
              <span className="text-neutral-500 tabular-nums shrink-0">{rec.time}</span>

              {/* Distinct visual badge for each severity */}
              <span
                className={`px-1.5 py-0.2 rounded text-[9px] font-bold shrink-0 tracking-wider uppercase ${
                  rec.level === 'CRITICAL'
                    ? 'text-rose-300 bg-rose-950/80 border border-rose-700/80'
                    : rec.level === 'ERROR'
                    ? 'text-rose-400 bg-rose-950/40 border border-rose-800/40'
                    : rec.level === 'WARNING'
                    ? 'text-amber-400 bg-amber-950/50 border border-amber-800/40'
                    : rec.highlight
                    ? 'text-emerald-400 bg-emerald-950/70 border border-emerald-800/60'
                    : 'text-neutral-400 bg-neutral-800/60'
                }`}
              >
                {rec.level}
              </span>

              <span className="font-semibold text-neutral-300 shrink-0">{rec.service}</span>
              <span className={`truncate ${rec.highlight ? 'text-emerald-300 font-medium' : 'text-neutral-500'}`}>
                {rec.event}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
