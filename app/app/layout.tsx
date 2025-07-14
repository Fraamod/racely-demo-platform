export const metadata = {
  title: "Racely Demo",
  description: "Piattaforma demo per login, profili e annunci",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
