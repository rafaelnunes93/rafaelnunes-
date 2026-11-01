import"./chunk-4CLCTAJ7.js";var e={slug:"como-integrar-api-do-chatgpt-ou-claude",title:"Como integrar a API do ChatGPT ou Claude no seu projeto: guia para iniciantes",description:"Passo a passo para usar as APIs da OpenAI e da Anthropic: chave de API, primeira chamada em Python, prote\xE7\xE3o da chave, controle de custos e erros comuns.",pubDate:"2026-11-01T08:30:00.000Z",category:"programacao-com-ia",tags:["api","openai","anthropic","claude","python","integra\xE7\xE3o"],relatedServices:["apis-e-integracoes","desenvolvimento-full-stack"],readingTime:5,wordCount:935,source:"manual",author:"rafael-nunes",cover:"blog/covers/como-integrar-api-do-chatgpt-ou-claude.png",coverAlt:"Capa do guia sobre como integrar a API do ChatGPT ou do Claude",quickAnswer:"Crie uma conta de desenvolvedor na OpenAI ou na Anthropic, gere uma chave de API, guarde-a em uma vari\xE1vel de ambiente e instale o SDK oficial. Depois, fa\xE7a a chamada a partir do seu back-end, enviando as instru\xE7\xF5es e a mensagem do usu\xE1rio e recebendo o texto gerado. Nunca coloque a chave no front-end, defina limites de gasto, trate erros e limites de taxa e n\xE3o confie cegamente na resposta do modelo. A cobran\xE7a \xE9 feita por tokens, ou seja, por volume de texto processado.",faq:[{q:"A assinatura do ChatGPT ou do Claude inclui a API?",a:"Em geral, n\xE3o. As assinaturas dos aplicativos e o uso da API s\xE3o produtos separados, com cobran\xE7a pr\xF3pria. Confira as condi\xE7\xF5es atuais nas p\xE1ginas oficiais de cada empresa."},{q:"O que \xE9 um token?",a:"\xC9 a unidade de cobran\xE7a e processamento dos modelos, que corresponde a peda\xE7os de palavras. As empresas cobram separadamente por tokens de entrada (o que voc\xEA envia) e de sa\xEDda (o que o modelo gera), e o pre\xE7o varia por modelo."},{q:"Qual modelo escolher?",a:"Comece pelo modelo mais barato que atende \xE0 sua tarefa e suba de n\xEDvel apenas se a qualidade n\xE3o for suficiente. Modelos mais avan\xE7ados custam mais e nem sempre s\xE3o necess\xE1rios para tarefas simples, como classificar textos."}],headings:[{id:"o-que-voce-precisa-saber-antes",text:"O que voc\xEA precisa saber antes"},{id:"passo-1-crie-a-conta-e-a-chave",text:"Passo 1: crie a conta e a chave"},{id:"passo-2-guarde-a-chave-com-seguranca",text:"Passo 2: guarde a chave com seguran\xE7a"},{id:"passo-3-faca-a-primeira-chamada",text:"Passo 3: fa\xE7a a primeira chamada"},{id:"passo-4-escreva-boas-instrucoes",text:"Passo 4: escreva boas instru\xE7\xF5es"},{id:"passo-5-prepare-para-o-mundo-real",text:"Passo 5: prepare para o mundo real"},{id:"seguranca-o-que-nao-pode-faltar",text:"Seguran\xE7a: o que n\xE3o pode faltar"},{id:"arquitetura-recomendada",text:"Arquitetura recomendada"},{id:"ideias-para-o-primeiro-projeto",text:"Ideias para o primeiro projeto"},{id:"conclusao",text:"Conclus\xE3o"}],html:`<p>Colocar IA dentro do seu pr\xF3prio sistema \xE9 mais simples do que parece. Com algumas linhas de c\xF3digo, um aplicativo consegue resumir textos, classificar mensagens, responder perguntas ou extrair dados de documentos. O que separa um teste de uma integra\xE7\xE3o confi\xE1vel s\xE3o os cuidados com seguran\xE7a, custo e qualidade.</p>
<p>Este guia mostra o caminho com as duas APIs mais usadas: a da <strong>OpenAI</strong> (modelos do ChatGPT) e a da <strong>Anthropic</strong> (modelos Claude).</p>
<h2 id="o-que-voce-precisa-saber-antes">O que voc\xEA precisa saber antes</h2>
<ul>
<li><strong>API n\xE3o \xE9 o mesmo que o aplicativo.</strong> A assinatura do ChatGPT ou do Claude normalmente n\xE3o inclui o uso da API, que \xE9 cobrado \xE0 parte.</li>
<li><strong>Cobran\xE7a por tokens.</strong> Voc\xEA paga pelo texto que envia e pelo que recebe.</li>
<li><strong>O modelo n\xE3o tem mem\xF3ria pr\xF3pria entre chamadas.</strong> Para manter uma conversa, sua aplica\xE7\xE3o envia o hist\xF3rico relevante a cada chamada, ou usa os recursos de estado que a API oferecer.</li>
<li><strong>Modelos mudam.</strong> Consulte sempre a lista de modelos atual na documenta\xE7\xE3o.</li>
</ul>
<h2 id="passo-1-crie-a-conta-e-a-chave">Passo 1: crie a conta e a chave</h2>
<ol>
<li>Acesse a plataforma de desenvolvedores: <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI</a> ou <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic</a>.</li>
<li>Configure o pagamento e <strong>defina um limite de gastos</strong>, se dispon\xEDvel.</li>
<li>Gere uma chave de API.</li>
</ol>
<p>A chave \xE9 como uma senha: quem a tiver pode gastar em seu nome.</p>
<h2 id="passo-2-guarde-a-chave-com-seguranca">Passo 2: guarde a chave com seguran\xE7a</h2>
<p>Nunca escreva a chave no c\xF3digo. Use uma vari\xE1vel de ambiente.</p>
<pre><code class="language-bash">export ANTHROPIC_API_KEY=&quot;sua-chave&quot;
export OPENAI_API_KEY=&quot;sua-chave&quot;
</code></pre>
<p>Em projetos, use um arquivo <code>.env</code> listado no <code>.gitignore</code> ou o cofre de segredos da sua hospedagem.</p>
<p><strong>Regra de ouro:</strong> a chave fica sempre no <strong>back-end</strong>. Se ela estiver em um aplicativo de celular ou em JavaScript no navegador, qualquer pessoa consegue extra\xED-la.</p>
<h2 id="passo-3-faca-a-primeira-chamada">Passo 3: fa\xE7a a primeira chamada</h2>
<h3 id="com-a-api-da-anthropic-python">Com a API da Anthropic (Python)</h3>
<pre><code class="language-bash">pip install anthropic
</code></pre>
<pre><code class="language-python">import anthropic

client = anthropic.Anthropic()  # l\xEA ANTHROPIC_API_KEY do ambiente

message = client.messages.create(
    model=&quot;claude-sonnet-5-5&quot;,
    max_tokens=500,
    system=&quot;Voc\xEA resume textos em portugu\xEAs, de forma objetiva.&quot;,
    messages=[
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Resuma em 3 t\xF3picos: ...&quot;}
    ],
)

print(message.content[0].text)
</code></pre>
<h3 id="com-a-api-da-openai-python">Com a API da OpenAI (Python)</h3>
<pre><code class="language-bash">pip install openai
</code></pre>
<pre><code class="language-python">from openai import OpenAI

client = OpenAI()  # l\xEA OPENAI_API_KEY do ambiente

response = client.responses.create(
    model=&quot;NOME_DO_MODELO&quot;,  # consulte a lista atual na documenta\xE7\xE3o
    instructions=&quot;Voc\xEA resume textos em portugu\xEAs, de forma objetiva.&quot;,
    input=&quot;Resuma em 3 t\xF3picos: ...&quot;,
)

print(response.output_text)
</code></pre>
<p>Existem SDKs oficiais para outras linguagens, como JavaScript/TypeScript, e as APIs tamb\xE9m podem ser chamadas diretamente por HTTP, a partir de qualquer linguagem, incluindo C#. Veja a documenta\xE7\xE3o da <a href="https://platform.openai.com/docs/quickstart" target="_blank" rel="noopener noreferrer">OpenAI</a> e da <a href="https://docs.anthropic.com/en/docs/get-started" target="_blank" rel="noopener noreferrer">Anthropic</a>.</p>
<h2 id="passo-4-escreva-boas-instrucoes">Passo 4: escreva boas instru\xE7\xF5es</h2>
<p>A instru\xE7\xE3o de sistema define o comportamento do modelo:</p>
<ul>
<li>Qual \xE9 o papel dele e o objetivo.</li>
<li>O formato da resposta.</li>
<li>O que fazer quando n\xE3o souber.</li>
<li>O que \xE9 proibido responder.</li>
</ul>
<p>Veja t\xE9cnicas em <a href="/rafaelnunes-/blog/como-escrever-prompts-que-funcionam">como escrever prompts que funcionam</a>.</p>
<p>Quando a resposta precisa alimentar outro sistema, prefira os recursos de <strong>sa\xEDda estruturada</strong> das APIs, que retornam JSON em um formato definido, em vez de tentar extrair dados de um texto livre.</p>
<h2 id="passo-5-prepare-para-o-mundo-real">Passo 5: prepare para o mundo real</h2>
<h3 id="trate-erros">Trate erros</h3>
<p>Chamadas podem falhar por limite de taxa, instabilidade ou tempo de espera. Implemente novas tentativas com intervalo crescente e uma resposta alternativa para o usu\xE1rio.</p>
<h3 id="controle-custos">Controle custos</h3>
<ul>
<li>Defina limites de gasto na plataforma.</li>
<li>Limite o tamanho das respostas com o par\xE2metro de tokens m\xE1ximos.</li>
<li>Envie apenas o contexto necess\xE1rio.</li>
<li>Use modelos mais baratos para tarefas simples.</li>
<li>Limite o uso por usu\xE1rio na sua aplica\xE7\xE3o.</li>
<li>Registre o consumo por funcionalidade.</li>
</ul>
<h3 id="melhore-a-experiencia">Melhore a experi\xEAncia</h3>
<p>Use <strong>streaming</strong> para mostrar a resposta enquanto ela \xE9 gerada, o que reduz a sensa\xE7\xE3o de espera em respostas longas.</p>
<h3 id="avalie-a-qualidade">Avalie a qualidade</h3>
<p>Monte um conjunto de exemplos reais com a resposta esperada e rode sempre que trocar o modelo ou o prompt. Sem isso, melhorias em um caso podem piorar outros sem ningu\xE9m perceber.</p>
<h2 id="seguranca-o-que-nao-pode-faltar">Seguran\xE7a: o que n\xE3o pode faltar</h2>
<ol>
<li><strong>Trate a entrada do usu\xE1rio como n\xE3o confi\xE1vel.</strong> Usu\xE1rios podem tentar manipular o modelo com textos como &quot;ignore suas instru\xE7\xF5es&quot;. Isso se chama <em>inje\xE7\xE3o de prompt</em> e \xE9 um dos principais riscos listados pelo <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" target="_blank" rel="noopener noreferrer">OWASP para aplica\xE7\xF5es com modelos de linguagem</a>.</li>
<li><strong>Trate a sa\xEDda do modelo como n\xE3o confi\xE1vel.</strong> Nunca execute diretamente c\xF3digo ou comandos gerados, e sanitize textos antes de exibi-los em p\xE1ginas.</li>
<li><strong>D\xEA permiss\xF5es m\xEDnimas.</strong> Se o modelo aciona fun\xE7\xF5es do sistema, limite o que elas podem fazer e confirme a\xE7\xF5es sens\xEDveis.</li>
<li><strong>Proteja dados pessoais.</strong> Envie s\xF3 o necess\xE1rio e verifique os termos do fornecedor. Veja <a href="/rafaelnunes-/blog/lgpd-e-ia-riscos-de-dados-de-clientes-em-chatbots">LGPD e IA</a>.</li>
<li><strong>Autentique os usu\xE1rios</strong> da sua aplica\xE7\xE3o, para que ningu\xE9m use sua API como um servi\xE7o gratuito.</li>
</ol>
<h2 id="arquitetura-recomendada">Arquitetura recomendada</h2>
<pre><code class="language-text">Aplicativo ou site \u2192 Seu back-end (autentica\xE7\xE3o, regras, limites) \u2192 API do modelo
</code></pre>
<p>O back-end guarda a chave, aplica as regras do neg\xF3cio, registra o uso e protege o sistema. Esse desenho tamb\xE9m facilita trocar de fornecedor no futuro, se voc\xEA isolar a chamada em um \xFAnico servi\xE7o.</p>
<h2 id="ideias-para-o-primeiro-projeto">Ideias para o primeiro projeto</h2>
<ul>
<li>Classificador de chamados de suporte.</li>
<li>Resumo autom\xE1tico de avalia\xE7\xF5es de clientes.</li>
<li>Extra\xE7\xE3o de dados de textos para uma planilha.</li>
<li>Assistente que responde com base em uma base de conhecimento pr\xF3pria.</li>
</ul>
<h2 id="conclusao">Conclus\xE3o</h2>
<p>A primeira chamada leva minutos. O trabalho de verdade est\xE1 em proteger a chave, controlar custos, tratar erros, avaliar a qualidade e cuidar da seguran\xE7a. Comece com um caso de uso pequeno, me\xE7a o resultado e evolua a partir da\xED. Quando precisar conectar a IA aos sistemas da empresa, uma <a href="/rafaelnunes-/servicos/apis-e-integracoes">integra\xE7\xE3o bem projetada</a> evita muita dor de cabe\xE7a.</p>
`};export{e as post};
