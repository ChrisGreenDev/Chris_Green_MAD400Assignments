import { Component } from '@angular/core';
// import { ContentList } from './models/content-list';
import { IContent } from './models/icontent';
import { StreetwearService } from './services/streetwear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'C_Green_Streetwear';

  content: IContent[] = [];

  selectedContent: IContent;

  constructor(private streetwearService: StreetwearService){
    this.selectedContent = {id: 0, title: '', author: '', description: '', imgSrc: '', type: ''};  }

  // ngOnInit(): void {
  //   this.streetwearService.getContentById(1).subscribe((content: IContent[]) =>{
  //     this.content = content;
  //   });
  // }

  ngOnInit(): void {
    this.streetwearService.getContentById(3).subscribe((content: IContent[]) =>{
      if (content.length) {
        this.selectedContent = content[0];
      }
    });
  }
}