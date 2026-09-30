# Revisar e padronizar o sitemap do site

## Diagnóstico confirmado

- O sitemap atual contém **138 URLs únicas**: 6 páginas institucionais, 99 páginas de serviço e 33 artigos.
- As 138 URLs foram testadas localmente: todas retornaram HTTP 200, não redirecionaram e apresentaram uma única canonical apontando para a própria página.
- Não há URLs com `www`, parâmetros, UTM, hashes, barras finais indevidas ou duplicações.
- A página antiga `/validacao-homologacao-sentenca-estrangeira` redireciona para a versão atual e já está corretamente excluída.
- Páginas inexistentes, artigos inexistentes, `robots.txt` e `sitemap.xml` também já estão excluídos.
- Não existem URLs terminadas em `-nova` no sitemap atual.

## Plano de ação seguro

1. **Preservar somente as páginas válidas**
   - Manter as 6 páginas institucionais, as 99 páginas de serviço e os 33 artigos atuais.
   - Não adicionar páginas técnicas, antigas, inexistentes, `noindex` ou que redirecionem.

2. **Manter o domínio e o formato padronizados**
   - Gerar todas as URLs exclusivamente com `https://bragabitencourt.com`.
   - Manter somente a Home com barra final.
   - Garantir que parâmetros, UTMs e hashes nunca entrem no XML.

3. **Alinhar sitemap e canonicals**
   - Preservar a geração pelo mesmo endereço oficial usado nas canonicals.
   - Conferir que cada URL publicada continue apontando para sua própria canonical.
   - Não inventar datas de atualização; manter `lastmod` ausente enquanto não houver uma data real por página.

4. **Validar antes de concluir**
   - Testar novamente todas as URLs do XML.
   - Confirmar resposta HTTP 200, ausência de redirecionamento, indexabilidade e canonical própria.
   - Confirmar ausência de `www`, parâmetros, hashes, duplicações, páginas 404 e páginas `noindex`.
   - Conferir também o sitemap no endereço público após a próxima publicação.

5. **Preservar integralmente o site**
   - Não alterar layout, textos, imagens, design, menus ou funcionalidades.

## Resultado esperado

A auditoria indica que nenhuma URL precisa ser removida neste momento. Portanto, a previsão segura é:

- **Antes:** 138 URLs.
- **Depois:** 138 URLs.
- **URLs removidas:** nenhuma, salvo se a validação final revelar diferença no site publicado.
- **Arquivo envolvido:** `src/routes/sitemap[.]xml.ts`, somente se a revisão final encontrar algo que realmente precise de correção.
