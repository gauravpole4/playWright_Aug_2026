export class t1 {
  
    name: string
    age: number

  
    constructor(name: string, age: number) {

        this.name = name
        this.age = age
        
  }

  greet(courseName: string){

    console.log(`${this.name} of ${this.age} is taking ${courseName}`);
  }
}
