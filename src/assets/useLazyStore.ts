import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import type { ReadableAtom, WritableAtom } from 'nanostores';

export default function useLazyStore<T>($atom: ReadableAtom<T> | WritableAtom<T>, initial: T): [T, boolean] {
  const atomValue = useStore($atom);
  const [hasIgnition, setHasIgnition] = useState(false);

  useEffect(() => {
    setHasIgnition(true);
  }, []);

  return [hasIgnition ? atomValue : initial, hasIgnition];
}