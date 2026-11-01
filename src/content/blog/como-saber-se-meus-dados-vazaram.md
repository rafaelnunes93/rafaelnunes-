---
title: "Como descobrir se seus dados vazaram e o que fazer em seguida"
description: "Ferramentas para verificar se seu e-mail, senhas e CPF apareceram em vazamentos — como Have I Been Pwned e Registrato — e o passo a passo para se proteger depois."
pubDate: 2026-10-31T22:00:00-03:00
category: seguranca-digital
tags: ["vazamento de dados", "cpf", "senhas", "registrato", "lgpd"]
kicker: "Guia prático"
cover: blog/covers/como-saber-se-meus-dados-vazaram.png
coverAlt: "Capa do guia sobre como descobrir se seus dados vazaram"
quickAnswer: "Para verificar vazamentos, consulte seu e-mail no Have I Been Pwned, use os alertas de senhas vazadas do Google, da Apple ou do seu gerenciador de senhas e acesse o Registrato, do Banco Central, para ver contas, empréstimos e chaves Pix ligados ao seu CPF. Se encontrar algo, troque as senhas afetadas (e as repetidas), ative a autenticação em dois fatores, avise instituições envolvidas, registre boletim de ocorrência em caso de fraude e redobre a atenção com golpes que usam seus dados."
faq:
  - q: "Meu CPF vazou. Posso trocar o número?"
    a: "Em regra, não. O CPF é um número permanente. Por isso, a proteção depende de monitorar o uso do documento (Registrato e serviços de proteção de crédito), desconfiar de contatos que usam seus dados para parecer legítimos e agir rápido ao identificar fraudes."
  - q: "Sites que pedem meu CPF para checar vazamento são confiáveis?"
    a: "Cuidado. Alguns sites falsos usam a promessa de consulta de vazamento para coletar ainda mais dados. Prefira ferramentas oficiais, como o Registrato do Banco Central, e serviços reconhecidos."
  - q: "A empresa que vazou meus dados tem que me avisar?"
    a: "A LGPD determina que o controlador comunique à ANPD e aos titulares a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante. Você também pode exercer seus direitos, como solicitar informações sobre o tratamento dos seus dados."
source: manual
---

Vazamentos de dados acontecem com frequência: empresas são atacadas, bancos de dados ficam expostos por erro e listas de e-mails, senhas e CPFs circulam em fóruns criminosos. É bem provável que algum dado seu já tenha aparecido em um vazamento. A boa notícia é que dá para verificar e, principalmente, reduzir os danos.

## Por que vazamentos são perigosos

Dados vazados alimentam vários tipos de golpe:

- **Invasão de contas:** senhas vazadas são testadas em outros sites (por isso reutilizar senhas é tão arriscado).
- **Golpes personalizados:** com seu nome, CPF e endereço, golpistas parecem legítimos ao se passar por bancos e empresas.
- **Fraudes em seu nome:** abertura de contas, empréstimos e compras usando seus dados.
- **Phishing direcionado:** e-mails e mensagens que citam informações reais para ganhar sua confiança.

## Como verificar

### E-mail: Have I Been Pwned

O [Have I Been Pwned](https://haveibeenpwned.com/), criado pelo pesquisador de segurança Troy Hunt, reúne bases de dados vazadas e permite consultar se o seu e-mail apareceu em algum incidente. O site mostra quais serviços vazaram e que tipo de dado foi exposto (senha, telefone, endereço). Ele não exibe as senhas. Também é possível cadastrar o e-mail para receber alertas de novos vazamentos.

### Senhas: alertas do navegador e do gerenciador

- O **Gerenciador de Senhas do Google** (no Chrome e no Android) tem uma verificação de senhas comprometidas.
- O **iPhone** avisa sobre senhas vazadas em Ajustes > Senhas (ou no app Senhas).
- **Gerenciadores dedicados**, como Bitwarden, 1Password e Proton Pass, monitoram senhas expostas. Veja o [comparativo de gerenciadores de senha](/blog/melhores-gerenciadores-de-senha).

### CPF: Registrato do Banco Central

O **Registrato** é um serviço gratuito do [Banco Central](https://www.bcb.gov.br/cidadaniafinanceira/registrato) que mostra, a partir do seu CPF:

- Contas e relacionamentos com instituições financeiras.
- Empréstimos e financiamentos.
- Chaves Pix cadastradas.
- Cheques sem fundos e outras informações.

O acesso é feito com a conta gov.br. Se aparecer uma conta, empréstimo ou chave Pix que você não reconhece, é sinal de fraude com seus dados.

### Comunicados de empresas

Fique atento a comunicados oficiais de empresas sobre incidentes. Pela LGPD, o controlador deve comunicar incidentes de segurança que possam causar risco ou dano relevante aos titulares. Mas cuidado: golpistas também enviam falsos avisos de vazamento com links maliciosos. Confirme sempre nos canais oficiais.

## O que fazer se seus dados vazaram

### 1. Troque as senhas

Troque a senha do serviço afetado e de **todos os outros onde você usava a mesma senha**. Use senhas únicas e fortes para cada conta — um gerenciador de senhas resolve isso.

### 2. Ative a autenticação em dois fatores

Com a 2FA, mesmo que a senha vaze de novo, o invasor não entra. Comece pelo e-mail, WhatsApp, gov.br e bancos. Veja o guia de [autenticação em dois fatores](/blog/autenticacao-em-dois-fatores-como-ativar).

### 3. Revise contas e sessões

Verifique dispositivos conectados e atividades recentes no e-mail, redes sociais e bancos. Encerre sessões desconhecidas.

### 4. Monitore o CPF

Consulte o Registrato periodicamente e acompanhe seu CPF em serviços de proteção ao crédito. Ao identificar contas ou empréstimos desconhecidos, entre em contato com a instituição e registre boletim de ocorrência.

### 5. Redobre a atenção com golpes

Depois de um vazamento, aumentam as tentativas de golpe usando seus dados. Desconfie de ligações e mensagens que citam seu CPF ou endereço para parecer legítimas. Bancos não pedem senhas, códigos nem transferências por telefone — veja [como proteger sua conta bancária e o Pix](/blog/como-proteger-conta-bancaria-e-pix-contra-golpes).

### 6. Registre ocorrências quando houver fraude

Boletim de ocorrência, contato com a instituição envolvida e reclamação nos canais de defesa do consumidor ajudam a resolver e a documentar o caso.

## Como reduzir a exposição no futuro

- Use **senhas únicas** para cada serviço.
- Ative a **2FA** em tudo o que permitir.
- Forneça **apenas os dados necessários** em cadastros.
- Use **aliases de e-mail** para cadastros menos importantes (recurso de alguns gerenciadores e serviços de e-mail).
- **Apague contas** que você não usa mais.
- Desconfie de sites que pedem seu CPF sem necessidade.

O [CERT.br](https://cartilha.cert.br/) mantém a Cartilha de Segurança para Internet, com orientações gratuitas e atualizadas sobre vazamentos e proteção de dados.

## Conclusão

Vazamentos estão fora do seu controle, mas as consequências não precisam estar. Verificar e-mail, senhas e CPF em ferramentas confiáveis, trocar senhas repetidas, ativar a verificação em duas etapas e monitorar seu CPF reduz muito o risco de um vazamento virar prejuízo. Reserve meia hora hoje para fazer essa revisão — é um dos melhores investimentos em segurança que você pode fazer.
