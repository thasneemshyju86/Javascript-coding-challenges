class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here

class TechnicalBooks extends Book{
  constructor(title,author,ISBN,numCopies,edition){
    super(title,author,ISBN,numCopies)
    this.edition=edition
  }

  getEdition(){
    return `The current version of the book is ${this.edition}`
  }
}

const HarryPotter=new TechnicalBooks("Harry Potter","Rudyard Kipling",12345,3,'Third')
console.log(HarryPotter.getEdition())