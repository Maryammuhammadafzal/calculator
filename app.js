

function getButton(num) {
    var inputValue = document.getElementById('input')
    inputValue.value += num.innerText ;
    return inputValue.value 
       
}

function getResult(){
    var inputValue = document.getElementById('input')
    inputValue.value = eval(inputValue.value)
}

function clearBtn(){
    var inputValue = document.getElementById('input')
   inputValue.value = ""
}

function deleteBtn(){
    var inputValue = document.getElementById('input')
    var string = inputValue.value
    inputValue.value = string.substring(0 , string.length-1)
}