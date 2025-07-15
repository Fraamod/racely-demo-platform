// app/page.tsx
export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">Benvenuto su Racely 🚀</h1>
      <p className="text-lg mb-8">
        La piattaforma che connette motorsport, tecnologia e community.
      </p>
      <div className="space-x-4">
        <a
          href="/login"
          className="inline-block px-6 py-3 font-semibold rounded-xl bg-primary text-white hover:bg-opacity-90"
        >
          Accedi
        </a>
        <a
          href="/register"
          className="inline-block px-6 py-3 font-semibold rounded-xl border border-primary text-primary hover:bg-primary hover:text-white"
        >
          Registrati
        </a>
      </div>
    </section>
  );
}
