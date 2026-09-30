# Revisão segura dos alertas do PageSpeed Insights

## O que os novos prints significam

Os novos alertas são principalmente de **desempenho no telefone**. Eles não indicam que o site esteja quebrado e não significam que todos os itens devam ser removidos.

- **15,7 s de trabalho da página e 11,6 s executando JavaScript:** o telefone analisado gastou muito tempo processando o arquivo principal do site e, em menor parte, Google Tag Manager. Isso pode atrasar a resposta ao toque.
- **Cerca de 207 KiB de JavaScript não usado:** é uma estimativa do teste. Aproximadamente 146 KiB são do Google Tag Manager e 61 KiB do próprio site. Não retirarei o Google Tag Manager sem antes confirmar quais medições e conversões dependem dele.
- **Imagens sem largura e altura declaradas:** o navegador reserva o espaço tarde, podendo causar pequenos movimentos durante a abertura.
- **Página de cerca de 5,9 MB:** o maior arquivo é o vídeo inicial, com cerca de 4,4 MB. A logomarca de 1.920 × 641 px pesa cerca de 340 KiB apesar de aparecer pequena; fotos, fontes e scripts completam o total.
- **Arquivos que atrasam a primeira exibição:** a folha visual do site e as fontes externas entram no caminho inicial. A fonte pode acrescentar aproximadamente 1,2 s no cenário medido.
- **Reorganização forçada da página por cerca de 0,5 s:** alguns cálculos de posição são repetidos pelo navegador. Parte não foi atribuída pelo relatório; será corrigida somente onde a medição mostrar causa concreta.
- **Otimização estimada de imagens em cerca de 585 KiB:** concentra-se sobretudo na logomarca e nas fotos da equipe. As fotos deverão continuar inteiras, nítidas, alinhadas e sem cortes.

## Alertas anteriores já confirmados

- O campo **Tipo do Caso** não possui uma identificação técnica associada em todas as 105 páginas-base que exibem o formulário.
- Há textos específicos com contraste insuficiente.
- Há saltos na ordem dos títulos em páginas específicas.
- O aviso sobre “mapas de origem” do JavaScript é informativo para programadores; ativá-los publicamente não melhora a velocidade e pode expor detalhes do código, portanto não será tratado como correção.
- A auditoria complementar cobrirá também os 33 artigos individuais, além das páginas institucionais e das 99 páginas de destino.

## Plano de ação em etapas seguras

### 1. Registrar uma base antes de alterar

- Medir Home, uma página institucional, uma página de destino local, uma internacional, a lista de artigos e artigos individuais, sempre no telefone e no computador.
- Registrar peso transferido, tempo de abertura, mudanças de posição, erros visuais, carregamentos externos e eventos de anúncios.
- Fazer cada grupo de correções separadamente para permitir comparação e reversão.

### 2. Corrigir acessibilidade sem mudar o visual

- Associar corretamente os nomes visíveis aos campos do formulário, incluindo **Tipo do Caso**.
- Corrigir somente os textos cujo contraste reprovar, mantendo a identidade dourada e azul-marinho.
- Organizar os níveis de títulos sem alterar palavras, tamanho, posição ou aparência.
- Conferir nomes de botões, pesquisa, navegação por teclado, foco visível e ordem de leitura.

### 3. Reduzir imagens sem corte ou troca visual

- Criar uma versão da logomarca adequada ao tamanho em que aparece e declarar suas dimensões para o navegador.
- Criar versões mais leves das fotos da equipe, preservando enquadramento integral, proporção, ordem e qualidade facial.
- Declarar dimensões nas imagens compartilhadas e nas capas de artigos para estabilizar a página.
- Não substituir nenhuma fotografia por outra e não alterar textos alternativos já aprovados.

### 4. Reduzir o vídeo inicial com proteção visual

- Manter o mesmo vídeo, produzindo uma versão menor e visualmente comparável.
- Adicionar uma imagem de espera retirada do próprio vídeo, para evitar área vazia durante o carregamento.
- Comparar lado a lado em telefone e computador antes de aceitar a versão; rejeitar se houver perda perceptível.

### 5. Diminuir bloqueios e processamento

- Testar cópias locais das mesmas fontes, respeitando licença e comparando letras, pesos e quebras de linha antes da troca.
- Carregar o globo e seus dados somente quando a seção estiver próxima da tela, mantendo aparência e movimento quando visível; usar dados locais apenas se a licença da fonte permitir.
- Separar código pesado que não é necessário na primeira tela e confirmar que menus, formulários, carrosséis e artigos continuam funcionando.
- Medir os pontos de reorganização forçada antes de modificar animações; nenhuma animação será removida indiscriminadamente.

### 6. Preservar anúncios e medições

- Inventariar os eventos do Google Tag Manager e verificar quais são usados para WhatsApp, formulário e conversões.
- Não remover, atrasar ou trocar o Google Tag Manager enquanto isso não estiver comprovado.
- Se ele continuar pesado, apresentar uma proposta separada com efeito esperado e risco antes de qualquer alteração.

### 7. Verificação ampla antes de concluir

- Validar as 99 páginas de destino, as páginas institucionais, a lista de artigos e os 33 artigos individuais.
- Conferir no telefone e no computador: cabeçalho, rodapé, logomarca, vídeo, equipe, formulários, WhatsApp, carrosséis, globo, imagens, textos alternativos e títulos.
- Confirmar ausência de imagens quebradas, mudanças de layout, erros na tela e falhas no carregamento.
- Repetir as medições nas mesmas páginas da base e comparar os números.
- Não publicar sem uma autorização separada.

## Limites e segurança

- Corrigir estes alertas tende a melhorar abertura, estabilidade, acessibilidade e experiência, mas não garante nota 100 nem primeiro lugar no Google.
- Resultados do PageSpeed variam conforme aparelho, rede e serviços externos.
- A execução será por etapas; se uma mudança alterar o visual, as fontes, o enquadramento ou as medições, ela será revertida antes de seguir.
- Nenhum conteúdo, cabeçalho, rodapé, ordem, fotografia ou texto alternativo será alterado por este plano.
