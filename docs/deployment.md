# Publicação do site

O site é gerado como conteúdo estático pelo Astro e pode ser publicado pelo GitHub Pages a partir deste repositório. O workflow em `.github/workflows/deploy.yml` publica automaticamente os commits da branch `main`.

## Configuração inicial no GitHub

1. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.
2. Confirme que o primeiro workflow terminou com sucesso antes de alterar o DNS.
3. Em **Settings → Pages → Custom domain**, informe `saopedropoa.com.br` e salve. O domínio também está registrado em `public/CNAME`.
4. Ative **Enforce HTTPS** quando o GitHub disponibilizar o certificado.

O GitHub Pages é oferecido em repositórios públicos no plano GitHub Free; para repositórios privados é necessário um plano compatível. Confirme a visibilidade do repositório e o plano antes de ativar a publicação.

## Troca do DNS na UOL

Depois de a publicação e o domínio personalizado estarem configurados no GitHub, altere apenas os registros web do domínio:

- Apontamento do domínio raiz (`@`) para GitHub Pages: registros A `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`.
- `www`, se for usado: registro CNAME apontando para `leoramosjr.github.io`.

Antes de editar a zona, confira todos os registros existentes. Preserve os registros MX, TXT e quaisquer outros usados pelo e-mail e pelos serviços da paróquia. O apontamento atual do domínio raiz responde com `187.17.111.35`; substitua esse A somente na janela da migração. Mudanças de DNS podem levar até 24 horas para se propagar.

Mantenha a hospedagem WordPress da UOL ativa durante a propagação e a conferência do novo site. Assim, ela pode ser reativada rapidamente se houver algum problema.

## Atualizações

Depois da configuração, novos commits em `main` iniciam o workflow de publicação. O site passa a ser atualizado pelo código deste repositório; não há painel WordPress para editar as páginas publicadas.

## URLs antigas do WordPress

O layout redireciona IDs de página WordPress conhecidos (`?page_id=...`) para as rotas correspondentes do novo site. O ID da antiga página de Eucaristia não foi recuperado e ainda não tem redirecionamento.
