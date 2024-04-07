import { useEffect, useState } from 'react';
import { useError } from '.';

interface useDataGetProps<T> {
  fn: () => Promise<T[]>;
  initialData?: T[];
  trigger?: unknown;
}

export default function useDataGet<T>({
  fn,
  initialData = [],
  trigger,
}: useDataGetProps<T>) {
  const setError = useError();
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    (async function dataGet() {
      try {
        const response = await fn();
        setData(response);
      } catch (error) {
        setError(error);
      }
    })();
  }, [trigger, setError]);

  return { data };
}