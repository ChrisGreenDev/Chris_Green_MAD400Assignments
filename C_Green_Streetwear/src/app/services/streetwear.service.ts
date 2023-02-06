import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
}
