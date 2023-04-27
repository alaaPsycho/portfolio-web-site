var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	loop: true,
	slidesPerView: "2",
	coverflowEffect: {
		rotate: 10,
		stretch: 30,
		depth: 50,
		modifier: 5,
		slideShadows: true
	},
	
	pagination: {
		el: ".swiper-pagination",
		clickable: false
	}
});



window.addEventListener('scroll',()=>{


/*
	let nav = document.getElementById('nav')
	document.documentElement.scrollTop > 200 ?
	  nav.classList.add('fixed')
	 :
	 nav.classList.remove('fixed')

 
*/

})
window.addEventListener('scroll',()=>{
	if(((window.innerHeight + window.pageYOffset)) >= document.getElementById('skills').offsetTop ){
		let progress = document.querySelectorAll('.progress-bar');
		let values =['80%','69%','50%','55%','70%','50%','60%','60%','55%','50%','40%'];
		progress.forEach((pro,index) =>{
		  pro.style.width = values[index]
		})

		document.querySelectorAll('#progress-text').forEach((pro,index) =>{
			pro.textContent =values[index]
		  })
	}

	
})






document.querySelector('.nav-bar .fa-bars').addEventListener('click',function(){
	
	document.querySelector('nav').classList.add('active')
})

document.querySelector('.nav-bar .fa-times').addEventListener('click',function(){
	
	document.querySelector('nav').classList.remove('active')	

})
document.querySelectorAll('nav a').forEach(item=>{
	item.addEventListener('click',()=>{
		document.querySelector('nav').classList.remove('active')
	})
})
//test


  /*
			document.querySelectorAll('nav a').forEach(item => {
				item.addEventListener('click',()=>{

					document.querySelectorAll('nav a').forEach(item => {
						item.classList.remove('active')
					})
					item.classList.add('active')
				

				})
				
  });
		
	
		*/


document.querySelector('.show-cv').addEventListener('click',()=>{
	document.querySelector('.cv-app').style.display='block'
})
document.querySelector('.cv-app i').addEventListener('click',()=>{
	document.querySelector('.cv-app').style.display='none'
})