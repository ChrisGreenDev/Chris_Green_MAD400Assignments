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
import { FilterIContentPipe } from './filter-icontent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentItemDetailComponent,
    ContentSearchComponent,
    PageNotFoundComponent,
    FilterIContentPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
