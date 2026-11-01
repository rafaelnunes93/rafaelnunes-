import { Component, input } from '@angular/core';

// Moldura de navegador (3 bolinhas + barra com domínio) em volta de prints de projetos.
@Component({
  selector: 'app-browser-frame',
  standalone: true,
  template: `
    <figure class="frame" [class.frame--contain]="contain()" [class.frame--logo]="logo()">
      <div class="frame-bar" aria-hidden="true">
        <span class="dots"><i></i><i></i><i></i></span>
        <span class="url">{{ domain() }}</span>
      </div>
      <div class="frame-body">
        <img [src]="src()" [alt]="alt()" loading="lazy" decoding="async" width="1200" height="750" />
      </div>
    </figure>
  `,
  styles: `
    .frame {
      margin: 0;
      border-radius: 16px;
      border: 1px solid var(--line);
      background: var(--surface);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    .frame-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 14px;
      border-bottom: 1px solid var(--line);
      background: var(--surface-2);
    }
    .dots {
      display: flex;
      gap: 6px;
      i { width: 10px; height: 10px; border-radius: 50%; background: #ff5f57; }
      i:nth-child(2) { background: #febc2e; }
      i:nth-child(3) { background: #28c840; }
    }
    .url {
      flex: 1;
      max-width: 260px;
      padding: 3px 12px;
      border-radius: 9999px;
      background: var(--surface);
      border: 1px solid var(--line);
      color: var(--subtle);
      font-size: 0.72rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .frame-body {
      aspect-ratio: 16 / 10;
      background: #050816;
      img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
    }
    .frame--contain .frame-body img { object-fit: contain; padding: 16px; }
    .frame--logo .frame-body { background: #ffffff; }
    .frame--logo .frame-body img { object-fit: contain; padding: 18% 16%; }
  `,
})
export class BrowserFrameComponent {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly domain = input('');
  /** Imagens que não são prints de página (ícones, apps): exibe inteira, sem cortar. */
  readonly contain = input(false);
  /** Logos com fundo branco: área branca e logo centralizado com respiro. */
  readonly logo = input(false);
}
