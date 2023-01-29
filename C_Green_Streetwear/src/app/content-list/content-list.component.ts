import { Component } from '@angular/core';
import { IContent } from '../models/icontent'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentItems: IContent[] = [
    {id: 1,title: "Supreme x North Face Jacket", author: "Supreme x Northface", description: "This supreme coat is the supreme red with the brand name on the back.", 
  imgSrc: "assets/images/snj.jpg", type: "Winter Collection 2015"},
  {id: 1,title: "Supreme x North Face Bag", author: "Supreme", description: "A collaboration between Supreme and North Face. This bag was a once only drop. ", 
  imgSrc: "assets/images/bag.jpg", type: "Summer Collection 2011"},
  {id: 1,title: "Supreme x Lacoste Hat", author: "Supreme", description: "A collaboration between Supreme and Lacoste. These two brands come together to bring a new spin on the 'dad' hat.", 
  imgSrc: "assets/images/hat.jpg", type: "Summer Collection 2012"},
  {id: 1,title: "Supreme x Kaws Skate Board", author: "Supreme", description: "Kaws is known for their figurines and crazy style. This skateboard is a collaboration between Supreme and Kaws. ", 
  imgSrc: "assets/images/skateboard.jpg", type: "Spring Collection 2020"}
  ]

  
}
