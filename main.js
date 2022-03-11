// document.getElementById('upperCaseButton').addEventListener('click', buttonClick) // html "document" get 2 methods - get your ID and add event listener -- within the eventlistener we added "click" and a function that we are writting 

// function buttonClick(){
// let userInfo = document.getElementById('upperCaseInfo').value
// let convertMsg = userInfo.toUpperCase()
// document.getElementById('upperCaseDisplay').innerText = convertMsg
// document.getElementById('resetForm').reset()
// }





// button click will react 
document.getElementById('upperCaseButton').addEventListener('click', buttonClick)


// grabbing and converting USER information
function buttonClick(){
let userInfo = document.getElementById('upperCaseInfo').value
let convertMsg = userInfo.toUpperCase()
document.getElementById('upperCaseDisplay').innerText = convertMsg
setTimeout(function() {
            document.getElementById("upperCaseDisplay").classList.add("animate");
          }, 300);
document.getElementById('resetForm').reset()
}

// getElementById()
// addEventListener() 