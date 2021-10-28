// JavaScript source code
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;


switch (dayOfWeekNumber) {
    case 0:
        nameOfDay = 'Sunday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUWaNhtkouQow8lnAnM4lN25cKufAUrUQLQ&usqp=CAU");
        break;
    case 1:
        nameOfDay = 'Monday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://media.istockphoto.com/photos/monday-concept-with-morning-coffee-cup-new-monday-new-week-new-start-picture-id1210438936?b=1&k=20&m=1210438936&s=170667a&w=0&h=2xLjeP8bvnsjkF3dsR__tBPfI0BEKsu7pz7aBjIY_w4=");
        break;
    case 2:
        nameOfDay = 'Tuesday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://static.parade.com/wp-content/uploads/2020/10/Tuesday-quotes-5-e1603256225719.jpg");
        break;
    case 3:
        nameOfDay = 'Wednesday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp6esNk_SkX3kwlsKek_4L5f6rVrqbYKdmw&usqp=CAU");
        break;
    case 4:
        nameOfDay = 'Thursday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://www.wishesmsg.com/wp-content/uploads/Thursday-Greetings.jpg");
        break;
    case 5:
        nameOfDay = 'Friday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://media.istockphoto.com/vectors/hello-friday-cute-lettering-vector-id1017219628?s=612x612");
        break;
    case 6:
        nameOfDay = 'Saturday';
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", "https://image.shutterstock.com/image-photo/hello-saturday-card-blooming-flower-260nw-1721429161.jpg");
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

