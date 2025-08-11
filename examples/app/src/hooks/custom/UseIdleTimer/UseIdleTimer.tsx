import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIdleTimerOptions {
  timeout: number;
  onIdle?: () => void;
  onActive?: () => void;
}

export function useIdleTimer({ timeout, onIdle, onActive }: UseIdleTimerOptions) {
  const [isIdle, setIsIdle] = useState(false);
  const timerId = useRef<number | null>(null);

  const goIdle = useCallback(() => {
    setIsIdle(true);
    onIdle && onIdle();
  }, [onIdle]);

  const resetTimer = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    if (isIdle) {
      setIsIdle(false);
      onActive && onActive();
    }
    timerId.current = window.setTimeout(goIdle, timeout);
  }, [timeout, goIdle, onActive, isIdle]);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event =>
      window.addEventListener(event, resetTimer, true)
    );
    timerId.current = window.setTimeout(goIdle, timeout);
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
      events.forEach(event =>
        window.removeEventListener(event, resetTimer, true)
      );
    };
  }, [resetTimer, goIdle, timeout]);

  return { isIdle };
}
