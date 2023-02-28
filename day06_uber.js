//write a class to calculate the uber price.
class Uber
    {
       
       constructor(name,km,price)
       {
          this.name = name;
          this.km = km;
          this.price = price;
       }
    getName(){
         return this.name;
    }
    getkm(){
      return this.km;
    }
    getPrice(){
      return this.km*this.price;
    }
    }
var uber=new Uber("Yogeshwari",25,30);
console.log(uber.getName());
console.log(uber.getkm());
console.log(uber.getPrice());
