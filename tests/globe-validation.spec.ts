import { test, expect } from '@playwright/test';
import { ARTICLES } from '../src/lib/articles';

// Lista de caminhos estáticos extraídos do sitemap
const staticPaths = [
  "/",
  "/perfil",
  "/areas-de-atuacao",
  "/duvidas",
  "/fale-conosco",
  "/artigos",
  "/advogado-divorcio-betim",
  "/advogado-familia-betim",
  "/advogado-guarda-betim",
  "/advogado-pensao-alimenticia-betim",
  "/advogado-inventario-betim",
  "/advogado-curatela-betim",
  "/advogado-divorcio-extrajudicial-betim",
  "/advogado-divorcio-nova-lima",
  "/advogado-familia-nova-lima",
  "/advogado-guarda-nova-lima",
  "/advogado-pensao-alimenticia-nova-lima",
  "/advogado-inventario-nova-lima",
  "/advogado-curatela-nova-lima",
  "/advogado-divorcio-extrajudicial-nova-lima",
  "/advogado-divorcio-bh",
  "/advogado-familia-bh",
  "/advogado-guarda-bh",
  "/advogado-pensao-alimenticia-bh",
  "/advogado-inventario-bh",
  "/advogado-curatela-bh",
  "/advogado-divorcio-extrajudicial-bh",
  "/advogado-divorcio-contagem",
  "/advogado-familia-contagem",
  "/advogado-guarda-contagem",
  "/advogado-pensao-alimenticia-contagem",
  "/advogado-inventario-contagem",
  "/advogado-curatela-contagem",
  "/advogado-divorcio-extrajudicial-contagem",
  "/advogado-divorcio-igarape",
  "/advogado-familia-igarape",
  "/advogado-guarda-igarape",
  "/advogado-pensao-alimenticia-igarape",
  "/advogado-fixacao-pensao-betim",
  "/advogado-exoneracao-pensao-betim",
  "/advogado-revisao-pensao-betim",
  "/advogado-execucao-pensao-betim",
  "/advogado-validacao-homologacao-sentenca-estrangeira",
  "/advogado-homologacao-decisao-judicial-estrangeira-stj-brasil",
  "/advogado-reconhecimento-homologacao-sentenca-estrangeira-stj-brasilia",
  "/advogado-homologacao-sentenca-estrangeira-divorcio-guarda-brasil",
  "/advogado-homologacao-sentenca-estrangeira-paternidade-filiacao-brasil",
  "/advogado-homologacao-decisao-curatela-interdicao-stj-brasilia",
  "/advogado-cumprimento-contestacao-cartas-rogatorias-stj-brasilia",
  "/advogado-averbacao-direta-divorcio-estrangeiro-cartorio-brasil",
  "/advogado-traslado-transcricao-certidao-casamento-estrangeiro-brasil",
  "/advogado-registro-validacao-escrituras-notariais-estrangeiras-brasil",
  "/advogado-homologacao-sentenca-portuguesa-paternidade-filiacao-brasil",
  "/advogado-homologacao-decisao-curatela-interdicao-stj-brasilia-portugal",
  "/advogado-cumprimento-contestacao-cartas-rogatorias-stj-brasilia-portugal",
  "/advogado-averbacao-direta-divorcio-portugues-cartorio-brasil",
  "/advogado-traslado-transcricao-certidao-casamento-portugues-brasil",
  "/advogado-registro-validacao-escrituras-notariais-portuguesas-brasil",
  "/advogado-validacao-homologacao-sentenca-portuguesa-brasil",
  "/advogado-homologacao-decisao-judicial-portuguesa-stj-brasil",
  "/advogado-reconhecimento-homologacao-sentenca-portuguesa-stj-brasilia",
  "/advogado-fixacao-pensao-bh",
  "/advogado-exoneracao-pensao-bh",
  "/advogado-revisao-pensao-bh",
  "/advogado-execucao-pensao-bh",
  "/advogado-fixacao-pensao-contagem",
  "/advogado-exoneracao-pensao-contagem",
  "/advogado-revisao-pensao-contagem",
  "/advogado-execucao-pensao-contagem",
  "/advogado-fixacao-pensao-nova-lima",
  "/advogado-exoneracao-pensao-nova-lima",
  "/advogado-revisao-pensao-nova-lima",
  "/advogado-execucao-pensao-nova-lima",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-nova-lima",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-bh",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-betim",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-contagem",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-igarape",
  "/advogado-fixacao-pensao-igarape",
  "/advogado-exoneracao-pensao-igarape",
  "/advogado-revisao-pensao-igarape",
  "/advogado-execucao-pensao-igarape",
  "/advogado-inventario-igarape",
  "/advogado-curatela-igarape",
  "/advogado-divorcio-extrajudicial-igarape",
  "/advogado-contrato-namoro-betim",
  "/advogado-contrato-namoro-bh",
  "/advogado-contrato-namoro-contagem",
  "/advogado-contrato-namoro-igarape",
  "/advogado-contrato-namoro-nova-lima",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-betim",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-bh",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-contagem",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-igarape",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-nova-lima",
  "/advogado-guarda-compartilhada-betim",
  "/advogado-guarda-compartilhada-bh",
  "/advogado-guarda-compartilhada-contagem",
  "/advogado-guarda-compartilhada-igarape",
  "/advogado-guarda-compartilhada-nova-lima",
  "/advogado-mudanca-regime-bens-casamento-betim",
  "/advogado-mudanca-regime-bens-casamento-bh",
  "/advogado-mudanca-regime-bens-casamento-contagem",
  "/advogado-mudanca-regime-bens-casamento-igarape",
  "/advogado-mudanca-regime-bens-casamento-nova-lima"
];

const articlePaths = ARTICLES.map(a => `/artigos/${a.slug}`);
const allPaths = [...staticPaths, ...articlePaths];

test.describe('Globe Validation', () => {
  allPaths.forEach(path => {
    test(`should load globe on ${path}`, async ({ page }) => {
      // Monitorar erros no console
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      // Acessar a página
      await page.goto(path);

      // O globo é carregado de forma diferida (lazy + idleCallback)
      // Procuramos o canvas dentro da seção de GlobalReach/DeferredGlobe
      const globeCanvas = page.locator('canvas');
      
      // Esperar até que o canvas esteja visível (timeout aumentado para considerar carregamento lazy)
      await expect(globeCanvas).toBeVisible({ timeout: 15000 });

      // Verificar se não houve erros fatais no console relacionados ao WebGL/Globe
      const criticalErrors = consoleErrors.filter(err => 
        err.toLowerCase().includes('webgl') || 
        err.toLowerCase().includes('cobe') ||
        err.toLowerCase().includes('three')
      );
      expect(criticalErrors).toHaveLength(0);

      // Verificar tamanho do payload da rede para evitar downloads excessivos
      // (Opcional: podemos medir bytes transferidos se necessário)
    });
  });
});
