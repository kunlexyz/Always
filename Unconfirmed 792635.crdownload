// JavaScript Document// JavaScript Document
var bin=''; binx='';
function bins(){
	for(i=0;i<Ans.length;i++){
var bin ='<div class="qboxex" onclick="bbtx('+i+')">'+(i+1)+'</div>';
binx=binx+bin;
}
document.getElementById('one').innerHTML=binx;binx='';}

var wH=window.innerHeight/5;
//document.getElementById('tabb').style.height=wH+'px';
document.write('<table id=\"tabru2\"><\/table> <form style=\"display:none;\" method=\"post\" action=\"gresult.php\" name=\"form1\" target=\"myiframe\"><input type=\"text\" name=\"scor\" id=\"scor\" /><input type=\"text\" name=\"subject\" id=\"subject\" /><input type=\"text\" name=\"tspent\" id=\"tspent\" /></form><iframe style=\"display:none\" name=\"myiframe\" src=\"gresult\"></iframe>');
var qn=0;
function bbtx(c){
document.getElementsByClassName('ic')[qn].style.display='none';
bbt()
qn=c;
document.getElementsByClassName('ic')[c].style.display='block';
}/*

function bbt2(){document.getElementsByClassName('ic')[qn].style.display='none';bbt();
qn=1;
document.getElementsByClassName('ic')[qn].style.display='block';}


function bbt1(){document.getElementsByClassName('ic')[qn].style.display='none';bbt();
qn=0;
document.getElementsByClassName('ic')[qn].style.display='block';}
document.getElementsByClassName('qboxex')[1].onclick=alert('worko');*/
function wor(){//SNA='ANS'+qn;alert(SNA);
}

var SNA='ANS'+qn;
Ex=qn+1;
ansExist='ANS'+Ex;
A=1;
B=2;
C=3;
D=4;
mkN=0;countD=4;
/*for loop
mkNn=mkN+'mk'+qn;*/
	
/*.............previousVersion.......
*/
var myoption;
function axx(){if(countD>0){
	 myoption='A'; if(A==Ans[qn]){next(); }else{next2();
	 countD=0;
	setTimeout('hitx()',2000);
	 }}}
function bxx(){ if(countD>0){myoption='B';if(B==Ans[qn]){next();}else{next2();
	 countD=0;
	setTimeout('hitx()',2000);}}}
function cxx(){if(countD>0){ myoption='C'; if(C==Ans[qn]){next();} else{ next2();
	 countD=0;setTimeout('hitx()',2000);}}}
function dxx(){if(countD>0){ myoption='D'; if(D==Ans[qn]){next();} else{ next2();
	 countD=0;setTimeout('hitx()',2000);}}}

function hitx(){countD=4;}
//................
function ax1(){nextF();Ans[0]=1;}
function bx1(){nextF();Ans[0]=0;}
function cx1(){nextF();Ans[0]=0;}
function dx1(){nextF();Ans[0]=0;}


function nextF(){/*showNext*/
if(qn<Ans.length-1){bbt();
document.getElementsByClassName('ic')[qn].style.display='none';wor();qn++;
document.getElementsByClassName('ic')[qn].style.display='block';}else{
bbt();
document.getElementsByClassName('ic')[qn].style.display='none';wor();qn=0;
document.getElementsByClassName('ic')[qn].style.display='block';}}

function nextP(){/*showPrevious*/
document.getElementsByClassName('ic')[qn].style.display='none';wor();if(qn>0){qn=qn-1;bbt();}
document.getElementsByClassName('ic')[qn].style.display='block';
}
function bbtx2(hh){
	var div2 = $(hh);
div2.animate({'margin-left': '500px',opacity: '0.1', fontSize: '11px'}, "1000");
div2.animate({'margin-left': '-10px',opacity: '0.8'}, "1000");
div2.animate({'margin-left': '0px',opacity: '1', fontSize: '25px'}, "800");
}
function bbt(){
	bbtx2(".opa");
	setTimeout('bbtx2(".opb")',100);
	setTimeout('bbtx2(".opc")',200);
	setTimeout('bbtx2(".opd")',300);
	
$(".bm").css({width: '10px'});
document.getElementsByClassName('bm')[0].style.transform='rotate(0deg)';
   $(".bm").animate(
        {rotation: 0},
        {
          duration: 500,
          step: function(now, fx) {
              $(this).css({"transform": "rotate("+now+"deg)","height":now+'px',left: '100px',width: '400px', fontSize: '29px',height: 'auto'});
          }
        }
    );
$(".bm").animate(
        {rotation: 360},
        {
          duration: 5,
          step: function(now, fx) {
              $(this).css({"transform": "rotate("+now+"deg)","height":now+'px',left: '100px',width: '400px', fontSize: '29px',height: 'auto'});
          }
        }
    );
/*	
var div = $(".bm");
div.animate({top: '-300px',width: '50px',opacity: '0.1',height: '80px'}, "fast");
div.animate({top: '150px',width: '450px',opacity: '0.8'}, "800");
div.animate({top: '80px',left: '100px',width: '400px',opacity: '1', fontSize: '29px',height: '450px'}, "2000");

var div2 = $(".opa");
div2.animate({'margin-left': '500px',opacity: '0.1', fontSize: '11px'}, "fast");
div2.animate({'margin-left': '-10px',opacity: '0.8'}, "1000");
div2.animate({'margin-left': '0px',opacity: '1', fontSize: '25px'}, "800");

var div2 = $(".bm2");
div2.animate({top: '1200px',opacity: '0.1', fontSize: '11px'}, "fast");
div2.animate({top: '50px',opacity: '0.8',marginLeft: '110px'}, "800");
div2.animate({top: '80px',opacity: '1', fontSize: '25px',height:'450px'}, "2000");*/
}



function Placer(){var qnk=qn+1;
tabro=document.getElementById('tabru2').innerHTML;
	tabrol='<td>'+qnk+'</td><td>'+myoption+'</td><td><img src=\"image/correctx.jpg\" \/></td>';
document.getElementById('tabru2').innerHTML=tabrol+tabro;}
function PlacerW(){var qnk=qn+1;
tabro=document.getElementById('tabru2').innerHTML;
	tabrol='<td>'+qnk+'</td><td>'+myoption+'</td><td><img src=\"image/wrongx.jpg\" \/></td>';
document.getElementById('tabru2').innerHTML=tabrol+tabro;}

function next(){uAns[qn]=1;Placer();nextF();smaf();}
function next2(){uAns[qn]=0;PlacerW();nextF();smaf();}

function smaf(){
	if(qn>Ans.length){qn=Ans.length;}
}
/*
function next(){nextF();mkN=1;Placer()}
function next2(){nextF();mkN=1;PlacerW()}
*/

/*sumbit*/
var uAns=[];
allAns=0;qq=0;ys="your score is";
for(var m=0;m<Ans.length;m++){uAns[m]=0;}
function subMIT(){
for(var i=0;i<uAns.length;i++){qq++;allAns=new Number(allAns)+new Number(uAns[i]);
}
document.getElementsByClassName('ic')[qn].style.display='none';
document.getElementById('navlayout').style.display='none';
document.getElementById('sco2').innerHTML=allAns+'/'+uAns.length;qq=0;getoffx();
document.getElementById('sco').style.display='block';
document.getElementById('container').style.display='none';
stopkxtime();
remark();
document.getElementById('scor').value=allAns;
document.getElementById('subject').value=document.getElementsByTagName('p')[4].innerHTML;

document.getElementById('tspent').value=fin;
document.forms[0].submit();
allAns=0;
document.getElementsByName('myiframe').style.display = 'block';

}

function shiy(){alert(qn);}

//Timero
var ktime=0; fin=61 - ktime;
if(!namo){var namo="User";}
namo.toUpperCase()
function time(){ktime=ktime-1;
document.getElementById('timero').innerHTML='time: '+ktime;if(ktime==0){
	subMIT();}
}
function kxtime(){ttim=setInterval("time()",1000);}
function stopkxtime(){clearInterval(ttim);
		fin = 61 - ktime;}

function entro(){qn=0;bbt();bins();
ktime=ktime+61;kxtime();
document.getElementById('container').style.display='block';
document.getElementById('entrance').style.display='none';
document.getElementById('heada').style.display='block';
document.getElementsByClassName('ic')[0].style.display='block';}


function playG(){
	document.getElementById('warninco').innerHTML='<div id="warnin" ><b>Are you Ready??</b></div>  <div class="opp" onclick="playGx()">OK</div><div class="opp" onclick="getoffx();">NO</div>';document.getElementById('mex').style.display='block';}
function playGx(){uAns=[];
allAns=0;qq=0;qn=0;
for(var m=0;m<Ans.length;m++){uAns[uAns.length]='';}
getoffx();ktime=1;
entro();
document.getElementById('tabru2').innerHTML="";
document.getElementById('sco').style.display='none';
document.getElementById('navlayout').style.display='block';
}

function getoffx(){document.getElementById('mex').style.display='none';}
function getinx(){document.getElementById('mex').style.display='block';
document.getElementById('warninco').innerHTML='<div id="warnin" ><b>Are you Sure ??</b></div>  <div class="opp" onclick="subMIT()">YES</div><div class="opp" onclick="getoffx();">NO</div>';}

function remark(){if(allAns<=5){texto='your performance make me wanna ask, '+namo+'   COMMON  are u a student?? no card for u';}else if(allAns<=12){texto='thats very poor  '+namo+',  try and read more. reading is good for your.but no card for u';}else if(allAns<=20){texto='i may say that is not all that bad '+namo+'. Study more for next time. but no card for u';}else if(allAns==25){texto='Average, never give-up '+namo+', i believe u can do better but no card for u';}else if(allAns<=33){texto=' just lil above average '+namo+'.but no card for u';}else if(allAns==35){texto='Hmmmm ...80% is Good, '+namo+' take N100 card';}else if(allAns==45){texto='Wow almost there ...i think u deserve N200, keep it up. '+namo;}else{texto=' ...OH '+namo+' u re a Genius, always play with me i can help your dream ...excellent. u have N500 credit.';}

document.getElementById('sco2x').innerHTML=texto+',<br /> you score';}

//.....numberSELECTboxSCROLL
