let climate = document.getElementsByClassName('climate')[0];

if(typeof(climate)!='undefines' && climate!=null){
    let body = document.querySelector('body');
    body.classList.add('body-first')
}
else{
    let body = document.querySelector('body');
    body.classList.remove('body-first')
}