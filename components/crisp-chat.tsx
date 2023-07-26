'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('d1e081e0-317e-4535-959b-1d2c7f87dce9');
  }, []);

  return null;
};
