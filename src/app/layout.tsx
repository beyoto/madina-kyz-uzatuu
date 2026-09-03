import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Кыз узатуу · Айсулуу',
  description: 'Приглашение на кыз узатуу — Айсулуу. Кыз узатуу тойго чакыруу.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ky">
      <body>{children}
</body>
    </html>
  );
}
