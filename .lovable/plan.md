# Revisão segura dos alertas do PageSpeed Insights

## O que os prints realmente dizem

Os oito prints mostram uma análise **no celular**, com nota **89 em Acessibilidade**; não mostram a nota de velocidade nem tempos de carregamento. Os avisos principais são de legibilidade e organização para pessoas que usam leitores de tela. O print de “Navegação agêntica” (1/2) é uma categoria experimental relacionada a agentes de IA, não uma nota de velocidade nem um erro de segurança.

- **Campo sem nome associado:** o menu “Tipo do Caso” tem um título visível, mas esse título não está vinculado ao campo para leitores de tela. A mesma mensagem reaparece na seção experimental; é **um problema**, não dois.
- **Contraste insuficiente:** alguns textos dourados sobre fundo claro e textos muito apagados sobre fundo escuro são difíceis de ler. Os prints citam, entre outros, o número da OAB, a área de Dúvidas, depoimentos, endereços e a frase discreta do formulário e rodapé. É preciso conferir cada combinação no contexto; não mudar a cor de todos os textos de uma vez.
- **Ordem de títulos:** na página inicial o título principal é seguido por “+ 20 anos” marcado como subtítulo de nível 3, sem o nível intermediário. Também há casos semelhantes em páginas institucionais.
- **“Mapas de origem ausentes”:** esses arquivos ajudam programadores a investigar códigos compactados; o próprio relatório marca o aviso como **fora da pontuação**. Não melhora diretamente velocidade, acessibilidade ou posição no Google. Não expor código-fonte de produção só para retirar esse aviso.

## Alcance confirmado no site atual

Conferi os oito prints, os elementos do site e os **106 endereços de página diretamente definidos**: 99 páginas de destino e 7 páginas institucionais (Home, Perfil, Áreas de Atuação, Dúvidas, Fale Conosco, lista de Artigos e o registro de artigo). Todos responderam à consulta local. A página individual de artigo é dinâmica e tem cerca de 35 artigos; ela foi conferida por amostra, não como 35 auditorias completas. Os resultados locais não equivalem a 106 relatórios oficiais do PageSpeed do domínio publicado.

- O campo “Tipo do Caso” sem associação com seu título aparece em **105 dos 106 endereços-base**; a lista `/artigos` não tem esse campo. Também aparece na página individual de artigo examinada, por reutilizar o formulário. Uma correção no formulário compartilhado alcança todos esses locais.
- O rodapé institucional contém texto muito apagado e está presente nos endereços institucionais; as 99 páginas de destino têm rodapé próprio. O contraste varia por seção e precisa ser medido em ambas as famílias de página e nos artigos.
- A ordem de títulos apresentou saltos em **5 dos 106 endereços-base** pela inspeção automática: páginas institucionais, não nas 99 páginas de destino examinadas. A página individual de artigo merece verificação separada, inclusive o sumário.
- O print do código `/assets/index-Di85jee7.js` é do domínio `bragabitencourt.com`, que respondeu durante a consulta, mas o relatório não traz uma medição completa de velocidade para extrapolar ganhos. O código atual e o domínio publicado podem estar em versões diferentes; comparar antes de mexer.

## Plano de ação, somente após autorização

1. **Registrar o ponto de partida:** guardar as medições completas do domínio publicado em celular e computador para Home, uma página de cada família de destino, Dúvidas, Contato, Artigos e um artigo; conferir também as demais páginas com checagem automática. Separar avisos de acessibilidade dos de desempenho, sem prometer ganho de velocidade com correções que não afetam o carregamento.
2. **Corrigir o formulário compartilhado primeiro:** vincular cada título ao respectivo campo (incluindo o menu “Tipo do Caso”), sem alterar aparência, opções, texto digitado ou envio ao WhatsApp. Testar seleção, preenchimento, limpeza e envio em celular/computador, nas páginas institucionais e de destino.
3. **Corrigir contraste com precisão:** medir cada trecho apontado contra o fundo em que aparece e ajustar só a cor/tonalidade necessária para tornar o texto legível. Preservar identidade dourado/azul, textos, tamanho, posições, fotos e estrutura. Verificar o contraste em fundos e estados interativos reais, sem clarear ou escurecer o site inteiro.
4. **Ajustar a hierarquia dos títulos sem mudar o visual:** corrigir apenas a marcação interna dos títulos que pulam níveis, incluindo os cartões “+ 20 anos”, e conferir FAQ, Perfil, artigos e sumário. Manter exatamente a aparência e as palavras visíveis.
5. **Validar antes de publicar:** repetir a checagem em todos os 106 endereços-base e nos artigos individuais, e testar amostras visualmente no celular e computador. Confirmar um cabeçalho/rodapé em cada página, logos e imagens carregando, funcionamento do formulário e resultados de acessibilidade; comparar novamente o PageSpeed no domínio publicado **depois da publicação autorizada**, sabendo que a nota pode variar entre medições.

## Proteções e limites

- **Nenhuma correção foi feita nesta etapa.** Não alterar fotos, textos alternativos, textos jurídicos, botões, cabeçalhos, rodapés, endereços, SEO, rotas ou envio de contatos além da ligação invisível entre títulos e campos e de ajustes estritamente necessários à legibilidade/ordem semântica.
- Aplicar mudanças pequenas e reversíveis, começando pelos trechos compartilhados; parar e investigar se algum teste visual ou de funcionamento mostrar regressão.
- Não criar mapas de origem públicos apenas para satisfazer um aviso informativo. Não mudar hospedagem, scripts externos, vídeo ou arquivos de imagem sem outro diagnóstico e autorização específica.
- O objetivo é melhorar acessibilidade e compreensão; **não há garantia de nota 100, abertura mais rápida ou primeiro lugar no Google** a partir desses prints.
