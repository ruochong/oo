class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        var  result='My name is'+this.name+'. I am'+this.age+'years old';
        return result;
    }
}
class Klass{
    constructor(number){
    this.number=number;
}
}


class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=Klass;
    }

    introduce(){
        var result=super.introduce();
        result+='I am a Student.I am at Class'+this.klass.number;
        return result;
    }
}


class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        var result=super.introduce();
        if(this.klass==null){
            result+='I am a Teacher.I teacher no class . '
        }
        else{
            result+='I am a Teacher.I teacher class '+this.klass+' .';}
        return result;
    }
    introduceWith(student){
        if(this.klass==student.Klass){
           var result=' I teacher '+student.name;
        }
        else{
           var result=' I donnot teacher '+student.name;
        }
        return result;
    }
   // return result;
}

var a=new Klass(3);
var b=new Student('Bob',10,a);
var w=new Teacher('Tom',21,2);
console.log(b.introduce());
console.log(w.introduce());

console.log(w.introduceWith(b));