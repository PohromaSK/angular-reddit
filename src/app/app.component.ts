import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { Article } from './article.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ArticleComponent]
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular','http://angular.io',3),
      new Article('FullStack','http://fullstack.io',2),
      new Article('Angular Homepaghe','http://angular.io',1),
    ]
  }

  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0))
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}
