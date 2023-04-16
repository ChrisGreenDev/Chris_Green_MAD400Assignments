import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from './models/icontent';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  transform(contentList: IContent[], filterText?: string): IContent[] {
    if (!contentList) {
      return [];
    }
    if (!filterText) {
      return contentList.filter(content => !content.type);
    }
    return contentList.filter(content => content.type === filterText);
  }

}