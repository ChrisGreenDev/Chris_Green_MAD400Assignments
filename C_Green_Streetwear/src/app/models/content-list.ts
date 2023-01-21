import { IContent } from "./icontent";

export class ContentList {

    private _contentArray: IContent[];

    constructor(_array: IContent){
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


}
