function person(name,age,place,dob){
    this.name=name
    this.age=age
    this.place=place
    this.dob=dob
    this.display=function(){
        console.log('Name: '+this.name+' age: '+this.age+' palce: '+this.place+' dob: '+this.dob)
    }
}
var sree=new person('sreevardhan',22,'chengannur','09-08-2002')
var abhi=new person('Abhijith',25,'chengannur','09-08-2001')
sree.display()
abhi.display()