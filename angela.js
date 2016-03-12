var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-2.2.1.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = procede;

function procede() {

    $(".hovertitle").hover(
        function() {//mouse in
            hoverColorChange(this);
        }, function() {//mouse out
            $(this).css("color", "white");
        }
    );
    
    hoverlessColorChange($('#404'));

    $(".hoverlink").each(function() {
        $(this).css( "color", '#' + Math.floor(Math.random()*16777215).toString(16) );
    });

    $(".hoverlink").hover(
        function() {
            console.log("hovered");
            //colorchange
        }, null
    );
}

function hoverColorChange(element) {
    if(!$(element).is(":hover")) {
        $(this).css("color","white");
    } else {
        var rand = Math.floor(Math.random()*16777215).toString(16);
        $(element).css("color", '#' + rand);

        setTimeout(function(){ hoverColorChange(element);}, 1000);
    }
}

function hoverlessColorChange(element) {
    var rand = Math.floor(Math.random()*16777215).toString(16);
    $(element).css("color", '#' + rand);
    setTimeout(function(){ hoverlessColorChange(element);}, 1000);    
}

function showMenu() {
    //have a list of all menu elements
    //determine which item is already listed
    //append items
}

function hideMenu() {
    //hide/remove appended items
}
