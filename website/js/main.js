$(function() {
    let navigation = $(".top-bar");
    let naviPoint = $(".navitem");
    let logo = $(".logo");
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= 15) {
            navigation.removeClass('top-bar').addClass('top-bar-alt');
            naviPoint.removeClass('navitem').addClass('navitem-alt');
            logo.removeClass('logo').addClass('logo-alt');
        } else {
            navigation.removeClass("top-bar-alt").addClass('top-bar');
            naviPoint.removeClass('navitem-alt').addClass('navitem');
            logo.removeClass('logo-alt').addClass('logo');
        }
    });
});


function normal() {
  document.getElementById("left").style.width = "50%";
  document.getElementById("left").style.opacity = "0.5";
  document.getElementById("right").style.width = "50%";
  document.getElementById("right").style.opacity = "0.5";
}

function expandLeft() {
  document.getElementById("left").style.width = "60%";
  document.getElementById("left").style.opacity = "0.8";
  document.getElementById("right").style.width = "40%";
}

function expandright() {
  document.getElementById("right").style.width = "60%";
  document.getElementById("right").style.opacity = "0.8";
  document.getElementById("left").style.width = "40%";
}


$(document).ready(function(){
    $("#right").click(function(){
        $("#foods").animate({left: '0%'}).css("display", "block");
        $("#wrapper").css("display", "none");
        window.scrollTo(0, 0);
    });
});

$(document).ready(function(){
    $("#left").click(function(){
        $("#drinks").animate({left: '0%'}).css("display", "block");
        $("#wrapper").css("display", "none");
        window.scrollTo(0, 0);
    });
});


$(document).ready(function(){
    $("#top").click(function(){
        $("#drinks").animate({left: '0'}).css("display", "block");
        $("#wrapper").css("display", "none");
        window.scrollTo(0, 0);
    });
});

function menuClick() {
  document.getElementById("wrapper").style.display = "inherit";
  document.getElementById("drinks").style.display = "none";
  document.getElementById("drinks").style.left = "-100%";
  document.getElementById("foods").style.display = "none";
  document.getElementById("foods").style.left = "100%";
}

function unCheck() {
  document.getElementById("checkBoxen").checked = false;
}


function allClick() {
  document.getElementById("spiritswrapper").style.display = "none";
  document.getElementById("allwrapper").style.display = "inherit";
  document.getElementById("whiskeywrapper").style.display = "none";
  document.getElementById("beerwrapper").style.display = "none";
  document.getElementById("liquerwrapper").style.display = "none";
}

function spiritsClick() {
  document.getElementById("spiritswrapper").style.display = "inherit";
  document.getElementById("allwrapper").style.display = "none";
  document.getElementById("whiskeywrapper").style.display = "none";
  document.getElementById("beerwrapper").style.display = "none";
  document.getElementById("liquerwrapper").style.display = "none";
}

function whiskeyClick() {
  document.getElementById("spiritswrapper").style.display = "none";
  document.getElementById("allwrapper").style.display = "none";
  document.getElementById("whiskeywrapper").style.display = "inherit";
  document.getElementById("beerwrapper").style.display = "none";
  document.getElementById("liquerwrapper").style.display = "none";
}

function beerClick() {
  document.getElementById("spiritswrapper").style.display = "none";
  document.getElementById("allwrapper").style.display = "none";
  document.getElementById("whiskeywrapper").style.display = "none";
  document.getElementById("beerwrapper").style.display = "inherit";
  document.getElementById("liquerwrapper").style.display = "none";
}

function liquerClick() {
  document.getElementById("spiritswrapper").style.display = "none";
  document.getElementById("allwrapper").style.display = "none";
  document.getElementById("whiskeywrapper").style.display = "none";
  document.getElementById("beerwrapper").style.display = "none";
  document.getElementById("liquerwrapper").style.display = "inherit";
}
