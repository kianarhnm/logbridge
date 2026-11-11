/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MonitoringSourceCategory } from '../../types';

interface Node3D {
  id: MonitoringSourceCategory | 'core';
  label: { fa: string; en: string };
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  color: string;
  health: 'healthy' | 'warning' | 'critical';
  latency: string;
  metric: string;
}

interface Packet {
  sourceId: string;
  progress: number;
  speed: number;
}

interface Interactive3DTopologyProps {
  variant?: 'hero' | 'monitoring';
  onSelectCategory?: (category: MonitoringSourceCategory) => void;
  className?: string;
}

export const Interactive3DTopology: React.FC<Interactive3DTopologyProps> = ({
  variant = 'hero',
  onSelectCategory,
  className = '',
}) => {
  const { lang, t } = useApp();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0.15, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  // Initial 3D node coordinates in space
  const nodesRef = useRef<Node3D[]>([
    {
      id: 'core',
      label: { fa: 'هسته پردازش LogBridge', en: 'LogBridge Processing Core' },
      x: 0,
      y: 0,
      z: 0,
      baseRadius: variant === 'hero' ? 22 : 26,
      color: '#10B981',
      health: 'healthy',
      latency: '2.1ms',
      metric: '4.8k ev/s',
    },
    {
      id: 'frontend',
      label: { fa: 'فرانت‌اند و وب', en: 'Frontend & Web' },
      x: -160,
      y: -90,
      z: 40,
      baseRadius: 15,
      color: '#34D399',
      health: 'healthy',
      latency: '18ms',
      metric: '0.04% err',
    },
    {
      id: 'backend',
      label: { fa: 'سرویس‌های بک‌اند', en: 'Backend Services' },
      x: -110,
      y: 90,
      z: -30,
      baseRadius: 17,
      color: '#F59E0B',
      health: 'warning',
      latency: '184ms',
      metric: '5xx spike',
    },
    {
      id: 'database',
      label: { fa: 'پایگاه داده (DB)', en: 'Databases (Postgres)' },
      x: 150,
      y: -95,
      z: -20,
      baseRadius: 17,
      color: '#EF4444',
      health: 'critical',
      latency: '420ms',
      metric: '91% pool',
    },
    {
      id: 'server',
      label: { fa: 'سرور و لینوکس', en: 'Servers & Linux OS' },
      x: 130,
      y: 85,
      z: 50,
      baseRadius: 16,
      color: '#10B981',
      health: 'healthy',
      latency: '4.2ms',
      metric: '68% RAM',
    },
    {
      id: 'disk',
      label: { fa: 'هارد و استوریج', en: 'Disk & Hardware' },
      x: 0,
      y: 130,
      z: 30,
      baseRadius: 14,
      color: '#10B981',
      health: 'healthy',
      latency: '1.2ms',
      metric: 'SMART OK',
    },
    {
      id: 'network',
      label: { fa: 'شبکه و فایروال', en: 'Network & Ingress' },
      x: -180,
      y: 10,
      z: -50,
      baseRadius: 15,
      color: '#10B981',
      health: 'healthy',
      latency: '12ms',
      metric: '0.01% loss',
    },
    {
      id: 'security',
      label: { fa: 'امنیت سایبری', en: 'Cybersecurity' },
      x: 0,
      y: -130,
      z: -40,
      baseRadius: 15,
      color: '#10B981',
      health: 'healthy',
      latency: '0.8ms',
      metric: 'Zero Leaks',
    },
    {
      id: 'cloud',
      label: { fa: 'کلاود و کانتینرها', en: 'Cloud & Containers' },
      x: 100,
      y: -120,
      z: 35,
      baseRadius: 15,
      color: '#10B981',
      health: 'healthy',
      latency: '5.4ms',
      metric: '142 Pods',
    },
  ]);

  // Animated packets moving toward central core
  const packetsRef = useRef<Packet[]>([
    { sourceId: 'frontend', progress: 0.1, speed: 0.008 },
    { sourceId: 'backend', progress: 0.45, speed: 0.009 },
    { sourceId: 'database', progress: 0.75, speed: 0.006 },
    { sourceId: 'server', progress: 0.2, speed: 0.007 },
    { sourceId: 'network', progress: 0.6, speed: 0.008 },
    { sourceId: 'security', progress: 0.35, speed: 0.006 },
    { sourceId: 'disk', progress: 0.8, speed: 0.007 },
    { sourceId: 'cloud', progress: 0.5, speed: 0.0075 },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      const cx = w / 2;
      const cy = h / 2;

      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      // Subtle slow auto-rotation unless dragging
      if (!isDraggingRef.current) {
        angle += 0.004;
      }

      const rotY = rotation.y + angle;
      const rotX = rotation.x;

      // Project 3D points to 2D
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = nodesRef.current.map((node) => {
        // Rotate around Y
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;
        // Rotate around X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        // Perspective projection factor
        const fov = 400;
        const scale = fov / (fov + z2);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const pRadius = node.baseRadius * scale;

        return {
          ...node,
          px,
          py,
          scale,
          z2,
          pRadius: Math.max(6, pRadius),
        };
      });

      // Sort by depth (z2) so back elements render first
      projected.sort((a, b) => b.z2 - a.z2);

      const coreNode = projected.find((n) => n.id === 'core')!;

      // 1. Draw connection lines from nodes to Core
      projected.forEach((node) => {
        if (node.id === 'core') return;

        ctx.beginPath();
        ctx.moveTo(node.px, node.py);
        ctx.lineTo(coreNode.px, coreNode.py);

        // Color line based on health
        if (node.health === 'critical') {
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
          ctx.lineWidth = 1.6;
        } else if (node.health === 'warning') {
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.28)';
          ctx.lineWidth = 1.2;
        }
        ctx.stroke();
      });

      // 2. Draw flowing data packets
      packetsRef.current.forEach((pkt) => {
        const source = projected.find((n) => n.id === pkt.sourceId);
        if (!source || !coreNode) return;

        pkt.progress = (pkt.progress + pkt.speed) % 1;
        const px = source.px + (coreNode.px - source.px) * pkt.progress;
        const py = source.py + (coreNode.py - source.py) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = source.health === 'critical' ? '#F87171' : '#34D399';
        ctx.shadowColor = '#10B981';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw nodes
      projected.forEach((node) => {
        const isHovered = hoveredNode === node.id;
        const isCore = node.id === 'core';

        // Outer glow on hover or for core
        if (isCore || isHovered) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, node.pRadius + 6, 0, Math.PI * 2);
          ctx.fillStyle = isCore ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.1)';
          ctx.fill();
        }

        // Main node body
        ctx.beginPath();
        ctx.arc(node.px, node.py, node.pRadius, 0, Math.PI * 2);
        ctx.fillStyle = isCore ? '#047857' : node.color;
        ctx.fill();

        // White border
        ctx.lineWidth = isHovered ? 2.5 : 1.5;
        ctx.strokeStyle = isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)';
        ctx.stroke();

        // Node label pill
        const labelText = node.label[lang];
        ctx.font = '10px Vazirmatn, sans-serif';
        const textWidth = ctx.measureText(labelText).width;

        // Label background box
        const lx = node.px - textWidth / 2 - 6;
        const ly = node.py + node.pRadius + 6;
        ctx.fillStyle = 'rgba(24, 25, 28, 0.85)';
        ctx.beginPath();
        ctx.roundRect(lx, ly, textWidth + 12, 18, 4);
        ctx.fill();
        ctx.strokeStyle = isHovered ? '#10B981' : 'rgba(75, 85, 99, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Text
        ctx.fillStyle = isHovered ? '#34D399' : '#E5E7EB';
        ctx.fillText(labelText, node.px - textWidth / 2, ly + 12);

        // Metric Badge
        if (!isCore) {
          ctx.font = '8px monospace';
          ctx.fillStyle = node.health === 'critical' ? '#F87171' : '#9CA3AF';
          ctx.fillText(node.metric, node.px - textWidth / 2, ly + 28);
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [lang, hoveredNode, rotation, variant]);

  // Click & hover detection
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (isDraggingRef.current) {
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      setRotation((prev) => ({
        x: Math.max(-0.6, Math.min(0.6, prev.x + dy * 0.005)),
        y: prev.y + dx * 0.008,
      }));
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      return;
    }

    // Hit test
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    let found: string | null = null;

    nodesRef.current.forEach((n) => {
      // simplified distance check
      const d = Math.hypot(mx - (cx + n.x * 0.8), my - (cy + n.y * 0.8));
      if (d < 30) {
        found = n.id;
      }
    });

    setHoveredNode(found);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = () => {
    if (hoveredNode && hoveredNode !== 'core' && onSelectCategory) {
      onSelectCategory(hoveredNode as MonitoringSourceCategory);
    }
  };

  return (
    <div
      className={`relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        className="w-full h-full block"
      />

      {/* Floating 3D Hint Badge */}
      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-neutral-700/60 text-[10px] font-mono text-neutral-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>
          {variant === 'hero'
            ? t('مدل زنده ۳بعدی هسته LogBridge', 'Live 3D LogBridge Topology')
            : t('کلیک روی هر گره برای ورود به پایش منبع', 'Click node to inspect source')}
        </span>
      </div>
    </div>
  );
};
