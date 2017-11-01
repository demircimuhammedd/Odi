    // Post Grid
	function PostGrid() {
        var $grid = $('.grid').imagesLoaded(function () {
            // init Isotope after all images have loaded
            $grid.isotope({
                itemSelector: '.grid-item',
                masonry: {
                    // use element for option
                    percentPosition: true
                }
            });
        });
    }


    // Files Upload
	function readURL(input) {
	  if (input.files && input.files[0]) {

		var reader = new FileReader();

		reader.onload = function(e) {
		  $('.image-upload-wrap').hide();
		  $('.file-upload-image').attr('src', e.target.result);
          $('.file-upload-content').show();
          PostGrid();
		  //alert($('.file-upload-input').val());
		  $('.image-title').html(input.files[0].name);
		};

		reader.readAsDataURL(input.files[0]);
	  } else {
        removeUpload();
	  }
	}

    function removeUpload() {
      PostGrid();
	  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
	  $('.file-upload-content').hide();
	  $('.image-upload-wrap').show();
    }

	$('.image-upload-wrap').bind('dragover', function () {
	    $('.image-upload-wrap').addClass('image-dropping');
    });

	$('.image-upload-wrap').bind('dragleave', function () {
	    $('.image-upload-wrap').removeClass('image-dropping');
	});


$(function() {
  if ($('[data-toggle="tooltip"]').length > 0) {
   $('[data-toggle="tooltip"]').tooltip();
  }
  $('.js-sidebar-open').on('click', function() {
   $("#fixed-sidebar").toggleClass('open',1000);
  });

  if ($('.grid').length > 0) {
      PostGrid();
  }

  // Dropdown toggle
  $('.control-icon').click(function() {
	$(this).children('.control-more').slideToggle( 300 );
  });

  $(document).click(function(e) {
	var target = e.target;
	if (!$(target).is('.control-icon') && !$(target).parents().is('.control-icon')) {
	  $('.control-more').hide();
	}
  });

	// menu click event
	$('.menuBtn').click(function() {
		$('.menuBtn').toggleClass('act');
			if($('.menuBtn').hasClass('act')) {
				$('.mainMenu').addClass('act');
			}
			else {
				$('.mainMenu').removeClass('act');
			}
	});


 // constants
  var ACTIVE_CLASS = 'active';

  $( '.tabs' ).on( 'click', 'a', function(e){
	e.preventDefault();
	var $tab = $( this ),
		 href = $tab.attr( 'href' );

	$( '.active' ).removeClass( ACTIVE_CLASS );
	$tab.addClass( ACTIVE_CLASS );

	$(href)
	  .removeClass( ACTIVE_CLASS )
	  .addClass( ACTIVE_CLASS );
	});



});
