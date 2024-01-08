import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NumberLiteralType } from 'typescript';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  @Input()article!: Article;  //by input it will get data from articles in AppComponent.
  @HostBinding('attr.class') cssClass = 'row';   //the CSS class we want to apply to the host of this component(the element this component is attached to)


  constructor(){
  }

  voteUp() : boolean{
    this.article.voteUp();
    return false; //it will stop reloading page. Because the click event is propagated to parents, our browser is trying to follow the empty link,
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
