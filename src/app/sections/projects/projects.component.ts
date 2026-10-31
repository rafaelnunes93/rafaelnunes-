import { Component, HostListener, inject, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string;
}

const PROJECT_STATIC: { id: string; title: string; image: string; techStack: string[]; link?: string }[] = [
  { id: 'cargo-online',  title: 'Cargo Online',           image: 'assets/images/cargo.png',              techStack: ['.NET 8', 'C#', 'SQL Server', 'Angular', 'Azure'] },
  { id: 'edi-ups',       title: 'EDI UPS',                image: 'assets/images/ups.jpg',                techStack: ['.NET Framework', 'HTML', 'CSS', 'JavaScript', 'SQL Server'] },
  { id: 'art-pisos',     title: 'Art Pisos E Assoalhos',  image: 'assets/images/ArtPisosEAssoalhos.png', techStack: ['Angular'], link: 'https://www.artpisoseassoalhos.com.br/' },
  { id: 'clipnest',      title: 'ClipNest Video Download', image: 'assets/images/clipnest.png',          techStack: ['JavaScript', 'Chrome Extension', 'HLS'], link: 'https://chromewebstore.google.com/detail/clipnest-video-download/omadfedpnhlhanbdekbhmnbhcdeoegel?hl=pt-BR' },
  { id: 'chef-manager',  title: 'Chef Manager',           image: 'assets/images/chafManager.png',        techStack: ['Angular', 'TypeScript', '.NET Core', 'SQL Server'] },
  { id: 'worth-viking',  title: 'Worth Viking',           image: 'assets/images/worthViking.png',        techStack: ['Unity 5', 'C#', 'Game Design', '3D Modeling'] },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly tr = inject(TranslationService);

  projects = computed<Project[]>(() => {
    const translations = this.tr.t('projects') as Array<{id: string, subtitle: string, description: string}>;
    return PROJECT_STATIC.map(p => {
      const t = translations.find(x => x.id === p.id) ?? { id: p.id, subtitle: '', description: '' };
      return { ...p, subtitle: t.subtitle, description: t.description };
    });
  });

  selectedProject: Project | null = null;
  isModalOpen = false;

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedProject = null;
      document.body.style.overflow = 'auto';
    }, 300);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
}
