// app/layout.tsx

import '@/styles/globals.css';  // importa il CSS globale

export const metadata = {
  title: 'Racely',
  description: 'La piattaforma motorsport e community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
