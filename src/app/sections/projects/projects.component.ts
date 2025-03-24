import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {}

  filterProjects(category: string): void {
    const articles = document.querySelectorAll<HTMLElement>('#portfolio-items article');

    articles.forEach((article) => {
      const classList = Array.from(article.classList);
      const matches = category === '*' || classList.includes(category);
      article.classList.toggle('hidden', !matches);
    });

    const buttons = document.querySelectorAll<HTMLAnchorElement>('.portfolio-filter-list a');

    buttons.forEach((btn) => {
      const btnCategory = btn.getAttribute('data-cat');
      btn.classList.toggle('active', btnCategory === category);
    });
  }
}
