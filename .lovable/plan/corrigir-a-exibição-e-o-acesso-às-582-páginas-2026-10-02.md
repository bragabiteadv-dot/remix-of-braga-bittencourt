# Corrigir a exibição e o acesso às 582 páginas

## Objetivo

Fazer cada nova página ser reconhecida individualmente pelo seletor de endereços da prévia, como acontece com as páginas antigas.

## Alterações

- Substituir o endereço genérico que hoje atende todas as páginas por rotas individuais leves para as 581 páginas novas; a página original existente continuará intacta.
- Manter uma única matriz de conteúdo e um único modelo visual, evitando copiar textos e estrutura em centenas de arquivos.
- Preservar exatamente as URLs, títulos, descrições, canônicos, dados estruturados e entradas do sitemap já criados.
- Manter a página de erro para endereços realmente inexistentes.

## Validação

- Confirmar que as 582 páginas são reconhecidas pelo sistema de rotas.
- Cada página destas 582 deve ser uma página de destino igual as que fizemos anteriomente, com urls, mensagem, links, tudo individual.
- Abrir amostras de todos os seis serviços e diferentes localidades.
- Verificar retorno 200, conteúdo correto, URL canônica, sitemap sem duplicações e página inexistente retornando 404.
- Conferir visualmente a prévia em uma página nova.

## Detalhe técnico

O problema não está no conteúdo das páginas: elas foram colocadas atrás de uma rota genérica de captura. Isso permite abrir uma URL completa, mas não faz o seletor da prévia listar cada endereço. A correção registra cada endereço de forma explícita, mantendo o conteúdo centralizado no modelo compartilhado.