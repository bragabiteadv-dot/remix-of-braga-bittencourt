# Padronizar mensagens do WhatsApp e remover botão antigo de "voltar ao topo"

## 1. Mensagem única, sem parênteses

Todos os botões de contato passam a enviar a mesma mensagem, montada a partir da página atual:

- Páginas: `Olá! Acessei sua página HOME e gostaria de falar com um especialista!`
  (HOME, PERFIL, ÁREAS DE ATUAÇÃO, DÚVIDAS, FALE CONOSCO, ARTIGOS, ADVOGADO DE DIVÓRCIO EM BETIM, ADVOGADO DE FAMÍLIA EM BETIM)
- Artigos: `Olá! Acessei seu artigo de Nome do Artigo e gostaria de falar com um especialista!`

Sem parênteses em nenhum caso.

## 2. Botões que serão corrigidos

- Todos os botões "FALE COM ADVOGADO" (hero, fundador, serviços, mapas, FAQ, cabeçalho, páginas de Betim). Hoje eles abrem o link `wa.link` sem mensagem — passarão a abrir o WhatsApp já com a mensagem da página.
- Botão de CTA das páginas de artigo: hoje envia "Li o artigo (...) no blog..." — passa a usar o texto padrão do artigo, sem parênteses.
- Botão flutuante do WhatsApp: mantém o comportamento criado hoje, apenas removendo os parênteses.
- Formulário de contato: mantém o comportamento atual (mensagem com os dados preenchidos), apenas removendo parênteses da referência à página, se houver.

Nada mais é alterado: layout, cores, textos da página e posições dos botões ficam iguais.

## 3. Remover botão antigo de "voltar ao topo" nas LPs de Betim

Nas páginas `/advogado-divorcio-betim` e `/advogado-familia-betim` existe um botão flutuante próprio de voltar ao topo, criado antes, que agora se sobrepõe ao botão de WhatsApp. Ele será removido dessas duas páginas, ficando apenas o par novo (voltar ao topo + WhatsApp) que já foi implementado.

## Detalhes técnicos

- Criar um helper único em `src/components/ui/whatsapp-cta.tsx` (ex.: `useWhatsAppLink()` / `whatsappPageLink(pathname)`) que reaproveita o mapa de rótulos hoje em `FloatingActions.tsx`, movendo-o para um módulo compartilhado (`src/lib/whatsapp.ts`).
- `WhatsAppCta` passa a derivar o `href` do pathname atual via `useRouterState`, mantendo a prop `href` opcional para sobrescrever quando necessário.
- `FloatingActions.tsx` passa a consumir o mesmo helper (mensagens sem parênteses).
- `artigos.$slug.tsx`: substituir `whatsappArticleLink` pelo helper padrão de artigo.
- Remover o bloco `scrollToTop` + botão `ArrowUp` flutuante e o import não usado em `src/routes/advogado-divorcio-betim.tsx` e `src/routes/advogado-familia-betim.tsx`.
- O botão "VOLTAR AO TOPO" dentro do rodapé permanece intacto.
