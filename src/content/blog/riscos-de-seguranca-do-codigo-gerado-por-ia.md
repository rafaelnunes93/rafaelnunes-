---
title: "Código gerado por IA: riscos de segurança que ninguém te conta"
description: "As falhas de segurança mais comuns em código gerado por IA, o que dizem estudos como o da Veracode, e um checklist para revisar antes de colocar em produção."
pubDate: 2026-10-31T06:00:00-03:00
category: programacao-com-ia
tags: ["segurança", "código gerado por ia", "owasp", "desenvolvimento", "vulnerabilidades"]
kicker: "Alerta"
cover: blog/covers/riscos-de-seguranca-do-codigo-gerado-por-ia.png
coverAlt: "Capa do artigo sobre riscos de segurança do código gerado por IA"
quickAnswer: "Código gerado por IA pode funcionar e, ainda assim, ser inseguro. Em um estudo de 2025, a Veracode testou mais de 100 modelos em 80 tarefas e encontrou falhas de segurança em 45% dos casos. Os problemas mais comuns são injeção de SQL e de comandos, validação de entrada ausente, segredos expostos no código, autenticação e autorização fracas, dependências inexistentes ou vulneráveis e configurações inseguras. A solução é tratar todo código gerado como código de terceiros: revisar, testar, usar ferramentas de análise e seguir referências como o OWASP Top 10."
faq:
  - q: "Os modelos mais novos geram código mais seguro?"
    a: "Os modelos melhoraram em funcionalidade, mas o relatório da Veracode apontou que o desempenho em segurança não acompanhou essa evolução no período analisado. Pedir explicitamente práticas seguras ajuda, mas não substitui revisão e testes."
  - q: "O que é package hallucination?"
    a: "É quando a IA sugere importar uma biblioteca que não existe. Criminosos podem registrar pacotes com esses nomes inventados contendo código malicioso, e quem instala sem verificar pode comprometer o sistema."
  - q: "Ferramentas automáticas resolvem o problema?"
    a: "Ajudam muito. Análise estática (SAST), varredura de dependências e detecção de segredos encontram muitos problemas automaticamente. Mas falhas de lógica e de autorização costumam exigir revisão humana e testes específicos."
relatedServices: ["desenvolvimento-full-stack", "apis-e-integracoes"]
source: manual
---

Assistentes de código aceleram o desenvolvimento de forma impressionante. O problema é que **código que funciona não é o mesmo que código seguro**. A IA aprende com enormes volumes de código público — incluindo código com falhas — e tende a gerar a solução mais comum, não necessariamente a mais segura. Quem coloca código gerado em produção sem revisão está assumindo riscos que muitas vezes não enxerga.

## O que os estudos mostram

O [relatório de segurança de código gerado por IA de 2025 da Veracode](https://www.veracode.com/) avaliou mais de 100 modelos de linguagem em 80 tarefas de programação. Os principais achados:

- Em **45%** dos casos, o código gerado introduziu vulnerabilidades de segurança.
- Quando havia uma forma segura e uma insegura de resolver a tarefa, os modelos escolheram a insegura em cerca de 45% das vezes.
- O desempenho em segurança **não melhorou** no mesmo ritmo que a capacidade de gerar código funcional.

O número vem de um conjunto controlado de tarefas, não de todo o código escrito com IA no mundo — mas é um alerta claro de que a revisão é obrigatória.

## As falhas mais comuns

### 1. Injeção (SQL, comandos, scripts)

A IA frequentemente monta consultas concatenando texto do usuário diretamente:

```python
# Inseguro: o valor do usuário vai direto na consulta
cursor.execute("SELECT * FROM usuarios WHERE email = '" + email + "'")

# Seguro: consulta parametrizada
cursor.execute("SELECT * FROM usuarios WHERE email = %s", (email,))
```

O mesmo vale para comandos do sistema operacional e para conteúdo exibido em páginas web (XSS).

### 2. Validação de entrada ausente

Código gerado costuma confiar nos dados recebidos: não verifica tamanho, formato, tipo ou valores permitidos.

### 3. Segredos no código

Chaves de API, senhas e tokens escritos diretamente no código-fonte, que acabam em repositórios e aplicativos publicados. Segredos devem ficar em variáveis de ambiente ou cofres de segredos.

### 4. Autenticação e autorização fracas

É comum a IA criar rotas que verificam se o usuário está logado, mas não se ele tem **permissão** para acessar aquele recurso específico — permitindo que um cliente veja os dados de outro só trocando um número na URL.

### 5. Dependências inventadas ou vulneráveis

Modelos às vezes sugerem bibliotecas que não existem (*package hallucination*). Atacantes registram pacotes com esses nomes contendo código malicioso. Também é comum a sugestão de versões antigas, com vulnerabilidades conhecidas.

### 6. Criptografia ultrapassada

Uso de algoritmos fracos para senhas, geração de números aleatórios inadequada para segurança e chaves fixas no código.

### 7. Configurações inseguras

CORS liberado para qualquer origem, modo de depuração ativado em produção, mensagens de erro que expõem detalhes internos e permissões amplas demais em bancos de dados e nuvem.

## Por que isso acontece

- **Dados de treinamento:** a IA aprendeu com código público, que inclui muitos exemplos inseguros.
- **Foco em "funcionar":** o pedido típico é "faça funcionar", não "faça de forma segura".
- **Falta de contexto:** a IA não conhece as regras de acesso, os dados sensíveis e as ameaças do seu sistema.
- **Confiança excessiva:** o código parece profissional, e o desenvolvedor revisa menos.

## Checklist antes de ir para produção

### No pedido

- [ ] Peça explicitamente práticas seguras: consultas parametrizadas, validação de entrada, tratamento de erros sem expor detalhes.
- [ ] Informe o contexto: quem pode acessar o quê, quais dados são sensíveis.

### Na revisão

- [ ] Leia e entenda **cada linha** antes de aceitar.
- [ ] Verifique **autorização**, não apenas autenticação, em cada rota e operação.
- [ ] Procure **segredos** no código.
- [ ] Confira se **todas as dependências existem**, são mantidas e estão atualizadas.
- [ ] Use as referências do [OWASP Top 10](https://owasp.org/www-project-top-ten/) como guia.

### Nas ferramentas

- [ ] **Análise estática (SAST)** no repositório.
- [ ] **Varredura de dependências** (alertas do GitHub, ferramentas de composição de software).
- [ ] **Detecção de segredos** antes do commit.
- [ ] **Testes automatizados**, incluindo casos de abuso (entradas inválidas, acesso indevido).

### No processo

- [ ] **Revisão de código por outra pessoa** para mudanças relevantes.
- [ ] **Permissões mínimas** para aplicações, bancos e serviços de nuvem.
- [ ] **Monitoramento e registros** para detectar comportamentos anormais.

## E nos aplicativos criados sem programar?

Plataformas que geram aplicativos inteiros a partir de texto também podem produzir falhas: bancos de dados acessíveis sem login, regras de acesso mal configuradas e chaves expostas no navegador. Se o seu app tem dados de usuários, revise as regras de acesso da plataforma e considere uma avaliação técnica. Veja [como criar um app sem saber programar](/blog/como-criar-app-sem-saber-programar-com-ia).

## Conclusão

A IA é uma ferramenta poderosa para escrever código, mas não é uma especialista em segurança confiável. Trate todo código gerado como código de um desenvolvedor desconhecido: revise, teste, use ferramentas de análise e siga boas práticas. A velocidade que a IA traz só vale a pena se não vier acompanhada de vulnerabilidades que custam muito mais caro depois.
