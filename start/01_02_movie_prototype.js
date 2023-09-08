// Write your code here
//create a movie object that takes 5 prop(title,director,genre,release yr,ratinf)
//movie prototype shud have a fn named get overview which logs the following overview for each film
// <movie> ,a <genre> film directed by <director> wa sreleased in <release yr>. It recieved a rating of <rating>

class Movie{
    constructor(title,director,genre,releaseYear,rating){
        this.title=title
        this.director=director
        this.genre=genre
        this.releaseYear=releaseYear
        this.rating=rating
    }

    getOverview(){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.`
    }
}

const HarryPotter=new Movie("Harry Potter","Rudyard Kipling","fiction",2000,9)
console.log(HarryPotter.getOverview())