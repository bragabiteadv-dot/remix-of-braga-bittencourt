# Criar 582 páginas jurídicas internacionais

## Objetivo confirmado

Criar, em português, as seis páginas jurídicas solicitadas para cada uma das 97 localidades do arquivo enviado, totalizando 582 páginas. Cada endereço terá título, descrição, canonical e conteúdo coerentes com o serviço e a localidade.

## Implementação

1. **Estruturar a matriz de conteúdo**
   - Registrar as 97 localidades com nome, tipo geográfico, preposição, país relacionado, gentílico quando aplicável e identificador de URL sem acentos.
   - Registrar os seis serviços separadamente, evitando tratar procedimentos juridicamente diferentes como simples sinônimos.
   - Normalizar grafias e distinções como cidade/estado de Nova York, Basileia/cantão e Washington/estado.

2. **Criar uma base reutilizável de páginas**
   - Extrair o visual e as seções da página atual para um modelo compartilhado.
   - Manter cada `/advogado-*` como página de destino independente, com o mesmo cabeçalho, rodapé, chamadas de contato e identidade visual existentes.
   - Gerar textos variáveis por serviço e localidade, incluindo requisitos e ressalvas próprias, em vez de apenas trocar o nome do lugar.

3. **Criar e validar as 582 URLs**
   - Usar rotas compatíveis com o padrão atual e URLs legíveis em português, sem acentos, parâmetros ou duplicações.
   - Gerar H1, subtítulo, introdução, situações atendidas, etapas, documentos e textos alternativos específicos.
   - Ajustar responsivamente o título somente quando o comprimento exigir, sem alterar a aparência das demais páginas.

4. **Aplicar SEO individual**
   - Criar título, descrição, Open Graph, Twitter, canonical autorreferente e dados estruturados para cada página.
   - Usar `https://bragabitencourt.com` como domínio oficial por meio do gerador SEO existente.
   - Evitar metadados idênticos e evitar alegações locais que não possam ser comprovadas.

5. **Atualizar descoberta e navegação**
   - Incluir as novas páginas no sitemap dinâmico.
   - Criar caminhos internos de descoberta por serviço e localidade sem sobrecarregar menus principais.
   - Preservar as 138 URLs atuais e os redirecionamentos existentes.

6. **Validar antes da entrega**
   - Conferir contagem exata: 97 localidades × 6 serviços = 582 páginas novas.
   - Testar amostras de todas as categorias geográficas e dos seis serviços em computador e celular.
   - Verificar resposta 200, conteúdo renderizado, canonical própria, ausência de duplicação de URL e integridade do sitemap.
   - Confirmar que nenhuma página existente, imagem, texto ou funcionalidade fora desse escopo foi alterada.

## Observação de qualidade

A expansão será construída com dados compartilhados para manter consistência técnica, mas cada página precisa de conteúdo semanticamente adequado. A publicação em massa não garante indexação: o Google poderá ignorar páginas excessivamente semelhantes, por isso a validação dará atenção especial à diferenciação real entre serviço e localidade.
