export class books{
    title : string;
    author : string;
    catagory : string;
    vote : any;

    constructor(title,author,catagory,vote){
        this.title = title;
        this.author=author;
        this.catagory = catagory;
        this.vote = vote;
    }
}