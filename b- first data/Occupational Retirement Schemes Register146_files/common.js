// JavaScript Document

<!-- Login -->

// Popup window code
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=624,width=740,left=50,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}
<!-- End Login -->


// topsbfavourite 
$(function()
{
	var oNav=document.getElementById("topsbfavourite");
	var oDl=oNav.getElementsByTagName('dl');
	var i=0;
	var timer=null;
	
	var oul = oNav.getElementsByTagName("ul")[0];
	showFav(oul);
	
	for(i=0;i<oDl.length;i++){
		if(oDl[i].className=='one'){
			oDl[i].onmouseover=function(){
				var odd=this.getElementsByTagName('dd')[0];
				var aa=this.getElementsByTagName('a')[0];
				aa.className='hover';
				
				odd.style.display='block';
			}
	
			oDl[i].onmouseout=function (){
				var odd=this.getElementsByTagName('dd')[0];
				var aa=this.getElementsByTagName('a')[0];
				aa.className='';
				odd.style.display='none';
			}
		}
	}
});

	function showFav(container){
		var oldHtml = container.innerHTML;
		var index = oldHtml.toLowerCase().lastIndexOf("<li");
		oldHtml = oldHtml.substr(index, oldHtml.length - index);
		var favStr = getCookie("favUrl");
		var arr = favStr.split(",");
		var newHtml = "";
		if(favStr != ""){
			for(var i=0;i<arr.length;i++){
				var x = arr[i].indexOf(":");
				var title = arr[i].substr(0, x);
				var url = arr[i].substr(x+1, arr[i].length - x);
				newHtml = newHtml + "<li class='pane'><a href='" + decodeURIComponent(url) + "' class='addpage'>" + decodeURIComponent(title) + "</a><a href='javascript:void(0);' class='closepage' onclick='delFav(" + i + ")'>X</a></li>";
			}
		}
		container.innerHTML = newHtml + oldHtml;
	}
	
	function addFav(){
		var favStr = getCookie("favUrl");
		var fav = encodeURIComponent(document.title) + ":" + encodeURIComponent(window.location.href);
		var newHtml = "";
		if(favStr != ""){
			var len = favStr.split(",").length;
			if(len < 5){
				favStr = fav + "," + favStr;
			}else{
				favStr = fav + "," + favStr.substr(0, favStr.lastIndexOf(","));
			}
		}else{
			favStr = fav;
		}
		setCookie("favUrl", favStr);
		var oNav = document.getElementById("topsbfavourite");
		var oul = oNav.getElementsByTagName("ul")[0];
		showFav(oul);
	}
	
	function getCookie(key){
		var strCookie = document.cookie;
		var arrCookie = strCookie.split(";");
		var value = "";
		for(var i=0;i<arrCookie.length;i++){
			var endIndex = arrCookie[i].indexOf("=");
			var tempKey = arrCookie[i].substr(0, endIndex);
			if(tempKey.charAt(0)==" "){
				tempKey = tempKey.substr(1, tempKey.length - 1);
			}
			if(tempKey == key) {
				var len = arrCookie[i].length;
				value = arrCookie[i].substr(endIndex + 1, len - endIndex);
			}
		}
		return value;
	}
	
	function setCookie(key, value){
		var date=new Date();
		var expiresDays=30;
		date.setTime(date.getTime()+expiresDays*24*3600*1000); 
		document.cookie=key+"="+value+";path=/;expires="+date.toGMTString();
	}
	
	function delFav(index){
		var favStr = getCookie("favUrl");
		var arr = favStr.split(",");
		var newStr = "";
		for(var i=0;i<arr.length;i++){
			if(i != index){
				newStr = newStr + arr[i] + ",";
			}
		}
		if(newStr != ""){
			newStr = newStr.substr(0, newStr.length - 1);
		}
		setCookie("favUrl", newStr);
		var oNav = document.getElementById("topsbfavourite");
		var oul = oNav.getElementsByTagName("ul")[0];
		showFav(oul);
	}
	
	//share to facebook
	function shareToF(){
		window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&t='+encodeURIComponent(document.title));
	}
	
	//share to twitter
	function shareToT(){
		window.open('http://twitter.com/home?status='+encodeURIComponent(document.location.href)+' '+encodeURIComponent(document.title));
	}
	
	//share to maill
	function shareToM(){
		//window.open("mailto:?subject="+encodeURIComponent(document.title)+"&body="+encodeURIComponent(document.title)+":"+encodeURIComponent(document.location.href));
		window.open("mailto:?body="+encodeURIComponent(document.location.href));
	}
	
	//chat
	function shareToC(){
		var address = "mpfa@mpfa.org.hk";
		window.open("mailto:"+address+"?subject="+encodeURIComponent(document.title));
	}
	
	//add to bookmark
	function addToBookmark(){
		var title = document.title;
		var url = document.location.href;
		if(window.sidebar) {
			window.sidebar.addPanel(title, url, '')   //for firefox
		}else if (document.all) {
			try{
				window.external.AddFavorite(url, title)  //for ie 6
			}catch(e){
				try{
					window.external.addToFavoritesBar(url, title);  //for ie8
				}catch(e){
                	alert('Please press Ctrl + D to add the bookmark!')
				}
        	}
	    }else {
			alert('Please press Ctrl + D to add the bookmark!')
	    }
	}
/*
$(document).ready(function(){
						   
	$(".pane .closepage").click(function(){
		$(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
		var index = $(this).attr("class");
		alert(index);
	});

});
*/
	
/* End topsbfavourite */

/* topsbkeywords */
$(document).ready(function() {
	$("#topsbkeywords").selectbox();
	$("#publicbarwords").selectbox();
	$("#nceordrow01").selectbox();
	$("#nceordrow02").selectbox();
	$("#nceordrow03").selectbox();
	$("#nceordrow04").selectbox();
	$("#apfibarwords01").selectbox();
	$("#apfibarwords02").selectbox();
	$("#apfibarwords03").selectbox();
	/*$("#subscribewords01").selectbox();
	$("#subscribewords02").selectbox();
	$("#subscribewords03").selectbox();
	$("#subscribewords04").selectbox();*/
	$("#tzSchoolType").selectbox();
	
});
/* End topsbkeywords */

/* Inside Left Sidebar */
function highlight(parm1){
	$(".panel").hide();
	$("p.flip").removeClass("on");
	$("#panel_"+parm1).slideToggle("fast");						   
	$("#flip_"+parm1).toggleClass("on");
	};
/* End Inside Left Sidebar */

(function () {
   var ie =!!(window.attachEvent&&!window.opera),wk=/webkit\/(\d+)/i.test(navigator.userAgent)&&(RegExp.$1<525);
   var fn =[],run=function(){for(var i=0;i<fn.length;i++)fn[i]();},d=document;d.ready=function(f){
   if(!ie&&!wk&&d.addEventListener){return d.addEventListener('DOMContentLoaded',f,false);}if(fn.push(f)>1)return;
   if(ie)(function(){try{d.documentElement.doScroll('left');run();}catch(err){setTimeout(arguments.callee,0);}})();
   else if(wk)var t=setInterval(function(){if(/^(loaded|complete)$/.test(d.readyState))clearInterval(t),run();},0);};
});

<!-- Mainmenu -->
$(document).ready(function(){

	$("ul.dropdown li").dropdown();

});

$.fn.dropdown = function() {
	$(this).hover(function(){
		$(this).addClass("hover");
		$('> .dir',this).addClass("open");
		$('> .dirLeft',this).addClass("openL");
		$('ul:first',this).css('visibility', 'visible');
		$('.mainHigh:first',this).css('visibility', 'visible');
	},function(){
		$(this).removeClass("hover");
		$('.open',this).removeClass("open");
		$('.openL',this).removeClass("openL");
		$('ul:first',this).css('visibility', 'hidden');
		$('.mainHigh:first',this).css('visibility', 'hidden');
	});

}
<!-- End Mainmenu -->

//Inside Last menu
$(document).ready(function() {
$(".insidelinks ul li").hover(function() { //Hover over event on list item
$("p",this).show(); //Show the subnav

} , function() { //on hover out...
$("p",this).hide(); //Hide the subnav
$(".insidebtmenua").removeClass("insidebtactive");
});

$(".insidebtmenua").hover(function() {
$(".insidebtmenua").addClass("insidebtactive");
});
});

//Top Search
var otherJSb = '/eng/js/jquery.autocomplete.js';
document.write('<scr' + 'ipt type="text/javascript" src="'+otherJSb+'"></scr' + 'ipt>');

$().ready(function() {
	$("#topsbtext").autocomplete(websites, {
		minChars: 0,
		max: 10,
		autoFill: false,
		mustMatch: false,
		matchContains: true,
		scrollHeight: 300,
		formatItem: function(data, i, total) {
			return "<I>"+data[0]+"</I>";
		},
		formatMatch: function(data, i, total) {
			return data[0];
		},
		formatResult: function(data) {
			return data[0];
		}
	});
});

$(function(){

		$("#topsbfavourite > dl > dt > a").on("focusin", function(){
			$("#topsbfavourite > dl > dt > a").addClass("hover");
			$("#topsbfavourite > dl > dd").css("display","block");
		});
		$("#topsbfavourite > dl > dd").on({
			keydown:function(e){
				if( e.which == 13 ) 
				{ 
					if( ( e.target.className == "btn_addthispage" || e.target.className == "closepage" ) && ( $.browser.mozilla || $.browser.msie && parseInt($.browser.version, 10) == 8 ) ) {
						var t = e.target;
						$(t).trigger('click');
					}	
					
					if( e.target.className == "addpage") {
						location.href = e.target.href;
					}
					
					$("#topsbfavourite > dl > dt > a").removeClass("hover");
					$("#topsbfavourite > dl > dd").css("display","none");
				}
			},blur:function(){
				$("#topsbfavourite > dl > dt > a").removeClass("hover");
				$("#topsbfavourite > dl > dd").css("display","none");
			}
		});		
		$("#topsbtext,#logo").focusin(function(){	$("#topsbfavourite > dl > dd").trigger("blur");		});
		
		if ( ( $.browser.msie && parseInt($.browser.version, 10) == 8 ) ) {
			for( var i = 0; i < 3; i++)
				$("div#topnav ul:eq(1) li:eq(0) a:eq("+i+")").append("<span class='skipSymbol'>"+$("div#topnav ul:eq(1) li:eq(0) a:eq("+i+")").attr("title")+"</span>");
		}
});

$(function(){

		var $navMenu_FirstLi = $("ul#nav").children("li"),
			selfIndex = 0,
			tempSectionIndex = 0,
			level3MenuLen = 0;
			
		var current_open = -1;
		var current_lv3_open = -1;
			
		$navMenu_FirstLi.focusin(function(){
		
			currLI = $("ul#nav > li").index();
			selfIndex = $(this).index();
			tempSectionIndex = selfIndex;
			eachLI_Len = $("ul#nav > li:eq("+selfIndex+") > ul").children("li").length;
			
			
			if ( $.browser.msie && parseInt($.browser.version, 10) == 8  ) {
				ie_level2Menu_OpenClose("open", $(this));	
			} else {
				level2Menu_OpenClose("open", $(this));	
			}



		
			if ( $.browser.msie && parseInt($.browser.version, 10) == 8  ) {
			
				$("ul#nav > li > ul > li > a")
					.focusin(function(){	ie_level3Menu_OpenClose("open", $(this), selfIndex);		})
					.focusout(function(){	ie_level3Menu_OpenClose("close", $(this), selfIndex);		});
			} else if( $.browser.mozilla ){
				$("ul#nav > li > ul > li")
					.focusin(function(){	ff_level3Menu_OpenClose("open", $(this), selfIndex);		})
					.focusout(function(){	
						ff_level3Menu_OpenClose("close", $(this), selfIndex);	
						
						});
			} else {
				
				if(current_open != -1 && current_open != this){
					level2Menu_OpenClose("close", $(current_open) );
					chrome_level3Menu_OpenClose("close", $(current_lv3_open), selfIndex );
				}
				current_open = this;
				
				var lis = $("ul#nav > li > ul > li");
				
				$("ul#nav > li > ul > li")
					.focusin(function(){	chrome_level3Menu_OpenClose("open", $(this), selfIndex);		
						if(current_lv3_open != -1 && current_lv3_open != this){
							chrome_level3Menu_OpenClose("close", $(current_lv3_open), selfIndex );
						}
						
						current_lv3_open = this;
					})
					.focusout(function(){
					});
			}
				
		}).focusout(function(){
			
			if ( $.browser.mozilla == true ) {

				level2Menu_OpenClose("close", $(this) );
				
			} else if ( $.browser.msie && parseInt($.browser.version, 10) == 8  ) {
				ie_level2Menu_OpenClose("close", $(this) );
			} else {
			}

		});
			
		// P.S: For section menu last menu cannot colse
		//if ( $.browser.mozilla == true || ( $.browser.msie && parseInt($.browser.version, 10)>= 8) ) {
			var lastSection = $("ul#nav > li").length - 1;
			$("#middlemenu > .middlemenu01, .insidemain > *").focusin(function(){
				$("ul#nav").children("li").eq(lastSection).children("div").css({"visibility":"hidden"});
				$("ul#nav").children("li").eq(lastSection).children("ul").css({"visibility":"hidden"});
				$("ul#nav > li:eq("+lastSection+") > ul > li").siblings().children("a").removeClass("hoverWCAG open");
				$("ul#nav > li:eq("+lastSection+") > ul > li").siblings().children("ul").css("visibility","hidden");
				$("ul#nav > li:eq("+lastSection+") > ul > li").siblings().removeClass("hover");
			});
			
			$("#advancedsearch").focusin(function(){
				$("ul#nav > li").removeClass("hover");
				$("ul#nav > li:eq(0) > a, ul#nav > li:eq(0) > div").next().css("visibility","hidden");
				
				$("ul#nav > li:eq(0) > ul > li:eq(0)").children("a").removeClass("open");
				$("ul#nav > li:eq(0) > ul > li:eq(0)").children("ul").css("visibility","hidden");
				$("ul#nav > li:eq(0) > ul > li:eq(0)").removeClass("hover");
			});
		//}

		// Middle menu
		$("#middlemenu > .middlemenu03").focusin(function(){
			$("#submidmenu").css("display","none");
		});
		$("#middlemenu > .middlemenu04").focusin(function(){
			level2_middleMenu_OpenClose( "open", $(this) );
		});
		$("#submidmenu > li:eq(2) > a").blur(function(){
			level2_middleMenu_OpenClose( "close", $(this) );
		});		
});

	function level2_middleMenu_OpenClose( type, selector ){
		if( type == "open"){
			$("#submidmenu").css("display","block");
		} else {
			$("#submidmenu").css("display","none");
		}
	}
	
	function ff_level3Menu_OpenClose( type, selector, currSect ){
		$_this = selector;	

		$level_2_index = $_this.index();
		
		if( type == "open" ){
		
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").next().css("visibility","visible");
			if( $_this.hasClass("level3Menu") ) {
				$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").parent().addClass("hover");
				$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").addClass("open");
			} else {
				$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").addClass("hoverWCAG");
			}
				
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+")").siblings().children("a").removeClass("hoverWCAG open");
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+")").siblings().children("ul").css("visibility","hidden");
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+")").siblings().removeClass("hover");
				
		} else {		
		}
	}
	
	function chrome_level3Menu_OpenClose( type, selector, currSect ){
		$_this = selector;
		$temp_currLiIndex = 1;
		
		if( type == "open" ){
		
			if( $_this.hasClass("level3Menu") ) {
				$_this.children("ul").css({"visibility":"visible"});
				$_this.addClass("hover").children("a").addClass("open");
			} else { 
				$_this.children("a").addClass("hoverWCAG");
			}
			
		} else {
			if( $_this.hasClass("level3Menu") ) {
				$_this.removeClass("hover").children("a").removeClass("open");		
				$_this.children("ul").css({"visibility":"hidden"});
			} else { 
				$_this.children("a").removeClass("hoverWCAG");
			}
		}
		
	}
	
	function level2Menu_OpenClose( type, selector  ){
		$_this = selector;
		$_index = selector.index();
		$_tempSectionIndex = $_index;
		var tmpPrevSect = 0,	tmpNextSect = 0;
		
		if( type == "open" ){
		
			if ( $.browser.mozilla ) {
				
					$_this.addClass("hover");
					$_this.children("div").css({"visibility":"visible"});
					$_this.children("ul").css({"visibility":"visible"});
					
					$("ul#nav > li:eq("+$_index+")").siblings().removeClass("hover");
					$("ul#nav > li:eq("+$_index+")").siblings().children("div").css({"visibility":"hidden"});
					$("ul#nav > li:eq("+$_index+")").siblings().children("ul").css({"visibility":"hidden"});
					

					tmpPrevSect = $_index;
					tmpPrevSect -= 1;
					$("ul#nav > li:eq("+tmpPrevSect+") > ul").children("li").siblings().removeClass("hover");
					$("ul#nav > li:eq("+tmpPrevSect+") > ul > li").siblings().find("a").removeClass("hoverWCAG open");
					$("ul#nav > li:eq("+tmpPrevSect+") > ul > li").children("a").siblings().css("visibility","hidden");
					
					tmpNextSect = $_index;
					tmpNextSect +=1;
					$("ul#nav > li:eq("+tmpNextSect+") > ul").children("li").siblings().removeClass("hover");
					$("ul#nav > li:eq("+tmpNextSect+") > ul > li").siblings().find("a").removeClass("hoverWCAG open");
					$("ul#nav > li:eq("+tmpNextSect+") > ul > li").children("a").siblings().css("visibility","hidden");
				
			} else {
				$_this.addClass("hover");
				$_this.children("div").css({"visibility":"visible"});
				$_this.children("ul").css({"visibility":"visible"});
			}
			
		} else { 
		
			if ( $.browser.mozilla ) {

			} else { 
				$_this.removeClass("hover");
				$_this.children("div").css({"visibility":"hidden"});
				$_this.children("ul").css({"visibility":"hidden"});
			}
		}
	}
	
	function ie_level2Menu_OpenClose( type, selector ){
		$_this = $("ul#nav > li > a"); 
		$tempSectIndex = selector.index();
		$_index = selector.index();
		
		$_this = selector;
					$_this.addClass("hover");
					$_this.children("div").css({"visibility":"visible"});
					$_this.children("ul").css({"visibility":"visible"});
					
					$("ul#nav > li:eq("+$_index+")").siblings().removeClass("hover");
					$("ul#nav > li:eq("+$_index+")").siblings().children("div").css({"visibility":"hidden"});
					$("ul#nav > li:eq("+$_index+")").siblings().children("ul").css({"visibility":"hidden"});
					
					if( $_index != 0) {
						tmpPrevSect = $_index;
						tmpPrevSect -= 1;
						$("ul#nav > li:eq("+tmpPrevSect+") > ul").children("li").siblings().removeClass("hover");
						$("ul#nav > li:eq("+tmpPrevSect+") > ul > li").siblings().find("a").removeClass("hoverWCAG open");
						$("ul#nav > li:eq("+tmpPrevSect+") > ul > li").children("a").siblings().css("visibility","hidden");
					}

					tmpNextSect = $_index;
					tmpNextSect +=1;
					$("ul#nav > li:eq("+tmpNextSect+") > ul").children("li").siblings().removeClass("hover");
					$("ul#nav > li:eq("+tmpNextSect+") > ul > li").siblings().find("a").removeClass("hoverWCAG open");
					$("ul#nav > li:eq("+tmpNextSect+") > ul > li").children("a").siblings().css("visibility","hidden");

	}
	
	function ie_level3Menu_OpenClose( type, selector, currSect ){
		$_this = selector; 
		$temp_currLiIndex = 1;
		$level_2_index = $_this.parent().index();
		if( type == "open" ){
			
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").next().css("visibility","visible");
				
			if( $_this.parent().hasClass("level3Menu") ) {
				$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").parent().addClass("hover");
				$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").addClass("open");
			} else {
				$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+") > a").addClass("hoverWCAG");
			}

			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+")").siblings().children("a").removeClass("hoverWCAG open");
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+")").siblings().children("ul").css("visibility","hidden");
			$("ul#nav > li:eq("+currSect+") > ul > li:eq("+$level_2_index+")").siblings().removeClass("hover");

			
		} else { 

		}
	}
	
$(function(){

	$(window).load(function(){
		var pagingCount = $("div.paging a").length;
			
		for( var i = 0; i < pagingCount; i++) {
			var tempName = $("div.container a:eq("+i+") span").attr("title");
			$("div.paging a:eq("+i+")").attr( "title", tempName );
		}
	});
	
	var slideLink = "";
	$("div.paging a").on({
		focusin:function(e){
			$(this).trigger("click");
			slideLink = $(".container span").eq( $(this).index() ).data("link");
			$(this).attr("href",slideLink);
			$("div.paging a.current").siblings().attr("href","javascript:void(0);");
		},
		keydown:function(e){
			if( (e.which || e.keyCode) == 13){
				slideLink = $(this).attr("href");
				window.location.href = slideLink;
			}
		}, 
		mousedown:function(e){
			e.preventDefault();
		},
		mouseover:function(e){
			$(this).trigger("click");
		}
	});	
	
	//----------------corner part------------------------------
	//role base
	$(".roleleftbox_tt,.rolerightbox_tt").corner("top 5px");
	$(".btn_role_help,.btn_role_go").corner("5px");
	$(".btn_role_submit,.btn_role_reset").corner("3px");
	checkConstrastMode();
	
	
	//color contrast stwitch
	$(".contrastMode").click(function(){
		if($(this).hasClass("color")){
			$(this).removeClass("color");
			$('head').append('<link id="contrastModeCss" href="/eng/style/contrastMode.css" rel="stylesheet" type="text/css">');
			$(this).addClass("nocolor");
			document.cookie="contrastMode=nocolor; expires=18 Dec 2046 12:00:00 UTC; path=/";
		}else{
			$(this).removeClass("nocolor");
			$("#contrastModeCss").remove();
			$(this).addClass("color");
			document.cookie="contrastMode=color; expires=18 Dec 2046 12:00:00 UTC; path=/";
		}
	});
	
	
	
	
});

function checkConstrastMode(){
	if(getCookie("contrastMode")=="color"||getCookie("contrastMode")==""){
		$("#contrastMode").removeClass("nocolor");
		$("#contrastMode").addClass("color");
		$("#contrastModeCss").remove();
	}else if(getCookie("contrastMode")=="nocolor"){
		$("#contrastMode").removeClass("color");
		$('head').append('<link id="contrastModeCss" href="/eng/style/contrastMode.css" rel="stylesheet" type="text/css">');
		$("#contrastMode").addClass("nocolor");
	}
}

function jumpLink(link){
	location.href = link;
	
}