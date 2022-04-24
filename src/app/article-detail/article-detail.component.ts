import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';
// import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  title: string = 'Liste des articles';
  articleList: Article | undefined;
  options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
  }
  article: Article | undefined;
  //ID de l'article ?
  id: number = +"";
  //combiètieme article ou ID de l'article ?
  articleId: number = +"";

  updateForm = this.formBuilder.group({
    titre: "",
    contenu: "",
    creation: Date,
  })

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
      return this.http.get<Article>(`https://reseau.jdedev.fr/api/article/${this.articleId}`, this.options)
        .subscribe(article => {
          this.article = article;
          console.table(this.article)
        });

      }
      
      onSubmitUpdate(formData: Object) {
        console.table(formData)
          let articleUpdated: Article = {
          id: this.id,
          id_article: this.articleId,
          titre: this.updateForm.value.pseudo,
          contenu: this.updateForm.value.password,
          creation: this.updateForm.value.avatar,
        }
        return this.http.put<Article>(`https://reseau.jdedev.fr/api/article/${this.articleId}`, articleUpdated, this.options)
          .subscribe(article => {
            console.table(article)
            this.article = article;
            console.table(this.article)
          });
  }

}