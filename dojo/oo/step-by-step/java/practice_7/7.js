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
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        var result=super.introduce();
        result+='I am a Student.I am at Class'+this.klass;
        return result;
    }
}
var d=new Student('Tom',21,2);
console.log(d.introduce());
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
}
var w=new Teacher('Tom',21,2);
console.log(w.introduce());