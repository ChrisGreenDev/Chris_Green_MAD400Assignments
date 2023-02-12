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


  constructor(private streetwearService: StreetwearService){
    this.contentItems = [];
  }

  ngOnInit(): void {
    this.streetwearService.getContent().subscribe((IcontentArrayOfData: IContent[]) =>{
      this.contentItems = IcontentArrayOfData;
    });
  }


}

