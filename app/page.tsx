'use client';

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { getGuests } from 'src/api/invite-api';
import WhiteIllusion from 'src/template-designs/white-illusion/WhiteIllusion';

export default function Home() {
  useEffect(() => {
    getGuests();
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
        }}
      />
      <WhiteIllusion />
    </>
  );
}
