var inputbox = document.getElementById('inputbox')
var buttons = document.querySelectorAll('button')


var string = ''
buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputbox.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputbox.value = string
        }
        else if(b.target.innerText == 'Del'){
            string =string.substring(0,string.length-1)
            inputbox.value=string
        }
        else if (b.target.id == 'plsmins'){
            string = String(-eval(string))
            inputbox.value = string;
        }
        else if (b.target.id == 'modles'){//this mechanisim has been used to manipulate the
            //associate computing of modles and multiplication
            string = String(-eval(string))
            inputbox.value = string;
        }
        else{
            string += b.target.innerText
            inputbox.value = string;
        }
    })
}) 