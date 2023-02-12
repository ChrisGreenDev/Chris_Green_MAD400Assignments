import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { StreetwearService } from '../services/streetwear.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit{

  searchId: number;
  foundContent: IContent;

  constructor(private streetwearService: StreetwearService) {
    this.searchId = 0;
    this.foundContent = { id: 0, title: '', author: '', description: '', imgSrc: '', type: '' };
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  search() {
    this.streetwearService.getContentById(this.searchId).subscribe(contents => {
      this.foundContent = contents.filter(content => content.id === this.searchId)[0];
    });
  }
}
