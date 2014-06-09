$(document).on('pagebeforecreate', '[data-role="page"]', function(){     
    setTimeout(function(){
        $.mobile.loading('show');
    },1);    
});

$(document).on('pageshow', '[data-role="page"]', function(){  
    setTimeout(function(){
        $.mobile.loading('hide');
    },1);      
});

$(document).on('pageinit', function() {
	if( $('#lightGallery').length ) 
        $("#lightGallery").lightGallery({mobileSrc:true}); 
});

$(document).bind("mobileinit", function(){
	$.mobile.touchOverflowEnabled = true;
});