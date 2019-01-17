document.addEventListener("DOMContentLoaded",function(){
	var anh=document.querySelectorAll('.image');
	var denhienra=document.querySelector('.mauden');
	anhphongtos=document.querySelector('.col-xs-6.col-sm-6.col-md-6.col-lg-6.formtrong');

	for (var i = 0; i < anh.length; i++) {
		anh[i].addEventListener("click",function(){
			denhienra.classList.add('denra');
			anhphongtos.classList.add('denra');
					})
	}
	denhienra.addEventListener('click',function(){
		denhienra.classList.remove('denra');
		anhphongtos.classList.remove('denra');

	})
},false);