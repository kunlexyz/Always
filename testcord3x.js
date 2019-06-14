
function markIT(){
	cname=optionbox[queNo];
	cnamebox=answerbox[queNo];
	var crt='<img class="mk" src="images/x2.jpg" />';
	wg='<img class="mk" src="images/x.jpg" />';
	len=document.getElementsByClassName(cnamebox).length;scor=0;
	for(i=0;i<len;i++){
	var b1=document.getElementsByClassName(cnamebox)[i].innerHTML;
	if(b1==mark[queNo][i]){
		var bb=document.getElementsByClassName(cnamebox)[i].innerHTML;
		document.getElementsByClassName(cnamebox)[i].innerHTML=bb+crt;
		scor++;
		}else{
			var bb=document.getElementsByClassName(cnamebox)[i].innerHTML;
			document.getElementsByClassName(cnamebox)[i].innerHTML=bb+wg;
			}
		}document.getElementById('score').innerHTML='you score'+scor+'/'+mark[queNo].length;
	}

function foc2x(m){
	cname=optionbox[queNo];
	cnamebox=answerbox[queNo];
	//tt1x='as'+focuso; //tt1x was for ID selection ...check com2	ment 2
	
	tt1x=document.getElementsByClassName(cnamebox)[focuso];
	tt1x.style.borderBottomStyle='none';
	focuso=m;//alert('hhhh');
	tt1x=document.getElementsByClassName(cnamebox)[focuso];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#00f';
	
	el=document.getElementsByClassName(cnamebox)[m].innerHTML;
	
	if(el=='.'){}else{
		
	tt2x=document.getElementsByClassName(cname)[tad[m]]
		//tt=document.getElementsByClassName(cname)[m];
		b1=tt2x.offsetTop;
		b1x=tt2x.offsetLeft;
	b2=document.getElementsByClassName(cname)[tad[m]];
	b2x=b2.offsetTop+document.getElementsByClassName('cbase')[0].offsetTop+window.pageYOffset+'px';
	b2x2=b2.offsetLeft;
ttt=document.getElementById('gauge2');
ttt.innerHTML=el;document.getElementsByClassName(cnamebox)[m].innerHTML='.';
ttt.style.display='block';
ttt.style.top=tt1x.offsetTop+'px';
ttt.style.left=tt1x.offsetLeft+'px';

$(ttt).css({"background-color":"yellow","position":"absolute"});
    $(ttt).animate({left:b2x2,top:b2x},"slow",
	//alert('www');
	function(){b2.style.color='#000';ttt.style.display='none';
	b2.innerHTML=el;
	});
	}
}
cnamebox='';
function mashx(n){
	cname=optionbox[queNo];
	cnamebox=answerbox[queNo];
	var tt2=document.getElementsByClassName(cname)[n];
	
	if(tt2.innerHTML=='-'){}
	else{	
	//...flyAway...
	if(!tad[focuso] || tad[focuso]!=''){
		foc2x(focuso)
		}
	//.....
	tt1x='as'+focuso;
	tt1='a'+4;
	tad[focuso]=n;
	var b1=document.getElementsByClassName(cnamebox)[focuso].offsetTop;
	b1x=document.getElementsByClassName(cnamebox)[focuso].offsetLeft;
	tt2.style.color='#0f0';
	tt=document.getElementById('gauge');
	tt.style.display='block';
	//tt2=document.getElementsByClassName(cname)[n];
	tt.innerHTML=tt2.innerHTML;
	tt2.innerHTML='-';
	tt.style.top=tt2.offsetTop+document.getElementsByClassName('cbase')[0].offsetTop+window.pageYOffset+'px';
	tt.style.left=tt2.offsetLeft+'px';
	$(tt).css({"background-color":"yellow","position":"absolute"});
    $(tt).animate({left:b1x,top:b1},"slow",
	function(){document.getElementsByClassName(cnamebox)[focuso].innerHTML=tt.innerHTML;tt.style.display='none';focux2();
	});
	}
}

function focux2(){
	tt1x=document.getElementsByClassName(cnamebox)[focuso];
	tt1x.style.borderBottomStyle='none'
	focuso++;
	if(focuso>document.getElementsByClassName(cnamebox).length-1){
		focuso=0;}
	tt1x=document.getElementsByClassName(cnamebox)[focuso];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#00f';
	//if(focuso==0){}else{skro();}
	}
	
//....previous n nexT buttonFunction
document.getElementsByClassName('qcontainer')[queNo].style.display='block';
function prev(){
	focuso=0;
	document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	queNo--;
	if(queNo<1){queNo=0;
document.getElementsByClassName('bar2')[0].innerHTML='No. 1'+' '+'('+mark[queNo].length+'marks)';}else{
document.getElementsByClassName('bar2')[0].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';}
	document.getElementsByClassName('qcontainer')[queNo].style.display='block';
cba.innerHTML=ab[queNo].innerHTML;
document.getElementById('score').innerHTML='';
	emptyAnsbox();
	}
//prev();	

//...prev03
function prevo(){
	
	if(queNo==0){
	
	win=window.innerWidth;
	$('#slider').css({left:(-(win+3)+'px'),"width":(win+"px"),"display":"block"});
	
	document.getElementById('slider').innerHTML='you are on the first page';
	$('#slider').animate({left:(0+'px')},1300,
	function(){
	$('#slider').delay(1500).animate({left:(-(win+3)+'px')},1300);
document.getElementsByClassName('bar2')[1].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
	//$('#slider').delay(5000).css({"display":"none","left":(1+"px")});
		
	//emptyAnsbox();
	});
	
		}else{
	focuso=0;
	//document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	var tto2=document.getElementsByClassName('qcontainer')[(queNo-1)];
	tto3=document.getElementsByClassName('qcontainer')[queNo];
	win=window.innerWidth;
	$('#slider').css({left:(-(win+3)+'px'),"display":"block"});
	
	queNo--;
	
	
	document.getElementById('slider').innerHTML=tto2.innerHTML;
	$('#slider').animate({"left":(1+"px")},1300,
	function(){
	$('#slider').css({"display":"none","left":(1+"px")});
	tto3.style.display='none';
	tto2.style.display='block';
	document.getElementById('slider').innerHTML='';
		
	cba.innerHTML=ab[queNo].innerHTML;
document.getElementsByClassName('bar2')[1].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
document.getElementById('score').innerHTML='';

	emptyAnsbox();	});
	
}
}
/*
function prevo(){
	focuso=0;
	
	queNo--;
	var tto2=document.getElementsByClassName('qcontainer')[queNo];
	tto3=document.getElementsByClassName('qcontainer')[(queNo+1)];
	win=window.innerWidth;
	$(tto2).css({"display":"block","position":"absolute","width":(win+"px"),left:(-(win+3)+'px'),"box-shadow": "1px 4px 11px 4px rgba(0, 0, 0, 0.4)"});

$(tto2).animate({left:(0+'px')},"slow",
	function(){
	$(tto3).css({"display":"none","position":"relative","width":(win+"px")});
	$(tto2).css({"position":"relative","width":((win-2)+"px")});
		
		});
	}*/
function nexTx(){
	focuso=0;
	document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	queNo++;
	if(queNo==document.getElementsByClassName('qcontainer').length){queNo=document.getElementsByClassName('qcontainer').length-1;}
	document.getElementsByClassName('qcontainer')[queNo].style.display='block';
cba.innerHTML=ab[queNo].innerHTML;
document.getElementsByClassName('bar2')[1].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
document.getElementById('score').innerHTML='';

	emptyAnsbox();
}
//.... nexT 3
function nexT(){
	if(queNo==document.getElementsByClassName('qcontainer').length-1){queNo=document.getElementsByClassName('qcontainer').length-1;
	
	
	win=window.innerWidth;
	$('#slider').css({"left":(win+"px"),"width":(win+"px"),"display":"block"});
	
	document.getElementById('slider').innerHTML='you are on the last page';
	$('#slider').animate({left:(0+'px')},1300,
	function(){
	$('#slider').delay(1500).animate({left:((win+3)+'px')},1300);
	//$('#slider').delay(5000).css({"display":"none","left":(1+"px")});
		
	//emptyAnsbox();
	});
	}else{
	focuso=0;
	//document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	var tto2=document.getElementsByClassName('qcontainer')[queNo];
	tto3=document.getElementsByClassName('qcontainer')[(queNo+1)];
	win=window.innerWidth;
	$('#slider').css({left:(0+'px'),"width":(win+"px"),"display":"block"});
	tto2.style.display='none';
	queNo++;
	tto3.style.display='block';
	
	
	document.getElementById('slider').innerHTML=tto2.innerHTML;
	$('#slider').animate({left:(-(win+3)+'px')},1300,
	function(){
	$('#slider').css({"display":"none","left":(1+"px")});
	document.getElementById('slider').innerHTML='';
		
	cba.innerHTML=ab[queNo].innerHTML;
document.getElementsByClassName('bar2')[1].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
document.getElementById('score').innerHTML='';

	emptyAnsbox();	});
	
}}
//...another nexT for flip
function nexT3(){
	focuso=0;
	//document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	var tto2=document.getElementsByClassName('qcontainer')[queNo];
	tto3=document.getElementsByClassName('qcontainer')[(queNo+1)];
	win=window.innerWidth;
	queNo++;
	if(queNo==document.getElementsByClassName('qcontainer').length){queNo=document.getElementsByClassName('qcontainer').length-1;}else{
	
$(tto2).css({"position":"absolute","width":(win+"px"),"box-shadow": "1px 4px 11px 4px rgba(0, 0, 0, 0.4)"});
$(tto3).css({"display":"block"/*,"left":(win+"px")*/});
	
	$(tto2).animate({left:(-(win+3)+'px')},"slow",
	function(){
	$(tto2).css({"display":"none","position":"relative","width":(win+"px")});
		
		});
		
/*	$(tto3).animate({left:0+'px'},"slow",
	function(){
	$(tto2).css({"position":"relative"});
		
		});*/
	
	
cba.innerHTML=ab[queNo].innerHTML;
document.getElementsByClassName('bar2')[0].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
document.getElementById('score').innerHTML='';	
}}
//...
function marks(){
	var mm=mark[queNo].length;
	}
//...empty tad[]

function emptyTAD(){
	for(var i=0;i<tad.length;i++){
		tad[i]='';
	}alert(tad.length);}

function emptyAnsbox(){
	var hh=answerbox[queNo];
	for(var ii=0;ii<document.getElementsByClassName(hh).length;ii++){
		document.getElementsByClassName(hh)[ii].innerHTML='.';
	tt1x=document.getElementsByClassName(hh)[ii];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#fff';}
	tt1x=document.getElementsByClassName(hh)[0];
	tt1x.style.borderBottomStyle='solid';
	tt1x.style.borderColor='#00f';
}