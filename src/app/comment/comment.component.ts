import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  title: string = 'Liste des commentaires';
  commentList: Comment[] = [];
  options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<Comment[]>('https://reseau.jdedev.fr/api/comment', this.options)
      .subscribe(
        commentList => {
          this.commentList = commentList
        }
      )
    
    // this.req.getUsers().subscribe(userList => {
    //   console.table(userList)
    //   this.userList = userList;
    // });
    // console.table(this.userList);
  }

}