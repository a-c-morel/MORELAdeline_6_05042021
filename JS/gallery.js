class Gallery{
    constructor(pictures){ //pictures = un array avec des instances de chaque picture
        this.pictures = pictures;
    }
    displayForm(){
        let form = new Form("test", "test", "text");
        form.display();
        return form;
    }
    displayPictures(){
        const pictures = [];
        
        let picture1 = new Picture()
        //picture 1
        //picture 2
        //...
    }
}