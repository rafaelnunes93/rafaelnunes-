import { Component, HostListener } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Skill {
  name: string;
  letter: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillDetail {
  name: string;
  whatIs: string;
  whatFor: string;
  howTo: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'Angular', letter: 'A' },
        { name: 'TypeScript', letter: 'Ts' },
        { name: 'JavaScript', letter: 'Js' },
        { name: 'HTML/CSS', letter: 'H' },
        { name: 'Flutter', letter: 'F' }
      ]
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'C#', letter: 'C#' },
        { name: '.NET', letter: '.N' },
        { name: 'APIs', letter: 'A' },
        { name: 'EntityFramework', letter: 'EF' },
        { name: 'Node.js', letter: 'N' }
      ]
    },
    {
      title: 'ARQUITETURA',
      skills: [
        { name: 'Microsserviços', letter: 'M' },
        { name: 'CQRS', letter: 'C' },
        { name: 'SOLID', letter: 'S' },
        { name: 'Clean Code', letter: 'Cc' },
        { name: 'TDD', letter: 'T' }
      ]
    },
    {
      title: 'BANCOS',
      skills: [
        { name: 'SQL Server', letter: 'Sq' },
        { name: 'PostgreSQL', letter: 'Pg' },
        { name: 'Redis', letter: 'R' },
        { name: 'MongoDB', letter: 'Mo' },
        { name: 'Firebase', letter: 'Fb' }
      ]
    },
    {
      title: 'CLOUD & DEVOPS',
      skills: [
        { name: 'AWS', letter: 'Aw' },
        { name: 'Azure', letter: 'Az' },
        { name: 'Docker', letter: 'D' },
        { name: 'CI/CD', letter: 'Ci' },
        { name: 'GIT', letter: 'G' }
      ]
    },
    {
      title: 'GAMES',
      skills: [
        { name: 'Unity 5', letter: 'U' },
        { name: 'Construct', letter: 'C' },
        { name: 'Photon', letter: 'P' }
      ]
    }
  ];

  skillDetails: Record<string, SkillDetail> = {
    'Angular': {
      name: 'Angular',
      whatIs: 'Framework web de código aberto mantido pelo Google para desenvolvimento de aplicações SPA (Single Page Applications) robustas e escaláveis utilizando TypeScript.',
      whatFor: 'Construção de painéis administrativos de alta complexidade, dashboards SaaS, e sistemas empresariais que demandam arquitetura rígida, modularização e controle de estado eficiente.',
      howTo: 'Criação de componentes standalone, injeção de dependências robusta, uso de Signals para gerenciamento de estado reativo e roteamento dinâmico com lazy loading.',
      codeSnippet: `// Componente Angular Standalone
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`<button (click)="increment()">Contador: {{ count() }}</button>\`
})
export class CounterComponent {
  count = signal(0);
  
  increment() {
    this.count.update(c => c + 1);
  }
}`,
      codeLanguage: 'typescript'
    },
    'TypeScript': {
      name: 'TypeScript',
      whatIs: 'Um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional e recursos avançados à linguagem, compilando para JavaScript limpo.',
      whatFor: 'Garantir a segurança e robustez do código em tempo de compilação, fornecer auto-complete avançado (IntelliSense) no editor e simplificar a manutenção de grandes bases de código.',
      howTo: 'Definir interfaces explícitas, enums, genéricos (Generics) e tipos utilitários para modelar a consistência dos dados que trafegam entre componentes ou serviços da aplicação.',
      codeSnippet: `interface Usuario {
  id: string;
  nome: string;
  role: 'admin' | 'editor' | 'viewer';
}

function processarUsuario<T extends Usuario>(user: T): string {
  return \`Usuário \${user.nome} (ID: \${user.id}) carregado com sucesso!\`;
}`,
      codeLanguage: 'typescript'
    },
    'JavaScript': {
      name: 'JavaScript',
      whatIs: 'Linguagem de programação leve, interpretada e multiparadigma, essencial para trazer interatividade a páginas web e também usada amplamente no lado do servidor.',
      whatFor: 'Manipulação dinâmica do DOM, requisições assíncronas (APIs/Promises), animações na interface e processamento de regras de negócios no lado do cliente ou do servidor.',
      howTo: 'Manipular objetos estruturados, utilizar métodos modernos de iteração de arrays (como map, filter, reduce), e gerenciar fluxos assíncronos e concorrência via async/await.',
      codeSnippet: `const obterDados = async (url) => {
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados.filter(item => item.ativo);
  } catch (erro) {
    console.error("Erro na requisição:", erro);
  }
};`,
      codeLanguage: 'javascript'
    },
    'HTML/CSS': {
      name: 'HTML/CSS',
      whatIs: 'HTML é a linguagem de marcação padrão para estruturar conteúdos na web. O CSS é a folha de estilos usada para gerenciar o layout, design visual e a responsividade da interface.',
      whatFor: 'Estruturar páginas semânticas para melhor acessibilidade e SEO, e construir layouts complexos que se adaptam a diferentes tamanhos de tela com estilos visuais polidos.',
      howTo: 'Usar tags semânticas estruturadas (header, nav, main, section) no HTML, e usar CSS Grid, Flexbox, Custom Properties (variáveis CSS) e media queries no CSS.',
      codeSnippet: `/* CSS Grid e Flexbox com Custom Properties */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-md);
  padding: 1.5rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}`,
      codeLanguage: 'css'
    },
    'Flutter': {
      name: 'Flutter',
      whatIs: 'SDK de interface de usuário de código aberto desenvolvido pela Google para construir aplicações compiladas nativamente para mobile (Android e iOS), web e desktop.',
      whatFor: 'Desenvolvimento ágil e multiplataforma de aplicativos móveis nativos com renderização rápida de 60fps, alto desempenho gráfico e UI altamente customizada e consistente.',
      howTo: 'Montagem de uma árvore de widgets aninhados (Stateless e Stateful Widgets), gerenciamento de estados dinâmicos (Provider, Bloc ou Signals) e comunicação com APIs nativas ou web.',
      codeSnippet: `import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Flutter App')),
        body: const Center(child: Text('Olá do Flutter!')),
      ),
    );
  }
}`,
      codeLanguage: 'dart'
    },
    'C#': {
      name: 'C#',
      whatIs: 'Linguagem de programação moderna, de propósito geral, fortemente tipada e orientada a objetos desenvolvida pela Microsoft e otimizada para o ecossistema .NET.',
      whatFor: 'Desenvolvimento de APIs robustas, microsserviços de alto desempenho, aplicativos de nível corporativo e lógica de jogos utilizando o motor de jogos Unity.',
      howTo: 'Empregar recursos modernos do C# como Pattern Matching, Records (imutabilidade), Expressões Lambda, manipulação de dados com LINQ e concorrência baseada em Task/async-await.',
      codeSnippet: `public record UserDto(string Id, string Name, string Email);

public class UserService
{
    private readonly List<UserDto> _users = new();

    public async Task<UserDto?> GetUserByIdAsync(string id)
    {
        await Task.Delay(50); // Simula operação de I/O assíncrona
        return _users.FirstOrDefault(u => u.Id == id);
    }
}`,
      codeLanguage: 'csharp'
    },
    '.NET': {
      name: '.NET',
      whatIs: 'Uma plataforma de desenvolvimento de código aberto, gratuita e multiplataforma mantida pela Microsoft, usada para criar uma ampla gama de aplicações modernas.',
      whatFor: 'Hospedar microsserviços Linux ou Windows com alto throughput, desenvolver Web APIs RESTful seguras e integrar sistemas complexos de nível empresarial.',
      howTo: 'Configurar o host da aplicação (WebApplication), registrar serviços usando injeção de dependência nativa do .NET, e criar middlewares customizados para requisições.',
      codeSnippet: `var builder = WebApplication.CreateBuilder(args);

// Adiciona um serviço ao contêiner IoC do .NET
builder.Services.AddScoped<IOrderService, OrderService>();

var app = builder.Build();

app.MapGet("/api/orders/{id}", async (int id, IOrderService service) => 
    await service.GetOrderByIdAsync(id) is { } order 
        ? Results.Ok(order) 
        : Results.NotFound());

app.Run();`,
      codeLanguage: 'csharp'
    },
    'APIs': {
      name: 'APIs',
      whatIs: 'Application Programming Interfaces (Interfaces de Programação de Aplicações) são contratos que permitem que diferentes sistemas se comuniquem e compartilhem recursos.',
      whatFor: 'Interligar o frontend web ou mobile ao banco de dados no backend, conectar microsserviços distribuídos e permitir a integração segura de sistemas de terceiros.',
      howTo: 'Projetar endpoints semânticos e RESTful usando verbos HTTP adequados, retornar códigos de status correspondentes (200, 201, 400, 404, 500), documentar com OpenAPI e proteger com JWT.',
      codeSnippet: `GET /api/v1/produtos?categoria=eletronicos HTTP/1.1
Host: api.meusistema.com
Authorization: Bearer <token_jwt_aqui>
Accept: application/json`,
      codeLanguage: 'http'
    },
    'EntityFramework': {
      name: 'EntityFramework',
      whatIs: 'Entity Framework Core (EF Core) é um mapeador objeto-relacional (ORM) leve, extensível e multiplataforma oficial da Microsoft para o ecossistema .NET.',
      whatFor: 'Abstrair a camada de dados, permitindo consultar e salvar informações no banco de dados usando objetos C# e consultas LINQ fortemente tipadas, evitando códigos SQL manuais.',
      howTo: 'Configurar classes DbContext, modelar tabelas e mapeamentos via Fluent API, gerar e aplicar Migrations por terminal e otimizar queries com AsNoTracking() para leitura rápida.',
      codeSnippet: `public class AppDbContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasPrecision(18, 2);
    }
}

// Consulta otimizada com EF Core:
var products = await _context.Products
    .AsNoTracking()
    .Where(p => p.Price < 100)
    .ToListAsync();`,
      codeLanguage: 'csharp'
    },
    'Node.js': {
      name: 'Node.js',
      whatIs: 'Um ambiente de execução Javascript assíncrono e orientado a eventos construído sobre o motor V8 do Google Chrome, permitindo rodar códigos JS fora do navegador.',
      whatFor: 'Criar servidores de API rápidos, construir ferramentas de linha de comando (CLIs), processar streaming de dados e criar microsserviços de entrada e saída (I/O) intensa.',
      howTo: 'Usar gerenciadores de pacotes (npm/yarn), gerenciar bibliotecas, configurar rotas assíncronas com frameworks rápidos (Express ou Fastify) e tratar dados de forma não-bloqueante.',
      codeSnippet: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => console.log(\`Servidor rodando na porta \${PORT}\`));`,
      codeLanguage: 'javascript'
    },
    'Microsserviços': {
      name: 'Microsserviços',
      whatIs: 'Uma abordagem arquitetural para desenvolver um aplicativo como uma série de pequenos serviços independentes, cada um rodando em seu próprio processo.',
      whatFor: 'Melhorar a escalabilidade modular do sistema, isolar possíveis falhas em serviços críticos, dar flexibilidade tecnológica para equipes e agilizar entregas contínuas.',
      howTo: 'Dividir os serviços por contextos de negócio delimitados (Bounded Contexts), implementar comunicação assíncrona (RabbitMQ/Kafka) ou síncrona (gRPC/HTTP), e orquestrar via Docker/K8s.',
      codeSnippet: `// Exemplo conceitual de publicação de evento assíncrono entre serviços (C#)
var orderEvent = new OrderCreatedEvent(order.Id, order.TotalValue);
await _eventBus.PublishAsync(orderEvent);`,
      codeLanguage: 'csharp'
    },
    'CQRS': {
      name: 'CQRS',
      whatIs: 'Command Query Responsibility Segregation (Segregação de Responsabilidade de Comando e Consulta) é um padrão que separa o modelo de escrita do modelo de leitura de dados.',
      whatFor: 'Otimizar o desempenho e escalabilidade de aplicações de alta concorrência, permitindo o uso de bancos de dados otimizados para buscas rápidas (leitura) e consistência estrutural (escrita).',
      howTo: 'Dividir as ações do sistema em Commands (alteração de estado) e Queries (consulta de dados), orquestrando o roteamento das mensagens por meio de mediadores como o MediatR no .NET.',
      codeSnippet: `// CQRS Command com MediatR no .NET
public record CreateUserCommand(string Name, string Email) : IRequest<Guid>;

public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, Guid>
{
    private readonly IUserRepository _repo;
    public async Task<Guid> Handle(CreateUserCommand command, CancellationToken ct)
    {
        var id = Guid.NewGuid();
        await _repo.AddAsync(new User(id, command.Name, command.Email));
        return id;
    }
}`,
      codeLanguage: 'csharp'
    },
    'SOLID': {
      name: 'SOLID',
      whatIs: 'Acrônimo para cinco princípios fundamentais de design orientado a objetos que promovem códigos estruturados, flexíveis e fáceis de evoluir.',
      whatFor: 'Evitar o acúmulo de débito técnico, reduzir acoplamento prejudicial entre componentes de código, simplificar testes automatizados e guiar a extensibilidade lógica.',
      howTo: 'Escrever classes de responsabilidade única (SRP), usar polimorfismo para extensão sem alteração direta (OCP), injetar interfaces abstratas ao invés de classes concretas (DIP).',
      codeSnippet: `// DIP: O NotificationManager depende de uma interface, não de uma implementação concreta
public interface IEmailSender {
    Task SendEmailAsync(string to, string body);
}

public class NotificationManager {
    private readonly IEmailSender _sender;
    public NotificationManager(IEmailSender sender) {
        _sender = sender; // Injetado dinamicamente
    }
}`,
      codeLanguage: 'csharp'
    },
    'Clean Code': {
      name: 'Clean Code',
      whatIs: 'Filosofia de desenvolvimento que defende a escrita de códigos limpos, legíveis e diretos, focando na intenção e expressividade das instruções.',
      whatFor: 'Facilitar a leitura e entendimento imediato do código por outros desenvolvedores, reduzir a taxa de bugs e minimizar custos de manutenção de software no longo prazo.',
      howTo: 'Escolher nomes significativos e pronunciáveis, estruturar funções pequenas que fazem apenas uma coisa, manter o código livre de redundâncias e refatorar continuamente.',
      codeSnippet: `// Ruim (Bad):
function clc(d, r) {
  return d * r; // calcula valor do imposto
}

// Bom (Clean):
function calculateTaxValue(netValue, taxRate) {
  return netValue * taxRate;
}`,
      codeLanguage: 'javascript'
    },
    'TDD': {
      name: 'TDD',
      whatIs: 'Test-Driven Development (Desenvolvimento Guiado por Testes) é uma técnica de design de software em que os testes unitários são escritos antes do código de produção.',
      whatFor: 'Garantir que os requisitos sejam cumpridos de ponta a ponta, construir uma cobertura sólida contra regressões de bugs e guiar o desenvolvedor para códigos desacoplados.',
      howTo: 'Ciclo Red-Green-Refactor: Escrever um teste que falhe (Red), escrever o código mínimo que faça o teste passar (Green), e refatorar o código sob segurança (Refactor).',
      codeSnippet: `// Teste unitário utilizando C# (xUnit + FluentAssertions)
[Fact]
public void CalculateDiscount_WithValidCoupon_ShouldApplyDiscount()
{
    // Arrange
    var calculator = new DiscountCalculator();
    var originalPrice = 100m;
    var coupon = "PROMO10";

    // Act
    var finalPrice = calculator.Apply(originalPrice, coupon);

    // Assert
    finalPrice.Should().Be(90m);
}`,
      codeLanguage: 'csharp'
    },
    'SQL Server': {
      name: 'SQL Server',
      whatIs: 'Sistema de Gerenciamento de Banco de Dados Relacional (RDBMS) corporativo desenvolvido pela Microsoft, amplamente utilizado no mercado devido ao seu alto desempenho.',
      whatFor: 'Armazenar dados transacionais cruciais de forma segura e estruturada sob os princípios ACID, atendendo a sistemas ERP, financeiros e de logística em larga escala.',
      howTo: 'Modelar tabelas normalizadas, criar índices não-clusterizados para acelerar a leitura de campos muito pesquisados e criar Stored Procedures seguras.',
      codeSnippet: `-- Criação de tabela com chave primária e índice não-clusterizado
CREATE TABLE Clientes (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Nome VARCHAR(150) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL
);

CREATE NONCLUSTERED INDEX IX_Clientes_Email ON Clientes(Email);`,
      codeLanguage: 'sql'
    },
    'PostgreSQL': {
      name: 'PostgreSQL',
      whatIs: 'Banco de dados relacional de código aberto extremamente avançado e extensível, conhecido por sua robustez e excelente conformidade com padrões SQL modernos.',
      whatFor: 'Armazenamento seguro de transações corporativas complexas, projetos com dados espciais (PostGIS) e casos de uso híbridos que combinam dados SQL e JSON.',
      howTo: 'Criar esquemas de tabelas relacionais, indexar colunas JSONB usando índices GIN para buscas rápidas em documentos não estruturados, e utilizar Window Functions.',
      codeSnippet: `-- Criação de tabela com coluna JSONB e pesquisa otimizada
CREATE TABLE EventosLog (
    id SERIAL PRIMARY KEY,
    detalhes JSONB NOT NULL
);

-- Consulta direta utilizando operador JSONB
SELECT * FROM EventosLog 
WHERE detalhes ->> 'status' = 'Erro';`,
      codeLanguage: 'sql'
    },
    'Redis': {
      name: 'Redis',
      whatIs: 'Armazenamento de estruturas de dados na memória RAM do servidor de código aberto, utilizado como banco de dados NoSQL temporário, cache de alta performance e message broker.',
      whatFor: 'Reduzir drasticamente o tempo de resposta e carga em bancos de dados relacionais principais salvando em cache o resultado de consultas pesadas ou sessões de usuários.',
      howTo: 'Instanciar um cliente Redis, serializar objetos complexos para formato string JSON, e persistir chaves com um tempo limite de validade adequado (TTL).',
      codeSnippet: `// Exemplo conceitual de Caching com Redis em Node.js
const cacheKey = 'products:all';
const cachedData = await redisClient.get(cacheKey);

if (cachedData) {
  return JSON.parse(cachedData); // Retorno ultra rápido em RAM
}

const products = await db.queryAllProducts();
await redisClient.setEx(cacheKey, 3600, JSON.stringify(products)); // Cache de 1 hora
return products;`,
      codeLanguage: 'javascript'
    },
    'MongoDB': {
      name: 'MongoDB',
      whatIs: 'Banco de dados orientado a documentos NoSQL de código aberto que armazena informações em estruturas flexíveis conhecidas como documentos BSON (JSON binário).',
      whatFor: 'Armazenar dados com estruturas dinâmicas e mutáveis (como catálogos de e-commerce, perfis e feeds de redes sociais) e escalar horizontalmente de forma simplificada.',
      howTo: 'Modelar documentos focando em aninhamento de dados para otimizar a velocidade de leitura (reduzindo JOINs), criar índices em campos internos e rodar aggregation pipelines.',
      codeSnippet: `// Criação de documento e inserção no MongoDB
db.usuarios.insertOne({
  nome: "Rafael Nunes",
  email: "rafael@email.com",
  habilidades: ["Angular", ".NET", "C#"],
  endereco: { cidade: "Porto Alegre", uf: "RS" }
});`,
      codeLanguage: 'javascript'
    },
    'Firebase': {
      name: 'Firebase',
      whatIs: 'Plataforma integrada da Google que oferece serviços gerenciados em nuvem para acelerar o desenvolvimento de aplicativos mobile e web (Baas - Backend as a Service).',
      whatFor: 'Prototipação rápida, gerenciamento de autenticação segura (OAuth/Senha), banco de dados NoSQL em tempo real (Firestore) e envio de notificações push.',
      howTo: 'Inicializar o SDK do Firebase com as chaves do projeto no frontend, conectar aos serviços desejados (Auth/Firestore) e assinar transmissões em tempo real.',
      codeSnippet: `import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = { /* credenciais da aplicação */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Adicionar registro no Firestore
await addDoc(collection(db, "mensagens"), {
  texto: "Olá do portfolio!",
  criadoEm: new Date()
});`,
      codeLanguage: 'typescript'
    },
    'AWS': {
      name: 'AWS',
      whatIs: 'Amazon Web Services é a plataforma de serviços em nuvem mais robusta e líder de mercado mundial, oferecendo servidores virtuais, bancos gerenciados e armazenamento.',
      whatFor: 'Hospedar infraestruturas em nuvem elásticas de nível global, automatizar escalabilidade de microsserviços, armazenar arquivos estáticos e rodar funções serverless.',
      howTo: 'Configurar instâncias EC2, armazenar uploads em buckets S3 protegidos, criar políticas de controle estritas com IAM e estruturar recursos usando Terraform.',
      codeSnippet: `# Sincronizar diretório estático local com Bucket público S3 via AWS CLI
aws s3 sync ./dist/meu-app s3://meu-s3-bucket-portfolio --acl public-read`,
      codeLanguage: 'bash'
    },
    'Azure': {
      name: 'Azure',
      whatIs: 'A plataforma de computação em nuvem da Microsoft que oferece uma vasta gama de serviços para criação, implantação e gerenciamento de aplicações.',
      whatFor: 'Integrar perfeitamente servidores virtuais à infraestrutura de desenvolvimento C# / .NET, implantar aplicativos web com o App Services e gerenciar chaves no Key Vault.',
      howTo: 'Configurar pipelines de deployment no Azure DevOps, hospedar APIs no Azure App Services, usar funções serverless (Azure Functions) e bancos gerenciados SQL Azure.',
      codeSnippet: `# Criar grupo de recursos na Azure via CLI
az group create --name PortfolioGroup --location eastus

# Fazer deploy de arquivos estáticos de teste
az webapp up --name rafael-portfolio --resource-group PortfolioGroup --html`,
      codeLanguage: 'bash'
    },
    'Docker': {
      name: 'Docker',
      whatIs: 'Plataforma de contêineres de código aberto que permite criar, implantar e gerenciar aplicações dentro de ambientes isolados e idênticos chamados contêineres.',
      whatFor: 'Padronizar o ambiente de desenvolvimento e produção, resolvendo o problema clássico de incompatibilidade de sistemas operacionais e bibliotecas instaladas localmente.',
      howTo: 'Escrever arquivos Dockerfile com imagens base otimizadas e multi-stage builds (reduzindo o tamanho da imagem de produção), e usar o Docker Compose para subir ambientes locais.',
      codeSnippet: `# Dockerfile otimizado para produção (.NET 8)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "MinhaApi.dll"]`,
      codeLanguage: 'dockerfile'
    },
    'CI/CD': {
      name: 'CI/CD',
      whatIs: 'Integração Contínua (CI) e Entrega Contínua (CD) são práticas de automação que permitem testar, compilar e implantar códigos novos continuamente na nuvem.',
      whatFor: 'Evitar falhas manuais no deploy de aplicações, garantir a validação de testes unitários em pull requests abertos e entregar valor em produção de maneira estável.',
      howTo: 'Escrever fluxos de passos estruturados (pipelines) em arquivos YAML do GitHub Actions ou Azure Pipelines, integrando etapas de build, restore, testes e comandos ssh/deploy.',
      codeSnippet: `# Workflow de GitHub Actions (.github/workflows/main.yml)
name: .NET CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0.x'
      - name: Run Tests
        run: dotnet test --no-restore`,
      codeLanguage: 'yaml'
    },
    'GIT': {
      name: 'GIT',
      whatIs: 'O sistema de controle de versão distribuído mais utilizado no mundo para gerenciar e acompanhar o histórico de modificações nos arquivos de um projeto.',
      whatFor: 'Trabalhar em equipe organizando ramificações de tarefas (branches), manter cópias de segurança do histórico do código e isolar recursos em desenvolvimento.',
      howTo: 'Utilizar comandos via terminal para gerenciar arquivos modificados, estruturar commits semânticos sobre o que foi feito, resolver conflitos visuais e criar branches.',
      codeSnippet: `# Criar branch, realizar commit e sincronizar com repositório remoto
git checkout -b feature/novo-modal-skills
git add .
git commit -m "feat: adiciona modal de informações das skills"
git push origin feature/novo-modal-skills`,
      codeLanguage: 'bash'
    },
    'Unity 5': {
      name: 'Unity 5',
      whatIs: 'Motor de desenvolvimento de jogos (Game Engine) multiplataforma robusto para criar mundos 2D, 3D, realidade virtual e simulações complexas de física.',
      whatFor: 'Criar jogos interativos de alto desempenho compilados para PC, console, web e celulares, integrando áudio, animações, luz e física sob scripts C#.',
      howTo: 'Criar scripts que herdam da classe MonoBehaviour, usar o loop do Update() para ler entradas do teclado/mouse, e aplicar forças físicas usando Rigidbody.',
      codeSnippet: `using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 5.0f;
    private Rigidbody2D rb;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(moveX * speed, rb.velocity.y);
    }
}`,
      codeLanguage: 'csharp'
    },
    'Construct': {
      name: 'Construct',
      whatIs: 'Motor de jogos 2D focado em programação visual baseada em planilhas de eventos e lógica declarativa HTML5, eliminando a digitação textual de código na criação de jogos.',
      whatFor: 'Desenvolver jogos 2D rápidos, criar protótipos de mecânicas de física, exportar de forma instantânea para navegadores e criar jogos educativos de forma simplificada.',
      howTo: 'Configurar o layout de objetos, associar behaviors padrões (como plataforma ou projétil) aos elementos visuais e definir gatilhos de eventos na Event Sheet.',
      codeSnippet: `// Estrutura conceitual dos blocos de eventos do Construct:
Condição: Player -> Em colisão com Moeda
Ação: Sistema -> Adicionar 1 ao Placar
Ação: Moeda -> Destruir (Destroy)`,
      codeLanguage: 'javascript'
    },
    'Photon': {
      name: 'Photon',
      whatIs: 'Framework e serviço na nuvem (Photon Engine) de alta performance especializado em conexões multijogador em tempo real e de latência extremamente baixa.',
      whatFor: 'Sincronizar conexões entre jogadores em salas online, gerenciar emparelhamento (matchmaking) e transmitir informações de movimentos e dados de jogo na rede.',
      howTo: 'Importar o pacote Photon Pun na Unity, conectar-se ao servidor na nuvem, gerenciar salas através da API e sincronizar movimentos usando componentes PhotonView.',
      codeSnippet: `using Photon.Pun;
using UnityEngine;

public class NetworkPlayer : MonoBehaviourPunCallbacks
{
    void Start()
    {
        // Verifica se este objeto de rede pertence ao jogador local
        if (photonView.IsMine)
        {
            GetComponent<PlayerController>().enabled = true;
        }
    }
}`,
      codeLanguage: 'csharp'
    }
  };

  selectedSkillDetail: SkillDetail | null = null;
  isModalOpen = false;

  openSkillModal(skillName: string): void {
    const detail = this.skillDetails[skillName];
    if (detail) {
      this.selectedSkillDetail = detail;
      this.isModalOpen = true;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  closeSkillModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      if (!this.isModalOpen) {
        this.selectedSkillDetail = null;
      }
    }, 300); // tempo correspondente ao fade out

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeSkillModal();
    }
  }
}
