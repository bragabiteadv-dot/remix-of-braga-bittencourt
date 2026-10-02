# Roadmap

## Em andamento
- [ ] Acelerar o carregamento do globo sem alterar aparência, movimento, zoom ou gestos
- [x] Comparar a nova versão WebP da cidade com a PNG aprovada e atualizar o plano antes de trocar o fundo
- [x] Substituir somente o fundo da seção Nossa Equipe pela nova foto da cidade e ajustar a máscara diagonal aprovada
- [x] Adequar a máscara azul da seção Nossa Equipe à nova imagem de referência sem alterar os demais elementos
- [x] Ajustar a continuidade das ondas e eliminar espaços nas divisas da seção de serviços

## Concluído recente
- [x] Trocar quatro imagens compartilhadas, melhorar a nitidez do aperto de mãos e suavizar diagonalmente a máscara da seção Nossa Equipe
- [x] Auditar o sitemap público e confirmar 138 URLs válidas, canônicas e sem www, parâmetros, redirecionamentos ou páginas 404
- [x] Padronizar as URLs canônicas de todas as páginas no domínio sem www, removendo query, UTM e hash
- [x] Corrigir os alertas confirmados de acessibilidade e desempenho, reduzir mídia sem alterar o visual e validar 138 páginas
- [x] Trocar as cinco fotos da sede em todas as páginas onde aparecem e aplicar os textos alternativos aprovados
- [x] Remover a faixa branca lateral da foto da Gláucia sem cortar ou redimensionar as fotos da equipe
- [x] Trocar as fotos da seção Nossa Equipe em todo o site, sem cortes, preservando ordem e textos alternativos por contexto
- [x] Trocar a árvore da seção História e dos rodapés pela nova imagem, com textos alternativos adequados
- [x] Aplicar a logomarca das páginas de destino nos cabeçalhos das páginas institucionais
- [x] Padronizar a nova logomarca nos cabeçalhos das 99 páginas de destino sem alterar sua estrutura
- [x] Padronizar a seleção de cabeçalho e rodapé nas páginas de destino e validar no telefone
- [x] Restaurar as capas de Guarda Compartilhada, Aquisição de Imóveis, Transcrição de Casamento Estrangeiro, Investigação de Paternidade e Medida Protetiva, e corrigir o texto alternativo de Investigação de Paternidade
- [x] Substituir a foto do artigo de Guarda Compartilhada e definir seu texto alternativo
- [x] Substituir a foto do artigo de Medida Protetiva e definir seu texto alternativo
- [x] Substituir a foto do artigo de Investigação de Paternidade e definir seu texto alternativo
- [x] Substituir a foto do artigo de Aquisição de Imóveis e Bens no Brasil por Residentes no Exterior e definir seu texto alternativo
- [x] Substituir a foto do artigo de Apostila de Haia e definir seu texto alternativo
- [x] Substituir a foto do artigo de Testamento e definir seu texto alternativo
- [x] Substituir a foto do artigo de Mudança de Regime de Bens no Casamento e definir seu texto alternativo
- [x] Substituir a foto do artigo de Inventário Extrajudicial e definir seu texto alternativo
- [x] Colocar o artigo de Guarda Compartilhada em primeiro lugar na lista
- [x] Substituir a foto do artigo de Dissolução de União Estável no Brasil e definir seu texto alternativo
- [x] Substituir a foto do artigo de Divórcio Extrajudicial no Brasil e definir seu texto alternativo
- [x] Substituir a foto do artigo de Homologação de Divórcio Estrangeiro no Brasil e definir seu texto alternativo
- [x] Corrigir a exibição das cinco capas personalizadas dos artigos sem alterar seus textos alternativos
- [x] Substituir a foto do artigo de Alienação Parental e definir seu texto alternativo
- [x] Substituir a foto do artigo de Partilha de Bens ou Divisão de Bens e definir seu texto alternativo
- [x] Substituir as fotos dos artigos de Inventário e Guarda Compartilhada e definir seus textos alternativos
- [x] Alterar o texto alternativo da imagem do artigo de Divórcio e União Estável
- [x] Reorganizar artigos com cartão inteiro clicável, data destacada e sumário pesquisável
- [x] Padronizar em 1:1 as imagens dos artigos e posicionar o título acima da imagem principal
- [x] Duplicar páginas de Divórcio para Reconhecimento, Investigação e Negatória de Paternidade (5 cidades)
- [x] Duplicar páginas de Divórcio para Guarda Compartilhada (5 cidades)

## Concluído
- [x] Criar componente/utilitário global de SEO local (`SeoHead` / `buildSeoHead`) para buscas locais no TanStack Router, descartando `react-helmet-async`.

## Decisões pendentes / não aplicadas
- [ ] Manter server routes dinâmicas existentes para `/robots.txt` e `/sitemap.xml` (não criar arquivos estáticos em `public/`).
