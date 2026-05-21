import { Component, HostListener, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  activeSection = signal('home');

  private observer!: IntersectionObserver;
  private sectionIds = ['home', 'about', 'services', 'skills', 'projects', 'experiencias', 'contact'];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    // Observe after DOM is ready
    setTimeout(() => {
      this.sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) this.observer.observe(el);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
