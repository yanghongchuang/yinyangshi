window.onscroll=function(){
	var top=document.getElementById('top');
	console.log(top.setoffHeight)
	if(document.documentElement.scrollTop>=top.setoffHeight){
		top.style.position="fixed";
	}
}