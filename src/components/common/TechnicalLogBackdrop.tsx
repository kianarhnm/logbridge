/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface Props {
  variant?: 'hero' | 'card' | 'full';
  className?: string;
}

export const TechnicalLogBackdrop: React.FC<Props> = ({ variant = 'card', className = '' }) => {
  if (variant === 'hero') {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none font-mono text-[10px] sm:text-[11px] leading-relaxed text-neutral-400/20 dark:text-neutral-500/20 transition-opacity ${className}`}
        dir="ltr"
      >
        <div className="absolute -top-4 -left-4 right-0 bottom-0 p-4 space-y-1.5 opacity-40">
          <div className="flex items-center gap-3">
            <span className="text-emerald-500/40 dark:text-emerald-400/40 font-semibold">/var/log/system/audit.log</span>
            <span>[2026-11-08T02:54:19Z]</span>
            <span>SEC_POLICY: inbound_filter=ACTIVE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-500/30">/services/backend/k8s/</span>
            <span>pod/pg-cluster-01 [STATUS: READY]</span>
            <span className="text-emerald-500/30">health: 100%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-500/30">/monitoring/events/</span>
            <span>telemetry.stream.pipeline [BUFFER: 0 dropped]</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-500/40 dark:text-emerald-400/40 font-semibold">/incidents/2026/</span>
            <span>schema_validator: strict_type_check=PASS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-500/30">/policies/security/</span>
            <span>redaction_rule: pii_masking_enabled=true</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-500/30">/network/alerts/</span>
            <span>egress_proxy: direct_ssh_blocked=TRUE</span>
          </div>
        </div>
      </div>
    );
  }

  // Standard subtle card / section backdrop
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none font-mono text-[9px] leading-relaxed text-neutral-400/15 dark:text-neutral-500/15 ${className}`}
      dir="ltr"
    >
      <div className="absolute top-2 right-3 space-y-1 text-right opacity-30">
        <div>/var/log/system/ · audit_ok</div>
        <div>/services/backend/ · latency_ms: 12</div>
        <div>/policies/security/ · zero_leak_mode</div>
      </div>
    </div>
  );
};
