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

  getContentList(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this.contentUrl);
  }

  getContentById(id: number): Observable<IContent> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<IContent>(url);
  }

  addContent(content: IContent): Observable<IContent> {
    return this.http.post<IContent>(this.contentUrl, content);
  }

  updateContent(content: IContent): Observable<IContent> {
    const url = `${this.contentUrl}/${content.id}`;
    return this.http.put<IContent>(url, content);
  }

  deleteContent(id: number): Observable<IContent> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.delete<IContent>(url);
  }

  getContent(): Observable<IContent[]>{
    return this.http.get<IContent[]>(this.contentUrl);
  }

createDb(){
  const content: IContent[] = CONTENT;
  return { content };
}

}
