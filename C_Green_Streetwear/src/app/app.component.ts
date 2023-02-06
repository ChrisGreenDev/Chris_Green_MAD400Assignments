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

  selectedId: number;
  content: IContent[] = [];
  selectedContent: IContent;

  constructor(private streetwearService: StreetwearService){
    this.selectedId = 0;
    this.selectedContent = {id: 0, title: '', author: '', description: '', imgSrc: '', type: ''};  }

  ngOnInit(): void {
    this.streetwearService.getContentById(3).subscribe((content: IContent[]) =>{
      if (content.length) {
        this.selectedContent = content[0];
      }
    });
  }

  
  //Take input id from input field and display it 
  // selectContent(): void {
  //   this.streetwearService.getContentById(this.selectedId).subscribe(content => {
  //     if (content.length > 0) {
  //       this.selectedContent = content[0];
  //     } else {
  //       this.selectedContent = { id: 0, title: '', author: '', description: '', imgSrc: '', type: ''};
  //     }
  //   });
  // }

  
}