import { IContent } from "./icontent";

export class ContentList {

    private _contentArray: IContent[];

    constructor(_array: IContent[]){
        this._contentArray = [];
    }

    get array(): IContent[]{
        return this._contentArray;
    }

    addContent(content: IContent){
        this._contentArray.push(content);
    }

    returnLength(): number {
        return this._contentArray.length;
    }

    toString(index: number): string {
        if(index < 0 || index >= this._contentArray.length){
            return "Index out of range";
        }
        let content = this._contentArray[index];
        let htmlOutPut = `
        <div class="content-item">
            <h2 class="title">${content.title}</h2>
            <div class="description">${content.description}</div>
            <div class="author">by ${content.author}</div>
            <img src="${content.imgSrc}" class="content-img">
            <div class"contentType">${content.type}</div>
        </div>
        `;
        return htmlOutPut;
    }
}
