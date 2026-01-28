import React, { useState, useEffect } from 'react';
import { useSound } from './useSound';

const SOUNDS = {
  START: 'https://raw.githubusercontent.com/IonDen/ion.sound/master/sounds/button_tiny.mp3',
  TICK: 'https://raw.githubusercontent.com/IonDen/ion.sound/master/sounds/snap.mp3',
  SUCCESS: 'https://raw.githubusercontent.com/IonDen/ion.sound/master/sounds/bell_ring.mp3',
  ERROR: 'https://raw.githubusercontent.com/IonDen/ion.sound/master/sounds/error.mp3',
};

export const SoundBoard: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isError, setIsError] = useState(false);

  const playStart = useSound(SOUNDS.START, { volume: 0.4, rate: 1.2 });
  const playTick = useSound(SOUNDS.TICK, { volume: 0.2, rate: 2 });
  const playSuccess = useSound(SOUNDS.SUCCESS, { volume: 0.5 });
  const playError = useSound(SOUNDS.ERROR, { volume: 0.4 });

  const handleUnlock = () => {
    if (processing) return;
    setIsError(false);
    playStart();
    setProcessing(true);
    setProgress(0);
  };

  useEffect(() => {
    let interval: any;
    if (processing) {
      interval = setInterval(() => {
        setProgress((v) => {
          if (v >= 100) {
            clearInterval(interval);
            setProcessing(false);
            const success = Math.random() > 0.2;
            if (success) {
              playSuccess();
              setIsLocked(false);
            } else {
              playError();
              setIsError(true);
            }
            return 100;
          }
          playTick();
          return v + 5;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [processing, playTick, playSuccess, playError]);

  return (
    <div className="min-h-screen bg-[#050608] flex items-center justify-center p-6 font-mono selection:bg-cyan-500/30">
      <div className={`fixed inset-0 transition-colors duration-1000 -z-10 ${
        processing ? 'bg-blue-900/10' : isError ? 'bg-red-900/10' : !isLocked ? 'bg-emerald-900/10' : 'bg-transparent'
      }`} />

      <div className="relative w-full max-w-sm group">
        <div className={`absolute -inset-0.5 rounded-[2.5rem] opacity-30 blur-xl transition-all duration-500 group-hover:opacity-50 ${
          processing ? 'bg-blue-500 animate-pulse' : isError ? 'bg-red-600' : !isLocked ? 'bg-emerald-500' : 'bg-slate-700'
        }`} />

        <div className="relative bg-[#0d1117]/90 border border-white/10 rounded-[2.2rem] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

          <div className="flex flex-col items-center mb-10">
            <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-all duration-700 transform ${
              processing ? 'rotate-180 scale-110' : ''
            }`}>
              {processing && (
                <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-full animate-[spin_4s_linear_infinite]" />
              )}
              
              <div className={`w-full h-full rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                isLocked ? 'border-slate-700 bg-slate-800/50' : 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
              }`}>
                <span className={`text-4xl filter drop-shadow-md transition-all ${processing ? 'opacity-40' : 'opacity-100'}`}>
                  {isLocked ? '🔒' : '🔓'}
                </span>
              </div>
            </div>

            <h2 className={`text-sm font-black uppercase tracking-[0.3em] transition-colors ${
              isError ? 'text-red-500 animate-pulse' : !isLocked ? 'text-emerald-400' : 'text-white'
            }`}>
              {processing ? 'System Breach' : isError ? 'Access Denied' : !isLocked ? 'Authorized' : 'Secure Vault'}
            </h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-3" />
          </div>

          {/* Progress Area - FIXED OVERFLOW */}
          <div className="mb-10 space-y-3">
            <div className="flex justify-between items-end px-1">
              <span className={`text-[10px] font-bold tracking-tighter ${processing ? 'text-blue-400' : 'text-slate-500'}`}>
                {processing ? 'DECRYPTING_PACKETS' : isError ? 'PROTOCOL_HALTED' : 'SYSTEM_IDLE'}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">{progress}%</span>
            </div>
            
            <div className="h-2.5 w-full bg-black/60 rounded-full border border-white/5 overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 relative overflow-hidden ${
                  isError ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : !isLocked ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'
                }`}
                style={{ width: `${progress}%` }}
              >
                {/* Fixed Shimmer - confined to the progress width */}
                {processing && (
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" 
                        style={{ backgroundSize: '200% 100%' }} />
                )}
              </div>
            </div>
          </div>

          {isLocked ? (
            <button
              onClick={handleUnlock}
              disabled={processing}
              className={`group relative w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 overflow-hidden border border-white/5 ${
                processing 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              }`}
            >
              <span className="relative z-10">{processing ? 'Decrypting...' : 'Initiate Handshake'}</span>
              {!processing && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}
            </button>
          ) : (
            <button
              onClick={() => { playStart(); setIsLocked(true); setProgress(0); }}
              className="w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] bg-emerald-500 text-[#0d1117] hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Secure & Exit
            </button>
          )}

          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-[9px] text-slate-600 text-center leading-relaxed">
              ENCRYPTION: AES-256-GCM<br/>
              HARDWARE: TACTILE_ENGINE_v2.4
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
};