# Fazer o globo carregar mais rápido sem alterar aparência ou funções

## Onde o globo aparece

O mesmo globo é compartilhado por **133 páginas**:

- Home (`/`);
- todas as **99 páginas de destino**;
- todos os **33 artigos individuais**.

Ele não aparece em Perfil, Áreas de Atuação, Dúvidas, Fale Conosco nem na página geral de Artigos.

## Tudo o que o globo possui atualmente

### Aparência

- Globo tridimensional desenhado em alta resolução dentro da própria página.
- Fundo preto, contorno branco e linhas geográficas brancas semitransparentes.
- Contornos dos continentes e países.
- Pontos cinza distribuídos somente sobre as áreas terrestres.
- Tamanho responsivo: até 600 × 600 pixels, reduzido conforme a tela disponível.
- Nitidez adaptada automaticamente à densidade da tela, inclusive em celulares de alta resolução.
- Mesma seção azul-marinho, textos, divisor e posicionamento atuais.
- Mensagem de carregamento e mensagem de erro próprias.
- Instrução visível: “Arraste para girar • Role para ampliar”.

### Movimento e interação no computador

- Rotação automática contínua.
- Arrastar com o mouse para girar horizontal e verticalmente.
- Limite vertical para impedir que o globo vire de forma incoerente.
- Ampliação e redução com a roda do mouse.
- Limites mínimo e máximo de aproximação.
- Cursor muda para indicar quando o globo pode ser arrastado.
- A rolagem normal da página só é interrompida quando o ponteiro está realmente sobre o círculo do globo.
- A rotação automática pausa durante o movimento manual e volta depois que a pessoa solta.

### Movimento e interação no telefone

- Um dedo gira o globo.
- Dois dedos ampliam ou reduzem.
- Os mesmos limites de rotação e aproximação do computador.
- Gestos iniciados fora do círculo não prendem a rolagem da página.
- A rotação automática volta após o fim do gesto.

### Carregamento e economia de recursos já existentes

- O globo fica separado do carregamento principal do site.
- Seu código só começa a ser solicitado quando a seção se aproxima da tela, atualmente a 500 pixels de distância.
- A animação deixa de redesenhar o globo quando ele sai da área visível e volta quando reaparece.
- O mapa é servido localmente pelo próprio site, sem depender de um endereço externo.
- O arquivo geográfico atual possui **127 territórios e 237.355 bytes** antes da compactação automática da hospedagem.
- O espaço da seção é reservado antes do globo aparecer, evitando deslocamentos do restante da página.

## Por que ainda pode parecer lento

Quando a seção chega a 500 pixels da tela, três trabalhos começam quase ao mesmo tempo:

1. baixar e preparar o código de desenho geográfico;
2. carregar e interpretar os 127 territórios do mapa;
3. calcular, um a um, todos os pontos que ficam dentro dos continentes.

O terceiro item é o mais delicado: hoje os pontos são descobertos no telefone ou computador do visitante por meio de muitos cálculos geométricos. A página inicial já está aberta quando isso acontece, mas o globo pode demorar a ficar pronto quando a pessoa rola rapidamente até a seção.

## Plano de otimização segura

### 1. Registrar a situação atual

- Medir separadamente o tempo para baixar o código, carregar o mapa, calcular os pontos e exibir o primeiro desenho.
- Registrar a quantidade exata de pontos, a posição inicial, o tamanho e uma imagem de referência do globo.
- Repetir a medição em telefone e computador na Home, em uma página de destino e em um artigo.

### 2. Preparar antecipadamente sem exibir antecipadamente

- Durante um momento ocioso, depois que a parte inicial da página estiver pronta, preparar em segundo plano o código e os dados locais do globo.
- Manter o globo visualmente adiado: ele continuará sendo criado somente quando a seção estiver próxima.
- Compartilhar a mesma preparação para evitar solicitações ou leituras duplicadas durante a navegação.
- Preservar a prioridade do vídeo, do cabeçalho e do conteúdo inicial; o globo não passará à frente deles.

**Resultado esperado:** ao chegar à seção, os arquivos necessários já estarão disponíveis, sem aumentar o trabalho crítico da abertura da página.

### 3. Retirar o cálculo pesado do aparelho do visitante

- Gerar previamente a lista de pontos terrestres usando exatamente o mapa, o espaçamento e a regra matemática atuais.
- Entregar os mesmos pontos já prontos ao navegador, em vez de testar milhares de coordenadas durante cada visita.
- Manter os dados do contorno para que países, continentes e linhas geográficas permaneçam idênticos.
- Confirmar por comparação automática que a quantidade e as coordenadas dos pontos são exatamente iguais às atuais antes de aceitar a troca.

**Resultado esperado:** o primeiro desenho aparecerá mais cedo e exigirá menos processamento, sobretudo em telefones mais lentos.

### 4. Evitar trabalho repetido sem reduzir a animação

- Criar a grade de linhas geográficas uma única vez, em vez de recriá-la a cada quadro da rotação.
- Reutilizar dados e objetos que hoje não mudam durante a animação.
- Manter a velocidade atual de rotação, a frequência visual, a nitidez e todos os pontos; não será aplicado limite de quadros, redução de resolução ou simplificação visível.

### 5. Preservar integralmente todas as funções

Não serão alterados:

- desenho, cores, linhas, pontos, contornos ou posição inicial;
- tamanho no telefone e no computador;
- velocidade e continuidade da rotação automática;
- arrastar com mouse ou um dedo;
- ampliação pela roda ou por dois dedos;
- limites de rotação e aproximação;
- cursores, instruções, mensagem de carregamento e tratamento de erro;
- comportamento da rolagem da página;
- textos, espaçamentos e demais elementos da seção;
- qualquer outra seção do site.

A biblioteca atual de desenho será mantida. Não trocarei o globo por uma imagem, vídeo ou modelo diferente.

## Verificação antes de concluir

### Comparação visual

- Capturar o globo antes e depois na mesma dimensão e posição.
- Comparar contorno, grade, pontos, cores, escala, nitidez e posição inicial.
- Conferir em telefone e computador, inclusive telas de alta resolução.

### Teste de todas as funções

- Rotação automática antes e depois de interações.
- Arraste horizontal e vertical com mouse.
- Ampliação e redução pela roda.
- Arraste com um dedo e ampliação com dois dedos.
- Rolagem normal quando o gesto começa fora do círculo.
- Pausa quando o globo sai da tela e retomada quando volta.
- Mensagens de carregamento e erro.

### Teste de velocidade e estabilidade

- Repetir as medições da Home, de uma página de destino e de um artigo.
- Confirmar que o globo ficou pronto mais cedo e consumiu menos processamento.
- Confirmar que a abertura inicial do site não ficou mais lenta.
- Validar todas as 133 páginas que exibem o globo.
- Confirmar ausência de erros, deslocamentos ou arquivos quebrados.

## Limite de segurança

Qualquer otimização que mudar um ponto, uma linha, a nitidez, a velocidade, um gesto ou a rolagem será rejeitada e revertida. A alteração só será mantida se o globo permanecer visual e funcionalmente igual e a medição demonstrar ganho real.
