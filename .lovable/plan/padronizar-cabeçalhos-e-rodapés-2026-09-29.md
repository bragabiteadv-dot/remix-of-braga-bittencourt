# Padronizar cabeçalhos e rodapés

## O que encontrei
- O site tem dois padrões corretos e intencionais:
  - páginas institucionais (Home, Perfil, Áreas de Atuação, Dúvidas, Fale Conosco e Artigos) usam o cabeçalho e o rodapé gerais;
  - as 99 páginas de destino de serviços por cidade ou país usam cabeçalho e rodapé próprios.
- Na versão atual do código, as 99 páginas de destino estão cadastradas para ocultar o cabeçalho e o rodapé gerais. No teste direto em tela de telefone, cada uma exibiu exatamente um cabeçalho e um rodapé.
- Todos os 99 cabeçalhos das páginas de destino já estão configurados para permanecer no topo durante a rolagem.
- O que está fora do padrão é a forma de controle: existe uma lista manual com 99 endereços. Esse modelo é frágil; qualquer página nova ou endereço não incluído pode receber também o cabeçalho e o rodapé gerais, causando a duplicação relatada.
- O cabeçalho e o rodapé próprios também estão repetidos dentro de cada página, o que facilita diferenças acidentais entre páginas ao longo do tempo.

## O que farei
1. Substituir a lista manual por uma regra única que reconheça automaticamente todas as páginas de destino de serviços.
2. Garantir que páginas de destino mostrem somente o cabeçalho e o rodapé próprios, enquanto as páginas institucionais continuem mostrando somente os gerais.
3. Preservar integralmente o visual, textos, logomarcas, botões e conteúdo dos cabeçalhos e rodapés existentes.
4. Preservar o comportamento fixo do cabeçalho das páginas de destino durante a rolagem.
5. Testar no telefone a abertura direta e a navegação entre páginas institucionais e páginas de destino, confirmando que nunca aparecem dois cabeçalhos ou dois rodapés.

## Limite da alteração
Não vou redesenhar, trocar logomarcas, mudar textos ou modificar o conteúdo das páginas. A alteração será somente na regra que escolhe qual conjunto de cabeçalho e rodapé deve aparecer.
