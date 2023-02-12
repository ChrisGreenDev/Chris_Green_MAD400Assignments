import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StreetwearService } from '../services/streetwear.service';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-item-detail',
  templateUrl: './content-item-detail.component.html',
  styleUrls: ['./content-item-detail.component.scss']
})
export class ContentItemDetailComponent implements OnInit {

  content?: IContent;

  constructor(
    private router: Router,
    private streetwearService: StreetwearService,
    private route: ActivatedRoute
  ) {

  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = 0;
      id = +(params.get('id') ?? 1);
  
      this.streetwearService.getContentById(id).subscribe((singleDetailItem: IContent[]) => {
        console.log("TESTING", singleDetailItem);
  
        if(singleDetailItem.length){
          this.content = singleDetailItem[0];
          console.log("TESTING ", this.content);
        } else {
          console.log("Item not found");
          this.router.navigate(["/contentNotFound"]);
        }
      });
    });
  }

}
