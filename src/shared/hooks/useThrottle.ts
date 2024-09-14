import { useEffect, useRef, useState } from "react";

export const useThrottle = <T>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);

  const lastExecuted = useRef<number>(Date.now());
  const lastValue = useRef<T>(value);

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastExecuted.current >= limit) {
          setThrottledValue(lastValue.current);
          lastExecuted.current = Date.now();
        }
      },
      limit - (Date.now() - lastExecuted.current),
    );

    lastValue.current = value;

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

export default useThrottle;
