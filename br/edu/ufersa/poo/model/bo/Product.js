class Product{
    constructor(name, price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get name(){
        return this.name;
    }

    get price(){
        return this.price;
    }
}