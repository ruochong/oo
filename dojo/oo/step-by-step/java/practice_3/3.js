class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
       var result=console.log('My name is'+this.name+'. I am'+this.age+'years old');
        return result;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
      var result=super.introduce();
        result+=console.log('I am a Student.I am at Class'+this.klass);
        return result;
    }
}
var d=new Student('Tom',21,2);
d.introduce();