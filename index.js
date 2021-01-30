let screen=document.getElementById('screen');

buttons=document.querySelectorAll('button');

let screenval='';
for(item of buttons)
{
    item.addEventListener('click',(e)=> {
        buttonTEXT=e.target.innerText;
        console.log(buttonTEXT);  

        if(buttonTEXT=='X')
        {
          buttonTEXT='*';
          screenval += buttonTEXT;
          screen.value=screenval;
        }
        else if(buttonTEXT=='=')
        {  
          screen.value = eval(screenval);  
        } 
        else if(buttonTEXT=='C')
        {
            screenval="";
            screen.value=screenval;
        }
        else{
            screenval+=buttonTEXT;
            screen.value=screenval; 
        }


    })
}