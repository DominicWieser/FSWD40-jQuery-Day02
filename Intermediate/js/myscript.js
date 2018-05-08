$(document).ready(function(){
	(function() {
	    $("#cart").on("click", function() {
	        $(".shopping-cart").fadeToggle("fast");
	    });
	})();


function addCart(){

}

		var a = 180;
		var b = 210;
		var c = 350;
		var menge = 0;
		var temp = 0;
		var woodTemp = 0;
		var sum1 = 0;
		var sum2 = 0;
		var sum3 = 0;
		var sum = [];
		var x = 0;
		var y = 0;

		$('#blue').on('click', function(){
				if(menge < 1){
					$('.shopping-cart-items').prepend('<li class="clearfix"><img src="img/6.jpg" alt="item1" width="75" height="75" /><span class="item-name">Space Blue</span><span class="item-price">' + a + '€</span><span id="item-quantity1">' + menge + '</span></li>');
					menge += 1;
					$('#item-quantity1').text(menge);					
					sum1 = sum1 + sum3 + (a * menge);
					$('.main-color-text').html(sum1);
					x += sum1;
				} else if (menge >= 1){
					menge += 1;
					$('#item-quantity1').text(menge);
					sum1 = sum2 + sum3 + (a * menge);
					$('.main-color-text').html(sum1);
					tempSum = sum1;			
				}	

		});

		$('#black').on('click', function(){
				if(temp < 1){
					$('.shopping-cart-items').prepend('<li class="clearfix"><img src="img/7.jpg" alt="item1" width="75" height="75" /><span class="item-name">Space Blue</span><span class="item-price">' + b + '€</span><span id="item-quantity2">' + temp + '</span></li>');
					temp += 1;
					$('#item-quantity2').text(temp)
					x = sum1 + sum3 + (b * temp);
					$('.main-color-text').html(x);
				} else if (temp >= 1){
					temp += 1;
					$('#item-quantity2').text(temp);
					sum2 = sum1 + sum3 + (b * temp);
					$('.main-color-text').html(sum2);
				}

				
		});

		$('#wood').on('click', function(){
				if(woodTemp < 1){
					$('.shopping-cart-items').prepend('<li class="clearfix"><img src="img/5.jpg" alt="item1" width="75" height="75" /><span class="item-name">Space Blue</span><span class="item-price">' + c + '€</span><span id="item-quantity3">' + woodTemp + '</span></li>');
					woodTemp += 1;
					$('#item-quantity3').text(woodTemp)
					y = sum3 + x + (c * woodTemp);
					$('.main-color-text').html(y);
				} else if (woodTemp >= 1){
					woodTemp += 1;
					$('#item-quantity3').text(woodTemp);
					sum3 = sum2 +(c * woodTemp);
					$('.main-color-text').html(sum3);
				}

				
		});



});

