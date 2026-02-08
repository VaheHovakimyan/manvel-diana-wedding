'use client';

import Admin from '@uikit/Template-design-components/admin/Admin';
import AuthGuard from '@uikit/Template-design-components/authguard/AuthGuard';

export default function AdminPage() {
  return (
    <AuthGuard>
      <Admin />
    </AuthGuard>
  );
}
