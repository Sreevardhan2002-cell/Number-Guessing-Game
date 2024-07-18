var person={name:'sreeavrdhan', age:22 ,place:'chengannur', display: function(){
    console.log(this.name)
}}
for(x in person){
    console.log(person[x])
}
person.dob='08-09-2002'
person.displayAge=function(){
    console.log(this.age)
}

console.log(person['age'])