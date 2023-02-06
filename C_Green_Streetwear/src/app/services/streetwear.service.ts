import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { CONTENT } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class StreetwearService {
  

  constructor() { }

  getContent(): Observable<IContent[]>{
    return of(CONTENT);
  }

  //Get item bt ID in array
  getContentById(id: number): Observable<IContent[]> {
    return of(CONTENT.filter(content => content.id === id));
  }

  //Add item to the array
  addContent(newContent: IContent): Observable<IContent[]>{
    const updatedContent = [...CONTENT, newContent];
    return of(updatedContent);
  }

  //Update an item in the array
  updateContent(updatedContent: IContent): Observable<IContent[]> {
    let updated = false;
    const updatedArray = CONTENT.map(content => {
      if (content.id === updatedContent.id) {
        updated = true;
        return updatedContent;
      }
      return content;
    });

    if (!updated) {
      return of([]);
    }

    return of(updatedArray);
  }

  //Remove an item in the array
  removeContent(id: number): Observable<IContent | undefined> {
    const content = CONTENT.find(content => content.id === id);
    if (content) {
        const index = CONTENT.indexOf(content);
        CONTENT.splice(index, 1);
        return of(content);
    } else {
        return of(undefined);
    }
}

// getContentById(id: number): Observable<IContent> {
//   const content = CONTENT.find(c => c.id === id);
//   return content ? of(content) : of({id: 0, title: '', author: '', description: '', imgSrc: '', type: ''});
// }

// addContent(content: IContent): Observable<IContent[]> {
//   if (CONTENT.find(c => c.id === content.id)) {
//     return throwError('Content already exists with id ' + content.id);
//   } else {
//     CONTENT.push(content);
//     return of(CONTENT);
//   }
// }

// updateContent(content: IContent): Observable<IContent[]> {
//   const index = CONTENT.findIndex(c => c.id === content.id);
//   if (index === -1) {
//     return of([{ id: 0, title: '', author: '', description: '', imgSrc: '', type: '' }]);
//   } else {
//     const updatedContent = { ...CONTENT[index], ...content };
//     CONTENT[index] = updatedContent;
//     return of(CONTENT);
//   }
// }

// deleteContent(id: number): Observable<IContent[]> {
//   const index = CONTENT.findIndex(c => c.id === id);
//   if (index === -1) {
//     return throwError('Content does not exist with id ' + id);
//   } else {
//     CONTENT.splice(index, 1);
//     return of(CONTENT);
//   }
// }

}
