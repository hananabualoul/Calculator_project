const calcScreen=document.getElementById('calc-screen');
const colorThemeLink=document.getElementById('color-theme-link');
const themes={
    'theme1.css':'style-theme2.css',
    'theme2.css':'style-theme3.css',
    'theme3.css':'style-theme1.css'
}
Array(...document.getElementsByTagName('button')).filter((elem)=>elem.innerHTML!='del'&&elem.innerHTML!='reset'&&elem.innerHTML!='=').forEach((elem)=>elem.addEventListener('click',()=>{
    if(calcScreen.value >='0'&&calcScreen.value <='9' || calcScreen.value=='/'||calcScreen.value=='*'||calcScreen.value=='-'||calcScreen.value=='+')
       {
        if(elem.innerHTML=='<i class="fas fa-times"></i>')calcScreen.value+='*';
        else calcScreen.value+=elem.innerHTML;
       }
    
    else {
         if(elem.innerHTML=='<i class="fas fa-times"></i>')calcScreen.value='*';
         else calcScreen.value=elem.innerHTML;
    }
}));
document.getElementsByClassName('reset')[0].addEventListener('click',()=>calcScreen.value='');
document.getElementsByClassName('delete')[0].addEventListener('click',()=>calcScreen.value=calcScreen.value.substring(0,calcScreen.value.length-1));
document.getElementsByClassName('calculate-result')[0].addEventListener('click',()=>{
    try{
        calcScreen.value=eval(calcScreen.value);
    }
    catch(err){
        calcScreen.value='syntax error';
    }
});
document.getElementById('color-theme-toggle').addEventListener('click',()=>{
    const currentTheme=colorThemeLink.href.split('-').pop();
    colorThemeLink.href=themes[currentTheme];
})