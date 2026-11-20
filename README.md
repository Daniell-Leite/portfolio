# Portfólio Pessoal - Daniell Leite

Repositório contendo o código-fonte do meu portfólio web pessoal, desenvolvido para apresentar meus projetos de Ciência da Computação, desenvolvimento de software e trabalhos de Game Design e worldbuilding para RPG de mesa.

## Objetivo do Projeto

Centralizar em uma única página responsiva e minimalista:
* Projetos de programação e ferramentas de linha de comando (C e Python).
* Arquitetura de sistemas, lógica e protótipos voltados para jogos e RPG.
* Cenários autorais, sistemas de regras customizadas (homebrews) e ferramentas de gestão para mestres.

## Identidade Visual e Recursos

* **Estética de Taverna Pastel:** Paleta de cores customizada sobre as variáveis do Bootstrap 5.3, alternando entre tons de pergaminho suave (tema claro) e madeira escura à luz de vela (tema escuro) com destaques em terracota e âmbar.
* **Alternância Dinâmica de Tema:** Botão integrado na barra de navegação que altera entre o modo claro e escuro em tempo real via atributo `data-bs-theme`.
* **Hero Interativa:** Efeito de partículas sutis de fogo e brasas em HTML5 Canvas (`<canvas>`) que seguem o cursor exclusivamente dentro da seção inicial, acompanhado de moldura fotográfica recortada em silhueta de chama via `clip-path`.
* **Seções Proporcionais à Viewport:** Uso de alturas customizadas em `vh` para equilibrar a leitura e o espaçamento entre os blocos no desktop.

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e elemento `<canvas>` para renderização 2D.
* **CSS3:** Sobrescrita de variáveis nativas do Bootstrap, gradientes, `clip-path` e responsividade.
* **Bootstrap v5.3:** Sistema de grid responsivo, componentes de navegação, cartões e utilitários de layout.
* **JavaScript (Vanilla):** Controle de alternância de tema e sistema de partículas de fogo em 60fps via `requestAnimationFrame`.

## Estrutura de Arquivos

```text
portfolio/
├── css/
│   ├── bootstrap.min.css       # Framework Bootstrap 5.3 (padrão LTR)
│   └── style.css               # Paleta taverna pastel, moldura de chama e alturas de viewport
├── img/
│   └── daniell.jpg             # Foto de perfil exibida na seção Hero
├── js/
│   └── bootstrap.bundle.min.js # Scripts interativos do Bootstrap
├── index.html                  # Página principal e script da animação de fogo
└── README.md                   # Documentação do projeto
```

## Estrutura do Conteúdo

1. **Hero Section:** Apresentação principal, resumo de atuação, links rápidos e retrato em molde de chama com rastro de brasas no cursor.
2. **Sobre Mim e Experiências:** Formação em Ciência da Computação (UDF) conectada aos mais de 4 anos de experiência como Mestre de RPG e designer de sistemas.
3. **Projetos de Desenvolvimento e Ferramentas:**
   * *Gerador Procedural de NPCs (D&D 5e):* Ferramenta em linha de comando (C/Python).
   * *Protótipo de Gestão de Masmorras (Estilo Dungeon Crawl):* Arquitetura lógica para fichas, geração procedural e exploração (em andamento / repositório privado).
4. **Game Design, Worldbuilding e Sistemas:**
   * *O Último Clarão:* Cenário autoral ambientado em uma cidade subterrânea e sua busca pela superfície.
   * *Raças Autorais (D&D 5e):* Criação e balanceamento das linhagens **Derriake** e **Primordiais** com suas respectivas sub-raças.
   * *MestreDesk:* Central de comando no Notion com bancos de dados relacionais para gestão completa de campanhas.
5. **Contato e Rodapé:** Links diretos para E-mail, GitHub e LinkedIn, além dos créditos de desenvolvimento.
