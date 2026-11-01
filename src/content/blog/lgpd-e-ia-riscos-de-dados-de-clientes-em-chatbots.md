---
title: "LGPD e IA: os riscos de colocar dados de clientes em chatbots"
description: "O que a LGPD exige quando dados de clientes passam por ferramentas de IA, os riscos mais comuns, as sanções previstas e um checklist para usar IA com segurança."
pubDate: 2026-10-31T16:40:00-03:00
category: ia-para-negocios
tags: ["lgpd", "privacidade", "anpd", "chatbots", "compliance"]
kicker: "Alerta"
cover: blog/covers/lgpd-e-ia-riscos-de-dados-de-clientes-em-chatbots.png
coverAlt: "Capa do artigo sobre LGPD e IA"
quickAnswer: "Colar dados de clientes em chatbots de IA é tratamento de dados pessoais e precisa seguir a LGPD: ter base legal, finalidade definida, usar só os dados necessários, garantir segurança e informar os titulares. O maior risco é usar contas pessoais ou gratuitas, em que os dados podem ser armazenados e, em alguns casos, usados para melhorar os modelos. A LGPD prevê sanções que incluem multa de até 2% do faturamento, limitada a R$ 50 milhões por infração. Use versões corporativas com contrato de proteção de dados, anonimize quando possível e crie uma política interna de uso de IA."
faq:
  - q: "Posso usar ChatGPT com dados de clientes?"
    a: "Somente com cuidado: em planos corporativos com termos de proteção de dados adequados, com base legal para o tratamento, usando apenas os dados necessários e respeitando a finalidade informada ao cliente. Em contas pessoais e gratuitas, evite colocar dados pessoais de clientes."
  - q: "Anonimizar os dados resolve?"
    a: "Dados realmente anonimizados, que não permitem identificar a pessoa, deixam de ser considerados dados pessoais pela LGPD. Mas apagar só o nome nem sempre basta: combinações de informações, como cargo, cidade e empresa, podem identificar alguém."
  - q: "A ANPD fiscaliza o uso de IA?"
    a: "Sim. A ANPD incluiu inteligência artificial entre os temas prioritários de fiscalização e de regulamentação, e já analisou o tratamento de dados por serviços de IA generativa. O tema deve ganhar ainda mais atenção com a evolução da regulação de IA no Brasil."
relatedServices: ["desenvolvimento-full-stack", "apis-e-integracoes"]
source: manual
---

A cena é comum em muitas empresas: um funcionário cola uma planilha de clientes no chatbot para "organizar os dados", ou envia um contrato com nome, CPF e endereço para a IA resumir. Parece inofensivo e economiza tempo. Mas, do ponto de vista da **Lei Geral de Proteção de Dados (LGPD)**, isso é tratamento de dados pessoais — e pode expor a empresa a riscos sérios.

> **Aviso:** este artigo tem caráter informativo e não substitui orientação jurídica. Para situações específicas, consulte um advogado ou o encarregado de dados (DPO) da sua empresa.

## Por que a LGPD se aplica

A [LGPD (Lei nº 13.709/2018)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) regula qualquer operação com dados pessoais: coleta, armazenamento, uso, compartilhamento e transferência. Quando você envia dados de clientes para uma ferramenta de IA, está:

- **Compartilhando** dados com um terceiro (o fornecedor da IA).
- Muitas vezes, fazendo **transferência internacional**, já que os servidores podem estar fora do Brasil.
- Usando os dados para uma **finalidade** que pode não ter sido informada ao cliente.

Tudo isso precisa estar de acordo com os princípios e as bases legais da lei.

## Os principais riscos

### 1. Uso de contas pessoais e gratuitas

É o risco mais frequente. Em versões gratuitas e contas pessoais, as conversas podem ser armazenadas e, conforme a política de cada empresa e as configurações do usuário, usadas para melhorar os modelos. A empresa perde o controle sobre onde os dados estão e por quanto tempo.

### 2. Dados demais

O princípio da **necessidade** determina usar apenas os dados indispensáveis para a finalidade. Para pedir à IA um modelo de resposta a reclamações, não é preciso enviar nome, CPF e telefone do cliente.

### 3. Dados sensíveis

Informações de saúde, origem racial, religião, opinião política, dados genéticos e biométricos, entre outros, são **dados sensíveis** e têm regras ainda mais rígidas.

### 4. Finalidade desviada

Se o cliente forneceu dados para receber um serviço, usá-los para outra coisa sem base legal adequada viola o princípio da **finalidade**.

### 5. Falta de transparência

A LGPD garante ao titular o direito de saber como seus dados são tratados. Chatbots que atendem clientes devem deixar claro que são automatizados e como os dados serão usados.

### 6. Decisões automatizadas

A lei prevê o direito de solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem os interesses do titular, como análises de crédito ou de perfil.

## O que pode acontecer

O artigo 52 da LGPD prevê sanções administrativas aplicadas pela Autoridade Nacional de Proteção de Dados (ANPD), entre elas:

- Advertência.
- **Multa simples de até 2% do faturamento** da empresa no Brasil no último exercício, **limitada a R$ 50 milhões por infração**.
- Multa diária.
- Publicização da infração.
- Bloqueio ou eliminação dos dados envolvidos.
- Suspensão parcial do funcionamento do banco de dados ou da atividade de tratamento.

Além das sanções administrativas, há o risco de ações judiciais de clientes e o dano à reputação. A [ANPD](https://www.gov.br/anpd/) incluiu inteligência artificial entre seus temas prioritários, o que indica fiscalização crescente.

## Checklist para usar IA com segurança

### Na escolha da ferramenta

- [ ] Use **versões corporativas** com contrato e termos de proteção de dados.
- [ ] Verifique se os dados **não são usados para treinar** os modelos.
- [ ] Confira onde os dados são armazenados e por quanto tempo.
- [ ] Avalie as garantias para **transferência internacional** de dados.

### No uso diário

- [ ] Envie apenas os **dados necessários** para a tarefa.
- [ ] **Anonimize ou pseudonimize** sempre que possível (troque nomes por códigos, remova CPF, telefone e endereço).
- [ ] Nunca envie **dados sensíveis** sem análise jurídica.
- [ ] Não use a IA para **decisões automatizadas** que afetem clientes sem processo de revisão humana.

### Na organização

- [ ] Crie uma **política interna de uso de IA**, dizendo quais ferramentas são permitidas e quais dados podem ser usados.
- [ ] **Treine a equipe** com exemplos práticos do que pode e do que não pode.
- [ ] Atualize o **registro das operações de tratamento** e a política de privacidade.
- [ ] Envolva o **encarregado de dados (DPO)** nas decisões sobre novas ferramentas.

## E os chatbots que atendem clientes?

Se a empresa usa um assistente de IA para atender clientes (no site ou no WhatsApp):

- Informe que se trata de atendimento automatizado.
- Tenha uma política de privacidade acessível.
- Colete só o necessário para o atendimento.
- Defina por quanto tempo as conversas ficam armazenadas.
- Garanta um canal para o cliente exercer seus direitos (acesso, correção, exclusão).

Veja o passo a passo em [como montar um atendimento no WhatsApp com IA](/blog/atendimento-no-whatsapp-com-ia-para-pequenas-empresas).

## Conclusão

Usar IA com dados de clientes não é proibido, mas exige os mesmos cuidados de qualquer tratamento de dados pessoais. A combinação de ferramentas corporativas, minimização de dados, anonimização e uma política interna clara reduz muito os riscos. Na dúvida, vale a regra prática: se você não colaria aquela informação num e-mail para um desconhecido, não cole num chatbot sem garantias.
