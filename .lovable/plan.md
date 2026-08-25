# Plano de correção: tela de erro `FloatingActions is not defined`

## O que aconteceu
A tela apareceu porque o layout principal passou a renderizar os novos botões flutuantes, mas o runtime está acusando que `FloatingActions` não está definido no momento em que a página tenta montar.

Isso quebra a renderização do site inteiro, por isso aparece a tela branca com a mensagem de erro.

## Correção proposta
1. Ajustar a integração dos botões flutuantes no layout principal para garantir que o componente esteja importado e renderizado de forma segura.
2. Conferir se não existe conflito de export/import, cache de rota ou referência antiga no root layout.
3. Manter os botões flutuantes em todas as páginas do escritório, incluindo as landing pages de Betim.
4. Validar no preview que:
   - a HOME volta a carregar normalmente;
   - o botão de WhatsApp aparece;
   - o botão de voltar ao topo aparece;
   - o erro `FloatingActions is not defined` desaparece.

## Escopo
A correção será limitada ao problema dos botões flutuantes. Não haverá alteração visual em outras seções, conteúdo, SEO ou estrutura das páginas.
