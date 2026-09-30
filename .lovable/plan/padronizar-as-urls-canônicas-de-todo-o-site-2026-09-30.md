# Padronizar as URLs canônicas de todo o site

## Diagnóstico atual

- O domínio oficial já está centralizado como `https://bragabitencourt.com`.
- As 105 páginas indexáveis usam uma função central de SEO: 6 páginas institucionais e 99 páginas de destino.
- Os artigos usam a mesma função com o endereço montado a partir do identificador público do artigo.
- A página 404 e artigos inexistentes são `noindex` e, corretamente, não recebem canonical.
- O endereço antigo com `www` não aparece no código atual.
- A raiz do site não adiciona canonical, evitando a duplicação de uma canonical geral com a específica de cada página.

## Alterações propostas

1. **Fortalecer a geração centralizada**
   - Ajustar `src/lib/site.ts` e `src/lib/seo.ts` para garantir que toda canonical seja formada exclusivamente com `https://bragabitencourt.com`.
   - Normalizar o caminho antes de gerar a URL: remover query parameters (`?utm_...`), hashes (`#...`) e barras finais duplicadas, preservando somente `/` na Home.
   - Manter exatamente uma entrada `<link rel="canonical">` por página indexável.

2. **Manter cada canonical ligada à página real**
   - Preservar os caminhos específicos já informados por cada página, sem direcionar páginas internas para a Home.
   - Manter a canonical dinâmica dos artigos como `https://bragabitencourt.com/artigos/{nome-do-artigo}`.
   - Não adicionar canonical a páginas inexistentes, 404, arquivos técnicos (`robots.txt` e `sitemap.xml`) ou endereços que apenas redirecionam.

3. **Verificar todas as rotas**
   - Conferir automaticamente as 105 páginas indexáveis, os artigos existentes e as 99 páginas de serviço.
   - Validar no HTML final que Home, páginas institucionais e páginas de serviço exibem uma única canonical, no domínio sem `www` e sem parâmetros de rastreamento.
   - Testar também uma visita com UTM e hash para confirmar que esses dados não entram na canonical.

4. **Preservar integralmente o site**
   - Não alterar layout, textos visíveis, imagens, design, menus, formulários ou funcionalidades.

## Exemplos esperados

- Home: `https://bragabitencourt.com/`
- Áreas de atuação: `https://bragabitencourt.com/areas-de-atuacao`
- Serviço: `https://bragabitencourt.com/advogado-divorcio-betim`
- Artigo acessado com UTM: `https://bragabitencourt.com/artigos/inventario`
