# Plano: nova foto da cidade em Nossa Equipe

## O que encontrei

Recebi **somente `CIDADE_7_-_Copia.png`**, uma vista noturna da cidade com edifícios e vias iluminadas. Ela não é a foto atualmente usada no fundo de **Nossa Equipe** (`Cidade-5_11zon_-_Copia.jpg`, já convertida para uma versão leve). O pedido de substituir uma foto de cidade diferente, portanto, faz sentido; porém, a menção a **várias fotos e três imagens de fundo** não corresponde a este envio. Não há outras novas imagens disponíveis nesta mensagem para identificar ou trocar.

A foto atual aparece apenas como fundo da seção compartilhada **Nossa Equipe**, em **102 páginas**:

- **Institucionais (3):** Home (`/`), Perfil (`/perfil`) e Áreas de Atuação (`/areas-de-atuacao`). Não aparece em Dúvidas, Fale Conosco ou Artigos.
- **Destinos locais (80):** Contrato de Namoro, Curatela, Divórcio, Divórcio Extrajudicial, Execução de Pensão, Exoneração de Pensão, Família, Fixação de Pensão, Guarda, Guarda Compartilhada, Inventário, Mudança de Regime de Bens no Casamento, Pensão Alimentícia, Reconhecimento e Dissolução de União Estável, Reconhecimento/Investigação/Negatória de Paternidade e Revisão de Pensão — cada serviço nas cinco cidades Betim, Belo Horizonte, Contagem, Igarapé e Nova Lima.
- **Destinos nacionais e internacionais (19):** as páginas de averbação de divórcio estrangeiro ou português; cartas rogatórias no STJ (Brasília e Brasília/Portugal); homologação de decisão de curatela/interdição (Brasília e Brasília/Portugal), de decisão judicial estrangeira ou portuguesa, de divórcio e guarda, e de paternidade/filiação estrangeira ou portuguesa; reconhecimento e homologação de sentença estrangeira ou portuguesa; registro/validação de escrituras estrangeiras ou portuguesas; traslado/transcrição de casamento estrangeiro ou português; e validação/homologação de sentença estrangeira ou portuguesa.

## O que farei após aprovação

1. Preparar uma versão leve da **nova foto enviada** e substituir somente a foto de fundo compartilhada de **Nossa Equipe**. Não trocar nenhuma outra foto de cidade, nem imagens que apenas se pareçam com ela.
2. **Conservar a máscara azul diagonal que já está aplicada**: azul mais forte no canto superior esquerdo, suavizando até o canto inferior direito, onde ainda resta azul. Conferir a visibilidade da nova foto; ajustar apenas a intensidade da máscara se a nova composição realmente exigir, mantendo o texto legível.
3. Preservar ordem e tamanho das fotos da equipe, nomes, posição, dimensões da seção, botões, textos e demais elementos. Conferir a Home e páginas de destino no computador e no telefone e verificar as 102 páginas afetadas.

## Espaço para texto alternativo

**Nova foto da cidade — texto que você deseja:** ______________________________

**Observação importante:** nesta seção, a cidade é um **fundo decorativo**, não uma foto informativa apresentada ao leitor. Fundos não possuem atributo `alt` e não são anunciados por leitores de tela. Mesmo que você preencha o campo, aplicá-lo aqui exigiria mudar a estrutura da imagem e não atenderia ao pedido de manter todo o restante igual; **não adicionarei `alt` ao fundo sem um novo pedido explícito para essa mudança**.

O texto alternativo serve para transmitir o significado de **imagens informativas** a quem usa leitor de tela, oferecer uma descrição se elas falharem ao carregar e contextualizá-las para buscadores. As três fotos dos advogados já têm seus próprios textos alternativos e permanecerão intactas.

## Limite deste plano

Somente a imagem recebida nesta mensagem será substituída. Se você pretendia trocar mais três fotos, envie-as separadamente para que eu identifique seus locais antes de alterá-las. **Nenhuma alteração será feita no site antes da aprovação.**

## Detalhes técnicos

A troca fica concentrada no fundo compartilhado de `src/components/sections/TeamGrid.tsx`, usando uma versão otimizada da imagem enviada. A máscara existente já tem direção diagonal e camada azul residual, portanto a prioridade é preservá-la, não reconstruir a seção. O fundo não receberá `alt` por ser imagem CSS decorativa.
