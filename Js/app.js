setInterval(function(){
    let time = new Date();
document.getElementById('clock').innerText=time
},1000);


for(let i=1; i<=10000; i++)if(i%2==0){
    document.write(i+" is Even number"+"<br>");
} else if (i%2==1){
    document.write(i+" is Odd Number"+"<br>");
} else{
    document.write(i+" is Invalid Number"+"<br>");
}

