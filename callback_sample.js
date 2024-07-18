  
//var dt=new Date()
//console.log('Hallo')
//for(i=0;i<1000;i++){
  //  console.log('iam in a loop')
//}
//console.log('loop ended')
//console.log('date before processing'+dt)
//var ad=new Date()-dt
//console.log(ad)



/*function longTask(millsecondtime){
    dt=new Date()
    while((new Date-dt) <= millsecondtime){

    }
}
//SYNCHRONOUS
//console.log('started')
//longTask(2000)
//console.log('Ended')

//console.log('started')
//longTask(2000)
//console.log('Ended')

//console.log('started')
//longTask(2000)
//console.log('Ended')

//ASYNCHRONOUS
function setend(){
    console.log('end')
}
console.log('started')
setTimeout(setend,2000);
console.log('started')
setTimeout(setend,2000)
console.log('started')
setTimeout(setend,2000)*/

//Callback event

//eg
var Hallo=function(data){
    console.log('data losed. '+data)

}
var hay=function(master){
    master('You lose')
}
hay(Hallo)