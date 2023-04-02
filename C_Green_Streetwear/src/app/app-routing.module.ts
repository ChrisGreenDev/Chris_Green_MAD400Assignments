import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemDetailComponent } from './content-item-detail/content-item-detail.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';


const routes: Routes = [{
  path: "",
  redirectTo: "content",
  pathMatch: "full"
},
{ 
  path: '', 
  component: ContentListComponent
},
{
  path: 'addContent', 
  component: ModifyContentComponent
},
{
  path: "content",
  component: ContentListComponent
},
{
  path: "content/:id",
  component: ContentItemDetailComponent
},
{
  path: "search",
  component: ContentSearchComponent
},
{
  path: "detail",
  component: ContentItemDetailComponent
},
{
  path: "**",
  component: PageNotFoundComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
