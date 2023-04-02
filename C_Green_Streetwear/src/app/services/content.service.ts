import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContent } from '../models/icontent';
import { CONTENT } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentUrl = 'api/content';

  constructor(private http: HttpClient) { }

  getContent(): Observable<IContent[]>{
    return this.http.get<IContent[]>(this.contentUrl);
  }

createDb(){
  const content: IContent[] = CONTENT;
  return { content };
}

}
