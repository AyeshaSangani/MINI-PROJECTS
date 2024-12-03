
//   document.getElementById("run").addEventListener("mouseover" , function(){})


let target = document.getElementById("run")

target.addEventListener("click", function(){
    let a = Number(prompt("Enter Number 1"))
    let b = Number(prompt("Enter Number 2"))

    if(a>=300 || b>=300){
        alert("max value 299")
    }
    else{
        let obt = a + b
        let total = 600
        
        per = obt / total * 100
        console.log(per + "%");
        
    }
})


let a = window
console.log(a);

function run(){
    let abc = confirm ("Are You Sure")
    console.log(abc);
    
}