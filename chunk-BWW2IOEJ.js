import"./chunk-4CLCTAJ7.js";var e={slug:"claude-code-guia-completo",title:"Guia completo do Claude Code: comandos, skills, MCPs e CLAUDE.md",description:"Como instalar e usar o Claude Code: principais comandos, gest\xE3o de sess\xF5es, CLAUDE.md, skills, MCPs, permiss\xF5es, hooks, subagentes e um fluxo de trabalho seguro.",pubDate:"2026-11-01T12:00:00.000Z",category:"programacao-com-ia",tags:["claude code","skills","mcp","claude.md","agentes de c\xF3digo"],relatedServices:["desenvolvimento-full-stack"],readingTime:9,wordCount:1618,source:"manual",author:"rafael-nunes",cover:"blog/covers/claude-code-guia-completo.png",coverAlt:"Capa do guia completo do Claude Code",quickAnswer:"O Claude Code \xE9 um agente de programa\xE7\xE3o da Anthropic que l\xEA o seu projeto, edita arquivos e executa comandos com a sua permiss\xE3o. Instale, entre na pasta do projeto e rode claude. Depois, use /init para criar o CLAUDE.md com as regras do projeto, /compact e /clear para gerenciar o contexto, skills para fluxos reutiliz\xE1veis, MCPs para conectar servi\xE7os externos, permiss\xF5es para definir o que ele pode fazer e /code-review para revisar as mudan\xE7as antes do commit.",faq:[{q:"Qual a diferen\xE7a entre skill e MCP?",a:"Uma skill ensina um procedimento ao agente, como um roteiro de deploy ou um padr\xE3o de revis\xE3o, usando um arquivo SKILL.md. Um MCP conecta o agente a ferramentas e dados externos, como GitHub, Notion ou um banco de dados. Muitas vezes, uma skill usa as ferramentas oferecidas por um MCP."},{q:"Comandos em .claude/commands ainda funcionam?",a:"Sim. A documenta\xE7\xE3o informa que os comandos personalizados foram incorporados \xE0s skills: um arquivo em .claude/commands/deploy.md e uma skill em .claude/skills/deploy/SKILL.md criam o mesmo /deploy. Para trabalhos novos, a recomenda\xE7\xE3o \xE9 preferir skills."},{q:"O Claude Code \xE9 gratuito?",a:"Ele exige uma conta com plano pago do Claude ou o uso da API, cobrado por consumo. Planos e limites mudam com frequ\xEAncia, ent\xE3o confira as condi\xE7\xF5es nas p\xE1ginas oficiais. O comando /usage mostra o custo da sess\xE3o e os limites do plano."}],headings:[{id:"instalacao-e-primeira-sessao",text:"Instala\xE7\xE3o e primeira sess\xE3o"},{id:"os-comandos-que-voce-vai-usar-todos-os-dias",text:"Os comandos que voc\xEA vai usar todos os dias"},{id:"como-gerenciar-sessoes",text:"Como gerenciar sess\xF5es"},{id:"claude-md-a-memoria-do-projeto",text:"CLAUDE.md: a mem\xF3ria do projeto"},{id:"skills-ensine-fluxos-reutilizaveis",text:"Skills: ensine fluxos reutiliz\xE1veis"},{id:"mcps-conecte-ferramentas-externas",text:"MCPs: conecte ferramentas externas"},{id:"permissoes-defina-os-limites",text:"Permiss\xF5es: defina os limites"},{id:"hooks-regras-que-sempre-rodam",text:"Hooks: regras que sempre rodam"},{id:"subagentes-tarefas-em-contexto-separado",text:"Subagentes: tarefas em contexto separado"},{id:"modelo-e-nivel-de-esforco",text:"Modelo e n\xEDvel de esfor\xE7o"},{id:"um-fluxo-de-trabalho-seguro",text:"Um fluxo de trabalho seguro"},{id:"erros-comuns",text:"Erros comuns"},{id:"conclusao",text:"Conclus\xE3o"}],html:`<p>O <strong>Claude Code</strong> \xE9 um agente de programa\xE7\xE3o que trabalha direto no seu projeto: l\xEA os arquivos, prop\xF5e e aplica altera\xE7\xF5es, roda testes e usa o Git, sempre dentro das permiss\xF5es que voc\xEA definir. Para quem aprende a configur\xE1-lo, ele deixa de ser um chat e vira parte do fluxo de desenvolvimento.</p>
<p>Este guia re\xFAne o que voc\xEA precisa para come\xE7ar e tirar proveito da ferramenta. As informa\xE7\xF5es foram conferidas na <a href="https://code.claude.com/docs/en/overview" target="_blank" rel="noopener noreferrer">documenta\xE7\xE3o oficial</a> em novembro de 2026. Como o produto muda r\xE1pido, use <code>/help</code> e a documenta\xE7\xE3o para confirmar detalhes da sua vers\xE3o.</p>
<h2 id="instalacao-e-primeira-sessao">Instala\xE7\xE3o e primeira sess\xE3o</h2>
<p>Segundo o <a href="https://code.claude.com/docs/en/quickstart" target="_blank" rel="noopener noreferrer">guia de in\xEDcio r\xE1pido</a>:</p>
<pre><code class="language-bash"># macOS, Linux e WSL
curl -fsSL https://claude.ai/install.sh | bash
</code></pre>
<pre><code class="language-powershell"># Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
</code></pre>
<p>Tamb\xE9m h\xE1 instala\xE7\xE3o por Homebrew (<code>brew install --cask claude-code</code>) e WinGet (<code>winget install Anthropic.ClaudeCode</code>). No Windows, a documenta\xE7\xE3o recomenda o Git for Windows, para que o agente possa usar o Bash.</p>
<p>Depois, entre na pasta do projeto e inicie:</p>
<pre><code class="language-bash">cd meu-projeto
claude --version
claude
</code></pre>
<p>Na primeira execu\xE7\xE3o, ser\xE1 pedido o login. Comece com um pedido simples, como &quot;explique a estrutura deste projeto&quot;.</p>
<h2 id="os-comandos-que-voce-vai-usar-todos-os-dias">Os comandos que voc\xEA vai usar todos os dias</h2>
<p>Dentro de uma sess\xE3o, digite <code>/</code> para ver os comandos dispon\xEDveis. Veja a <a href="https://code.claude.com/docs/en/commands" target="_blank" rel="noopener noreferrer">lista completa</a>. Os principais:</p>
<table>
<thead>
<tr>
<th>Comando</th>
<th>Para que serve</th>
</tr>
</thead>
<tbody><tr>
<td><code>/help</code></td>
<td>Mostra a ajuda e os comandos dispon\xEDveis</td>
</tr>
<tr>
<td><code>/init</code></td>
<td>Cria um CLAUDE.md para o projeto</td>
</tr>
<tr>
<td><code>/memory</code></td>
<td>Edita arquivos CLAUDE.md e a mem\xF3ria autom\xE1tica</td>
</tr>
<tr>
<td><code>/clear</code></td>
<td>Come\xE7a uma nova conversa, com contexto vazio</td>
</tr>
<tr>
<td><code>/compact</code></td>
<td>Resume a conversa para liberar contexto</td>
</tr>
<tr>
<td><code>/context</code></td>
<td>Mostra o uso do contexto em uma grade colorida</td>
</tr>
<tr>
<td><code>/resume</code></td>
<td>Retoma uma sess\xE3o anterior</td>
</tr>
<tr>
<td><code>/rewind</code></td>
<td>Volta a conversa ou o c\xF3digo para um ponto anterior</td>
</tr>
<tr>
<td><code>/model</code></td>
<td>Troca o modelo</td>
</tr>
<tr>
<td><code>/effort</code></td>
<td>Define o n\xEDvel de esfor\xE7o do modelo</td>
</tr>
<tr>
<td><code>/permissions</code></td>
<td>Gerencia as regras de permiss\xE3o</td>
</tr>
<tr>
<td><code>/mcp</code></td>
<td>Gerencia conex\xF5es MCP</td>
</tr>
<tr>
<td><code>/hooks</code></td>
<td>Mostra os hooks configurados</td>
</tr>
<tr>
<td><code>/skills</code></td>
<td>Lista as skills dispon\xEDveis</td>
</tr>
<tr>
<td><code>/diff</code></td>
<td>Revisa as altera\xE7\xF5es no diret\xF3rio de trabalho</td>
</tr>
<tr>
<td><code>/code-review</code></td>
<td>Revisa o diff em busca de bugs (<code>/review</code> \xE9 um alias)</td>
</tr>
<tr>
<td><code>/security-review</code></td>
<td>Analisa as altera\xE7\xF5es da branch em busca de vulnerabilidades</td>
</tr>
<tr>
<td><code>/usage</code></td>
<td>Mostra custo, limites do plano e estat\xEDsticas (<code>/cost</code> \xE9 um alias)</td>
</tr>
<tr>
<td><code>/plan</code></td>
<td>Entra no modo de planejamento</td>
</tr>
<tr>
<td><code>/doctor</code></td>
<td>Verifica a instala\xE7\xE3o e a configura\xE7\xE3o</td>
</tr>
</tbody></table>
<p>Guias antigos podem citar comandos que mudaram de nome ou foram removidos, ent\xE3o prefira sempre a lista da sua vers\xE3o.</p>
<h2 id="como-gerenciar-sessoes">Como gerenciar sess\xF5es</h2>
<p>Pelo terminal, segundo a <a href="https://code.claude.com/docs/en/cli-reference" target="_blank" rel="noopener noreferrer">refer\xEAncia da CLI</a>:</p>
<pre><code class="language-bash">claude -c                     # retoma a conversa mais recente da pasta
claude -r &quot;nome-da-sessao&quot;    # retoma uma sess\xE3o espec\xEDfica
claude -n &quot;refatorar-login&quot;   # d\xE1 um nome \xE0 sess\xE3o
claude -p &quot;explique este erro&quot;  # executa uma \xFAnica consulta e sai
</code></pre>
<p>O modo <code>-p</code> \xE9 \xFAtil em scripts e automa\xE7\xF5es.</p>
<p><strong>Dica sobre contexto:</strong> conversas longas acumulam informa\xE7\xE3o irrelevante. Use <code>/clear</code> ao mudar de tarefa e <code>/compact</code> para resumir sem perder o fio. Com <code>/context</code>, voc\xEA v\xEA o que est\xE1 ocupando espa\xE7o.</p>
<h2 id="claude-md-a-memoria-do-projeto">CLAUDE.md: a mem\xF3ria do projeto</h2>
<p>O CLAUDE.md \xE9 carregado no in\xEDcio das conversas e deve conter o que o agente precisa saber sempre. Rode <code>/init</code> para gerar uma primeira vers\xE3o e depois edite.</p>
<p><strong>Onde ficam</strong>, segundo a <a href="https://code.claude.com/docs/en/memory" target="_blank" rel="noopener noreferrer">documenta\xE7\xE3o de mem\xF3ria</a>:</p>
<ul>
<li><code>~/.claude/CLAUDE.md</code>: prefer\xEAncias pessoais para todos os projetos.</li>
<li><code>./CLAUDE.md</code> ou <code>./.claude/CLAUDE.md</code>: regras do projeto, compartilhadas com a equipe.</li>
<li><code>./CLAUDE.local.md</code>: prefer\xEAncias pessoais do projeto, que devem ficar no <code>.gitignore</code>.</li>
</ul>
<p><strong>Exemplo:</strong></p>
<pre><code class="language-markdown"># Loja API

## Comandos
- Testes: \`dotnet test\`
- Lint: \`dotnet format --verify-no-changes\`

## Conven\xE7\xF5es
- Regras de neg\xF3cio ficam em \`src/Application\`
- Toda consulta ao banco usa par\xE2metros
- N\xE3o altere migra\xE7\xF5es j\xE1 aplicadas

## Antes de concluir
- Rode os testes e informe o resultado
</code></pre>
<p><strong>Boas pr\xE1ticas:</strong></p>
<ul>
<li>Mantenha cada arquivo com <strong>menos de 200 linhas</strong>, como recomenda a documenta\xE7\xE3o.</li>
<li>Escreva instru\xE7\xF5es espec\xEDficas e verific\xE1veis.</li>
<li>Use <code>@caminho/arquivo.md</code> para importar outros arquivos.</li>
<li>Mova regras de \xE1reas espec\xEDficas para <code>.claude/rules/</code>.</li>
<li>Coloque procedimentos longos em skills, que s\xF3 s\xE3o carregadas quando necess\xE1rias.</li>
</ul>
<h2 id="skills-ensine-fluxos-reutilizaveis">Skills: ensine fluxos reutiliz\xE1veis</h2>
<p>Uma <a href="https://code.claude.com/docs/en/skills" target="_blank" rel="noopener noreferrer">skill</a> \xE9 uma pasta com um arquivo <code>SKILL.md</code>, com instru\xE7\xF5es que o agente carrega quando voc\xEA chama <code>/nome-da-skill</code> ou quando a descri\xE7\xE3o indica que ela \xE9 relevante.</p>
<p><strong>Onde criar:</strong></p>
<ul>
<li><code>.claude/skills/nome/SKILL.md</code>: no projeto, para compartilhar com a equipe via Git.</li>
<li><code>~/.claude/skills/nome/SKILL.md</code>: pessoal, para todos os seus projetos.</li>
</ul>
<p><strong>Exemplo</strong> em <code>.claude/skills/nova-release/SKILL.md</code>:</p>
<pre><code class="language-markdown">---
name: nova-release
description: Prepara uma nova vers\xE3o: testes, changelog e tag
disable-model-invocation: true
---

1. Rode a su\xEDte de testes e pare se algo falhar.
2. Liste os commits desde a \xFAltima tag.
3. Atualize o CHANGELOG.md, agrupando por tipo de mudan\xE7a.
4. Mostre o resultado e pe\xE7a confirma\xE7\xE3o antes de criar a tag.
</code></pre>
<p>Com <code>disable-model-invocation: true</code>, a skill s\xF3 roda quando voc\xEA a chama, o que \xE9 recomendado para a\xE7\xF5es com efeitos reais, como um deploy. Arquivos de apoio (<code>reference.md</code>, <code>scripts/</code>) podem ficar na mesma pasta.</p>
<p><strong>E os comandos personalizados?</strong> A documenta\xE7\xE3o informa que foram incorporados \xE0s skills. Arquivos em <code>.claude/commands/</code> continuam funcionando, mas, para trabalhos novos, a recomenda\xE7\xE3o \xE9 usar skills.</p>
<h2 id="mcps-conecte-ferramentas-externas">MCPs: conecte ferramentas externas</h2>
<p>O <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">Model Context Protocol</a> \xE9 um padr\xE3o aberto para conectar agentes de IA a ferramentas e dados. Com MCP, o Claude Code pode consultar issues, documentos e bancos de dados.</p>
<p><strong>Como adicionar</strong>, segundo a <a href="https://code.claude.com/docs/en/mcp" target="_blank" rel="noopener noreferrer">documenta\xE7\xE3o de MCP</a>:</p>
<pre><code class="language-bash"># Servidor remoto (HTTP, a op\xE7\xE3o recomendada)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# Servidor local (stdio): o -- separa as op\xE7\xF5es do comando do servidor
claude mcp add --env AIRTABLE_API_KEY=SUA_CHAVE --transport stdio airtable -- npx -y airtable-mcp-server

# Gerenciar
claude mcp list
claude mcp get notion
claude mcp remove notion
</code></pre>
<p>Dentro da sess\xE3o, <code>/mcp</code> mostra o estado das conex\xF5es e cuida da autentica\xE7\xE3o.</p>
<p><strong>Escopos:</strong></p>
<table>
<thead>
<tr>
<th>Escopo</th>
<th>Onde fica</th>
<th>Quem usa</th>
</tr>
</thead>
<tbody><tr>
<td><code>local</code> (padr\xE3o)</td>
<td><code>~/.claude.json</code></td>
<td>S\xF3 voc\xEA, neste projeto</td>
</tr>
<tr>
<td><code>project</code></td>
<td><code>.mcp.json</code> na raiz</td>
<td>A equipe, via Git</td>
</tr>
<tr>
<td><code>user</code></td>
<td><code>~/.claude.json</code></td>
<td>S\xF3 voc\xEA, em todos os projetos</td>
</tr>
</tbody></table>
<p>Use <code>--scope project</code> para compartilhar. Exemplo de <code>.mcp.json</code>:</p>
<pre><code class="language-json">{
  &quot;mcpServers&quot;: {
    &quot;documentacao&quot;: {
      &quot;type&quot;: &quot;http&quot;,
      &quot;url&quot;: &quot;https://example.com/mcp&quot;
    }
  }
}
</code></pre>
<p><strong>Cuidado:</strong> instale apenas servidores de fontes confi\xE1veis. Um MCP pode ler dados e executar a\xE7\xF5es em seu nome, e conte\xFAdos externos podem conter instru\xE7\xF5es maliciosas. Nunca coloque tokens diretamente em um <code>.mcp.json</code> versionado.</p>
<h2 id="permissoes-defina-os-limites">Permiss\xF5es: defina os limites</h2>
<p>As <a href="https://code.claude.com/docs/en/settings" target="_blank" rel="noopener noreferrer">configura\xE7\xF5es</a> ficam em:</p>
<ul>
<li><code>~/.claude/settings.json</code>: pessoais.</li>
<li><code>.claude/settings.json</code>: do projeto, compartilhadas.</li>
<li><code>.claude/settings.local.json</code>: pessoais no projeto.</li>
</ul>
<p>Exemplo de regras que liberam comandos seguros e protegem segredos:</p>
<pre><code class="language-json">{
  &quot;permissions&quot;: {
    &quot;allow&quot;: [
      &quot;Bash(npm run lint)&quot;,
      &quot;Bash(npm run test *)&quot;
    ],
    &quot;deny&quot;: [
      &quot;Read(./.env)&quot;,
      &quot;Read(./.env.*)&quot;
    ]
  }
}
</code></pre>
<h2 id="hooks-regras-que-sempre-rodam">Hooks: regras que sempre rodam</h2>
<p>Instru\xE7\xF5es no CLAUDE.md s\xE3o orienta\xE7\xF5es. Quando algo <strong>precisa</strong> acontecer sempre, use <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" rel="noopener noreferrer">hooks</a>: comandos que o Claude Code executa em pontos espec\xEDficos do ciclo de trabalho, como <code>PreToolUse</code>, <code>PostToolUse</code>, <code>SessionStart</code> e <code>Stop</code>.</p>
<p>Exemplo que formata cada arquivo editado:</p>
<pre><code class="language-json">{
  &quot;hooks&quot;: {
    &quot;PostToolUse&quot;: [
      {
        &quot;matcher&quot;: &quot;Edit|Write&quot;,
        &quot;hooks&quot;: [
          {
            &quot;type&quot;: &quot;command&quot;,
            &quot;command&quot;: &quot;jq -r &#39;.tool_input.file_path&#39; | xargs npx prettier --write&quot;
          }
        ]
      }
    ]
  }
}
</code></pre>
<p>Em um hook <code>PreToolUse</code>, o c\xF3digo de sa\xEDda 2 bloqueia a a\xE7\xE3o, o que serve, por exemplo, para proteger arquivos sens\xEDveis.</p>
<h2 id="subagentes-tarefas-em-contexto-separado">Subagentes: tarefas em contexto separado</h2>
<p><a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener noreferrer">Subagentes</a> s\xE3o assistentes especializados com contexto pr\xF3prio, o que mant\xE9m a conversa principal limpa. Eles ficam em <code>.claude/agents/</code> (projeto) ou <code>~/.claude/agents/</code> (pessoal):</p>
<pre><code class="language-markdown">---
name: revisor
description: Revisa c\xF3digo em busca de bugs e problemas de qualidade
tools: Read, Glob, Grep
---

Revise as altera\xE7\xF5es indicadas e liste os problemas por gravidade,
com arquivo, linha e sugest\xE3o de corre\xE7\xE3o. N\xE3o edite arquivos.
</code></pre>
<p>Limitar <code>tools</code> a ferramentas de leitura garante que o revisor n\xE3o altere nada.</p>
<h2 id="modelo-e-nivel-de-esforco">Modelo e n\xEDvel de esfor\xE7o</h2>
<p>Use <code>/model</code> para escolher o modelo e <code>/effort</code> para definir o esfor\xE7o (<code>low</code>, <code>medium</code>, <code>high</code>, <code>xhigh</code> ou <code>max</code>, conforme o modelo). A documenta\xE7\xE3o atual trata o assunto por n\xEDveis de esfor\xE7o, e n\xE3o por palavras-chave. Na pr\xE1tica:</p>
<ul>
<li><strong>Esfor\xE7o menor:</strong> tarefas simples e repetitivas, com menos custo.</li>
<li><strong>Esfor\xE7o maior:</strong> arquitetura, bugs dif\xEDceis e refatora\xE7\xF5es amplas.</li>
</ul>
<h2 id="um-fluxo-de-trabalho-seguro">Um fluxo de trabalho seguro</h2>
<ol>
<li><strong>Comece limpo:</strong> crie uma branch e use <code>/clear</code> ao trocar de tarefa.</li>
<li><strong>Planeje:</strong> use <code>/plan</code> em tarefas maiores e revise o plano antes de executar.</li>
<li><strong>Pe\xE7a com contexto:</strong> objetivo, arquivos envolvidos e como validar.</li>
<li><strong>Valide:</strong> pe\xE7a que rode os testes e informe o resultado.</li>
<li><strong>Revise:</strong> use <code>/diff</code>, <code>/code-review</code> e, em mudan\xE7as sens\xEDveis, <code>/security-review</code>.</li>
<li><strong>Leia antes do commit:</strong> a responsabilidade pelo c\xF3digo continua sendo sua.</li>
</ol>
<p>Para trabalhar em tarefas paralelas sem conflito, use <code>git worktree</code> e abra uma sess\xE3o em cada pasta.</p>
<h2 id="erros-comuns">Erros comuns</h2>
<ul>
<li><strong>CLAUDE.md gigante:</strong> quanto maior, menor a chance de tudo ser seguido. Corte e mova para skills.</li>
<li><strong>Liberar tudo por comodidade:</strong> mantenha aprova\xE7\xE3o para comandos destrutivos.</li>
<li><strong>Nunca limpar o contexto:</strong> a qualidade cai em conversas longas e sem foco.</li>
<li><strong>Aceitar sem revisar:</strong> c\xF3digo gerado pode ter falhas. Veja os <a href="/rafaelnunes-/blog/riscos-de-seguranca-do-codigo-gerado-por-ia">riscos de seguran\xE7a do c\xF3digo gerado por IA</a>.</li>
<li><strong>Instalar MCPs desconhecidos:</strong> avalie a fonte e as permiss\xF5es.</li>
</ul>
<h2 id="conclusao">Conclus\xE3o</h2>
<p>O Claude Code rende mais quando recebe boa configura\xE7\xE3o: um CLAUDE.md enxuto, skills para fluxos repetidos, MCPs para as ferramentas certas, permiss\xF5es claras e hooks para o que n\xE3o pode falhar. Comece com <code>/init</code>, adicione uma coisa de cada vez e ajuste conforme o uso. Para comparar com outras op\xE7\xF5es, veja <a href="/rafaelnunes-/blog/cursor-vs-github-copilot-vs-claude-code">Cursor vs GitHub Copilot vs Claude Code</a>.</p>
`};export{e as post};
