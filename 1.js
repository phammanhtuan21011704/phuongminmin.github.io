document.addEventListener("DOMContentLoaded",function(){
	var bamanh=document.querySelectorAll('.anh');
	var hienden=document.querySelector('.mauden');
	var anhra=document.querySelector('.mautrang');
	var cacanh=document.querySelectorAll('.mautrang ul li');
	console.log(cacanh);
	for (var i = 0; i < bamanh.length; i++) {
		bamanh[i].addEventListener("click",function(){
			console.log('kick roi')
			hienden.classList.add('denra');
			anhra.classList.add('denra');
			var anhdckick=(this);

			for (var chiso = 0;anhdckick=anhdckick.previousElementSibling; chiso++) {	
			}
			cacanh[chiso].classList.add('denra');
		});
	}
	hienden.addEventListener("click",function(){
		hienden.classList.remove('denra');
		anhra.classList.remove('denra');
		var tat=document.querySelector('.mautrang ul li.denra');
		tat.classList.remove('denra');

	})
	
},false);