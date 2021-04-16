const { stringify } = require("querystring")

function display(num){
    var inp=document.querySelector("#btn")
    var j=inp.value
    inp.value=j+num

}
function evale(){
    let inp=document.querySelector("#btn").value
    let res=eval(inp)
    document.querySelector("#btn").value=res
}

function clea(){
    document.querySelector("#btn").value=" "

}
function dlet()
{
    let inp=document.querySelector("#btn").value
    inp=inp.slice(0,-1)
    // let ls=[]
    // for(let ch of inp){
    //     ls.push(ch)
    // }  
    // ls.pop(-1)
    // str="";
    // for(let i of ls){
    //     str+=i;
    // }
    document.querySelector("#btn").value=inp
}
