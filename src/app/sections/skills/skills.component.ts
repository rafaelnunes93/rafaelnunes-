import { Component, HostListener, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
}

export interface SphereSkill {
  name: string;
  letter: string;
  category: string;
  iconType: 'fa' | 'img' | 'text';
  iconValue: string;
  color: string;
  priority: number;
  x: number;
  y: number;
  z: number;
  cx: number;
  cy: number;
  cz: number;
  screenX: number;
  screenY: number;
  opacity: number;
  scale: number;
  zIndex: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
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

  @ViewChild('sphereContainer') containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('sphereCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  sphereSkills: SphereSkill[] = [];
  animationFrameId: any;

  // Velocidades de rotação
  speedX = 0.0015;
  speedY = 0.0015;

  currentRotationX = 0;
  currentRotationY = 0;

  // Estados de arrastar/drag
  isDragging = false;
  startX = 0;
  startY = 0;
  lastMouseX = 0;
  lastMouseY = 0;
  dragDistance = 0;

  // Centro e raio
  centerX = 250;
  centerY = 250;
  radius = 200;

  rotatePoint(x: number, y: number, z: number, ax: number, ay: number): { x: number, y: number, z: number } {
    const cosX = Math.cos(ax);
    const sinX = Math.sin(ax);
    const cosY = Math.cos(ay);
    const sinY = Math.sin(ay);

    // Rotate Y
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;

    // Rotate X
    const y2 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;

    return { x: x1, y: y2, z: z2 };
  }

  skillConfigs: Record<string, { iconType: 'fa' | 'img' | 'text', iconValue: string, color: string, priority: number }> = {
    'Angular': { iconType: 'fa', iconValue: 'fa-brands fa-angular', color: '#dd0031', priority: 1 },
    'TypeScript': { iconType: 'text', iconValue: 'TS', color: '#3178c6', priority: 1 },
    'JavaScript': { iconType: 'text', iconValue: 'JS', color: '#f7df1e', priority: 2 },
    'HTML/CSS': { iconType: 'fa', iconValue: 'fa-brands fa-html5', color: '#e34f26', priority: 2 },
    'Flutter': { iconType: 'text', iconValue: 'F', color: '#02569b', priority: 3 },
    'C#': { iconType: 'img', iconValue: 'assets/images/c-sharp-logo.png', color: '#512bd4', priority: 1 },
    '.NET': { iconType: 'img', iconValue: 'assets/images/net8.png', color: '#512bd4', priority: 1 },
    'APIs': { iconType: 'img', iconValue: 'assets/images/api.png', color: '#14e956', priority: 1 },
    'EntityFramework': { iconType: 'img', iconValue: 'assets/images/ef.png', color: '#512bd4', priority: 1 },
    'Node.js': { iconType: 'fa', iconValue: 'fa-brands fa-node-js', color: '#339933', priority: 3 },
    'Microsserviços': { iconType: 'fa', iconValue: 'fa-solid fa-cubes', color: '#a855f7', priority: 1 },
    'CQRS': { iconType: 'fa', iconValue: 'fa-solid fa-shuffle', color: '#a855f7', priority: 2 },
    'SOLID': { iconType: 'fa', iconValue: 'fa-solid fa-ruler-combined', color: '#a855f7', priority: 1 },
    'Clean Code': { iconType: 'fa', iconValue: 'fa-solid fa-sparkles', color: '#a855f7', priority: 1 },
    'TDD': { iconType: 'fa', iconValue: 'fa-solid fa-flask', color: '#a855f7', priority: 3 },
    'SQL Server': { iconType: 'img', iconValue: 'assets/images/sql.png', color: '#cc292b', priority: 1 },
    'PostgreSQL': { iconType: 'img', iconValue: 'assets/images/postgree.png', color: '#336791', priority: 2 },
    'Redis': { iconType: 'fa', iconValue: 'fa-solid fa-layer-group', color: '#d82c20', priority: 2 },
    'MongoDB': { iconType: 'img', iconValue: 'assets/images/mongo.png', color: '#47a248', priority: 2 },
    'Firebase': { iconType: 'fa', iconValue: 'fa-solid fa-fire', color: '#ffca28', priority: 3 },
    'AWS': { iconType: 'fa', iconValue: 'fa-brands fa-aws', color: '#ff9900', priority: 2 },
    'Azure': { iconType: 'img', iconValue: 'assets/images/azure.png', color: '#0078d4', priority: 2 },
    'Docker': { iconType: 'fa', iconValue: 'fa-brands fa-docker', color: '#2496ed', priority: 2 },
    'CI/CD': { iconType: 'fa', iconValue: 'fa-solid fa-infinity', color: '#00ff88', priority: 2 },
    'GIT': { iconType: 'fa', iconValue: 'fa-brands fa-git-alt', color: '#f05032', priority: 2 },
    'Unity 5': { iconType: 'fa', iconValue: 'fa-brands fa-unity', color: '#ffffff', priority: 3 },
    'Construct': { iconType: 'fa', iconValue: 'fa-solid fa-gamepad', color: '#ff5c00', priority: 3 },
    'Photon': { iconType: 'fa', iconValue: 'fa-solid fa-bolt', color: '#00c0ff', priority: 3 }
  };

  ngOnInit(): void {
    this.initializeSphere();
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.resizeCanvas();
        this.animate();
      }, 50);
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId && typeof window !== 'undefined') {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  initializeSphere(): void {
    const N = 28;
    const tempSkills: SphereSkill[] = [];
    
    // Flatten categories into list of skills
    for (const cat of this.categories) {
      for (const skill of cat.skills) {
        const config = this.skillConfigs[skill.name] || { iconType: 'text', iconValue: skill.letter, color: '#00ff88', priority: 3 };
        tempSkills.push({
          name: skill.name,
          letter: skill.letter,
          category: cat.title,
          iconType: config.iconType,
          iconValue: config.iconValue,
          color: config.color,
          priority: config.priority,
          x: 0, y: 0, z: 0,
          cx: 0, cy: 0, cz: 0,
          screenX: 0, screenY: 0,
          opacity: 0, scale: 0, zIndex: 0
        });
      }
    }
    
    // Sort skills by priority (1 is highest, 3 is lowest)
    // Primary skills (.NET, C#, etc.) will be at the beginning of the list
    tempSkills.sort((a, b) => a.priority - b.priority);
    
    // Generate 28 points on the unit sphere
    const points: Array<{x: number, y: number, z: number}> = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      points.push({ x, y, z });
    }
    
    // Sort points by z descending (closest to camera first, i.e. z values closest to 1)
    points.sort((a, b) => b.z - a.z);
    
    // Assign sorted points to sorted skills
    for (let i = 0; i < N; i++) {
      if (tempSkills[i] && points[i]) {
        tempSkills[i].x = points[i].x;
        tempSkills[i].y = points[i].y;
        tempSkills[i].z = points[i].z;
        
        tempSkills[i].cx = points[i].x;
        tempSkills[i].cy = points[i].y;
        tempSkills[i].cz = points[i].z;
      }
    }
    
    this.sphereSkills = tempSkills;
  }

  resizeCanvas(): void {
    if (typeof window === 'undefined' || !this.containerRef || !this.canvasRef) return;
    const container = this.containerRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    this.centerX = width / 2;
    this.centerY = height / 2;
    
    // Adjust sphere radius based on client width (increased size)
    if (width < 600) {
      this.radius = 150;
    } else if (width < 992) {
      this.radius = 210;
    } else {
      this.radius = 250;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
  }

  animate(): void {
    if (typeof window === 'undefined') return;
    
    this.updateRotation();
    this.projectPoints();
    this.drawCanvas();
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  updateRotation(): void {
    const friction = 0.96;
    const idleSpeedX = 0.0015;
    const idleSpeedY = 0.0015;

    if (!this.isDragging) {
      // Return slowly to idle rotation speeds
      this.speedX = this.speedX * friction + idleSpeedX * (1 - friction);
      this.speedY = this.speedY * friction + idleSpeedY * (1 - friction);
    }

    this.currentRotationX += this.speedX;
    this.currentRotationY += this.speedY;

    // Keep angles within [0, 2*PI]
    this.currentRotationX = this.currentRotationX % (2 * Math.PI);
    this.currentRotationY = this.currentRotationY % (2 * Math.PI);

    // Calculate current positions based on initial coordinates
    for (const skill of this.sphereSkills) {
      const rotated = this.rotatePoint(skill.x, skill.y, skill.z, this.currentRotationX, this.currentRotationY);
      skill.cx = rotated.x;
      skill.cy = rotated.y;
      skill.cz = rotated.z;
    }
  }

  projectPoints(): void {
    const d = 2.2; // Perspective depth divisor

    for (const skill of this.sphereSkills) {
      const depthScale = d / (d - skill.cz);
      
      skill.screenX = this.centerX + skill.cx * this.radius * depthScale;
      skill.screenY = this.centerY + skill.cy * this.radius * depthScale;
      
      skill.scale = depthScale;
      skill.opacity = 0.15 + 0.85 * (skill.cz + 1) / 2;
      skill.zIndex = Math.round((skill.cz + 1) * 100);
    }
  }

  drawCanvas(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const latRings = 9; // Number of latitude rings
    const lonRings = 8; // Number of longitude meridians
    const segments = 60; // Smoothness of rings

    // Draw latitude circles
    for (let i = 1; i < latRings; i++) {
      const lat = -Math.PI / 2 + (i / latRings) * Math.PI;
      const rLat = Math.cos(lat);
      const yLat = Math.sin(lat);
      
      ctx.beginPath();
      for (let s = 0; s <= segments; s++) {
        const lon = (s / segments) * 2 * Math.PI;
        const x = Math.cos(lon) * rLat;
        const z = Math.sin(lon) * rLat;
        
        const rotated = this.rotatePoint(x, yLat, z, this.currentRotationX, this.currentRotationY);
        
        const depthScale = 2.2 / (2.2 - rotated.z);
        const screenX = this.centerX + rotated.x * this.radius * depthScale;
        const screenY = this.centerY + rotated.y * this.radius * depthScale;
        
        if (s === 0) {
          ctx.moveTo(screenX, screenY);
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      
      const avgZ = Math.sin(lat); // approximate depth for color gradient
      const alpha = 0.05 + 0.08 * (Math.sin(lat) + 1) / 2; // subtle depth-based alpha
      ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    // Draw longitude meridians
    for (let i = 0; i < lonRings; i++) {
      const lon = (i / lonRings) * Math.PI;
      
      ctx.beginPath();
      for (let s = 0; s <= segments; s++) {
        const lat = (s / segments) * 2 * Math.PI;
        const x = Math.cos(lat) * Math.cos(lon);
        const y = Math.sin(lat);
        const z = Math.cos(lat) * Math.sin(lon);
        
        const rotated = this.rotatePoint(x, y, z, this.currentRotationX, this.currentRotationY);
        
        const depthScale = 2.2 / (2.2 - rotated.z);
        const screenX = this.centerX + rotated.x * this.radius * depthScale;
        const screenY = this.centerY + rotated.y * this.radius * depthScale;
        
        if (s === 0) {
          ctx.moveTo(screenX, screenY);
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.06)';
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragDistance = 0;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      if (!this.containerRef) return;
      const container = this.containerRef.nativeElement;
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      
      const mouseX = clientX - this.centerX;
      const mouseY = clientY - this.centerY;
      const dist = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      
      if (dist < this.radius * 1.5) {
        const targetSpeedX = -(mouseY / this.centerY) * 0.005;
        const targetSpeedY = (mouseX / this.centerX) * 0.005;
        
        this.speedX = this.speedX * 0.9 + targetSpeedX * 0.1;
        this.speedY = this.speedY * 0.9 + targetSpeedY * 0.1;
      }
      return;
    }

    const dx = event.clientX - this.lastMouseX;
    const dy = event.clientY - this.lastMouseY;
    
    this.speedY = dx * 0.003;
    this.speedX = -dy * 0.003;
    
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
    
    const totalDx = event.clientX - this.startX;
    const totalDy = event.clientY - this.startY;
    this.dragDistance = Math.sqrt(totalDx * totalDx + totalDy * totalDy);
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  onMouseLeave(): void {
    this.isDragging = false;
  }

  onTouchStart(event: TouchEvent): void {
    if (event.touches.length === 0) return;
    const touch = event.touches[0];
    this.isDragging = true;
    this.dragDistance = 0;
    this.startX = touch.clientX;
    this.startY = touch.clientY;
    this.lastMouseX = touch.clientX;
    this.lastMouseY = touch.clientY;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging || event.touches.length === 0) return;
    const touch = event.touches[0];
    
    const dx = touch.clientX - this.lastMouseX;
    const dy = touch.clientY - this.lastMouseY;
    
    this.speedY = dx * 0.004;
    this.speedX = -dy * 0.004;
    
    this.lastMouseX = touch.clientX;
    this.lastMouseY = touch.clientY;
    
    const totalDx = touch.clientX - this.startX;
    const totalDy = touch.clientY - this.startY;
    this.dragDistance = Math.sqrt(totalDx * totalDx + totalDy * totalDy);
  }

  onSkillClick(event: MouseEvent, skillName: string): void {
    if (this.dragDistance > 8) {
      return; // It was a spin action, not a click
    }
    this.openSkillModal(skillName);
  }

  skillDetails: Record<string, SkillDetail> = {
    'Angular': {
      name: 'Angular',
      whatIs: 'Framework web de código aberto mantido pelo Google para desenvolvimento de aplicações SPA (Single Page Applications) robustas, dinâmicas e altamente escaláveis utilizando TypeScript.',
      whatFor: 'Construção de painéis administrativos complexos, dashboards SaaS, plataformas corporativas e portais que demandam uma arquitetura limpa, padronizada, modular e com gerenciamento de estado reativo eficiente.',
      howTo: 'Utilizar as melhores práticas modernas da plataforma:<ul><li><strong>Signals:</strong> Gerenciamento de estado reativo e controle de fluxo de dados ultra-performático, permitindo atualizações de tela granulares sem a sobrecarga do Zone.js.</li><li><strong>Componentes Standalone:</strong> Abordagem moderna livre do uso desnecessário de NgModules, simplificando a declaração de dependências e tornando o código mais leve e legível.</li><li><strong>Novo Fluxo de Controle:</strong> Utilização da sintaxe nativa do compilador (como <code>@if</code>, <code>@for</code>, <code>@switch</code>) para melhor performance de renderização.</li><li><strong>Deferrable Views:</strong> Carregamento sob demanda (lazy loading granular) de componentes e seções pesadas através do bloco <code>@defer</code>, melhorando consideravelmente o tempo de carregamento inicial (LCP).</li></ul><strong>Estrutura de pastas típica de um workspace Angular profissional:</strong><pre>src/app/\n├── components/     (Componentes visuais reutilizáveis)\n├── directives/     (Diretivas customizadas para manipulação do DOM)\n├── models/         (Interfaces, tipos e modelos TypeScript)\n├── services/       (Consumo de APIs, regras de negócio e dados globais)\n└── sections/       (Seções principais estruturadas da página principal)</pre>'
    },
    'TypeScript': {
      name: 'TypeScript',
      whatIs: 'Um superconjunto (superset) de JavaScript de código aberto desenvolvido pela Microsoft que adiciona tipagem estática opcional, interfaces e recursos modernos à linguagem.',
      whatFor: 'Detectar erros em tempo de compilação antes mesmo do código rodar em produção, fornecer autocompletar inteligente (IntelliSense) avançado e facilitar o refatoramento em grandes projetos complexos.',
      howTo: 'Aplicar recursos de tipagem estática robusta para aumentar a segurança do código:<ul><li><strong>Interfaces e Types:</strong> Definição explícita do formato de objetos de dados. Prefira Interfaces para modelar entidades extensíveis e Types para uniões, interseções e aliases complexos.</li><li><strong>Generics (Tipagem Genérica):</strong> Criação de componentes, classes e funções reutilizáveis e flexíveis que funcionam com múltiplos tipos sob segurança (ex: <code>Repository&lt;T&gt;</code>).</li><li><strong>Tipos Utilitários (Utility Types):</strong> Utilização de utilitários embutidos para transformar tipos existentes de forma dinâmica (ex: <code>Partial&lt;T&gt;</code>, <code>Omit&lt;T, K&gt;</code>, <code>Readonly&lt;T&gt;</code>).</li></ul>'
    },
    'JavaScript': {
      name: 'JavaScript',
      whatIs: 'Linguagem de programação interpretada, multiparadigma, baseada em protótipos e de alto nível, sendo a principal linguagem executada nativamente nos navegadores web.',
      whatFor: 'Manipulação de elementos da página em tempo real (DOM), envio e recepção de dados assíncronos (APIs REST/GraphQL), desenvolvimento server-side (Node.js) e criação de animações interativas.',
      howTo: 'Dominar os fundamentos modernos e o funcionamento interno do motor JS (V8):<ul><li><strong>Assincronismo e Event Loop:</strong> Gerenciar fluxos não-bloqueantes usando Promises e sintaxe <code>async/await</code>, entendendo a separação entre microtasks (como resoluções de Promises) e macrotasks (como setTimeout).</li><li><strong>Recursos Modernos (ES6+):</strong> Escrever código elegante utilizando Arrow Functions, Destructuring (desestruturação), Spread e Rest operators, e Template Literals.</li><li><strong>Escopo e Closures:</strong> Utilizar declarações adequadas (<code>let</code>, <code>const</code>) para escopo de bloco e criar funções que guardam referências ao seu escopo léxico de origem (closures).</li></ul>'
    },
    'HTML/CSS': {
      name: 'HTML/CSS',
      whatIs: 'HTML (HyperText Markup Language) é o esqueleto e a estrutura semântica das páginas web, enquanto o CSS (Cascading Style Sheets) gerencia o layout visual, tipografia, cores e responsividade da interface.',
      whatFor: 'Construir layouts elegantes e responsivos que se adaptam perfeitamente a qualquer dispositivo (celulares, tablets, desktops), garantindo boa acessibilidade (A11y) e otimização para motores de busca (SEO).',
      howTo: 'Combinar marcação semântica com técnicas modernas de estilização CSS:<ul><li><strong>HTML5 Semântico:</strong> Utilizar elementos adequados (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>) no lugar de divs genéricas para otimizar SEO e leitores de tela.</li><li><strong>Layouts Responsivos com CSS Grid e Flexbox:</strong> Usar Flexbox para distribuições lineares unidimensionais e CSS Grid para layouts bidimensionais complexos baseados em colunas e linhas flexíveis.</li><li><strong>CSS Custom Properties (Variáveis):</strong> Definir tokens de design centralizados (como cores de tema, fontes e espaçamentos) para permitir a alternância fácil entre temas (ex: Dark Mode) e centralizar estilos.</li></ul>'
    },
    'Flutter': {
      name: 'Flutter',
      whatIs: 'SDK de interface de usuário (UI Toolkit) de código aberto criado pela Google para construir aplicações compiladas nativamente para mobile (Android, iOS), web, desktop e sistemas embarcados a partir de uma única base de código usando a linguagem Dart.',
      whatFor: 'Desenvolver aplicativos móveis multiplataforma rápidos com foco em alto desempenho gráfico, designs ricos e customizados, ciclos rápidos de desenvolvimento e consistência pixel-perfect em diferentes telas.',
      howTo: 'Estruturar o aplicativo por meio da árvore de widgets e gerenciamento de estado reativo:<ul><li><strong>Widgets Declarativos:</strong> Compreender o ciclo de vida dos widgets, dividindo a tela entre <code>StatelessWidget</code> (imutável e estático) e <code>StatefulWidget</code> (mutável, com controle de estado interno).</li><li><strong>Gerenciamento de Estado:</strong> Centralizar e propagar a lógica de negócios por padrões estabelecidos como <strong>BLoC (Business Logic Component)</strong>, <strong>Provider</strong>, <strong>Riverpod</strong> ou <strong>Signals</strong>.</li><li><strong>Navegação e Integração:</strong> Gerenciar rotas declarativas e consumir APIs externas de forma eficiente com pacotes como o Dio ou Http.</li></ul><strong>Estrutura típica de pastas em projetos Flutter:</strong><pre>lib/\n├── main.dart        (Ponto de entrada do aplicativo)\n├── models/          (Modelagem das entidades de dados)\n├── views/           (Telas, componentes e widgets visuais)\n├── controllers/     (Regras de negócio e gerência de estados)\n└── services/        (Comunicação HTTP e armazenamento local)</pre>'
    },
    'C#': {
      name: 'C#',
      whatIs: 'Linguagem de programação moderna, fortemente tipada, compilada, multiplataforma e puramente <strong>Orientada a Objetos (POO)</strong>, desenvolvida pela Microsoft como parte fundamental do ecossistema .NET.',
      whatFor: 'Desenvolver APIs RESTful robustas, microsserviços escaláveis de alta performance, aplicações web corporativas seguras, softwares desktop e jogos 2D/3D (com o motor Unity).',
      howTo: 'Construir códigos aplicando rigorosamente os <strong>4 pilares da POO</strong> e padrões de design modernos:<ul><li><strong>Abstração:</strong> Isolar e mapear características essenciais do mundo real para objetos de software, ocultando complexidades desnecessárias no nível de lógica de negócios.</li><li><strong>Encapsulamento:</strong> Ocultar o estado interno de um objeto por meio de modificadores de acesso restritos (<code>private</code>, <code>protected</code>), expondo ações apenas por métodos ou propriedades públicas controladas.</li><li><strong>Herança:</strong> Permitir que classes compartilhem comportamentos e atributos comuns de uma classe pai (base), evitando código duplicado e criando hierarquias claras.</li><li><strong>Polimorfismo:</strong> Capacidade de tratar objetos de classes filhas como instâncias da classe pai, permitindo a sobrescrita (override) de métodos para comportamentos específicos.</li></ul>'
    },
    '.NET': {
      name: '.NET',
      whatIs: 'Plataforma e ecossistema de desenvolvimento gratuito, de código aberto e multiplataforma mantido pela Microsoft e pela comunidade de desenvolvedores, usado para construir soluções de ponta.',
      whatFor: 'Hospedar servidores Web de altíssimo desempenho, rodar microsserviços orquestrados em contêineres Linux/Windows, conectar-se a bases de dados massivas e assegurar transações sob as regras do mercado corporativo.',
      howTo: 'Configurar o host da aplicação e gerenciar os recursos de injeção de dependência nativos:<ul><li><strong>Ciclo de Vida do Container DI:</strong> Registrar dependências de acordo com seu escopo ideal de uso:<ul><li><strong>Transient:</strong> Uma nova instância é criada a cada vez que o serviço é solicitado.</li><li><strong>Scoped:</strong> Uma instância é criada uma única vez por requisição HTTP do cliente (comum para DB Context).</li><li><strong>Singleton:</strong> Uma instância é criada uma única vez e compartilhada globalmente durante toda a execução da aplicação.</li></ul></li><li><strong>Pipeline de Middlewares:</strong> Registrar e ordenar componentes de processamento de requisição (Auth, CORS, Logging, Exception Handling) no pipeline do ASP.NET Core.</li><li><strong>Configurações Flexíveis:</strong> Utilizar IConfiguration para ler variáveis de ambiente e arquivos appsettings.json de forma estruturada.</li></ul>'
    },
    'APIs': {
      name: 'APIs',
      whatIs: 'Application Programming Interfaces (Interfaces de Programação de Aplicações) construídas com base no padrão arquitetural REST (Representational State Transfer), que operam sobre o protocolo HTTP de forma padronizada.',
      whatFor: 'Integrar sistemas distribuídos de forma segura, expor dados e recursos do banco de dados para clientes externos (Web e Mobile) e garantir que a lógica de negócios backend seja acessível de maneira padronizada.',
      howTo: 'Projetar e otimizar APIs seguindo os critérios do <strong>Modelo de Maturidade de Richardson</strong>:<ul><li><strong>Nível 0 - O Pântano de POX:</strong> Uso do HTTP apenas como canal de transporte de mensagens remotas (geralmente RPC usando apenas o método POST para tudo).</li><li><strong>Nível 1 - Recursos:</strong> Uso correto de URIs semânticas e exclusivas para identificar recursos de dados separados (ex: <code>/api/pedidos</code>).</li><li><strong>Nível 2 - Verbos e Status HTTP:</strong> Utilização estrita dos verbos HTTP corretos (GET para buscas, POST para criação, PUT/PATCH para atualização, DELETE para remoção) e códigos de retorno apropriados (ex: 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Error).</li><li><strong>Nível 3 - HATEOAS:</strong> Envio de links hiperlinks dinâmicos nas respostas que instruem o cliente sobre quais ações seguintes ele pode executar a partir daquele recurso.</li></ul>'
    },
    'EntityFramework': {
      name: 'EntityFramework',
      whatIs: 'Entity Framework Core (EF Core) é um moderno mapeador objeto-relacional (ORM) de código aberto, extensível e multiplataforma oficial da Microsoft para o ecossistema .NET.',
      whatFor: 'Abstrair a camada de acesso a dados relacionais, permitindo interagir com bancos de dados utilizando objetos C# fortemente tipados e consultas escritas em LINQ, reduzindo drasticamente a escrita de código SQL manual.',
      howTo: 'Modelar mapeamentos e otimizar o consumo do banco de dados:<ul><li><strong>Code-First &amp; Migrations:</strong> Desenvolver o modelo em código C# e gerar arquivos de migração que gerenciam a evolução do esquema do banco de dados de forma automatizada por terminal.</li><li><strong>Fluent API:</strong> Configurar relacionamentos complexos, chaves estrangeiras, índices e filtros globais usando o método <code>OnModelCreating</code> do DbContext.</li><li><strong>Otimizações de Performance:</strong> Usar <code>AsNoTracking()</code> para consultas apenas de leitura (desabilita o monitoramento de estado de entidades, poupando memória e CPU) e utilizar Split Queries para evitar a explosão cartesiana em joins complexos.</li></ul>'
    },
    'Node.js': {
      name: 'Node.js',
      whatIs: 'Ambiente de execução (runtime) JavaScript assíncrono, de código aberto e multiplataforma construído sobre o motor V8 do Google Chrome, executando código JS diretamente no servidor.',
      whatFor: 'Desenvolver aplicações de rede rápidas e escaláveis, servidores de API com alto tráfego, microsserviços leves e ferramentas de automação de fluxo de desenvolvimento frontend.',
      howTo: 'Aproveitar o modelo de I/O assíncrono e não-bloqueante orientado a eventos do Node.js:<ul><li><strong>Event Loop:</strong> Compreender o ciclo de execução do Node.js que processa requisições de forma concorrente em uma única thread principal, delegando tarefas pesadas para a thread pool interna (libuv).</li><li><strong>Express / Fastify:</strong> Utilizar frameworks web minimalistas e rápidos para roteamento HTTP e gerenciamento de middlewares robustos.</li><li><strong>Gerenciamento de Pacotes:</strong> Utilizar o NPM, Yarn ou PNPM para instalar e gerenciar pacotes reutilizáveis do ecossistema, garantindo versionamento seguro.</li></ul>'
    },
    'Microsserviços': {
      name: 'Microsserviços',
      whatIs: 'Abordagem arquitetural de desenvolvimento de software onde uma aplicação complexa é dividida em um conjunto de pequenos serviços autônomos, focados em um único contexto de negócios (Bounded Context).',
      whatFor: 'Escalar horizontalmente partes isoladas de um sistema de forma independente, reduzir acoplamento técnico entre equipes e permitir deploys contínuos e resilientes sem derrubar toda a aplicação.',
      howTo: 'Implementar padrões de comunicação e resiliência adequados ao ecossistema distribuído:<ul><li><strong>API Gateway:</strong> Ponto de entrada unificado que centraliza roteamento, segurança, limitação de taxa (rate limiting) e balanceamento de carga (ex: YARP ou Ocelot).</li><li><strong>Service Discovery:</strong> Mecanismo dinâmico de localização de instâncias de serviços ativas (ex: Consul ou Eureka).</li><li><strong>Mensageria Assíncrona:</strong> Comunicação desacoplada orientada a eventos para integração assíncrona entre microsserviços, utilizando brokers de mensagens como <strong>RabbitMQ</strong> ou <strong>Apache Kafka</strong>.</li><li><strong>Resiliência e Tolerância a Falhas:</strong> Implementar o padrão <strong>Circuit Breaker</strong> (disjuntor) usando bibliotecas como Polly no .NET para interromper requisições temporariamente a serviços instáveis, e o padrão <strong>Saga</strong> para transações distribuídas consistentes.</li></ul>'
    },
    'CQRS': {
      name: 'CQRS',
      whatIs: '<strong>Command Query Responsibility Segregation</strong> (Segregação de Responsabilidade de Comando e Consulta) é um padrão arquitetural que separa logicamente (e opcionalmente de forma física) as operações de escrita (Commands) das operações de leitura (Queries) de dados.',
      whatFor: 'Otimizar o desempenho, a segurança e a escalabilidade de sistemas de alta concorrência, permitindo projetar modelos de dados e consultas altamente performáticos e separados do domínio transacional pesado.',
      howTo: 'Dividir a aplicação em dois fluxos de responsabilidade distintos baseados em intenção:<ul><li><strong>Commands (Comandos):</strong> Operações que alteram o estado do sistema (criar, atualizar, deletar). Elas contêm validações de regras de negócios rigorosas e não retornam dados complexos, apenas confirmações.</li><li><strong>Queries (Consultas):</strong> Operações puras de leitura de dados. Elas não alteram estado, retornando DTOs (Data Transfer Objects) estruturados sob medida para exibição nas telas com o menor tempo de resposta possível.</li></ul><strong>Estrutura de pastas típica de um projeto utilizando CQRS por recursos (Features):</strong><pre>src/Application/\n└── Features/Products/\n    ├── Commands/                   (Comandos de Escrita)\n    │   ├── CreateProduct/\n    │   │   ├── CreateProductCommand.cs\n    │   │   ├── CreateProductCommandHandler.cs\n    │   │   └── CreateProductCommandValidator.cs\n    │   └── DeleteProduct/\n    └── Queries/                    (Consultas de Leitura)\n        ├── GetProductById/\n        │   ├── GetProductByIdQuery.cs\n        │   └── GetProductByIdQueryHandler.cs\n        └── GetProductsList/</pre>'
    },
    'SOLID': {
      name: 'SOLID',
      whatIs: 'Acrônimo mnemônico que representa os cinco princípios fundamentais de design de código orientado a objetos descritos por Robert C. Martin (Uncle Bob), visando tornar o software mais fácil de entender, manter e estender.',
      whatFor: 'Evitar o acúmulo de débito técnico, reduzir o acoplamento rígido entre componentes do sistema, melhorar a testabilidade e garantir que o software possa evoluir sem quebrar funcionalidades já existentes.',
      howTo: 'Aplicar rigorosamente os cinco princípios fundamentais no design de classes e módulos:<ul><li><strong>S - Single Responsibility Principle (Princípio da Responsabilidade Única):</strong> Uma classe deve ter uma, e apenas uma, razão para mudar. Ela deve fazer apenas uma coisa de forma isolada.</li><li><strong>O - Open/Closed Principle (Princípio Aberto/Fechado):</strong> Entidades de software devem estar abertas para extensão, mas fechadas para modificações diretas no código original.</li><li><strong>L - Liskov Substitution Principle (Princípio da Substituição de Liskov):</strong> Classes derivadas devem ser substituíveis por suas classes base sem quebrar o comportamento esperado da aplicação.</li><li><strong>I - Interface Segregation Principle (Princípio da Segregação de Interfaces):</strong> Uma classe não deve ser forçada a depender de assinaturas de interfaces e métodos que ela não consome. É melhor ter várias interfaces específicas do que uma interface genérica inflada.</li><li><strong>D - Dependency Inversion Principle (Princípio da Inversão de Dependência):</strong> Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de soluções abstratas (interfaces). Abstrações não devem depender de detalhes, mas os detalhes devem depender de abstrações.</li></ul>'
    },
    'Clean Code': {
      name: 'Clean Code',
      whatIs: 'Filosofia de desenvolvimento de software focada na legibilidade, clareza, simplicidade e facilidade de manutenção de código-fonte, aplicando regras e padrões universais de engenharia de software.',
      whatFor: 'Reduzir a complexidade acidental das aplicações, acelerar o tempo de integração de novos membros no time, facilitar a correção de bugs de forma segura e garantir a longevidade do produto digital.',
      howTo: 'Seguir padrões de escrita limpa (nomes significativos para variáveis, métodos pequenos e especializados, tratamento de exceções adequado) e organizar os projetos utilizando os anéis de dependência da **Arquitetura Limpa (Clean Architecture)**:<ul><li><strong>Domain (Domínio):</strong> O coração do sistema. Contém entidades puras de negócio, interfaces e exceções específicas. Depende de nada e é isolado de tecnologias externas.</li><li><strong>Application (Aplicação):</strong> Contém os casos de uso do sistema, lógica de fluxos de negócio, CQRS e interfaces de serviços externos.</li><li><strong>Infrastructure (Infraestrutura):</strong> Implementação concreta de acessos (EF Core DbContext, conexões com filas, envio de e-mails, cache Redis, serviços de nuvem).</li><li><strong>WebAPI / Presentation (Apresentação):</strong> Ponto de entrada da aplicação contendo controladores HTTP, middlewares, validações de requisição e configurações do container de DI.</li></ul><strong>Estrutura de pastas típica de uma solução em Clean Architecture:</strong><pre>src/\n├── Domain/          (Entidades de negócio, interfaces, value objects)\n├── Application/     (Casos de uso, DTOs, Handlers, validators)\n├── Infrastructure/  (Persistência, DBContext, Caching, gateways externos)\n└── WebAPI/          (Endpoints, controllers, middlewares, Program.cs)</pre>'
    },
    'TDD': {
      name: 'TDD',
      whatIs: '<strong>Test-Driven Development</strong> (Desenvolvimento Guiado por Testes) é um processo de desenvolvimento de software iterativo onde a escrita de testes unitários antecede a implementação do código de produção correspondente.',
      whatFor: 'Garantir que as especificações do sistema sejam cobertas de forma minuciosa, reduzir consideravelmente o surgimento de bugs regressivos (quebras ao modificar código antigo) e guiar o desenvolvedor para a criação de um design simples e desacoplado.',
      howTo: 'Praticar consistentemente o ciclo contínuo de três fases conhecido como <strong>Red-Green-Refactor</strong>:<ul><li><strong>1. Red (Escrever um teste que falha):</strong> Criar um teste unitário que valida um comportamento esperado de uma funcionalidade que ainda não foi desenvolvida. O teste deve falhar de forma previsível.</li><li><strong>2. Green (Fazer o teste passar):</strong> Escrever o código mínimo de produção suficiente para que o teste recém-criado passe com sucesso (mesmo que não seja o código mais limpo ou otimizado neste momento).</li><li><strong>3. Refactor (Melhorar o código sob segurança):</strong> Refatorar o código recém-escrito, eliminando duplicações, limpando nomes de variáveis e otimizando a estrutura interna, rodando os testes a cada pequena mudança para garantir que nada foi quebrado.</li></ul>Entender a pirâmide de testes de software: testes <strong>Unitários</strong> (validação isolada de unidades lógicas), testes de <strong>Integração</strong> (validação do acoplamento entre múltiplos componentes ou serviços reais/banco) e testes <strong>End-to-End (E2E)</strong> (validação do fluxo completo simulando a jornada real do usuário final).'
    },
    'SQL Server': {
      name: 'SQL Server',
      whatIs: 'Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR) robusto e corporativo desenvolvido pela Microsoft, com excelente suporte a transações massivas e integridade de dados.',
      whatFor: 'Armazenar informações de sistemas transacionais que requerem consistência absoluta, controle transacional complexo, conformidade ACID e alto nível de auditoria e segurança.',
      howTo: 'Modelar bancos relacionais respeitando formas normais e garantindo transações protegidas pelos princípios do **ACID**:<ul><li><strong>Atomicidade:</strong> Garante que a transação ocorra por inteiro ou não seja executada (tudo ou nada). Se houver uma falha no meio, ocorre Rollback automático.</li><li><strong>Consistência:</strong> Garante que os dados passem de um estado válido para outro de acordo com restrições e regras definidas (chaves primárias, estrangeiras e triggers).</li><li><strong>Isolamento:</strong> Garante que múltiplas transações rodando em concorrência ocorram sem interferência mútua, evitando dados sujos ou leituras fantasmas.</li><li><strong>Durabilidade:</strong> Garante que após o commit (confirmação), os dados modificados sejam armazenados permanentemente em disco físico, sobrevivendo a quedas de energia.</li></ul>'
    },
    'PostgreSQL': {
      name: 'PostgreSQL',
      whatIs: 'Banco de dados relacional de código aberto (open-source) mais avançado do mundo, amplamente conhecido por sua extrema extensibilidade, estabilidade e conformidade com padrões SQL rígidos.',
      whatFor: 'Projetar soluções que necessitem de transações ACID confiáveis de grande escala, suporte robusto a consultas analíticas, extensões especializadas (como PostGIS para dados espaciais) e suporte híbrido nativo a dados estruturados e semiestruturados.',
      howTo: 'Implementar e otimizar bancos usando recursos avançados:<ul><li><strong>JSONB (Documentos em tabelas relacionais):</strong> Armazenar dados flexíveis semiestruturados em formato JSON binário compactado, permitindo consultas diretas e rápidas por meio de operadores PostgreSQL integrados.</li><li><strong>Índices GIN (Generalized Inverted Index):</strong> Criar índices invertidos GIN especializados nas colunas JSONB para garantir consultas rápidas mesmo pesquisando propriedades dinâmicas aninhadas profundamente em milhões de registros.</li><li><strong>Controle de Concorrência MVCC:</strong> Aproveitar o isolamento de transações de alto nível do PostgreSQL por meio do controle de concorrência multiversão, que permite leitores lerem dados sem bloquear escritores e vice-versa.</li></ul>'
    },
    'Redis': {
      name: 'Redis',
      whatIs: 'Armazenamento de estruturas de dados chave-valor em memória RAM, de altíssima performance, de código aberto e com latência em nível de sub-milissegundo.',
      whatFor: 'Caching de consultas pesadas de banco de dados, armazenamento rápido de sessões de usuário, filas de mensagens de alto throughput, contadores de acesso em tempo real e publicação/assinatura (Pub/Sub) de eventos.',
      howTo: 'Implementar técnicas modernas de gerenciamento de dados rápidos em memória:<ul><li><strong>Cache-Aside (Lazy Loading):</strong> A aplicação busca a informação primeiro no Redis. Em caso de ausência (Cache Miss), busca os dados reais no banco relacional principal (PostgreSQL/SQL Server), salva o resultado de volta no Redis com um TTL para uso futuro, e então retorna ao cliente final.</li><li><strong>Tempo de Expiração (TTL - Time to Live):</strong> Configurar prazos de expiração estratégicos para as chaves no cache, evitando o consumo excessivo da memória RAM do servidor e a exibição de dados desatualizados por muito tempo.</li><li><strong>Estruturas de Dados Diversificadas:</strong> Usar a estrutura ideal para o problema: <strong>Strings</strong> para caches básicos, <strong>Hashes</strong> para objetos, <strong>Lists</strong> para filas de tarefas assíncronas e <strong>Sets / Sorted Sets</strong> para listagens ordenadas por score (como rankings).</li></ul>'
    },
    'MongoDB': {
      name: 'MongoDB',
      whatIs: 'Banco de dados NoSQL líder de mercado, orientado a documentos, de alta performance e de código aberto, que armazena dados em documentos BSON (formato binário similar ao JSON).',
      whatFor: 'Armazenar grandes volumes de dados que necessitam de um esquema altamente flexível e variável, alto throughput de leitura/escrita simultâneo, aplicações Big Data, catálogos de e-commerce e logs de auditoria flexíveis.',
      howTo: '<strong>Por que usar o MongoDB em vez de bancos de dados relacionais clássicos (SQL)?</strong><ul><li><strong>Esquema Dinâmico e Flexível:</strong> Diferente do SQL, onde alterar uma coluna requer migrações complexas que podem travar a tabela inteira, documentos em coleções do MongoDB podem ter diferentes campos de dados sem necessidade de qualquer alteração de esquema global.</li><li><strong>Escalabilidade Horizontal Nativa (Sharding):</strong> O MongoDB foi projetado desde a base para suportar o particionamento horizontal nativo através de múltiplos nós de um cluster (Sharding), facilitando o crescimento elástico sob demanda de dados, enquanto no SQL o redimensionamento exige grande complexidade (como particionamentos manuais).</li><li><strong>Documentos Aninhados (Embedded Documents):</strong> Permite aninhar arrays e objetos inteiros dentro de um único documento principal. Isso possibilita consultar informações relacionadas em uma única chamada atômica, eliminando a necessidade de JOINS de tabelas lentos e caros.</li><li><strong>Performance Otimizada:</strong> Por manter dados relacionados juntos fisicamente e persistir informações estruturadas em memória, oferece maior velocidade em leituras e gravações frequentes sob cargas extremas de uso.</li></ul>'
    },
    'Firebase': {
      name: 'Firebase',
      whatIs: 'Plataforma BaaS (Backend as a Service) hospedada e gerenciada pela Google, que fornece um conjunto completo de ferramentas, infraestruturas na nuvem e SDKs unificados para agilizar o desenvolvimento.',
      whatFor: 'Construir aplicações web e móveis com extrema rapidez, delegando a infraestrutura de banco de dados, servidores físicos, segurança de infra e fluxos comuns de backend para os serviços gerenciados da Google.',
      howTo: '<strong>Quando é melhor usar o Firebase no lugar de criar um backend customizado (.NET/Node)?</strong><ul><li><strong>MVP (Minimum Viable Product) e Time-to-Market:</strong> Quando a prioridade absoluta do projeto é lançar e validar um produto no mercado o quanto antes, sem despender tempo construindo arquiteturas complexas de backend de raiz.</li><li><strong>Sincronização em Tempo Real nativa:</strong> Projetos como painéis interativos compartilhados, chats, dashboards em tempo real ou ferramentas colaborativas que exigem o sincronismo automático instantâneo de dados no cliente via WebSockets integrados fornecidos pelo Firebase Realtime Database ou Firestore.</li><li><strong>Autenticação Out-of-the-Box:</strong> Habilitar de imediato sistemas de cadastro de usuários e logins seguros via e-mail/senha ou provedores OAuth populares (Google, Facebook, Apple, GitHub) sem precisar codificar lógica de criptografia ou gerar tokens JWT manualmente.</li><li><strong>Foco Exclusivo na Experiência do Cliente (Frontend):</strong> Indicado para projetos onde a equipe de desenvolvimento deve se concentrar em fornecer UIs excepcionais para o usuário final, utilizando recursos serverless (como Cloud Functions) apenas para regras de negócios pontuais.</li></ul>'
    },
    'AWS': {
      name: 'AWS',
      whatIs: 'Amazon Web Services (AWS) é a plataforma de serviços de computação em nuvem pública mais abrangente, adotada e líder no mercado global de tecnologia.',
      whatFor: 'Hospedar infraestruturas em nuvem resilientes de alta disponibilidade e escala mundial, gerenciar clusters de microsserviços, rodar computação serverless automatizada e armazenar arquivos de forma segura.',
      howTo: '<strong>Funções e finalidades práticas dos principais serviços utilizados na nuvem AWS:</strong><ul><li><strong>EC2 (Elastic Compute Cloud):</strong> Servidores virtuais escaláveis e configuráveis sob demanda para hospedagem de aplicações legacy ou customizadas em instâncias Linux ou Windows.</li><li><strong>S3 (Simple Storage Service):</strong> Armazenamento de objetos (arquivos, backups, mídias estáticas de sites) extremamente durável, seguro e econômico, com entrega acelerada em conjunto com o CloudFront (CDN).</li><li><strong>RDS (Relational Database Service):</strong> Serviço de bancos de dados relacionais gerenciados (SQL Server, PostgreSQL, MySQL) que cuida de backups automáticos, patches e failover para alta disponibilidade.</li><li><strong>DynamoDB:</strong> Banco de dados NoSQL chave-valor totalmente gerenciado de latência em nível de milissegundo de dígito único em qualquer escala de tráfego.</li><li><strong>Lambda:</strong> Computação Serverless (FaaS) que executa funções de código curtas acionadas por eventos, cobrando apenas pelos milissegundos de processamento ativo (eliminando custos de servidores ociosos).</li><li><strong>IAM (Identity and Access Management):</strong> Controle de identidade e acessos granulares que assegura que apenas usuários e recursos específicos tenham permissão de se comunicar na nuvem AWS.</li><li><strong>ECS / EKS (Elastic Kubernetes Service):</strong> Serviços gerenciados de ponta para orquestração de contêineres Docker e clusters Kubernetes de nível empresarial.</li></ul>'
    },
    'Azure': {
      name: 'Azure',
      whatIs: 'Plataforma de computação em nuvem pública desenvolvida e gerenciada pela Microsoft, oferecendo mais de 200 serviços e produtos integrados globalmente.',
      whatFor: 'Hospedar infraestruturas com suporte nativo de alto nível ao ecossistema Microsoft (.NET, SQL Server), rodar microsserviços, automatizar deploy corporativo e garantir compliance de dados de segurança.',
      howTo: 'Implantar e gerenciar recursos na nuvem Azure:<ul><li><strong>Azure App Services:</strong> Hospedagem PaaS (Platform as a Service) altamente otimizada para publicar APIs RESTful e aplicações web .NET, Node.js ou Angular sem precisar gerenciar servidores de rede básicos.</li><li><strong>Azure Functions:</strong> Computação serverless baseada em eventos para executar tarefas assíncronas em segundo plano, integrações de APIs e processamento de arquivos sem preocupações de infraestrutura.</li><li><strong>Azure Key Vault:</strong> Armazenamento centralizado seguro para gerenciar chaves de criptografia, segredos de APIs, strings de conexão e certificados SSL do projeto de forma auditada.</li><li><strong>Microsoft Entra ID (antigo Azure AD):</strong> Solução de gerenciamento de identidades e acessos na nuvem para configurar autenticação corporativa única (SSO).</li></ul>'
    },
    'Docker': {
      name: 'Docker',
      whatIs: 'Docker é uma tecnologia open-source de conteinerização de software que permite empacotar uma aplicação e todas as suas dependências em um ambiente padronizado e isolado.',
      whatFor: 'Garantir a consistência total do software ao longo de todas as etapas (desenvolvimento local, testes, homologação e servidores de produção), solucionando falhas decorrentes de diferenças nos sistemas operacionais host.',
      howTo: 'Escrever especificações declarativas de contêineres de forma eficiente:<ul><li><strong>Dockerfile:</strong> Arquivo de texto contendo comandos passo a passo para construir uma imagem. Para otimizar a segurança e o tamanho do arquivo gerado em disco, utilize <strong>Multi-Stage Builds</strong> (separando o estágio de compilação SDK do estágio final leve de runtime).</li><li><strong>Docker Images &amp; Containers:</strong> A imagem é a estrutura estática congelada empacotada da aplicação; o contêiner é a instância viva desse pacote rodando de forma isolada sobre o kernel do SO host.</li><li><strong>Docker Compose:</strong> Ferramenta para definir e executar aplicações complexas de múltiplos contêineres por meio de um arquivo declarativo YAML, permitindo subir com um único comando todos os serviços dependentes de um projeto local.</li></ul>Exemplo prático de um arquivo `Dockerfile` otimizado para uma API .NET Core:<pre># 1. Compilação\nFROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env\nWORKDIR /app\nCOPY *.csproj ./\nRUN dotnet restore\nCOPY . ./\nRUN dotnet publish -c Release -o out\n\n# 2. Execução\nFROM mcr.microsoft.com/dotnet/aspnet:8.0\nWORKDIR /app\nCOPY --from=build-env /app/out .\nEXPOSE 80\nENTRYPOINT ["dotnet", "MinhaApi.dll"]</pre>'
    },
    'CI/CD': {
      name: 'CI/CD',
      whatIs: 'Conjunto de práticas de DevOps que combina a Integração Contínua (CI) e a Entrega ou Implantação Contínua (CD), permitindo automatizar todas as fases de compilação, testes e entrega de atualizações de código.',
      whatFor: 'Minimizar a ocorrência de erros e falhas humanas decorrentes de deploys manuais, garantir que o código novo não quebre testes existentes e entregar melhorias de software de maneira rápida, estável e auditada.',
      howTo: 'Configurar fluxos automatizados (pipelines) por meio de arquivos YAML em plataformas como GitHub Actions ou Azure DevOps:<ul><li><strong>Continuous Integration (CI):</strong> A cada commit ou pull request enviado, a pipeline é acionada para compilar a aplicação e rodar a suíte completa de testes automáticos. Se houver falha, o merge é bloqueado automaticamente.</li><li><strong>Continuous Delivery / Deployment (CD):</strong> Após a aprovação da fase de CI, a pipeline empacota o software (ex: gera uma imagem Docker) e realiza o deploy automatizado nos servidores correspondentes (ex: AWS, Azure, ou servidores Kubernetes).</li></ul>Exemplo prático de uma pipeline básica de CI no GitHub Actions (`.github/workflows/ci.yml`):<pre>name: Pipeline de Integração Contínua\non:\n  push:\n    branches: [ master ]\n  pull_request:\n    branches: [ master ]\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout do Código\n      uses: actions/checkout@v3\n    - name: Configurar ambiente .NET\n      uses: actions/setup-dotnet@v3\n      with:\n        dotnet-version: "8.0.x"\n    - name: Restaurar Dependências\n      run: dotnet restore\n    - name: Compilar o Projeto\n      run: dotnet build --no-restore\n    - name: Executar Testes Unitários\n      run: dotnet test --no-build --verbosity normal</pre>'
    },
    'GIT': {
      name: 'GIT',
      whatIs: 'GIT é um sistema open-source e gratuito de controle de versão distribuído, projetado para rastrear modificações em arquivos de código-fonte ao longo do tempo.',
      whatFor: 'Permitir que vários desenvolvedores trabalhem simultaneamente no mesmo projeto de forma organizada, manter um histórico completo de alterações facilitando reversões e organizar ramificações de novas funcionalidades.',
      howTo: 'Utilizar estratégias organizadas de ramificação (Branching) e comandos para controle do histórico:<ul><li><strong>Branching Strategies:</strong> Escolher o fluxo ideal de trabalho para o time:<ul><li><strong>GitFlow:</strong> Modelo com branches bem definidas para desenvolvimento (develop), homologação (release), produção (master) e correções urgentes (hotfixes).</li><li><strong>Trunk-Based Development:</strong> Modelo ágil focado em integrar commits de novas features diretamente na branch principal (master/main) de forma frequente por meio de feature flags curtas, reduzindo conflitos de merge gigantescos.</li></ul></li><li><strong>Comandos Avançados essenciais:</strong> Dominar comandos chave como: <code>git checkout -b</code> para criar branches, <code>git stash</code> para salvar modificações temporárias sem commit, <code>git rebase</code> para reaplicar commits de uma branch sobre outra de forma limpa, e <code>git cherry-pick</code> para trazer commits específicos de outras ramificações.</li></ul>'
    },
    'Unity 5': {
      name: 'Unity 5',
      whatIs: 'Unity é um poderoso motor de desenvolvimento de jogos (Game Engine) multiplataforma, amplamente reconhecido por sua versatilidade na criação de mundos bidimensionais (2D), tridimensionais (3D), realidade virtual (VR) e aumentada (AR).',
      whatFor: 'Criar jogos interativos, simulações físicas avançadas e interfaces dinâmicas para uma grande variedade de plataformas, incluindo PCs, consoles (PlayStation, Xbox, Switch), navegadores web e smartphones (iOS/Android) usando C#.',
      howTo: 'Compreender a arquitetura baseada em componentes e o ciclo de vida dos scripts:<ul><li><strong>Component-Based System:</strong> Todo objeto em cena (GameObject) é uma casca vazia que ganha propriedades ao receber componentes (ex: Renderer para visual, Rigidbody para física, Collider para colisões).</li><li><strong>Ciclo de Vida do MonoBehaviour:</strong> Entender a ordem estrita de execução de métodos automáticos da Unity nos scripts C#:<ul><li><strong>Awake() &amp; Start():</strong> Chamados uma vez na inicialização para carregar referências e variáveis de partida.</li><li><strong>FixedUpdate():</strong> Executado em intervalos de tempo constantes e pré-definidos, ideal para cálculos de física e forças aplicadas a corpos rígidos.</li><li><strong>Update():</strong> Chamado uma vez por quadro (frame rate variável), ideal para capturar comandos do teclado/mouse do jogador e lógica não-física.</li><li><strong>LateUpdate():</strong> Executado após todos os Updates normais terem rodado, muito útil para sincronizar o movimento de câmeras que seguem personagens.</li></ul></li></ul>'
    },
    'Construct': {
      name: 'Construct',
      whatIs: 'Construct é um motor de desenvolvimento de jogos 2D proprietário focado em programação visual declarativa através de planilhas de eventos (Event Sheets), dispensando a escrita tradicional de código de texto puro.',
      whatFor: 'Desenvolver jogos 2D ricos de forma acelerada, criar protótipos de mecânicas físicas, exportar jogos multiplataforma otimizados em HTML5 de carregamento instantâneo para a web e criar jogos educativos ou casuais de alta qualidade.',
      howTo: 'Configurar interações utilizando lógica declarativa:<ul><li><strong>Event Sheets (Planilhas de Eventos):</strong> Estruturar toda a lógica do jogo definindo pares de "Condição" e "Ação" (ex: Condição: Colisão de Jogador com Inimigo -&gt; Ação: Subtrair 1 da Vida do Jogador).</li><li><strong>Behaviors (Comportamentos pré-programados):</strong> Associar comportamentos inteligentes prontos a elementos visuais de forma direta, como comportamento de <strong>Plataforma</strong>, <strong>Projétil</strong>, <strong>8-Direções</strong>, <strong>Sólido</strong> e física do mundo real.</li><li><strong>Variáveis de Instância e Globais:</strong> Gerenciar estados de pontuações, vidas e flags de controle usando variáveis configuráveis diretamente no painel do editor Construct.</li></ul>'
    },
    'Photon': {
      name: 'Photon',
      whatIs: 'Photon Engine é um conjunto robusto de SDKs em nuvem e APIs especializadas em conexões multijogador em tempo real, fornecendo infraestrutura de transporte de baixa latência.',
      whatFor: 'Implementar modos online multijogador sincronizados para jogos, simuladores e aplicações colaborativas distribuídas que exigem latência sub-milissegundo.',
      howTo: 'Integrar a arquitetura multiplayer em tempo real no motor de jogos (como a Unity):<ul><li><strong>Salas e Matchmaking:</strong> Conectar usuários à nuvem Photon, criar lobbies dinâmicos de espera e gerenciar o emparelhamento (matchmaking) automático de jogadores em salas de jogo online.</li><li><strong>Sincronização de Estado (PhotonView):</strong> Anexar componentes de monitoramento que serializam e transmitem a posição física, rotação e animações dos jogadores pela rede de forma otimizada para todos os outros participantes da sala.</li><li><strong>RPCs (Remote Procedure Calls):</strong> Executar funções locais específicas que são disparadas simultaneamente no cliente de todos os outros computadores conectados na mesma sala de rede (ex: disparar som de explosão).</li></ul>'
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
