/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogBridgeLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  onDarkBackground?: boolean;
  className?: string;
}

export const LogBridgeLogo: React.FC<LogBridgeLogoProps> = ({
  size = 'md',
  showTagline = false,
  onDarkBackground = false,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Visual Symbol: Bridge Arch connecting Log brackets */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-neutral-950 dark:bg-neutral-800 border border-neutral-700/80 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-radial from-emerald-500/25 to-transparent opacity-80" />
        
        {/* Bridge & Log glyph vector */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6 relative z-10"
        >
          {/* Left log bracket [ */}
          <path
            d="M8 8H5V24H8"
            stroke="#10B981"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right log bracket ] */}
          <path
            d="M24 8H27V24H27"
            stroke="#10B981"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bridge arch span connecting the internal log records */}
          <path
            d="M9 19C12.5 13.5 19.5 13.5 23 19"
            stroke="#F3F4F6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Bridge pillars / log entry indicator dots */}
          <circle cx="12" cy="19.5" r="1.3" fill="#10B981" />
          <circle cx="16" cy="15.5" r="1.6" fill="#34D399" />
          <circle cx="20" cy="19.5" r="1.3" fill="#10B981" />
          {/* Central data packet line */}
          <path
            d="M10 11H22"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
        </svg>
      </div>

      {/* Typography:
          "Log" in refined emerald, "Bridge" in text primary / white.
      */}
      <div className="flex flex-col leading-none select-none">
        <div className={`font-mono font-black tracking-tight flex items-baseline ${textSizes[size]}`}>
          <span className="text-emerald-600 dark:text-emerald-400 font-extrabold tracking-tight">Log</span>
          <span
            className={`font-sans font-bold tracking-normal ml-0.5 transition-colors ${
              onDarkBackground
                ? 'text-white'
                : 'text-neutral-900 dark:text-[#E5E9E6]'
            }`}
          >
            Bridge
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block ml-1 shadow-xs" />
        </div>

        {showTagline && (
          <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-wider uppercase mt-0.5">
            Ops & Expert Network
          </span>
        )}
      </div>
    </div>
  );
};

export const BridgeLogLogo = LogBridgeLogo;
