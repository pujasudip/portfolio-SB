$(document).ready(function() {
	
	/*============================================
	Page Preloader
	==============================================*/

	$(window).load(function(){
		$('#page-loader').fadeOut(500,function(){

		});

		$('.backstretch > img').attr('alt', 'background image of leaf');

		window.addEventListener('scroll', function(){
            let hamMenuIcon = document.getElementById('hamMenuIcon');
			let hamMenu = document.getElementById('site-nav');
			hamMenu.style.height = '1px';
			hamMenu.classList.remove('in');
		});
	})

    $(window).scroll(function(){
        $('iframe').each(function(){
            if(isScrolledIntoView($(this))){
                console.log('visible:', $(this));
            }
            else{
                console.log('invisible', $(this))
            }
        });
    });
	
	/*============================================
	Header
	==============================================*/
	
	$('#home').height($(window).height()+50);
	
	$.backstretch('assets/images/leafline.jpg');
	
	if($(window).scrollTop() > ($(window).height()+50)){
		$('.backstretch').hide();
	}else{
		$('.backstretch').show();
	}
	
	$(window).scroll( function() {
		var st = $(this).scrollTop(),
			wh = $(window).height(),
			sf = 1.2 - st/(10*wh);
		
		$('.backstretch img').css({ 
			'transform' : 'scale('+sf+')',
			'-webkit-transform' : 'scale('+sf+')'
		});
		
		$('#home .container').css({ 'opacity' : (1.4 - st/400) });
		
		if($(window).scrollTop() > ($(window).height()+50)){
			$('.backstretch').hide();
		}else{
			$('.backstretch').show();
		}
		
	});
	
	var st = $(this).scrollTop(),
		wh = $(window).height(),
		sf = 1.2 - st/(10*wh);

	$('.backstretch img').css({ 
		'transform' : 'scale('+sf+')', 
		'-webkit-transform' : 'scale('+sf+')'
	});

	$('#home .container').css({ 'opacity' : (1.4 - st/400) });

	
	/*============================================
	Navigation Functions
	==============================================*/
	if ($(window).scrollTop()< ($(window).height()-50)){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');    
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()< ($(window).height()-50)){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');    
		}
	});
	
	/*============================================
	ScrollTo Links
	==============================================*/
	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-70}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	/*============================================
	Skills
	==============================================*/
	$('.skills-item').each(function(){
		var perc = $(this).find('.percent').data('percent');

		$(this).data('height',perc);
	})
	
	$('.touch .skills-item').each(function(){
		$(this).css({'height':$(this).data('height')+'%'});
	})
	
	$('.touch .skills-bars').css({'opacity':1});

	/*============================================
	Waypoints Animations
	==============================================*/
	$('#skills').waypoint(function(){
	
		$('.skills-item').each(function(){
			$(this).css({'height':$(this).data('height')+'%'});
		})
		
		$('.skills-bars').css({'opacity':1});
		
	},{offset:'40%'});
	
	$('.scrollimation').waypoint(function(){
		$(this).addClass('in');
	},{offset:'90%'});
	
	/*============================================
	Resize Functions
	==============================================*/

	
	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}
	
	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}