## Diagnóstico

O arquivo `src/routes/artigos.tsx` funciona como **rota-pai** de `src/routes/artigos.$id.tsx` no roteamento por arquivos do TanStack Router. Quando um arquivo pai tem filhos, ele vira layout e precisa renderizar `<Outlet />` para o conteúdo do filho aparecer. Como `artigos.tsx` renderiza a listagem completa (e não um `<Outlet />`), ao navegar para `/artigos/1` a URL muda, mas o React continua exibindo a listagem — e o scroll vai ao topo por causa da nova navegação. É exatamente o sintoma descrito.

## Correção

Converter `/artigos` em uma rota-folha irmã da rota de detalhe, seguindo o padrão canônico do TanStack (`*.index.tsx` para a folha):

1. Renomear `src/routes/artigos.tsx` → `src/routes/artigos.index.tsx`.
2. Atualizar o `createFileRoute("/artigos")` para `createFileRoute("/artigos/")` dentro do arquivo (o gerador exige o path terminando em `/` para rotas `index`).
3. Deixar `src/routes/artigos.$id.tsx` como está — ele passa a ser irmão e roda sozinho.
4. O `routeTree.gen.ts` é regenerado automaticamente; nenhuma outra edição é necessária.

Nenhum outro arquivo precisa mudar: os `<Link to="/artigos/$id" params={{ id }}>` já estão corretos, e os links de navegação para `/artigos` continuam válidos.

## Verificação após implementar

- Clicar em "Leia mais" em `/artigos` deve navegar para `/artigos/1` e renderizar a página de detalhe (título, imagem placeholder, corpo, sidebar).
- Voltar via "Voltar para artigos" deve retornar à listagem com os filtros funcionando.