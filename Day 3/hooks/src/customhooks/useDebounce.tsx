import { useEffect, useCallback } from 'react';

type EffectCallback = () => void | (() => void | undefined);

export default function useDebounce(
  effect: EffectCallback,
  dependencies: any[],
  delay: number
): void {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}