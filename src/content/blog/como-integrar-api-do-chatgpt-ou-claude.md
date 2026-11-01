---
title: "Como integrar a API do ChatGPT ou Claude no seu projeto: guia para iniciantes"
description: "Passo a passo para usar as APIs da OpenAI e da Anthropic: chave de API, primeira chamada em Python, proteção da chave, controle de custos e erros comuns."
pubDate: 2026-11-01T05:30:00-03:00
category: programacao-com-ia
tags: ["api", "openai", "anthropic", "claude", "python", "integração"]
kicker: "Guia prático"
cover: blog/covers/como-integrar-api-do-chatgpt-ou-claude.png
coverAlt: "Capa do guia sobre como integrar a API do ChatGPT ou do Claude"
quickAnswer: "Crie uma conta de desenvolvedor na OpenAI ou na Anthropic, gere uma chave de API, guarde-a em uma variável de ambiente e instale o SDK oficial. Depois, faça a chamada a partir do seu back-end, enviando as instruções e a mensagem do usuário e recebendo o texto gerado. Nunca coloque a chave no front-end, defina limites de gasto, trate erros e limites de taxa e não confie cegamente na resposta do modelo. A cobrança é feita por tokens, ou seja, por volume de texto processado."
faq:
  - q: "A assinatura do ChatGPT ou do Claude inclui a API?"
    a: "Em geral, não. As assinaturas dos aplicativos e o uso da API são produtos separados, com cobrança própria. Confira as condições atuais nas páginas oficiais de cada empresa."
  - q: "O que é um token?"
    a: "É a unidade de cobrança e processamento dos modelos, que corresponde a pedaços de palavras. As empresas cobram separadamente por tokens de entrada (o que você envia) e de saída (o que o modelo gera), e o preço varia por modelo."
  - q: "Qual modelo escolher?"
    a: "Comece pelo modelo mais barato que atende à sua tarefa e suba de nível apenas se a qualidade não for suficiente. Modelos mais avançados custam mais e nem sempre são necessários para tarefas simples, como classificar textos."
relatedServices: ["apis-e-integracoes", "desenvolvimento-full-stack"]
source: manual
---

Colocar IA dentro do seu próprio sistema é mais simples do que parece. Com algumas linhas de código, um aplicativo consegue resumir textos, classificar mensagens, responder perguntas ou extrair dados de documentos. O que separa um teste de uma integração confiável são os cuidados com segurança, custo e qualidade.

Este guia mostra o caminho com as duas APIs mais usadas: a da **OpenAI** (modelos do ChatGPT) e a da **Anthropic** (modelos Claude).

## O que você precisa saber antes

- **API não é o mesmo que o aplicativo.** A assinatura do ChatGPT ou do Claude normalmente não inclui o uso da API, que é cobrado à parte.
- **Cobrança por tokens.** Você paga pelo texto que envia e pelo que recebe.
- **O modelo não tem memória própria entre chamadas.** Para manter uma conversa, sua aplicação envia o histórico relevante a cada chamada, ou usa os recursos de estado que a API oferecer.
- **Modelos mudam.** Consulte sempre a lista de modelos atual na documentação.

## Passo 1: crie a conta e a chave

1. Acesse a plataforma de desenvolvedores: [OpenAI](https://platform.openai.com/) ou [Anthropic](https://docs.anthropic.com/).
2. Configure o pagamento e **defina um limite de gastos**, se disponível.
3. Gere uma chave de API.

A chave é como uma senha: quem a tiver pode gastar em seu nome.

## Passo 2: guarde a chave com segurança

Nunca escreva a chave no código. Use uma variável de ambiente.

```bash
export ANTHROPIC_API_KEY="sua-chave"
export OPENAI_API_KEY="sua-chave"
```

Em projetos, use um arquivo `.env` listado no `.gitignore` ou o cofre de segredos da sua hospedagem.

**Regra de ouro:** a chave fica sempre no **back-end**. Se ela estiver em um aplicativo de celular ou em JavaScript no navegador, qualquer pessoa consegue extraí-la.

## Passo 3: faça a primeira chamada

### Com a API da Anthropic (Python)

```bash
pip install anthropic
```

```python
import anthropic

client = anthropic.Anthropic()  # lê ANTHROPIC_API_KEY do ambiente

message = client.messages.create(
    model="claude-sonnet-5-5",
    max_tokens=500,
    system="Você resume textos em português, de forma objetiva.",
    messages=[
        {"role": "user", "content": "Resuma em 3 tópicos: ..."}
    ],
)

print(message.content[0].text)
```

### Com a API da OpenAI (Python)

```bash
pip install openai
```

```python
from openai import OpenAI

client = OpenAI()  # lê OPENAI_API_KEY do ambiente

response = client.responses.create(
    model="NOME_DO_MODELO",  # consulte a lista atual na documentação
    instructions="Você resume textos em português, de forma objetiva.",
    input="Resuma em 3 tópicos: ...",
)

print(response.output_text)
```

Existem SDKs oficiais para outras linguagens, como JavaScript/TypeScript, e as APIs também podem ser chamadas diretamente por HTTP, a partir de qualquer linguagem, incluindo C#. Veja a documentação da [OpenAI](https://platform.openai.com/docs/quickstart) e da [Anthropic](https://docs.anthropic.com/en/docs/get-started).

## Passo 4: escreva boas instruções

A instrução de sistema define o comportamento do modelo:

- Qual é o papel dele e o objetivo.
- O formato da resposta.
- O que fazer quando não souber.
- O que é proibido responder.

Veja técnicas em [como escrever prompts que funcionam](/blog/como-escrever-prompts-que-funcionam).

Quando a resposta precisa alimentar outro sistema, prefira os recursos de **saída estruturada** das APIs, que retornam JSON em um formato definido, em vez de tentar extrair dados de um texto livre.

## Passo 5: prepare para o mundo real

### Trate erros

Chamadas podem falhar por limite de taxa, instabilidade ou tempo de espera. Implemente novas tentativas com intervalo crescente e uma resposta alternativa para o usuário.

### Controle custos

- Defina limites de gasto na plataforma.
- Limite o tamanho das respostas com o parâmetro de tokens máximos.
- Envie apenas o contexto necessário.
- Use modelos mais baratos para tarefas simples.
- Limite o uso por usuário na sua aplicação.
- Registre o consumo por funcionalidade.

### Melhore a experiência

Use **streaming** para mostrar a resposta enquanto ela é gerada, o que reduz a sensação de espera em respostas longas.

### Avalie a qualidade

Monte um conjunto de exemplos reais com a resposta esperada e rode sempre que trocar o modelo ou o prompt. Sem isso, melhorias em um caso podem piorar outros sem ninguém perceber.

## Segurança: o que não pode faltar

1. **Trate a entrada do usuário como não confiável.** Usuários podem tentar manipular o modelo com textos como "ignore suas instruções". Isso se chama *injeção de prompt* e é um dos principais riscos listados pelo [OWASP para aplicações com modelos de linguagem](https://owasp.org/www-project-top-10-for-large-language-model-applications/).
2. **Trate a saída do modelo como não confiável.** Nunca execute diretamente código ou comandos gerados, e sanitize textos antes de exibi-los em páginas.
3. **Dê permissões mínimas.** Se o modelo aciona funções do sistema, limite o que elas podem fazer e confirme ações sensíveis.
4. **Proteja dados pessoais.** Envie só o necessário e verifique os termos do fornecedor. Veja [LGPD e IA](/blog/lgpd-e-ia-riscos-de-dados-de-clientes-em-chatbots).
5. **Autentique os usuários** da sua aplicação, para que ninguém use sua API como um serviço gratuito.

## Arquitetura recomendada

```text
Aplicativo ou site → Seu back-end (autenticação, regras, limites) → API do modelo
```

O back-end guarda a chave, aplica as regras do negócio, registra o uso e protege o sistema. Esse desenho também facilita trocar de fornecedor no futuro, se você isolar a chamada em um único serviço.

## Ideias para o primeiro projeto

- Classificador de chamados de suporte.
- Resumo automático de avaliações de clientes.
- Extração de dados de textos para uma planilha.
- Assistente que responde com base em uma base de conhecimento própria.

## Conclusão

A primeira chamada leva minutos. O trabalho de verdade está em proteger a chave, controlar custos, tratar erros, avaliar a qualidade e cuidar da segurança. Comece com um caso de uso pequeno, meça o resultado e evolua a partir daí. Quando precisar conectar a IA aos sistemas da empresa, uma [integração bem projetada](/servicos/apis-e-integracoes) evita muita dor de cabeça.
