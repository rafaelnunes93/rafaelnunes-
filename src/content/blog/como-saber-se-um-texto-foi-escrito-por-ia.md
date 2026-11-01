---
title: "Como saber se um texto foi escrito por IA? O que funciona de verdade"
description: "Por que detectores de IA não são confiáveis, o que dizem os estudos, os sinais que levantam suspeita e as alternativas que funcionam melhor."
pubDate: 2026-10-31T15:20:00-03:00
category: ferramentas-de-ia
tags: ["detector de ia", "educação", "texto gerado por ia", "synthid"]
kicker: "Entenda"
cover: blog/covers/como-saber-se-um-texto-foi-escrito-por-ia.png
coverAlt: "Capa do artigo sobre como saber se um texto foi escrito por IA"
quickAnswer: "Não existe forma 100% confiável de saber se um texto foi escrito por IA. A própria OpenAI desativou seu detector em 2023 por baixa precisão: ele identificava corretamente apenas 26% dos textos gerados por IA e marcava 9% dos textos humanos como artificiais. Um estudo de Stanford mostrou que detectores acusam com frequência textos de pessoas que escrevem em uma segunda língua. Sinais de estilo podem levantar suspeita, mas não provam nada. Alternativas mais sólidas são marcas d'água digitais, como o SynthID do Google, e avaliar o processo de produção do texto."
faq:
  - q: "Detectores de IA podem ser usados para punir alunos?"
    a: "Usar apenas o resultado de um detector para acusar alguém é arriscado, por causa dos falsos positivos. Instituições que adotam essas ferramentas costumam recomendar que o resultado seja só um ponto de partida para uma conversa, nunca uma prova."
  - q: "Reescrever um texto de IA engana os detectores?"
    a: "Muitas vezes sim, o que é mais um motivo pelo qual os detectores não são confiáveis. Paráfrases e traduções também reduzem a eficácia de marcas d'água."
  - q: "Usar IA para escrever é proibido?"
    a: "Depende do contexto. Muitas escolas, empresas e veículos definem regras próprias. O caminho mais seguro é conhecer a política do local e, quando exigido, informar o uso de IA."
source: manual
---

Com a popularização do ChatGPT, professores, editores e recrutadores passaram a se perguntar: este texto foi escrito por uma pessoa ou por uma IA? Surgiram dezenas de "detectores de IA" prometendo a resposta. O problema é que os dados mostram que eles erram — e às vezes erram de forma injusta.

## Os detectores funcionam?

### O caso do detector da OpenAI

Em janeiro de 2023, a própria OpenAI lançou uma ferramenta para identificar textos gerados por IA. Em julho do mesmo ano, a empresa a desativou, citando a **baixa taxa de precisão**. Nos testes divulgados pela empresa, o classificador identificava corretamente apenas **26%** dos textos escritos por IA e marcava erroneamente **9%** dos textos humanos como artificiais.

Se a empresa que criou o ChatGPT não conseguiu construir um detector confiável, vale desconfiar de quem promete precisão perto de 100%.

### O viés contra quem escreve em outro idioma

Pesquisadores da Universidade Stanford testaram sete detectores populares em redações do exame de proficiência TOEFL, escritas por pessoas que não têm o inglês como língua nativa. A taxa média de falsos positivos passou de **60%**: mais da metade dos textos humanos foi classificada como gerada por IA. Em redações de estudantes nativos, os erros foram bem menores. A explicação provável: os detectores associam vocabulário mais simples e previsível a texto de IA — justamente o padrão de quem escreve numa segunda língua.

### Por que é tão difícil

Modelos de linguagem foram treinados com textos humanos e produzem textos parecidos com os humanos. Não há uma "assinatura" natural e infalível. Além disso:

- Textos curtos dão pouca informação para análise.
- Uma pessoa pode reescrever o texto da IA, e uma IA pode reescrever o texto de uma pessoa.
- Os modelos mudam constantemente, e os detectores precisam correr atrás.

## Sinais que levantam suspeita (mas não provam nada)

Alguns padrões aparecem com frequência em textos gerados por IA sem revisão:

- Estrutura muito padronizada: introdução genérica, tópicos com o mesmo tamanho, conclusão que repete tudo.
- Frases de efeito vazias e expressões repetitivas.
- Tom uniforme, sem opiniões pessoais ou experiências concretas.
- Afirmações genéricas sem exemplos específicos.
- Fatos, citações ou referências que não existem.
- Ausência de erros, mas também de personalidade.

O problema é que muitas pessoas escrevem assim — especialmente em textos formais. Esses sinais justificam uma conversa, não uma acusação.

## O que funciona melhor

### Marcas d'água digitais

Em vez de adivinhar depois, algumas empresas inserem sinais invisíveis no momento da geração. O **SynthID**, do Google DeepMind, marca textos, imagens, áudios e vídeos gerados pelos modelos do Google. A versão para texto foi disponibilizada como código aberto ([documentação](https://ai.google.dev/responsible/docs/safeguards/synthid)). A própria documentação reconhece os limites: a marca resiste a pequenas edições, mas perde força quando o texto é muito reescrito ou traduzido, e só funciona para conteúdo gerado por modelos que aplicam a marca.

### Padrões de procedência

Iniciativas como o padrão [C2PA](https://c2pa.org/) registram informações sobre a origem e as edições de imagens e vídeos. Ainda são pouco usadas para texto, mas apontam o caminho da transparência por design.

### Avaliar o processo, não só o resultado

Em escolas e processos seletivos, as abordagens mais sólidas avaliam como o trabalho foi feito:

- Histórico de versões do documento (Google Docs e Word guardam).
- Rascunhos e anotações intermediárias.
- Apresentação oral ou conversa sobre o conteúdo.
- Atividades feitas em sala ou ao vivo.
- Perguntas sobre escolhas e fontes usadas.

## Para professores e gestores

- Defina regras claras sobre quando e como a IA pode ser usada.
- Não use detectores como prova única.
- Prefira tarefas que exijam experiência pessoal, dados locais, opinião fundamentada e etapas intermediárias.
- Converse antes de acusar: peça para a pessoa explicar o texto com as próprias palavras.

## Para quem escreve com ajuda de IA

- Conheça e siga as regras do local (escola, empresa, veículo).
- Use a IA para estruturar e revisar, mas coloque sua experiência, exemplos e opinião.
- Verifique todos os fatos e referências.
- Guarde rascunhos e histórico de versões, caso precise demonstrar seu processo.

## Conclusão

Não há, hoje, uma forma confiável de afirmar com certeza que um texto foi escrito por IA. Detectores erram com frequência e podem prejudicar pessoas inocentes. Sinais de estilo ajudam a levantar perguntas, e marcas d'água e padrões de procedência são caminhos promissores, mas limitados. Na dúvida, o melhor detector continua sendo uma boa conversa sobre o conteúdo.
