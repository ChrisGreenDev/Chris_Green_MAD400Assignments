import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';

import { FormsModule } from '@angular/forms';
import { ContentItemDetailComponent } from './content-item-detail/content-item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentItemDetailComponent,
    ContentSearchComponent,
    PageNotFoundComponent,
    TopNavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ContentService),
    RouterModule.forRoot([{
      path: 'content', component: ContentListComponent
    }]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
