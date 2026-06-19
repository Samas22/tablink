<!-- TabLink — Agent Notes -->

> Arquivo de referência para agentes de codificação. Leia isto antes de fazer qualquer alteração no projeto.

---

## Visão Geral do Projeto

**TabLink** é uma aplicação web construída com **Next.js** (v13.1.6) e **React** (v18.2.0), utilizando o sistema de roteamento baseado em páginas (`pages/`) do Next.js. O projeto evoluiu de uma página inicial estática para um **protótipo visual (mockup)** chamado _TabLink — Conector Humano Universal para Soberania e Cidadania_.

A documentação do projeto (`README.md`) está em **português brasileiro** e apresenta uma visão de longo prazo para uma plataforma de gestão de conhecimento com IA generativa, IPFS, Blockchain e autenticação descentralizada. **O código atual ainda é um mockup estático e não implementa integrações reais** com APIs externas, banco de dados, autenticação, nem lógica de negócio. Os dados exibidos são simulados apenas para demonstração da interface.

- **Repositório:** https://github.com/Samas22/tablink
- **Autor:** Samas
- **Licença:** Há uma divergência a ser observada: o arquivo `LICENSE` contém o texto da **CC0** (dedicatória ao domínio público), mas `package.json` declara `MIT`. Consulte o autor antes de alterar qualquer um dos dois.

---

## Stack Tecnológica

| Tecnologia | Versão             | Uso                                     |
| ---------- | ------------------ | --------------------------------------- |
| Node.js    | lts/gallium (16.x) | Runtime esperado (definido em `.nvmrc`) |
| Next.js    | ^13.1.6            | Framework web (pages router)            |
| React      | ^18.2.0            | Biblioteca de UI                        |
| React DOM  | ^18.2.0            | Renderização                            |
| Prettier   | ^3.4.2 (dev)       | Formatação de código                    |

Dependências transitórias relevantes: `styled-jsx`, `postcss`, `nanoid`.

**Observações da stack atual:**

- Não há TypeScript configurado.
- Não há framework de estilos externo; estilos locais usam **CSS Modules** (`*.module.css`).
- Não há bibliotecas de testes.
- Não há linter além do Prettier.

---

## Estrutura de Diretórios

```
.
├── components/
│   └── Layout.js         # Layout compartilhado com navegação e rodapé
├── pages/
│   ├── index.js          # Painel inicial (dashboard) do mockup
│   ├── soberania.js      # Mockup de soberania digital / identidade
│   ├── cidadania.js      # Mockup de cidadania participativa
│   ├── conexoes.js       # Mockup de conexões humanas
│   ├── conhecimento.js   # Mockup de conhecimento descentralizado / IPFS
│   └── perfil.js         # Mockup de perfil do usuário
├── styles/
│   ├── Layout.module.css # Estilos do componente Layout
│   └── Pages.module.css  # Estilos compartilhados entre as páginas
├── next.config.js        # Configuração do Next.js (webpack customizado)
├── package.json          # Dependências e scripts npm
├── package-lock.json     # Lockfile npm
├── .nvmrc                # Versão do Node: lts/gallium
├── .editorconfig         # 2 espaços, indentação com espaços
├── .gitignore            # Ignora .next/ e node_modules/
├── .vscode/settings.json # Configura o VS Code para usar Prettier
├── prettierignore        # Ignora .next/ na formatação
├── README.md             # Documentação em português
├── LICENSE               # Texto CC0
└── AGENTS.md             # Este arquivo
```

**Nota:** O projeto ainda não possui diretórios para testes, API routes (`pages/api`), variáveis de ambiente (`.env`), nem CI/CD. Os componentes são estáticos e destinam-se a prototipação visual.

---

## Comandos de Build e Desenvolvimento

### Scripts disponíveis (`package.json`)

```bash
# Iniciar servidor de desenvolvimento (Next.js dev server)
npm run dev

# Gerar build de produção
npm run build

# Verificar formatação com Prettier
npm run lint:check

# Corrigir formatação com Prettier
npm run lint:fix
```

**Observações importantes:**

- Existe script de build de produção (`next build`) definido em `package.json`.
- Não existe script de testes.
- Antes de executar qualquer comando, instale as dependências com `npm install`.
- Antes de executar qualquer comando, instale as dependências com `npm install`.
- **Atenção:** em uma inspeção recente, a dependência `prettier` estava ausente de `node_modules` (mensagem `UNMET DEPENDENCY prettier@^3.4.2` no `npm list`). Se os comandos `lint:check` ou `lint:fix` falharem com `prettier: not found`, execute `npm install` para restaurar as dependências de desenvolvimento.

---

## Organização do Código

- O ponto de entrada visual da aplicação é `pages/index.js`, agora um dashboard com links para os módulos do mockup.
- As páginas compartilham o componente `Layout` (`components/Layout.js`), que fornece cabeçalho, navegação e rodapé.
- Os componentes seguem a abordagem funcional do React.
- Não há hooks customizados, contextos, utilities, nem camadas de serviço reais. Todos os dados são estáticos/mockados.

---

## Convenções de Código

### Formatação

- **Prettier** é a ferramenta oficial de formatação.
- **EditorConfig:** `indent_style = space`, `indent_size = 2`.
- O diretório `.next/` é excluído da formatação (`.gitignore`, `prettierignore`).

### Estilo observado no código existente

- Componentes React são funções JavaScript (approach funcional).
- Nomes de componentes e páginas usam inglês ou português de forma descritiva (ex.: `Layout`, `Soberania`, `Conhecimento`).
- Prefira manter o português brasileiro na documentação (`README.md`, `AGENTS.md`) e, quando possível, nomes significativos em inglês para novos identificadores de código (funções, componentes, variáveis), a menos que o projeto estabeleça outro padrão.

---

## Instruções de Teste

**O projeto não possui suite de testes configurada.** Não há dependências de teste (Jest, Vitest, Cypress, Playwright, etc.) e nenhum arquivo de teste.

Se for necessário adicionar testes:

- Para testes unitários de componentes React, **Jest** com **React Testing Library** é a stack mais comum no ecossistema Next.js.
- Para testes E2E, **Playwright** ou **Cypress** são as escolhas usuais.

---

## Configurações Específicas

### `next.config.js`

O projeto sobrescreve a configuração do webpack para evitar que o watcher do Next.js monitore diretórios do sistema Linux em modo de desenvolvimento:

```js
config.watchOptions = {
  ignored: ["**/.dbus/**", "**/.gvfs/**"],
};
```

Isso é particularmente útil em ambientes Linux/Termux para evitar alto consumo de CPU pelo watcher.

---

## Considerações de Segurança

- **Não há autenticação implementada no código atual**, apesar de mencionada na visão do README.
- **Não há variáveis de ambiente (`.env`)** no repositório. Se forem adicionadas no futuro (chaves de API, segredos), devem ser incluídas no `.gitignore`.
- **Não há Content Security Policy (CSP), headers de segurança, nem configurações de CORS** configuradas.
- O projeto está em estágio inicial; qualquer adição de integração com Blockchain, IPFS ou autenticação deve seguir as melhores práticas de segurança da Web3 e OAuth.

---

## Notas para Agentes

1. **Idioma:** A documentação do projeto é mantida em **português brasileiro**. Ao adicionar novas seções no `README.md` ou documentações similares, prefira o português.
2. **Mudanças mínimas:** O código atual é muito simples. Evite adicionar complexidade desnecessária. Prefira evoluções incrementais.
3. **Formatação:** Sempre execute `npm run lint:fix` antes de finalizar alterações para garantir que o código esteja formatado pelo Prettier.
4. **Node Version:** Use a versão indicada em `.nvmrc` (`lts/gallium`, Node 16.x) para compatibilidade.
5. **Licença:** Esteja ciente da divergência entre `LICENSE` (CC0) e `package.json` (MIT). Se for alterar uma delas, confirme com o autor qual deve prevalecer.
6. **Limpeza de código:** As funções `teste` e `teste2` foram removidas de `pages/index.js` durante a criação do mockup.
