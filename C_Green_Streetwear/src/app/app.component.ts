import { Component } from '@angular/core';
import { ContentList } from './models/content-list';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'C_Green_Streetwear';
  contentList: ContentList;

  constructor(){
  this.contentList = new ContentList([]);

  let contentCoat: IContent = {id: 1,title: "Supreme Coat", author: "Chris Green", description: "This supreme coat is the supreme red with the brand name on the back.", 
  imgSrc: "https://www.google.com/search?q=supreme+streetwear&client=firefox-b-d&sxsrf=AJOqlzUXSMvu5zgnq6N5YW7O9I0HFkbr0g:1674271255414&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjpyr672tf8AhWgnokEHRuzCWQQ_AUoAnoECAEQBA&biw=1440&bih=787&dpr=2#imgrc=UnvemlLXZ-y42M", type: "Coat"};

  let contentBag: IContent = {id: 1,title: "Supreme Bag", author: "Chris Green", description: "Example Description", 
  imgSrc: "https://www.google.com/search?q=supreme+streetwear&client=firefox-b-d&sxsrf=AJOqlzUXSMvu5zgnq6N5YW7O9I0HFkbr0g:1674271255414&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjpyr672tf8AhWgnokEHRuzCWQQ_AUoAnoECAEQBA&biw=1440&bih=787&dpr=2#imgrc=UnvemlLXZ-y42M", type: "Bag"};

  let contentHat: IContent = {id: 1,title: "Supreme Hat", author: "Chris Green", description: "Example Description", 
  imgSrc: "https://www.google.com/search?q=supreme+streetwear&client=firefox-b-d&sxsrf=AJOqlzUXSMvu5zgnq6N5YW7O9I0HFkbr0g:1674271255414&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjpyr672tf8AhWgnokEHRuzCWQQ_AUoAnoECAEQBA&biw=1440&bih=787&dpr=2#imgrc=UnvemlLXZ-y42M", type: "Hat"};

  let contentSkateBoard: IContent = {id: 1,title: "Supreme Skate Board", author: "Chris Green", description: "Example Description", 
  imgSrc: "https://www.google.com/search?q=supreme+streetwear&client=firefox-b-d&sxsrf=AJOqlzUXSMvu5zgnq6N5YW7O9I0HFkbr0g:1674271255414&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjpyr672tf8AhWgnokEHRuzCWQQ_AUoAnoECAEQBA&biw=1440&bih=787&dpr=2#imgrc=UnvemlLXZ-y42M", type: "SkateBoard"};

  this.contentList.addContent(contentCoat);
  this.contentList.addContent(contentBag);
  this.contentList.addContent(contentHat);
  this.contentList.addContent(contentSkateBoard);

  }
}