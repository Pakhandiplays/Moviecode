function movie() {

const a = document.getElementById('search').value
console.log(a)

if (a == 75529){
    console.log("you found Harry potter movie")

document.getElementById('main_download').style.visibility = "hidden"
document.getElementById('main_download').style.display = "none"
// document.querySelectorAll('.Movie').style.display = "none"
document.getElementById('Harry_potter').style.display = "block"
document.getElementById('Harry_potter').style.visibility = "visible"

}
}
// document.onkeydown = function(t){
//     // console.log(t.keyCode)
//     if(t.keyCode === 13){
//         document.getElementById('search_btn').click() 
//         q.removeEventListener
//     }
// }
  