class Sample{
    ssamplehallo(){
        console.log('this is sample')
    }
}


class Hallo extends  Sample{
    constructor(num1, num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hallo(){
       console.log('The sum is: '+(this.num1 + this.num2))
    }

}

let hay=new Hallo(10, 20)
hay.hallo()
hay.ssamplehallo()




//class Hallo {
 //   constructor(num1, num2) {
  //      this.num1 = num1;
  //      this.num2 = num2;
  //  }
//
  //  hallo() {
   //     console.log('The sum is: ' + (this.num1 + this.num2));
   /// }
//}

//let hay = new Hallo(10, 20);
//hay.hallo(); // Output: The sum is: 30
