# Paróquia São Pedro

Primeira estrutura do novo site da Paróquia São Pedro, em Porto Alegre. O projeto usa Astro, TypeScript estrito e CSS próprio, sem biblioteca de componentes.

## Começar

```sh
npm install
npm run dev
```

O servidor local do Astro usa `http://localhost:4321` por padrão.

## Estrutura

```text
src/
├── components/    Cabeçalho, rodapé e blocos reutilizáveis
├── data/          Navegação, horários e conteúdo compartilhado
├── layouts/       Estrutura comum das páginas
├── pages/         Rotas do site
└── styles/        Tokens e estilos globais
```

As rotas são organizadas por área: `paroquia`, `sacramentos`, `pastorais`, `horarios` e `contato`.

## Publicação

O deployment para GitHub Pages está em [docs/deployment.md](docs/deployment.md). Depois que **GitHub Actions** for selecionado em **Settings → Pages**, commits na branch `main` publicam o site automaticamente. Faça a troca dos registros DNS do domínio somente depois de confirmar a primeira publicação.

## Observação sobre conteúdo

Esta é uma base inicial com visual simples e genérico. O inventário do site publicado ainda é parcial. Horários, contatos, taxas, requisitos e informações de grupos devem ser confirmados com a paróquia antes da publicação. Não foram adicionadas páginas ou serviços não confirmados, como IVC, inscrição online ou pagamento digital.
