var queNo=0;
ab=document.getElementsByClassName('abase');
cba=document.getElementsByClassName('cbase')[0];

var cname="opbox1"; cnamebox="ansbox1"; focuso=0;
optionbox=['opbox','opbox1','opbox2','opbox3','opbox4'];
answerbox=['ansbox','ansbox1','ansbox2','ansbox3','ansbox4'];
cname='';

function explain(){
	$('.explainBox').slideDown(1500);
	$('.exp').html('Hide explanation');
	
}

function startin(){
	document.getElementsByClassName('instr')[0].style.display='none';
	document.getElementById('content').style.display='block';
	prevo();cba.innerHTML=ab[queNo].innerHTML;
	emptyAnsbox();
}

function te(){
	var tto2=document.getElementsByClassName('bar')[0];
	
	$(tto2).animate({margin:'100px',fontSize:'25px'},"slow");
	//alert('working2');
	}
var focuso=0;el='';

var tad=[];
tadx=[];

function focux1(){
	tt1x=document.getElementsByClassName('ansbox')[focuso];
	tt1x.style.borderBottomStyle='none'
	focuso++;
	if(focuso>document.getElementsByClassName('ansbox').length-1){
		focuso=0;}
	tt1x=document.getElementsByClassName('ansbox')[focuso];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#00f';}

function foc(m){
	//tt1x='as'+focuso; //tt1x was for ID selection ...check com2	ment 2
	
	tt1x=document.getElementsByClassName('ansbox')[focuso];
	tt1x.style.borderBottomStyle='none';
	focuso=m;//alert('hhhh');
	tt1x=document.getElementsByClassName('ansbox')[focuso];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#00f';
	
	el=document.getElementsByClassName('ansbox')[m].innerHTML;
	if(el=='-'){}else{
		
	tt2x=document.getElementsByClassName('opbox')[tad[m]]
		//tt=document.getElementsByClassName('opbox')[m];
		b1=tt2x.offsetTop;
		b1x=tt2x.offsetLeft;
	b2=document.getElementsByClassName('opbox')[tad[m]];
	b2x=b2.offsetTop+document.getElementsByClassName('cbase')[0].offsetTop+'px';
	b2x2=b2.offsetLeft;
tt=document.getElementById('gauge2');
tt.innerHTML=el;document.getElementsByClassName('ansbox')[m].innerHTML='-';
tt.style.display='block';
tt.style.top=tt1x.offsetTop+'px';
tt.style.left=tt1x.offsetLeft+'px';

$(tt).css({"background-color":"yellow","position":"absolute"});
    $(tt).animate({left:b2x2,top:b2x},"slow",
	//alert('www');
	function(){b2.style.color='#000';tt.style.display='none';
	b2.innerHTML=el;
	document.getElementById('gauge2').style.display='none';
	});
	}
}
	
function mash(n){
	var tt2=document.getElementsByClassName('opbox')[n];
	
	
	if(tt2.innerHTML=='-'){
	//alert(focuso);
	}
	else{	
	//...flyAway...
	if(!tad[focuso] || tad[focuso]!=''){
		foc(focuso)}
	//.....
	tt1x='as'+focuso;
	tt1='a'+4;
	tad[focuso]=n;
	//tadx[3]=n;
	//alert(focuso);
	var b1=document.getElementsByClassName('ansbox')[focuso].offsetTop;
	b1x=document.getElementsByClassName('ansbox')[focuso].offsetLeft;
	//positionNumber of the(this) clicked element
	tt2.style.color='#0f0';
	
	tt=document.getElementById('gauge');
	tt.style.display='block';
	tt2=document.getElementsByClassName('opbox')[n];
	tt.innerHTML=tt2.innerHTML;
	tt2.innerHTML='-';
	tt.style.top=tt2.offsetTop+document.getElementsByClassName('cbase')[0].offsetTop+'px';
	tt.style.left=tt2.offsetLeft+'px';
//document.getElementsByClassName('opbox')[0].innerHTML=document.getElementsByClassName('cbase')[0].offsetTop;//....debugging
	$(tt).css({"background-color":"yellow","position":"absolute"});
    $(tt).animate({left:b1x,top:b1},"slow",
	//alert('www');
	function(){document.getElementsByClassName('ansbox')[focuso].innerHTML=tt.innerHTML;tt.style.display='none';focux1();
	});
	}
}

function foc2(m){
	//tt1x='as'+focuso; //tt1x was for ID selection ...check com2	ment 2
	
	tt1x=document.getElementsByClassName('ansbox')[focuso];
	tt1x.style.borderBottomStyle='none';
	
	tt1x=document.getElementsByClassName('ansbox')[focuso];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#00f';
	
	el=document.getElementsByClassName('ansbox')[m].innerHTML;
	if(el=='-'){}else{
		
	tt2x=document.getElementsByClassName('opbox')[tad[m]]
		//tt=document.getElementsByClassName('opbox')[m];
		b1=tt2x.offsetTop;
		b1x=tt2x.offsetLeft;
	b2=document.getElementsByClassName('opbox')[tad[m]];
	b2x=b2.offsetTop+document.getElementsByClassName('cbase')[0].offsetTop+'px';
	b2x2=b2.offsetLeft;
tt=document.getElementById('gauge2');
ta1=document.getElementById('ta1').offsetTop;
ta1x=document.getElementById('ta1').offsetLeft;
tt.innerHTML=el;document.getElementsByClassName('ansbox')[m].innerHTML='-';
tt.style.display='block';
tt.style.top=tt1x.offsetTop+ta1+'px';
tt.style.left=tt1x.offsetLeft+ta1x+'px';

$(tt).css({"background-color":"yellow","position":"absolute"});
    $(tt).animate({left:b2x2,top:b2x},"slow",
	//alert('www');
	function(){b2.style.color='#000';tt.style.display='none';
	b2.innerHTML=el;
	document.getElementById('gauge2').style.display='none';
	});
	}
}
/*	
function mash(n){
	tt1x='as'+focuso;
	tt1='a'+4;
	tad[n]=n;
	//tadx[3]=n;
	var b1=document.getElementById(tt1x).offsetTop;
	b1x=document.getElementById(tt1x).offsetLeft;
	tt="#a4";
	
	$(tt).css({"background-color":"yellow","position":"fixed"});
    $(tt).animate({left:b1x,top:b1},"slow",
	//alert('www');
	function(){document.getElementById(tt1x).innerHTML=document.getElementById('a4').innerHTML;document.getElementById(tt1).style.display='none';});
}
*/