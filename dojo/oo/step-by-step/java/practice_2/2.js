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
class Student{
    constructor(name,age,klass){
        this.name=name;
        this.age=age;
        this.klass=klass;
    }

    introduce(){
     
        var result=console.log('My name is '+this.name+'.  I am '+this.age+' years old '+'I am a Student.I am at Class'+this.klass);
        return result;
    }
}
var d=new Student('Tom',21,2);
d.introduce();