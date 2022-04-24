import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-user',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string = 'Liste des articles';
  articleList: Article[] = [];
  options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<Article[]>('https://reseau.jdedev.fr/api/article', this.options)
      .subscribe(
        articleList => this.articleList = articleList
      )
  }

}