var read=require('readline-sync')
//for(i=1;i<=5;i++){
  //  for(j=0;j<i;j++){
    //    console.log('*')
    //}
    //console.log(line)
//}

for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '* ';
    }
    console.log(line);
}
