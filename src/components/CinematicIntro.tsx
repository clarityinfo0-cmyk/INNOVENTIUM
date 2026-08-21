import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Play, 
  RotateCcw,
  Zap,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';

interface CinematicIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isOpen }) => {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Web Audio Synthesizer for high-tech cinematic sound effects
  const playCinematicSound = (type: 'whoosh' | 'spark' | 'chord' | 'hum') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      if (type === 'whoosh') {
        // Deep low frequency sweep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 1.2);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.2);
      } else if (type === 'spark') {
        // High-tech electric chime
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.3);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
      } else if (type === 'chord') {
        // Majestic major chord for the logo reveal
        const freqs = [220, 277.18, 329.63, 440, 554.37, 659.25];
        freqs.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + (i * 0.04));
          gain.gain.setValueAtTime(0.01, now);
          gain.gain.linearRampToValueAtTime(0.08 / freqs.length, now + 0.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 3.0);
        });
      }
    } catch {
      // Audio fallback silent
    }
  };

  // Intro progression sequence
  useEffect(() => {
    if (!isOpen) return;

    setCurrentPhase(0);
    setProgress(0);

    const totalDuration = 11000; // 11 seconds full experience
    const interval = 50;
    const step = (interval / totalDuration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, interval);

    // Phase triggers
    const p1 = setTimeout(() => {
      setCurrentPhase(1);
      playCinematicSound('whoosh');
    }, 400);

    const p2 = setTimeout(() => {
      setCurrentPhase(2);
      playCinematicSound('spark');
    }, 2800);

    const p3 = setTimeout(() => {
      setCurrentPhase(3);
      playCinematicSound('whoosh');
    }, 5400);

    const p4 = setTimeout(() => {
      setCurrentPhase(4);
      playCinematicSound('chord');
    }, 7800);

    const endTimer = setTimeout(() => {
      onComplete();
    }, 11500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(endTimer);
    };
  }, [isOpen]);

  // 4K-Grade Particle Canvas Animation (Vortex, Hyperspeed light rays, Quantum Core)
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles system
    const numParticles = Math.min(180, Math.floor((width * height) / 12000));
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedZ: number;
      angle: number;
      radius: number;
    }> = [];

    const colors = ['#00B4D8', '#7B6CF6', '#E8C547', '#2ECC71', '#FFFFFF'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 10,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedZ: Math.random() * 4 + 2,
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * (Math.min(width, height) * 0.45) + 20,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.fillStyle = 'rgba(11, 29, 54, 0.25)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw Center Energy Nexus Glow
      const nexusGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, Math.min(width, height) * 0.6);
      nexusGlow.addColorStop(0, 'rgba(0, 180, 216, 0.2)');
      nexusGlow.addColorStop(0.3, 'rgba(123, 108, 246, 0.12)');
      nexusGlow.addColorStop(0.7, 'rgba(232, 197, 71, 0.04)');
      nexusGlow.addColorStop(1, 'rgba(11, 29, 54, 0)');
      ctx.fillStyle = nexusGlow;
      ctx.fillRect(0, 0, width, height);

      // Rotating Laser Geometric Rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(frame * 0.003);

      ctx.strokeStyle = 'rgba(0, 180, 216, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.28, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(123, 108, 246, 0.1)';
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.38, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Render 3D particles flying towards camera / vortex
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.z -= p.speedZ;
        p.angle += 0.005;

        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const k = 400 / p.z;
        const px = cx + p.x * k + Math.cos(p.angle) * 30;
        const py = cy + p.y * k + Math.sin(p.angle) * 30;
        const pSize = Math.max(0.5, p.size * k);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, pSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Subtle streak trail
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px - (p.x * 0.02 * k), py - (p.y * 0.02 * k));
          ctx.strokeStyle = p.color;
          ctx.lineWidth = pSize * 0.5;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-intro-modal"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9999] bg-[#0B1D36] flex flex-col justify-between overflow-hidden select-none"
      >
        {/* Background 4K Animated Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" 
        />

        {/* Top Floating Controls Bar */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between">
          
          {/* 4K Experience Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D36]/80 border border-[#00B4D8]/30 backdrop-blur-md text-[#00B4D8] text-[11px] font-mono shadow-[0_0_15px_rgba(0,180,216,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-ping" />
            <span className="font-bold tracking-wider">4K CINEMATIC REVEAL</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">TRL 1-9 R&D</span>
          </div>

          {/* Controls: Audio & Skip */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00B4D8] border border-white/10 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title={soundEnabled ? 'Silenciar audio FX' : 'Activar audio FX'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00B4D8]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              <span className="hidden sm:inline">{soundEnabled ? 'Audio ON' : 'Audio OFF'}</span>
            </button>

            <button
              onClick={onComplete}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#7B6CF6] hover:from-[#00B4D8] hover:to-[#0B1D36] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,180,216,0.5)] transition-all cursor-pointer group"
            >
              <span>Entrar a la Plataforma</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Central Dynamic Stage with Sequential Typography & Logo Revelation */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center my-auto">
          
          <AnimatePresence mode="wait">
            
            {/* Phase 1: High Tech Domain Genesis */}
            {currentPhase === 1 && (
              <motion.div
                key="intro-phase-1"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-4 max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/40 text-[#00B4D8] font-mono text-xs tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Génesis del Conocimiento</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  CIENCIA APLICADA · ALTA TECNOLOGÍA · I+D DE FRONTERA
                </h2>
                <p className="text-slate-300 text-sm sm:text-lg font-mono text-[#00B4D8]">
                  Iniciando protocolos de aceleración tecnológica...
                </p>
              </motion.div>
            )}

            {/* Phase 2: Core Axiom */}
            {currentPhase === 2 && (
              <motion.div
                key="intro-phase-2"
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(6px)' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6 max-w-3xl"
              >
                <div className="w-20 h-1 bg-[#00B4D8] mx-auto rounded-full shadow-[0_0_20px_#00B4D8]" />
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                  La innovación no ocurre por accidente.
                </h2>
                <p className="font-display text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#E8C547]">
                  Se construye.
                </p>
              </motion.div>
            )}

            {/* Phase 3: Purpose & Impact */}
            {currentPhase === 3 && (
              <motion.div
                key="intro-phase-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-4 max-w-4xl"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B6CF6]/10 border border-[#7B6CF6]/40 text-[#7B6CF6] font-mono text-xs">
                  <Zap className="w-3.5 h-3.5" />
                  <span>TRANSFORMACIÓN SOSTENIBLE</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Transformamos conocimiento en soluciones que impulsan el futuro.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                  Investigación científica, desarrollo modular y blindaje de propiedad intelectual global.
                </p>
              </motion.div>
            )}

            {/* Phase 4: Grand Official Logo & Brand Revelation */}
            {currentPhase === 4 && (
              <motion.div
                key="intro-phase-4"
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center space-y-6"
              >
                {/* Energy Ring Behind Logo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8]/30 via-[#7B6CF6]/20 to-[#E8C547]/20 blur-3xl rounded-full scale-150 animate-pulse pointer-events-none" />

                  {/* High Fidelity Official Logo Component */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1D36]/90 border border-[#00B4D8]/40 shadow-[0_0_80px_rgba(0,180,216,0.35)] backdrop-blur-xl">
                    <InnoventiumLogo 
                      height={90} 
                      variant="full" 
                      theme="dark" 
                      animated={true}
                    />
                  </div>
                </div>

                {/* Tagline & Ready Action */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-sm sm:text-base font-mono text-slate-300">
                    Bienvenido a la era de la <strong className="text-[#00B4D8]">Innovación Perpetua</strong>
                  </p>

                  <button
                    onClick={onComplete}
                    className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#E8C547] text-[#0B1D36] font-bold text-sm sm:text-base flex items-center gap-2 mx-auto shadow-[0_0_35px_rgba(0,180,216,0.6)] hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Explorar Plataforma I+D</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* Bottom Status Bar & Progress Indicator */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-6 sm:pb-8 space-y-3">
          
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B4D8]" />
              INNOVENTIUM QUANTUM SYSTEM v3.0
            </span>
            <span className="text-[#00B4D8] font-bold">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Glowing Multi-color Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#E8C547] rounded-full shadow-[0_0_15px_#00B4D8]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
