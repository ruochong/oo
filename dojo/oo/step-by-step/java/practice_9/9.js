class Person{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        var  result='My name is '+this.name+'. I am '+this.age+' years old. ';
        return result;
    }
}
class Klass{
    constructor(number,leader){
    this.number=number;
    this.leader=leader;
    }
    assignLeader(student){
        this.leader=student.id;
    }
}


class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=Klass;
    }

    introduce(){
        var result=super.introduce();
        result+='I am a Student.I am at Class'+this.klass.number;
        if(this.id===this.klass.leader){
            result+=' I am Leader of Class  '+this.klass.number+'. ';
        }
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

var a=new Klass(2);
var b=new Student(1,'Tom',10,a);
var c=new Student(2,'Bob',20,a)
var w=new Teacher(1,'Tom',21,2);
a.assignLeader(b);
console.log(b.introduce());
//console.log(b.introduce());
console.log(w.introduce());

console.log(w.introduceWith(c));