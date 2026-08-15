/**
 * Conteúdo visual da página 404 — extraído sem nenhuma alteração de texto,
 * classes ou layout, para ser reutilizado pela rota catch-all e pelo
 * notFoundComponent do root.
 */
export function NotFoundView() {
  return (
    <>
      {/* Elemento técnico invisível: garante noindex/nofollow em qualquer 404,
          inclusive quando o router usa o notFoundComponent do root. */}
      <meta name="robots" content="noindex, nofollow" />
      <div className="flex min-h-[70vh] items-center justify-center container mx-auto">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold font-cinzel">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-gold-gradient px-8 py-3 text-sm font-bold text-navy uppercase tracking-widest transition-transform hover:scale-105"
          >
            Voltar para o início
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
