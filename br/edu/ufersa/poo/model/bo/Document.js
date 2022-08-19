class Document {
    constructor(author, title, content){
        this.author = author;
        this.title = title;
        this.content = content;
    }

    get author(){
        return this.author;
    }

    get title(){
        return this.title;
    }
}