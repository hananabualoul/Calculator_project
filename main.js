document.addEventListener('keydown',(event) =>{
    if(event.key>='0'&&event.key<='9')
        console.log(event.key);
    else if(event.key=='Enter'||event.key=='Backspace'||event.key=='.')
        console.log(event.key);
    else if(event.key=='/' || event.key=='*' || event.key=='-'|| event.key=='+')
        console.log(event.key);
    });
