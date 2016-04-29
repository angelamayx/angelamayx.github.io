var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-2.2.1.min.js";
document.querySelector('head').appendChild(jq);

var menuItems = new Array();
menuItems[0] = ["about me", "about.html"];
menuItems[1] = ["projects", "projects.html"];
menuItems[2] = ["resume", "resume.pdf"];
menuItems[3] = ["publications", "#"];

jq.onload = procede;

function procede() {
	pageFunction();

    $(".hovertitle").hover(
        function() {//mouse in
            hoverTitleColorChange(this);
        }, function() {//mouse out
            $(this).css("color", "white");
        }
    );

    $(".hoverlink").each(function() {
        changeToRandomColor(this);
    });

    $(".hoverlink").hover(
        function() {
            hoverLinkColorChange(this);
            //colorchange
        }, function() {
            return 0;
        }
    );

    $(".pagemenu").hover(
        function() {
            showMenu();
        }, function() {
            hideMenu();
        }
    );
}

function changeToRandomColor(element) {
    var r = (Math.floor((Math.random()*156)+100).toString(16));
    var g = (Math.floor((Math.random()*156)+100).toString(16));
    var b = (Math.floor((Math.random()*156)+100).toString(16));
    
    $(element).css("color", '#' + r + g + b);
}

function hoverTitleColorChange(element) {
    if(!$(element).is(":hover")) {
        $(this).css("color","white");
    } else {
        changeToRandomColor(element);
        setTimeout(function(){ hoverTitleColorChange(element);}, 1000);
    }
}

function hoverLinkColorChange(element) {
    if( $(element).is(":hover")) {
        changeToRandomColor(element);
        setTimeout(function(){ hoverLinkColorChange(element);}, 1000);
    }
}

function hoverlessColorChange(element) {
    changeToRandomColor(element);
    setTimeout(function(){ hoverlessColorChange(element);}, 1000);    
}

function formatMenuItem(array, index) {
	return "<li><a href=\"" + array[index][1] + "\"><h1>" + array[index][0] + "</h1></a></li>";
}

function formatHeader(array, index) {
    return "<li><h1>" + array[index][0] + "</h1></li>";
}

function generateHeader() {
    var i = $(".pagemenu").attr('id');
    $(".menu").append("<ul></ul>");
    var item = formatHeader(menuItems, i);
    $(".menu ul").append(item);
}

function showMenu() {
    //determine which item is already listed based on id
    var i = $(".pagemenu").attr('id');

    //copy list
    //remove index == id of list copy
    var temp = menuItems.slice(0);
    temp.splice(i, 1);

    //append rest of the list to ul
    for (var k = 0; k < temp.length; k++){
        var item = formatMenuItem(temp, k);
        $(".menu ul").append(item);

    }
    $(".menu ul li a h1").addClass("hovertitle");

    //XXX this is hacky
    $(".hovertitle").hover(
        function() {//mouse in
            hoverTitleColorChange(this);
        }, function() {//mouse out
            $(this).css("color", "white");
        }
    );
}

function hideMenu() {
    //remove appended items

    //find menu list length
    //remove (length - 1) items
    for (var k = 0; k < menuItems.length - 1; k++){
        $('.menu ul li').last().remove();
    }
}

function pageFunction() {}
