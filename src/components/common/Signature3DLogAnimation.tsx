/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useApp } from '../../context/AppContext';
import { Eye, EyeOff, RotateCcw, Activity, ShieldCheck, Zap } from 'lucide-react';

export interface Signature3DLogAnimationProps {
  variant?: 'hero' | 'header' | 'compact' | 'empty' | 'monitoring';
  className?: string;
  onDomainSelect?: (domainId: string) => void;
  onSelectDomain?: (domainId: string) => void;
}

export const Signature3DLogAnimation: React.FC<Signature3DLogAnimationProps> = ({
  variant = 'hero',
  className = '',
  onDomainSelect,
  onSelectDomain,
}) => {
  const selectCallback = onDomainSelect || onSelectDomain;
  const { lang, t } = useApp();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTelemetry, setActiveTelemetry] = useState({
    ingestRate: '4.8k',
    eventId: 'EVT-9842',
    status: 'NORMALIZED',
    leakAudit: '0-LEAK',
  });

  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDown: false, lastX: 0, lastY: 0 });

  useEffect(() => {
    // Check system prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect software WebGL per Three.js guidelines
    const isSoftwareGl = (() => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch (e) {
        return true;
      }
    })();

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 340;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x171719, 0.0018);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 30, variant === 'header' ? 140 : 160);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Root Group for 3D Log Structure
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Subtle Technical Coordinate Grid
    const gridHelper = new THREE.GridHelper(300, 30, 0x3d383c, 0x242023);
    gridHelper.position.y = -45;
    scene.add(gridHelper);

    // Coordinate axis rings in background
    const axisCircleGeo = new THREE.RingGeometry(85, 86, 64);
    const axisCircleMat = new THREE.MeshBasicMaterial({
      color: 0x292426,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const axisCircle = new THREE.Mesh(axisCircleGeo, axisCircleMat);
    axisCircle.rotation.x = Math.PI / 2;
    axisCircle.position.y = -44;
    scene.add(axisCircle);

    // 2. Central Rotating Core: Polyhedron with dual wireframe
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    const innerIcoGeo = new THREE.IcosahedronGeometry(variant === 'header' ? 18 : 22, 1);
    const innerIcoMat = new THREE.MeshBasicMaterial({
      color: 0x24b982,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerIco = new THREE.Mesh(innerIcoGeo, innerIcoMat);
    coreGroup.add(innerIco);

    // Central solid core with soft glow
    const solidCoreGeo = new THREE.IcosahedronGeometry(variant === 'header' ? 10 : 12, 2);
    const solidCoreMat = new THREE.MeshStandardMaterial({
      color: 0x171719,
      emissive: 0x24b982,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const solidCore = new THREE.Mesh(solidCoreGeo, solidCoreMat);
    coreGroup.add(solidCore);

    // 3. Concentric Technical Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x24b982, wireframe: true, transparent: true, opacity: 0.5 });
    const ringGeo1 = new THREE.TorusGeometry(32, 0.4, 8, 64);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    coreGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x9e9b9f, wireframe: true, transparent: true, opacity: 0.4 });
    const ringGeo2 = new THREE.TorusGeometry(42, 0.3, 8, 64);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh2);

    const ringMat3 = new THREE.MeshBasicMaterial({ color: 0x3d383c, wireframe: true, transparent: true, opacity: 0.5 });
    const ringGeo3 = new THREE.TorusGeometry(52, 0.3, 8, 64);
    const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat3);
    ringMesh3.rotation.y = Math.PI / 4;
    coreGroup.add(ringMesh3);

    // 4. Floating 3D Log Characters & Symbol Sprites
    const logTokens = [
      '200_OK',
      'POST /v1/ingest',
      'cgroup:mem',
      'COMMIT',
      '401_DENIED',
      'LATENCY:14ms',
      'TEMP:42°C',
      'eBPF_HOOK',
      'ZERO_LEAK',
      'STATUS:99.99%',
      'SHA-256',
      'NVMe_SMART_OK',
    ];

    const tokenSprites: THREE.Sprite[] = [];
    const createTextCanvas = (text: string, isEmerald: boolean) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 64;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(23, 23, 25, 0.85)';
        ctx.roundRect(4, 4, 248, 56, 12);
        ctx.fill();
        ctx.strokeStyle = isEmerald ? '#24B982' : '#3D383C';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = 'bold 22px "JetBrains Mono", monospace';
        ctx.fillStyle = isEmerald ? '#24B982' : '#EDEDEF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 32);
      }
      return c;
    };

    logTokens.forEach((token, idx) => {
      const isEmerald = idx % 2 === 0;
      const canvas = createTextCanvas(token, isEmerald);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.85 });
      const sprite = new THREE.Sprite(spriteMat);

      // Distribute on sphere shell
      const phi = Math.acos(-1 + (2 * idx) / logTokens.length);
      const theta = Math.sqrt(logTokens.length * Math.PI) * phi;
      const radius = 55 + (idx % 3) * 8;

      sprite.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi) * 0.7,
        radius * Math.cos(phi)
      );
      sprite.scale.set(22, 5.5, 1);
      coreGroup.add(sprite);
      tokenSprites.push(sprite);
    });

    // 5. Data Conduit Streams (Inbound & Outbound Splines)
    const curvePointsLeft = [
      new THREE.Vector3(-120, -25, -20),
      new THREE.Vector3(-80, -10, 10),
      new THREE.Vector3(-40, 5, -5),
      new THREE.Vector3(0, 0, 0),
    ];
    const leftCurve = new THREE.CatmullRomCurve3(curvePointsLeft);
    const leftCurveGeo = new THREE.TubeGeometry(leftCurve, 32, 0.6, 6, false);
    const leftCurveMat = new THREE.MeshBasicMaterial({ color: 0x24b982, transparent: true, opacity: 0.45 });
    const leftPipe = new THREE.Mesh(leftCurveGeo, leftCurveMat);
    rootGroup.add(leftPipe);

    const curvePointsRight = [
      new THREE.Vector3(120, 20, 25),
      new THREE.Vector3(80, 15, -15),
      new THREE.Vector3(40, -5, 10),
      new THREE.Vector3(0, 0, 0),
    ];
    const rightCurve = new THREE.CatmullRomCurve3(curvePointsRight);
    const rightCurveGeo = new THREE.TubeGeometry(rightCurve, 32, 0.6, 6, false);
    const rightCurveMat = new THREE.MeshBasicMaterial({ color: 0x9e9b9f, transparent: true, opacity: 0.35 });
    const rightPipe = new THREE.Mesh(rightCurveGeo, rightCurveMat);
    rootGroup.add(rightPipe);

    // 6. Flying Particles on Conduit Streams
    const particleCount = 48;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleT = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particleT[i] = i / particleCount;
      const pt = (i % 2 === 0 ? leftCurve : rightCurve).getPoint(particleT[i]);
      particlePositions[i * 3] = pt.x;
      particlePositions[i * 3 + 1] = pt.y;
      particlePositions[i * 3 + 2] = pt.z;
    }

    const particleColors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const rand = (i * 13) % 100;
      if (rand < 70) {
        // Healthy data flow - refined emerald (#20B77B)
        particleColors[i * 3] = 0.13;
        particleColors[i * 3 + 1] = 0.72;
        particleColors[i * 3 + 2] = 0.48;
      } else if (rand < 85) {
        // Neutral telemetry - silver/grey (#A8B2A6)
        particleColors[i * 3] = 0.65;
        particleColors[i * 3 + 1] = 0.70;
        particleColors[i * 3 + 2] = 0.65;
      } else if (rand < 94) {
        // Warning event - amber (#F59E0B)
        particleColors[i * 3] = 0.96;
        particleColors[i * 3 + 1] = 0.62;
        particleColors[i * 3 + 2] = 0.04;
      } else {
        // Critical / anomaly - red (#EF4444)
        particleColors[i * 3] = 0.94;
        particleColors[i * 3 + 1] = 0.27;
        particleColors[i * 3 + 2] = 0.27;
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x24b982, 1.8);
    dirLight.position.set(40, 60, 40);
    scene.add(dirLight);

    const burgundyLight = new THREE.PointLight(0x522d3b, 2.5, 180);
    burgundyLight.position.set(-50, -20, -40);
    scene.add(burgundyLight);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 340;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Mouse Interaction
    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
      setIsDragging(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current.isDown) {
        const deltaX = e.clientX - mouseRef.current.lastX;
        const deltaY = e.clientY - mouseRef.current.lastY;
        mouseRef.current.targetY += deltaX * 0.006;
        mouseRef.current.targetX += deltaY * 0.006;
        mouseRef.current.lastX = e.clientX;
        mouseRef.current.lastY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
      setIsDragging(false);
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    let animFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!isReducedMotion) {
        // Continuous slow rotation
        coreGroup.rotation.y += delta * 0.22;
        ringMesh1.rotation.z += delta * 0.35;
        ringMesh2.rotation.y += delta * 0.28;
        ringMesh3.rotation.x += delta * 0.18;
        innerIco.rotation.x += delta * 0.15;
      }

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;
      rootGroup.rotation.y = mouseRef.current.y;
      rootGroup.rotation.x = mouseRef.current.x;

      // Animate particles flowing along splines
      if (!isReducedMotion) {
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          particleT[i] = (particleT[i] + delta * 0.18) % 1;
          const curve = i % 2 === 0 ? leftCurve : rightCurve;
          const pt = curve.getPoint(particleT[i]);
          positions[i * 3] = pt.x;
          positions[i * 3 + 1] = pt.y;
          positions[i * 3 + 2] = pt.z;
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Periodic telemetry update
    const telemetryInterval = setInterval(() => {
      const randRate = (4.6 + Math.random() * 0.5).toFixed(1) + 'k';
      const randId = 'EVT-' + Math.floor(1000 + Math.random() * 9000);
      setActiveTelemetry({
        ingestRate: randRate,
        eventId: randId,
        status: Math.random() > 0.08 ? 'NORMALIZED' : 'EVALUATING',
        leakAudit: '0-LEAK',
      });
    }, 3200);

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameId);
      clearInterval(telemetryInterval);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      // Dispose Three.js resources
      innerIcoGeo.dispose();
      innerIcoMat.dispose();
      solidCoreGeo.dispose();
      solidCoreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      leftCurveGeo.dispose();
      leftCurveMat.dispose();
      rightCurveGeo.dispose();
      rightCurveMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      axisCircleGeo.dispose();
      axisCircleMat.dispose();
      tokenSprites.forEach((sp) => {
        sp.material.map?.dispose();
        sp.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion, variant]);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden select-none bg-neutral-900/95 dark:bg-[#1E2220]/95 border border-neutral-700/50 dark:border-[#3B433E] shadow-xl ${
        variant === 'header' ? 'h-[240px]' : variant === 'compact' ? 'h-[200px]' : 'h-[360px] sm:h-[400px]'
      } ${className}`}
    >
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
      />

      {/* Floating Technical Indicators HUD around the Core (Requirement B.8) */}
      <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 pointer-events-none flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-neutral-950/80 dark:bg-[#262B28]/90 border border-neutral-700/70 dark:border-[#4B554F] text-[11px] font-mono text-neutral-200 dark:text-[#E5E9E6] shadow-md backdrop-blur-xs">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>INGEST: {activeTelemetry.ingestRate} logs/s</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-neutral-950/80 dark:bg-[#262B28]/90 border border-neutral-700/70 dark:border-[#4B554F] text-[11px] font-mono text-neutral-200 dark:text-[#E5E9E6] shadow-md backdrop-blur-xs">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>ID: {activeTelemetry.eventId}</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-neutral-950/80 dark:bg-[#262B28]/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-400 shadow-md backdrop-blur-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>STATUS: {activeTelemetry.status}</span>
        </div>
      </div>

      {/* Bottom Floating Controls: Reduced Motion & Drag Hint */}
      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-[#9BA39E] pointer-events-none">
        <div className="flex items-center gap-2 bg-neutral-950/85 dark:bg-[#262B28]/85 px-2.5 py-1 rounded-lg border border-neutral-800 dark:border-[#3B433E]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{t('هسته پردازش سه‌بعدی BridgeLog', 'BridgeLog 3D Log Ingestion Core')}</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setIsReducedMotion(!isReducedMotion)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800/90 hover:bg-neutral-700/90 dark:bg-[#333A35] dark:hover:bg-[#3E4640] text-neutral-200 dark:text-[#E5E9E6] border border-neutral-700 dark:border-[#4B554F] text-[11px] transition cursor-pointer"
            title={isReducedMotion ? t('فعال‌سازی چرخش', 'Enable motion') : t('کاهش انیمیشن', 'Reduce motion')}
          >
            {isReducedMotion ? <Eye className="w-3.5 h-3.5 text-emerald-400" /> : <EyeOff className="w-3.5 h-3.5 text-neutral-400" />}
            <span className="hidden sm:inline">{isReducedMotion ? t('حرکت فعال', 'Motion On') : t('کاهش حرکت', 'Reduce Motion')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
