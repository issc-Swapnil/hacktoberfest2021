const sec_hand = document.querySelector(".sec");
const min_hand = document.querySelector(".min");
const hour_hand = document.querySelector(".hour");
const html_date=document.querySelector(".date");

function set_date()
{
    const date=new Date();

    const second=date.getSeconds();
    const second_degree=((second/60)*360)+90;
    sec_hand.style.transform=`rotate(${second_degree}deg)`

    const min=date.getMinutes();
    const min_degree=((min/60)*360)+90;
    min_hand.style.transform=`rotate(${min_degree}deg)`

    const hour=date.getHours();
    const hour_degree=((hour/12)*360)+90;
    hour_hand.style.transform=`rotate(${hour_degree}deg)`

    html_date.innerHTML=`${hour} : ${min} : ${second}`
}
set_date();
setInterval(set_date,1000);
