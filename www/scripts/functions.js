$(document).on('pagebeforecreate', '[data-role="page"]', function(){     
        $.mobile.loading('show'); 
});

$(document).on('pageshow', '[data-role="page"]', function(){  
        $.mobile.loading('hide');     
});

$(document).on('pageinit', function() {
	if( $('#lightGallery').length ) 
        $("#lightGallery").lightGallery({mobileSrc:true}); 
});
