function redesign(){
	if(window.innerWidth > 500 || window.innerHeight > 550){
			for(var iix=0;iix<document.getElementsByClassName('ntor').length;iix++){
				document.getElementsByClassName('ntor')[iix].style.fontSize='56px'
			}
			for(var iixx=0;iixx<document.getElementsByClassName('numi').length;iixx++){
				document.getElementsByClassName('numi')[iixx].style.fontSize='56px'
			}
			for(var iii=0;iii<document.getElementsByClassName('qcontainer').length;iii++){
				document.getElementsByClassName('qcontainer')[iii].style.fontSize='56px'
			}
			for(var iii=0;iii<document.getElementsByClassName('ntorW').length;iii++){
				document.getElementsByClassName('ntorW')[iii].style.fontSize='86px'
			}
			for(var iii=0;iii<document.getElementsByClassName('ntorH').length;iii++){
				document.getElementsByClassName('ntorH')[iii].style.fontSize='150px'
			}
			for(var iii=0;iii<document.getElementsByClassName('ntorSup').length;iii++){
				document.getElementsByClassName('ntorSup')[iii].style.fontSize='32px'
			}
			for(var iii=0;iii<document.getElementsByClassName('signMargin').length;iii++){
				document.getElementsByClassName('signMargin')[iii].style.height='125px'
			}
	}
}
redesign();
//document.getElementsByClassName('ntor').style.fontSize='60px';
/*var lento=document.getElementsByClassName('ntor').length;
for(u=0;u<lento;u++){
document.getElementsByClassName('ntor')[u].style.fontSize='60px';
}

var lento2=document.getElementsByClassName('ntorW').length;
for(u=0;u<lento2;u++){
document.getElementsByClassName('ntorW')[u].style.fontSize='148px';
}

var lento3=document.getElementsByClassName('signs').length;
for(u=0;u<lento3;u++){
document.getElementsByClassName('signs')[u].style.fontSize='148px';
}
/*
document.getElementsByClassName('ntor').style.fontSize='60px';
document.getElementsByClassName('ntorW').style.fontSize='148px';
document.getElementsByClassName('ntor').style.fontSize='60px';
*/