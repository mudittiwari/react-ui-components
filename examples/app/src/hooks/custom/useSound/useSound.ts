import { useCallback, useRef, useEffect } from 'react';

interface SoundOptions {
  volume?: number;
  rate?: number;
}

export const useSound = (url: string, { volume = 1, rate = 1 }: SoundOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.preload = 'auto';
    audio.load();
    audioRef.current = audio;
  }, [url]);

  const play = useCallback(() => {
    if (audioRef.current) {
      const soundClone = audioRef.current.cloneNode(true) as HTMLAudioElement;
      soundClone.volume = volume;
      soundClone.playbackRate = rate;
      soundClone.play().catch(() => {
      });
    }
  }, [volume, rate]);

  return play;
};