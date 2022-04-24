import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
// import { AuthGuard } from './auth.guard';
import { CommentComponent } from './comment/comment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {
    path: "user/:id",
    component: UserDetailComponent,
 
  },
  {
    path: "article/:id",
    component: ArticleDetailComponent,

  },
  {
    path: "comment/:id",
    component: CommentComponent,

  },
  {
    path: "user",
    component: UserComponent,

  },
  {
    path: "article",
    component: ArticleComponent,

  },
  {
    path: "comment",
    component: CommentComponent,

  },
  {
    path: "login",
    component: SignInComponent
  },
  {
    path: "",
    component: SignUpComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
