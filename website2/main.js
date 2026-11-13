let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let ayman = document.querySelector('.ayman');
window.onscroll=function(){
    let value=scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *4 +'px';
    mountains3.style.top = value *2 +'px';
    mountains4.style.top = value *1.5 +'px';
    river5.style.top = value +'px';
    boat6.style.top = value +'px';
    boat6.style.left = value *3 +'px';
    ayman.style.fontSize = value +'px';
    if(scrollY >= 58){
        ayman.style.position = 'fixed';

        if(scrollY >=163){
            ayman.style.display = 'none'; 
        }
        else{
             ayman.style.display = 'block';
            }
        if(scrollY >=109){
            document.querySelector('.main').style.background = 'linear-gradient( #376281 ,rgb(5, 66, 104))';
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient( #200016 , #10001f)';
        }
    }
}

