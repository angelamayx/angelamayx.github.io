var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-2.2.1.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = procede;

function procede() {


$(".title").hover(
    function() {//mouse in
        var rand = Math.floor(Math.random()*16777215).toString(16);
        $(this).css("color", '#' + rand);
    }, function() {//mouse out
        $(this).css("color", "white");
    }
);

}
