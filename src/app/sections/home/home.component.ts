import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, inject, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedText = '';
  showCursor = true;

  readonly tr = inject(TranslationService);

  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 80;
  private deletingSpeed = 40;
  private pauseAfterType = 1800;
  private pauseAfterDelete = 400;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private cursorIntervalId: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // React to language changes: reset typewriter
    effect(() => {
      this.tr.currentLang(); // subscribe to lang signal
      this.resetTypewriter();
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startTypewriter();
      this.startCursorBlink();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    if (this.cursorIntervalId) clearInterval(this.cursorIntervalId);
  }

  private get roles(): string[] {
    return this.tr.t('home_roles') as string[];
  }

  private resetTypewriter(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.currentIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.displayedText = '';
    if (isPlatformBrowser(this.platformId)) {
      this.startTypewriter();
    }
  }

  private startCursorBlink(): void {
    this.cursorIntervalId = setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 530);
  }

  private startTypewriter(): void {
    const currentRole = this.roles[this.currentIndex];

    if (!this.isDeleting) {
      // Typing
      this.displayedText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentRole.length) {
        // Finished typing – pause then delete
        this.timeoutId = setTimeout(() => {
          this.isDeleting = true;
          this.startTypewriter();
        }, this.pauseAfterType);
        return;
      }
    } else {
      // Deleting
      this.displayedText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        // Finished deleting – move to next
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.roles.length;
        this.timeoutId = setTimeout(() => {
          this.startTypewriter();
        }, this.pauseAfterDelete);
        return;
      }
    }

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    this.timeoutId = setTimeout(() => this.startTypewriter(), speed);
  }
}
