var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-2.2.1.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = procede;

function procede() {

    $(".hovertitle").hover(
        function() {//mouse in
            hoverTitleColorChange(this);
        }, function() {//mouse out
            $(this).css("color", "white");
        }
    );
    
    hoverlessColorChange($('#404'));

    $(".hoverlink").each(function() {
        //$(this).css( "color", '#' + Math.floor(Math.random()*16777215).toString(16) );
        $(this).css("color", getRandomColor());
    });

    $(".hoverlink").hover(
        function() {
            hoverLinkColorChange(this);
            //colorchange
        }, function() {
            return 0;
        }
    );
}

function getRandomColor() {
    var r = (Math.floor((Math.random()*156)+100).toString(16));
    var g = (Math.floor((Math.random()*156)+100).toString(16));
    var b = (Math.floor((Math.random()*156)+100).toString(16));
    return '#' + r + g + b;
}

function hoverTitleColorChange(element) {
    if(!$(element).is(":hover")) {
        $(this).css("color","white");
    } else {
        $(element).css("color", getRandomColor());

        setTimeout(function(){ hoverTitleColorChange(element);}, 1000);
    }
}

function hoverLinkColorChange(element) {
    if( $(element).is(":hover")) {
        $(element).css("color", getRandomColor());
        setTimeout(function(){ hoverLinkColorChange(element);}, 750);
    }
}

function hoverlessColorChange(element) {
    $(element).css("color", getRandomColor());
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
