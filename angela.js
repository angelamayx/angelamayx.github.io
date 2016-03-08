var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-2.2.1.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = procede;

function procede() {

    $(".hovertitle").hover(
        function() {//mouse in
            colorChange(this);
        }, function() {//mouse out
            $(this).css("color", "white");
        }
    );

}

function colorChange(element) {
    if(!$(element).is(":hover")) {
        $(this).css("color","white");
    } else {
        var rand = Math.floor(Math.random()*16777215).toString(16);
        $(element).css("color", '#' + rand);

        setTimeout(function(){ colorChange(element);}, 1000);
    }
}

function showMenu() {
    //have a list of all menu elements
    //determine which item is already listed
    //append items
}

function hideMenu() {
    //hide/remove appended items
}
