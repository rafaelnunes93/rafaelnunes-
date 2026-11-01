---
title: "Guia completo do Claude Code: comandos, skills, MCPs e CLAUDE.md"
description: "Como instalar e usar o Claude Code: principais comandos, gestão de sessões, CLAUDE.md, skills, MCPs, permissões, hooks, subagentes e um fluxo de trabalho seguro."
pubDate: 2026-11-01T09:00:00-03:00
category: programacao-com-ia
tags: ["claude code", "skills", "mcp", "claude.md", "agentes de código"]
kicker: "Guia prático"
cover: blog/covers/claude-code-guia-completo.png
coverAlt: "Capa do guia completo do Claude Code"
quickAnswer: "O Claude Code é um agente de programação da Anthropic que lê o seu projeto, edita arquivos e executa comandos com a sua permissão. Instale, entre na pasta do projeto e rode claude. Depois, use /init para criar o CLAUDE.md com as regras do projeto, /compact e /clear para gerenciar o contexto, skills para fluxos reutilizáveis, MCPs para conectar serviços externos, permissões para definir o que ele pode fazer e /code-review para revisar as mudanças antes do commit."
faq:
  - q: "Qual a diferença entre skill e MCP?"
    a: "Uma skill ensina um procedimento ao agente, como um roteiro de deploy ou um padrão de revisão, usando um arquivo SKILL.md. Um MCP conecta o agente a ferramentas e dados externos, como GitHub, Notion ou um banco de dados. Muitas vezes, uma skill usa as ferramentas oferecidas por um MCP."
  - q: "Comandos em .claude/commands ainda funcionam?"
    a: "Sim. A documentação informa que os comandos personalizados foram incorporados às skills: um arquivo em .claude/commands/deploy.md e uma skill em .claude/skills/deploy/SKILL.md criam o mesmo /deploy. Para trabalhos novos, a recomendação é preferir skills."
  - q: "O Claude Code é gratuito?"
    a: "Ele exige uma conta com plano pago do Claude ou o uso da API, cobrado por consumo. Planos e limites mudam com frequência, então confira as condições nas páginas oficiais. O comando /usage mostra o custo da sessão e os limites do plano."
relatedServices: ["desenvolvimento-full-stack"]
source: manual
---

O **Claude Code** é um agente de programação que trabalha direto no seu projeto: lê os arquivos, propõe e aplica alterações, roda testes e usa o Git, sempre dentro das permissões que você definir. Para quem aprende a configurá-lo, ele deixa de ser um chat e vira parte do fluxo de desenvolvimento.

Este guia reúne o que você precisa para começar e tirar proveito da ferramenta. As informações foram conferidas na [documentação oficial](https://code.claude.com/docs/en/overview) em novembro de 2026. Como o produto muda rápido, use `/help` e a documentação para confirmar detalhes da sua versão.

## Instalação e primeira sessão

Segundo o [guia de início rápido](https://code.claude.com/docs/en/quickstart):

```bash
# macOS, Linux e WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
```

Também há instalação por Homebrew (`brew install --cask claude-code`) e WinGet (`winget install Anthropic.ClaudeCode`). No Windows, a documentação recomenda o Git for Windows, para que o agente possa usar o Bash.

Depois, entre na pasta do projeto e inicie:

```bash
cd meu-projeto
claude --version
claude
```

Na primeira execução, será pedido o login. Comece com um pedido simples, como "explique a estrutura deste projeto".

## Os comandos que você vai usar todos os dias

Dentro de uma sessão, digite `/` para ver os comandos disponíveis. Veja a [lista completa](https://code.claude.com/docs/en/commands). Os principais:

| Comando | Para que serve |
|---|---|
| `/help` | Mostra a ajuda e os comandos disponíveis |
| `/init` | Cria um CLAUDE.md para o projeto |
| `/memory` | Edita arquivos CLAUDE.md e a memória automática |
| `/clear` | Começa uma nova conversa, com contexto vazio |
| `/compact` | Resume a conversa para liberar contexto |
| `/context` | Mostra o uso do contexto em uma grade colorida |
| `/resume` | Retoma uma sessão anterior |
| `/rewind` | Volta a conversa ou o código para um ponto anterior |
| `/model` | Troca o modelo |
| `/effort` | Define o nível de esforço do modelo |
| `/permissions` | Gerencia as regras de permissão |
| `/mcp` | Gerencia conexões MCP |
| `/hooks` | Mostra os hooks configurados |
| `/skills` | Lista as skills disponíveis |
| `/diff` | Revisa as alterações no diretório de trabalho |
| `/code-review` | Revisa o diff em busca de bugs (`/review` é um alias) |
| `/security-review` | Analisa as alterações da branch em busca de vulnerabilidades |
| `/usage` | Mostra custo, limites do plano e estatísticas (`/cost` é um alias) |
| `/plan` | Entra no modo de planejamento |
| `/doctor` | Verifica a instalação e a configuração |

Guias antigos podem citar comandos que mudaram de nome ou foram removidos, então prefira sempre a lista da sua versão.

## Como gerenciar sessões

Pelo terminal, segundo a [referência da CLI](https://code.claude.com/docs/en/cli-reference):

```bash
claude -c                     # retoma a conversa mais recente da pasta
claude -r "nome-da-sessao"    # retoma uma sessão específica
claude -n "refatorar-login"   # dá um nome à sessão
claude -p "explique este erro"  # executa uma única consulta e sai
```

O modo `-p` é útil em scripts e automações.

**Dica sobre contexto:** conversas longas acumulam informação irrelevante. Use `/clear` ao mudar de tarefa e `/compact` para resumir sem perder o fio. Com `/context`, você vê o que está ocupando espaço.

## CLAUDE.md: a memória do projeto

O CLAUDE.md é carregado no início das conversas e deve conter o que o agente precisa saber sempre. Rode `/init` para gerar uma primeira versão e depois edite.

**Onde ficam**, segundo a [documentação de memória](https://code.claude.com/docs/en/memory):

- `~/.claude/CLAUDE.md`: preferências pessoais para todos os projetos.
- `./CLAUDE.md` ou `./.claude/CLAUDE.md`: regras do projeto, compartilhadas com a equipe.
- `./CLAUDE.local.md`: preferências pessoais do projeto, que devem ficar no `.gitignore`.

**Exemplo:**

```markdown
# Loja API

## Comandos
- Testes: `dotnet test`
- Lint: `dotnet format --verify-no-changes`

## Convenções
- Regras de negócio ficam em `src/Application`
- Toda consulta ao banco usa parâmetros
- Não altere migrações já aplicadas

## Antes de concluir
- Rode os testes e informe o resultado
```

**Boas práticas:**

- Mantenha cada arquivo com **menos de 200 linhas**, como recomenda a documentação.
- Escreva instruções específicas e verificáveis.
- Use `@caminho/arquivo.md` para importar outros arquivos.
- Mova regras de áreas específicas para `.claude/rules/`.
- Coloque procedimentos longos em skills, que só são carregadas quando necessárias.

## Skills: ensine fluxos reutilizáveis

Uma [skill](https://code.claude.com/docs/en/skills) é uma pasta com um arquivo `SKILL.md`, com instruções que o agente carrega quando você chama `/nome-da-skill` ou quando a descrição indica que ela é relevante.

**Onde criar:**

- `.claude/skills/nome/SKILL.md`: no projeto, para compartilhar com a equipe via Git.
- `~/.claude/skills/nome/SKILL.md`: pessoal, para todos os seus projetos.

**Exemplo** em `.claude/skills/nova-release/SKILL.md`:

```markdown
---
name: nova-release
description: Prepara uma nova versão: testes, changelog e tag
disable-model-invocation: true
---

1. Rode a suíte de testes e pare se algo falhar.
2. Liste os commits desde a última tag.
3. Atualize o CHANGELOG.md, agrupando por tipo de mudança.
4. Mostre o resultado e peça confirmação antes de criar a tag.
```

Com `disable-model-invocation: true`, a skill só roda quando você a chama, o que é recomendado para ações com efeitos reais, como um deploy. Arquivos de apoio (`reference.md`, `scripts/`) podem ficar na mesma pasta.

**E os comandos personalizados?** A documentação informa que foram incorporados às skills. Arquivos em `.claude/commands/` continuam funcionando, mas, para trabalhos novos, a recomendação é usar skills.

## MCPs: conecte ferramentas externas

O [Model Context Protocol](https://modelcontextprotocol.io/) é um padrão aberto para conectar agentes de IA a ferramentas e dados. Com MCP, o Claude Code pode consultar issues, documentos e bancos de dados.

**Como adicionar**, segundo a [documentação de MCP](https://code.claude.com/docs/en/mcp):

```bash
# Servidor remoto (HTTP, a opção recomendada)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# Servidor local (stdio): o -- separa as opções do comando do servidor
claude mcp add --env AIRTABLE_API_KEY=SUA_CHAVE --transport stdio airtable -- npx -y airtable-mcp-server

# Gerenciar
claude mcp list
claude mcp get notion
claude mcp remove notion
```

Dentro da sessão, `/mcp` mostra o estado das conexões e cuida da autenticação.

**Escopos:**

| Escopo | Onde fica | Quem usa |
|---|---|---|
| `local` (padrão) | `~/.claude.json` | Só você, neste projeto |
| `project` | `.mcp.json` na raiz | A equipe, via Git |
| `user` | `~/.claude.json` | Só você, em todos os projetos |

Use `--scope project` para compartilhar. Exemplo de `.mcp.json`:

```json
{
  "mcpServers": {
    "documentacao": {
      "type": "http",
      "url": "https://example.com/mcp"
    }
  }
}
```

**Cuidado:** instale apenas servidores de fontes confiáveis. Um MCP pode ler dados e executar ações em seu nome, e conteúdos externos podem conter instruções maliciosas. Nunca coloque tokens diretamente em um `.mcp.json` versionado.

## Permissões: defina os limites

As [configurações](https://code.claude.com/docs/en/settings) ficam em:

- `~/.claude/settings.json`: pessoais.
- `.claude/settings.json`: do projeto, compartilhadas.
- `.claude/settings.local.json`: pessoais no projeto.

Exemplo de regras que liberam comandos seguros e protegem segredos:

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)"
    ]
  }
}
```

## Hooks: regras que sempre rodam

Instruções no CLAUDE.md são orientações. Quando algo **precisa** acontecer sempre, use [hooks](https://code.claude.com/docs/en/hooks-guide): comandos que o Claude Code executa em pontos específicos do ciclo de trabalho, como `PreToolUse`, `PostToolUse`, `SessionStart` e `Stop`.

Exemplo que formata cada arquivo editado:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write"
          }
        ]
      }
    ]
  }
}
```

Em um hook `PreToolUse`, o código de saída 2 bloqueia a ação, o que serve, por exemplo, para proteger arquivos sensíveis.

## Subagentes: tarefas em contexto separado

[Subagentes](https://code.claude.com/docs/en/sub-agents) são assistentes especializados com contexto próprio, o que mantém a conversa principal limpa. Eles ficam em `.claude/agents/` (projeto) ou `~/.claude/agents/` (pessoal):

```markdown
---
name: revisor
description: Revisa código em busca de bugs e problemas de qualidade
tools: Read, Glob, Grep
---

Revise as alterações indicadas e liste os problemas por gravidade,
com arquivo, linha e sugestão de correção. Não edite arquivos.
```

Limitar `tools` a ferramentas de leitura garante que o revisor não altere nada.

## Modelo e nível de esforço

Use `/model` para escolher o modelo e `/effort` para definir o esforço (`low`, `medium`, `high`, `xhigh` ou `max`, conforme o modelo). A documentação atual trata o assunto por níveis de esforço, e não por palavras-chave. Na prática:

- **Esforço menor:** tarefas simples e repetitivas, com menos custo.
- **Esforço maior:** arquitetura, bugs difíceis e refatorações amplas.

## Um fluxo de trabalho seguro

1. **Comece limpo:** crie uma branch e use `/clear` ao trocar de tarefa.
2. **Planeje:** use `/plan` em tarefas maiores e revise o plano antes de executar.
3. **Peça com contexto:** objetivo, arquivos envolvidos e como validar.
4. **Valide:** peça que rode os testes e informe o resultado.
5. **Revise:** use `/diff`, `/code-review` e, em mudanças sensíveis, `/security-review`.
6. **Leia antes do commit:** a responsabilidade pelo código continua sendo sua.

Para trabalhar em tarefas paralelas sem conflito, use `git worktree` e abra uma sessão em cada pasta.

## Erros comuns

- **CLAUDE.md gigante:** quanto maior, menor a chance de tudo ser seguido. Corte e mova para skills.
- **Liberar tudo por comodidade:** mantenha aprovação para comandos destrutivos.
- **Nunca limpar o contexto:** a qualidade cai em conversas longas e sem foco.
- **Aceitar sem revisar:** código gerado pode ter falhas. Veja os [riscos de segurança do código gerado por IA](/blog/riscos-de-seguranca-do-codigo-gerado-por-ia).
- **Instalar MCPs desconhecidos:** avalie a fonte e as permissões.

## Conclusão

O Claude Code rende mais quando recebe boa configuração: um CLAUDE.md enxuto, skills para fluxos repetidos, MCPs para as ferramentas certas, permissões claras e hooks para o que não pode falhar. Comece com `/init`, adicione uma coisa de cada vez e ajuste conforme o uso. Para comparar com outras opções, veja [Cursor vs GitHub Copilot vs Claude Code](/blog/cursor-vs-github-copilot-vs-claude-code).
