import { Component } from '@angular/core';
import { IContent } from '../models/icontent'
import { StreetwearService } from '../services/streetwear.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentItems: IContent[];
  // searchId: number;
  // foundContent: IContent;

  constructor(private streetwearService: StreetwearService){
    this.contentItems = [];
    // this.searchId = 0;
    // this.foundContent = { id: 0, title: '', author: '', description: '', imgSrc: '', type: '' };
  }

  ngOnInit(): void {
    this.streetwearService.getContent().subscribe((IcontentArrayOfData: IContent[]) =>{
      this.contentItems = IcontentArrayOfData;
    });
  }

  // search() {
  //   this.streetwearService.getContentById(this.searchId).subscribe(contents => {
  //     this.foundContent = contents.filter(content => content.id === this.searchId)[0];
  //   });
  // }

}

