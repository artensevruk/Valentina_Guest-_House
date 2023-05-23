
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

let Burger = document.querySelector("#burger");
Burger.addEventListener("click", Batton);
function Batton(){
    document.getElementById("menu_burger").classList.toggle("active");
};

const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {

	  this.el.classList.remove('btn-up_hide');
	},
	hide() {
	 
	  this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
	  
	  window.addEventListener('scroll', () => {
		
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		
		scrollY > 400 ? this.show() : this.hide();
	  });
	  
	  document.querySelector('.btn-up').onclick = () => {
		
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }
  
  btnUp.addEventListener();