'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      router.replace('/login');
    }
  }, [router]);

  // While checking token, you can show loader
  if (isAuthorized === null) {
    return <p>Loading...</p>;
  }

  return <>{isAuthorized && children}</>;
};

export default PrivateRoute;
