import { useState, useCallback } from 'react';

interface UseUndoRedoOptions<T> {
  initialPresent: T;
}

export function UseUndoRedoWithHistory<T>({ initialPresent }: UseUndoRedoOptions<T>) {
  const [history, setHistory] = useState<{
    past: T[];
    present: T;
    future: T[];
  }>({
    past: [],
    present: initialPresent,
    future: [],
  });

  // Set new present and clear future
  const set = useCallback((newPresent: T) => {
    setHistory(({ past, present }) => ({
      past: [...past, present],
      present: newPresent,
      future: [],
    }));
  }, []);

  // Undo last change
  const undo = useCallback(() => {
    setHistory(({ past, present, future }) => {
      if (past.length === 0) return { past, present, future };
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    });
  }, []);

  // Redo undone change
  const redo = useCallback(() => {
    setHistory(({ past, present, future }) => {
      if (future.length === 0) return { past, present, future };
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  // Clear history but keep current state
  const clear = useCallback(() => {
    setHistory(({ present }) => ({
      past: [],
      present,
      future: [],
    }));
  }, []);

  const canUndo = history.past.length > 0;
  const canRedo = history.future.length > 0;

  return {
    state: history.present,
    set,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  };
}
