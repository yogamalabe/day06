class Circle {
    constructor(radius,color) {
     this.radius=radius;
     this.color=color;
   }
   getRadius(){
     return this.radius;
   }
   
   getColor(){
     return this.color;
   }
   
   getArea(){
     return 3.14*this.radius*this.radius;
   }
   
   getCircumference(){
     return 2*3.14*this.radius;
   }
   }
   var cir = new Circle(4,"red");
   console.log(cir.getRadius());
   console.log(cir.getColor());
   console.log(cir.getArea());
   console.log(cir.getCircumference());