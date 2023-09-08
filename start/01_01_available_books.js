// Write your code here
// create a class with 4 props( title,author,isbn,numcopies)
//getAvailability() =>'out of stock' if 0 available copies, 'low stock'
//                     if available copies<10 ,'in stock' otherwise
// sell(numSold)--this will keep track of no: of copies sold.if no argument passed, default to 1
//restock(numCopies)-- take no: of copies to restock and add it to total no: of copies
//                  --default to 5

// to run this code : node .\Javascript-coding-challenges\start\01_01_available_books.js

class Book{
    constructor(title,author,ISBN,numCopies){
        this.title=title
        this.author=author
        this.ISBN=ISBN
        this.numCopies=numCopies
    }

    getAvailability(){
        if(this.numCopies===0){
            return "Out of stock"
        }else if(this.numCopies<10){
            return "Low stock"
        }
        return "In stock"
    }

    //using getter function 
    get availability(){
        return this.getAvailability()
    }

    sell(numSold=1){
        this.numCopies-=numSold
    }

    restock(numStock=5){
        this.numCopies+=numStock
    }
}

const HungerGames=new Book("Hunger Games","Eric",12345,5)
console.log(HungerGames.availability)

HungerGames.sell(5)
console.log(HungerGames.availability)

HungerGames.restock(15)
console.log(HungerGames.availability)