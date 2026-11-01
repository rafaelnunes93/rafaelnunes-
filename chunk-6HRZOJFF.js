import"./chunk-4CLCTAJ7.js";var e={slug:"como-escrever-prompts-que-funcionam",title:"Por que a IA d\xE1 respostas erradas? Como escrever prompts que funcionam",description:"Os motivos mais comuns de respostas ruins da IA e uma estrutura simples de prompt, com exemplos antes e depois, para obter respostas melhores.",pubDate:"2026-10-31T16:00:00.000Z",category:"ferramentas-de-ia",tags:["prompts","chatgpt","gemini","claude","produtividade"],relatedServices:[],readingTime:4,wordCount:769,source:"manual",author:"rafael-nunes",cover:"blog/covers/como-escrever-prompts-que-funcionam.png",coverAlt:"Capa do guia sobre como escrever prompts que funcionam",quickAnswer:"A IA erra principalmente por falta de contexto, pedidos amb\xEDguos, perguntas sobre fatos que ela n\xE3o conhece com seguran\xE7a e tarefas grandes demais em um s\xF3 pedido. Para melhorar, use a estrutura: objetivo, contexto, material de apoio, formato da resposta e restri\xE7\xF5es. Pe\xE7a para a IA dizer quando n\xE3o souber, divida tarefas complexas em etapas e sempre confira fatos, n\xFAmeros e cita\xE7\xF5es em fontes confi\xE1veis.",faq:[{q:"Prompts longos s\xE3o melhores?",a:"N\xE3o necessariamente. O importante \xE9 ter as informa\xE7\xF5es certas. Um prompt curto com o contexto essencial supera um prompt longo e cheio de instru\xE7\xF5es gen\xE9ricas."},{q:"Por que a IA inventa informa\xE7\xF5es?",a:"Modelos de linguagem geram o texto mais prov\xE1vel a partir do que aprenderam, n\xE3o consultam um banco de fatos verificados. Quando n\xE3o t\xEAm a informa\xE7\xE3o, podem produzir algo plaus\xEDvel e falso, o que se chama de alucina\xE7\xE3o."},{q:"Funciona pedir para a IA 'ser especialista'?",a:"Ajuda a ajustar o tom e a profundidade, mas n\xE3o d\xE1 \xE0 IA conhecimento que ela n\xE3o tem. O que mais melhora a resposta \xE9 fornecer contexto e material de refer\xEAncia."}],headings:[{id:"por-que-a-ia-erra",text:"Por que a IA erra"},{id:"a-estrutura-de-um-bom-prompt",text:"A estrutura de um bom prompt"},{id:"exemplos-antes-e-depois",text:"Exemplos antes e depois"},{id:"tecnicas-que-reduzem-erros",text:"T\xE9cnicas que reduzem erros"},{id:"o-que-a-ia-faz-bem-e-onde-exige-cuidado",text:"O que a IA faz bem \u2014 e onde exige cuidado"},{id:"um-modelo-para-copiar",text:"Um modelo para copiar"},{id:"conclusao",text:"Conclus\xE3o"}],html:`<p>Quem usa IA com frequ\xEAncia j\xE1 passou por isso: voc\xEA faz uma pergunta e recebe uma resposta gen\xE9rica, fora do contexto ou simplesmente errada. Na maioria das vezes, o problema n\xE3o \xE9 a ferramenta \u2014 \xE9 a combina\xE7\xE3o entre o que a IA consegue fazer e o modo como o pedido foi feito.</p>
<p>Este guia explica por que as respostas saem erradas e mostra uma estrutura de prompt simples que melhora os resultados em qualquer assistente: ChatGPT, Gemini, Claude ou Copilot.</p>
<h2 id="por-que-a-ia-erra">Por que a IA erra</h2>
<h3 id="1-falta-de-contexto">1. Falta de contexto</h3>
<p>A IA n\xE3o sabe quem voc\xEA \xE9, para quem \xE9 o texto, qual \xE9 o objetivo nem o que j\xE1 foi tentado. Sem isso, ela entrega uma resposta &quot;m\xE9dia&quot;, que serve para todo mundo e para ningu\xE9m.</p>
<h3 id="2-pedido-ambiguo">2. Pedido amb\xEDguo</h3>
<p>&quot;Melhore este texto&quot; pode significar deixar mais curto, mais formal, mais persuasivo ou corrigir erros. A IA escolhe uma interpreta\xE7\xE3o \u2014 nem sempre a sua.</p>
<h3 id="3-perguntas-sobre-fatos-especificos">3. Perguntas sobre fatos espec\xEDficos</h3>
<p>Modelos de linguagem geram texto com base em padr\xF5es aprendidos, n\xE3o consultam uma enciclop\xE9dia verificada. Em datas, n\xFAmeros, cita\xE7\xF5es, leis e fatos recentes, eles podem produzir respostas plaus\xEDveis e falsas. Esse fen\xF4meno \xE9 chamado de <strong>alucina\xE7\xE3o</strong>.</p>
<h3 id="4-informacao-desatualizada">4. Informa\xE7\xE3o desatualizada</h3>
<p>Cada modelo tem uma data de corte de conhecimento. Sem pesquisa na web ativada, ele pode n\xE3o saber de mudan\xE7as recentes em pre\xE7os, leis ou produtos.</p>
<h3 id="5-tarefa-grande-demais">5. Tarefa grande demais</h3>
<p>Pedir &quot;escreva um plano de neg\xF3cios completo&quot; em uma \xFAnica mensagem tende a gerar algo superficial. Tarefas complexas funcionam melhor em etapas.</p>
<h2 id="a-estrutura-de-um-bom-prompt">A estrutura de um bom prompt</h2>
<p>Uma forma pr\xE1tica de lembrar os elementos essenciais:</p>
<ol>
<li><strong>Objetivo:</strong> o que voc\xEA quer conseguir.</li>
<li><strong>Contexto:</strong> a situa\xE7\xE3o, o p\xFAblico e o que j\xE1 se sabe.</li>
<li><strong>Material:</strong> textos, dados ou documentos que a IA deve usar.</li>
<li><strong>Formato:</strong> como a resposta deve vir (t\xF3picos, tabela, tamanho, tom).</li>
<li><strong>Restri\xE7\xF5es:</strong> o que evitar e como lidar com incertezas.</li>
</ol>
<p>As pr\xF3prias empresas que criam os modelos recomendam essas pr\xE1ticas em seus guias oficiais, como os da <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI</a>, da <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer">Anthropic</a> e do <a href="https://ai.google.dev/gemini-api/docs/prompting-strategies" target="_blank" rel="noopener noreferrer">Google</a>.</p>
<h2 id="exemplos-antes-e-depois">Exemplos antes e depois</h2>
<h3 id="exemplo-1-e-mail">Exemplo 1: e-mail</h3>
<p><strong>Antes:</strong></p>
<blockquote>
<p>Escreva um e-mail cobrando um cliente.</p>
</blockquote>
<p><strong>Depois:</strong></p>
<blockquote>
<p>Escreva um e-mail para um cliente com pagamento atrasado h\xE1 15 dias (fatura de R$ 2.400, vencida em 10/10). \xC9 um cliente antigo e bom pagador, ent\xE3o o tom deve ser cordial, sem amea\xE7as. Ofere\xE7a a op\xE7\xE3o de pagamento por Pix e pe\xE7a uma previs\xE3o de pagamento. M\xE1ximo de 8 linhas.</p>
</blockquote>
<h3 id="exemplo-2-resumo">Exemplo 2: resumo</h3>
<p><strong>Antes:</strong></p>
<blockquote>
<p>Resuma este relat\xF3rio.</p>
</blockquote>
<p><strong>Depois:</strong></p>
<blockquote>
<p>Resuma o relat\xF3rio abaixo para a diretoria, que tem 2 minutos para ler. Use 5 t\xF3picos com os principais n\xFAmeros e termine com uma recomenda\xE7\xE3o. Use apenas informa\xE7\xF5es do relat\xF3rio; se algo estiver incompleto, diga.
[relat\xF3rio]</p>
</blockquote>
<h3 id="exemplo-3-estudo">Exemplo 3: estudo</h3>
<p><strong>Antes:</strong></p>
<blockquote>
<p>Explique juros compostos.</p>
</blockquote>
<p><strong>Depois:</strong></p>
<blockquote>
<p>Explique juros compostos para algu\xE9m que nunca investiu, com um exemplo usando R$ 100 por m\xEAs durante 5 anos. Mostre a diferen\xE7a em rela\xE7\xE3o a guardar o dinheiro sem rendimento. Linguagem simples, sem f\xF3rmulas complicadas.</p>
</blockquote>
<h2 id="tecnicas-que-reduzem-erros">T\xE9cnicas que reduzem erros</h2>
<ul>
<li><strong>Pe\xE7a para a IA admitir incerteza:</strong> &quot;Se n\xE3o tiver certeza, diga que n\xE3o sabe em vez de supor.&quot;</li>
<li><strong>Forne\xE7a a fonte:</strong> em vez de perguntar sobre um contrato, cole o contrato e pergunte sobre ele.</li>
<li><strong>Pe\xE7a as fontes e confira:</strong> com pesquisa na web ativada, pe\xE7a links \u2014 e abra os links para verificar se dizem o que a IA afirmou.</li>
<li><strong>Divida em etapas:</strong> primeiro pe\xE7a o esbo\xE7o, depois desenvolva cada parte.</li>
<li><strong>Pe\xE7a uma autocr\xEDtica:</strong> &quot;Revise sua resposta e aponte poss\xEDveis erros ou pontos fracos.&quot;</li>
<li><strong>Use exemplos:</strong> mostre um modelo do resultado que voc\xEA espera.</li>
</ul>
<h2 id="o-que-a-ia-faz-bem-e-onde-exige-cuidado">O que a IA faz bem \u2014 e onde exige cuidado</h2>
<p><strong>Faz bem:</strong> redigir e reescrever textos, resumir, organizar ideias, explicar conceitos, gerar alternativas, traduzir, revisar gram\xE1tica, estruturar planos.</p>
<p><strong>Exige cuidado redobrado:</strong> n\xFAmeros exatos, datas, cita\xE7\xF5es, informa\xE7\xF5es legais, m\xE9dicas e financeiras, fatos recentes e qualquer coisa que voc\xEA v\xE1 publicar ou usar para tomar decis\xF5es importantes.</p>
<h2 id="um-modelo-para-copiar">Um modelo para copiar</h2>
<blockquote>
<p><strong>Objetivo:</strong> [o que voc\xEA quer]
<strong>Contexto:</strong> [situa\xE7\xE3o, p\xFAblico, o que j\xE1 sabe]
<strong>Material:</strong> [cole aqui textos ou dados]
<strong>Formato:</strong> [t\xF3picos/tabela/texto, tamanho, tom]
<strong>Restri\xE7\xF5es:</strong> use apenas as informa\xE7\xF5es fornecidas; se faltar algo, pergunte antes de responder.</p>
</blockquote>
<h2 id="conclusao">Conclus\xE3o</h2>
<p>A maior parte das respostas ruins vem de pedidos vagos e de expectativas erradas sobre o que a IA sabe. Com contexto, material de apoio, formato definido e verifica\xE7\xE3o dos fatos, a qualidade sobe muito. Para entender a base dessa habilidade, leia tamb\xE9m <a href="/rafaelnunes-/blog/o-que-e-engenharia-de-prompt">o que \xE9 engenharia de prompt</a>.</p>
`};export{e as post};
