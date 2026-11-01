import"./chunk-4CLCTAJ7.js";var e={slug:"riscos-de-seguranca-do-codigo-gerado-por-ia",title:"C\xF3digo gerado por IA: riscos de seguran\xE7a que ningu\xE9m te conta",description:"As falhas de seguran\xE7a mais comuns em c\xF3digo gerado por IA, o que dizem estudos como o da Veracode, e um checklist para revisar antes de colocar em produ\xE7\xE3o.",pubDate:"2026-10-31T09:00:00.000Z",category:"programacao-com-ia",tags:["seguran\xE7a","c\xF3digo gerado por ia","owasp","desenvolvimento","vulnerabilidades"],relatedServices:["desenvolvimento-full-stack","apis-e-integracoes"],readingTime:5,wordCount:829,source:"manual",author:"rafael-nunes",cover:"blog/covers/riscos-de-seguranca-do-codigo-gerado-por-ia.png",coverAlt:"Capa do artigo sobre riscos de seguran\xE7a do c\xF3digo gerado por IA",quickAnswer:"C\xF3digo gerado por IA pode funcionar e, ainda assim, ser inseguro. Em um estudo de 2025, a Veracode testou mais de 100 modelos em 80 tarefas e encontrou falhas de seguran\xE7a em 45% dos casos. Os problemas mais comuns s\xE3o inje\xE7\xE3o de SQL e de comandos, valida\xE7\xE3o de entrada ausente, segredos expostos no c\xF3digo, autentica\xE7\xE3o e autoriza\xE7\xE3o fracas, depend\xEAncias inexistentes ou vulner\xE1veis e configura\xE7\xF5es inseguras. A solu\xE7\xE3o \xE9 tratar todo c\xF3digo gerado como c\xF3digo de terceiros: revisar, testar, usar ferramentas de an\xE1lise e seguir refer\xEAncias como o OWASP Top 10.",faq:[{q:"Os modelos mais novos geram c\xF3digo mais seguro?",a:"Os modelos melhoraram em funcionalidade, mas o relat\xF3rio da Veracode apontou que o desempenho em seguran\xE7a n\xE3o acompanhou essa evolu\xE7\xE3o no per\xEDodo analisado. Pedir explicitamente pr\xE1ticas seguras ajuda, mas n\xE3o substitui revis\xE3o e testes."},{q:"O que \xE9 package hallucination?",a:"\xC9 quando a IA sugere importar uma biblioteca que n\xE3o existe. Criminosos podem registrar pacotes com esses nomes inventados contendo c\xF3digo malicioso, e quem instala sem verificar pode comprometer o sistema."},{q:"Ferramentas autom\xE1ticas resolvem o problema?",a:"Ajudam muito. An\xE1lise est\xE1tica (SAST), varredura de depend\xEAncias e detec\xE7\xE3o de segredos encontram muitos problemas automaticamente. Mas falhas de l\xF3gica e de autoriza\xE7\xE3o costumam exigir revis\xE3o humana e testes espec\xEDficos."}],headings:[{id:"o-que-os-estudos-mostram",text:"O que os estudos mostram"},{id:"as-falhas-mais-comuns",text:"As falhas mais comuns"},{id:"por-que-isso-acontece",text:"Por que isso acontece"},{id:"checklist-antes-de-ir-para-producao",text:"Checklist antes de ir para produ\xE7\xE3o"},{id:"e-nos-aplicativos-criados-sem-programar",text:"E nos aplicativos criados sem programar?"},{id:"conclusao",text:"Conclus\xE3o"}],html:`<p>Assistentes de c\xF3digo aceleram o desenvolvimento de forma impressionante. O problema \xE9 que <strong>c\xF3digo que funciona n\xE3o \xE9 o mesmo que c\xF3digo seguro</strong>. A IA aprende com enormes volumes de c\xF3digo p\xFAblico \u2014 incluindo c\xF3digo com falhas \u2014 e tende a gerar a solu\xE7\xE3o mais comum, n\xE3o necessariamente a mais segura. Quem coloca c\xF3digo gerado em produ\xE7\xE3o sem revis\xE3o est\xE1 assumindo riscos que muitas vezes n\xE3o enxerga.</p>
<h2 id="o-que-os-estudos-mostram">O que os estudos mostram</h2>
<p>O <a href="https://www.veracode.com/" target="_blank" rel="noopener noreferrer">relat\xF3rio de seguran\xE7a de c\xF3digo gerado por IA de 2025 da Veracode</a> avaliou mais de 100 modelos de linguagem em 80 tarefas de programa\xE7\xE3o. Os principais achados:</p>
<ul>
<li>Em <strong>45%</strong> dos casos, o c\xF3digo gerado introduziu vulnerabilidades de seguran\xE7a.</li>
<li>Quando havia uma forma segura e uma insegura de resolver a tarefa, os modelos escolheram a insegura em cerca de 45% das vezes.</li>
<li>O desempenho em seguran\xE7a <strong>n\xE3o melhorou</strong> no mesmo ritmo que a capacidade de gerar c\xF3digo funcional.</li>
</ul>
<p>O n\xFAmero vem de um conjunto controlado de tarefas, n\xE3o de todo o c\xF3digo escrito com IA no mundo \u2014 mas \xE9 um alerta claro de que a revis\xE3o \xE9 obrigat\xF3ria.</p>
<h2 id="as-falhas-mais-comuns">As falhas mais comuns</h2>
<h3 id="1-injecao-sql-comandos-scripts">1. Inje\xE7\xE3o (SQL, comandos, scripts)</h3>
<p>A IA frequentemente monta consultas concatenando texto do usu\xE1rio diretamente:</p>
<pre><code class="language-python"># Inseguro: o valor do usu\xE1rio vai direto na consulta
cursor.execute(&quot;SELECT * FROM usuarios WHERE email = &#39;&quot; + email + &quot;&#39;&quot;)

# Seguro: consulta parametrizada
cursor.execute(&quot;SELECT * FROM usuarios WHERE email = %s&quot;, (email,))
</code></pre>
<p>O mesmo vale para comandos do sistema operacional e para conte\xFAdo exibido em p\xE1ginas web (XSS).</p>
<h3 id="2-validacao-de-entrada-ausente">2. Valida\xE7\xE3o de entrada ausente</h3>
<p>C\xF3digo gerado costuma confiar nos dados recebidos: n\xE3o verifica tamanho, formato, tipo ou valores permitidos.</p>
<h3 id="3-segredos-no-codigo">3. Segredos no c\xF3digo</h3>
<p>Chaves de API, senhas e tokens escritos diretamente no c\xF3digo-fonte, que acabam em reposit\xF3rios e aplicativos publicados. Segredos devem ficar em vari\xE1veis de ambiente ou cofres de segredos.</p>
<h3 id="4-autenticacao-e-autorizacao-fracas">4. Autentica\xE7\xE3o e autoriza\xE7\xE3o fracas</h3>
<p>\xC9 comum a IA criar rotas que verificam se o usu\xE1rio est\xE1 logado, mas n\xE3o se ele tem <strong>permiss\xE3o</strong> para acessar aquele recurso espec\xEDfico \u2014 permitindo que um cliente veja os dados de outro s\xF3 trocando um n\xFAmero na URL.</p>
<h3 id="5-dependencias-inventadas-ou-vulneraveis">5. Depend\xEAncias inventadas ou vulner\xE1veis</h3>
<p>Modelos \xE0s vezes sugerem bibliotecas que n\xE3o existem (<em>package hallucination</em>). Atacantes registram pacotes com esses nomes contendo c\xF3digo malicioso. Tamb\xE9m \xE9 comum a sugest\xE3o de vers\xF5es antigas, com vulnerabilidades conhecidas.</p>
<h3 id="6-criptografia-ultrapassada">6. Criptografia ultrapassada</h3>
<p>Uso de algoritmos fracos para senhas, gera\xE7\xE3o de n\xFAmeros aleat\xF3rios inadequada para seguran\xE7a e chaves fixas no c\xF3digo.</p>
<h3 id="7-configuracoes-inseguras">7. Configura\xE7\xF5es inseguras</h3>
<p>CORS liberado para qualquer origem, modo de depura\xE7\xE3o ativado em produ\xE7\xE3o, mensagens de erro que exp\xF5em detalhes internos e permiss\xF5es amplas demais em bancos de dados e nuvem.</p>
<h2 id="por-que-isso-acontece">Por que isso acontece</h2>
<ul>
<li><strong>Dados de treinamento:</strong> a IA aprendeu com c\xF3digo p\xFAblico, que inclui muitos exemplos inseguros.</li>
<li><strong>Foco em &quot;funcionar&quot;:</strong> o pedido t\xEDpico \xE9 &quot;fa\xE7a funcionar&quot;, n\xE3o &quot;fa\xE7a de forma segura&quot;.</li>
<li><strong>Falta de contexto:</strong> a IA n\xE3o conhece as regras de acesso, os dados sens\xEDveis e as amea\xE7as do seu sistema.</li>
<li><strong>Confian\xE7a excessiva:</strong> o c\xF3digo parece profissional, e o desenvolvedor revisa menos.</li>
</ul>
<h2 id="checklist-antes-de-ir-para-producao">Checklist antes de ir para produ\xE7\xE3o</h2>
<h3 id="no-pedido">No pedido</h3>
<ul>
<li><input disabled="" type="checkbox"> Pe\xE7a explicitamente pr\xE1ticas seguras: consultas parametrizadas, valida\xE7\xE3o de entrada, tratamento de erros sem expor detalhes.</li>
<li><input disabled="" type="checkbox"> Informe o contexto: quem pode acessar o qu\xEA, quais dados s\xE3o sens\xEDveis.</li>
</ul>
<h3 id="na-revisao">Na revis\xE3o</h3>
<ul>
<li><input disabled="" type="checkbox"> Leia e entenda <strong>cada linha</strong> antes de aceitar.</li>
<li><input disabled="" type="checkbox"> Verifique <strong>autoriza\xE7\xE3o</strong>, n\xE3o apenas autentica\xE7\xE3o, em cada rota e opera\xE7\xE3o.</li>
<li><input disabled="" type="checkbox"> Procure <strong>segredos</strong> no c\xF3digo.</li>
<li><input disabled="" type="checkbox"> Confira se <strong>todas as depend\xEAncias existem</strong>, s\xE3o mantidas e est\xE3o atualizadas.</li>
<li><input disabled="" type="checkbox"> Use as refer\xEAncias do <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer">OWASP Top 10</a> como guia.</li>
</ul>
<h3 id="nas-ferramentas">Nas ferramentas</h3>
<ul>
<li><input disabled="" type="checkbox"> <strong>An\xE1lise est\xE1tica (SAST)</strong> no reposit\xF3rio.</li>
<li><input disabled="" type="checkbox"> <strong>Varredura de depend\xEAncias</strong> (alertas do GitHub, ferramentas de composi\xE7\xE3o de software).</li>
<li><input disabled="" type="checkbox"> <strong>Detec\xE7\xE3o de segredos</strong> antes do commit.</li>
<li><input disabled="" type="checkbox"> <strong>Testes automatizados</strong>, incluindo casos de abuso (entradas inv\xE1lidas, acesso indevido).</li>
</ul>
<h3 id="no-processo">No processo</h3>
<ul>
<li><input disabled="" type="checkbox"> <strong>Revis\xE3o de c\xF3digo por outra pessoa</strong> para mudan\xE7as relevantes.</li>
<li><input disabled="" type="checkbox"> <strong>Permiss\xF5es m\xEDnimas</strong> para aplica\xE7\xF5es, bancos e servi\xE7os de nuvem.</li>
<li><input disabled="" type="checkbox"> <strong>Monitoramento e registros</strong> para detectar comportamentos anormais.</li>
</ul>
<h2 id="e-nos-aplicativos-criados-sem-programar">E nos aplicativos criados sem programar?</h2>
<p>Plataformas que geram aplicativos inteiros a partir de texto tamb\xE9m podem produzir falhas: bancos de dados acess\xEDveis sem login, regras de acesso mal configuradas e chaves expostas no navegador. Se o seu app tem dados de usu\xE1rios, revise as regras de acesso da plataforma e considere uma avalia\xE7\xE3o t\xE9cnica. Veja <a href="/blog/como-criar-app-sem-saber-programar-com-ia">como criar um app sem saber programar</a>.</p>
<h2 id="conclusao">Conclus\xE3o</h2>
<p>A IA \xE9 uma ferramenta poderosa para escrever c\xF3digo, mas n\xE3o \xE9 uma especialista em seguran\xE7a confi\xE1vel. Trate todo c\xF3digo gerado como c\xF3digo de um desenvolvedor desconhecido: revise, teste, use ferramentas de an\xE1lise e siga boas pr\xE1ticas. A velocidade que a IA traz s\xF3 vale a pena se n\xE3o vier acompanhada de vulnerabilidades que custam muito mais caro depois.</p>
`};export{e as post};
