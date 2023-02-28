//a) Write a constructor for the class Movie, 
//   which takes a String representing the title of the movie, a String representing the studio, 
//  and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
    constructor(title,studio,rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
   }
   
   //b) The constructor for the class Movie will set the class property 
   //  rating to "PG" as default when no rating is provided.
     constructor(title,studio,rating) {
     this.title = title;
     this.studio = studio;
     this.rating = "PG";
   }
   //c) Write a method getPG, which takes an array of base type Movie as its argument, 
   //   and returns a new array of only those movies in the input array with a rating of "PG". 
   //   You may assume the input array is full of Movie instances. The returned array need not be full.
   getPG(mov) {
      return this.rating;
    } 
   }
   
   //d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
   //   the studio “Eon Productions”, and the rating “PG 13”
   var mov = new Movie("Casino Royale","Eon Productions","PG-13");
   console.log(mov.getPG());
   