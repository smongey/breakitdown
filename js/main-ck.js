$(document).ready(function(){$(document).scroll(function(){var e=$(".subnav");if(!e.attr("data-top")){if(e.hasClass("navbar-fixed-top"))return;var t=e.offset();e.attr("data-top",t.top)}if(e.attr("data-top")-e.outerHeight()<=$(this).scrollTop()-$(e).outerHeight()){e.addClass("navbar-fixed-top");$("#home").addClass("live")}else{e.removeClass("navbar-fixed-top");$("#home").removeClass("live")}});$("#home").click(function(){$("#slider").delay(300).fadeOut(300);$("#wheel").delay(600).fadeIn(300);$("#home").removeClass("live")});$("#foodloop, #loop").click(function(){$("#wheel").delay(300).fadeOut(300);$("#slider").delay(600).fadeIn(300);$("#home").addClass("live")});$(".kate").hover(function(){$(".photo img").animate({marginLeft:-10},200)},function(){$(".photo img").animate({marginLeft:0},200)});$(".liz").hover(function(){$(".photo img").animate({marginLeft:10},200)},function(){$(".photo img").animate({marginLeft:0},200)});$("#content-slider").royalSlider({autoHeight:!1,arrowsNav:!0,arrowsNavAutoHide:!1,autoScaleSlider:!0,autoScaleSliderWidth:1e3,autoScaleSliderHeight:600,fadeinLoadedSlide:!1,imageScaleMode:"fill",imageAlignCenter:!1,globalCaption:!0,loop:!0,numImagesToPreload:6,keyboardNavEnabled:!0,usePreloader:!1,sliderDrag:!1});$("#navgraphic").cycle({fx:"fade",speed:"fast",timeout:0,next:".rsArrowRight",prev:".rsArrowLeft"});if(document.location.href.indexOf("#slider")>-1){$("#wheel").delay(300).fadeOut(300);$("#home").addClass("live")}document.location.href.indexOf("#about")>-1&&$("#home").addClass("live");document.location.href.indexOf("compost.html")>-1&&$("#home").addClass("live");$(function(){$("#intro, #wheel").css({height:$(window).height()-56});$("#wheel h1").css({"margin-top":$(window).height()/3});$(window).bind("resize",function(){$("#intro, #wheel").css({height:$(window).height()-56});$("#wheel h1").css({"margin-top":$(window).height()/3})})});$("body").hasClass("compost")||$.localScroll({duration:400})});