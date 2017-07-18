class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    basicIntroduce(){
       console.log('My name is'+this.name+'. I am'+this.age+'years old');
        //return result;
    }

}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        var result=super.basicIntroduce();
        result+=console.log('I am a Student.I am at Class'+this.klass);
        return result;
    }
    
}
var d=new Student('Tom',21,2);
d.introduce();
class Worker extends Person{
     constructor(name,age){
        super(name,age);

    }
        introduce(){
       var result=super.basicIntroduce();
       result+=console.log('I am a Worker.I have a job.');
       return result;
        }
    
}
var w=new Worker('Tom',21);
w.introduce();