var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-2.2.1.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = procede;

function procede() {


$("#name").hover(
    function() {//mouse in
         $(this).css("color", "yellow");
    }, function() {//mouse out
        $(this).css("color", "white");
    }
);

}
