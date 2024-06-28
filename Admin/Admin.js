function login(){

const a = document.getElementById('nothing_1').value ; 
const b = document.getElementById('nothing_2').value ;
const x = document.getElementById('username').value ;
const y = document.getElementById('password').value ;
// console.log(x , y)

if(x == a & y == b ){
    document.getElementById('Correct').style.visibility = "visible"
    document.getElementById('Correct').style.display = "block"
    document.getElementById('Incorrect').style.visibility = "hidden"
    document.getElementById('Incorrect').style.display = "none"
    document.getElementById('usefull').click()
    document.querySelector("#test").innerHTML = "hii"
    console.log("hii")
}

else{
document.getElementById('Incorrect').style.visibility = "visible"
document.getElementById('Incorrect').style.display = "block"
    document.getElementById('Correct').style.visibility = "hidden"
    document.getElementById('Correct').style.display = "none"
}
}

// const x = document.getElementById('username').value ;
// console.log(x)


// const a = document.getElementById('nothing_1').value ; 
// const b = document.getElementById('nothing_2').value ;
// console.log(a , b)