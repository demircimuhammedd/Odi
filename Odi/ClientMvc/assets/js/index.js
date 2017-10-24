  // Files Upload
	function readURL(input) {
	  if (input.files && input.files[0]) {

	    var reader = new FileReader();

	    reader.onload = function(e) {
	      $('.image-upload-wrap').hide();

	      $('.file-upload-image').attr('src', e.target.result);
	      $('.file-upload-content').show();
	      //alert($('.file-upload-input').val());
	      $('.image-title').html(input.files[0].name);
	    };

	    reader.readAsDataURL(input.files[0]);

	  } else {
	    removeUpload();
	  }
	}

	function removeUpload() {
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


  if ($('.grid').length > 0 || $('.grid-2').length > 0) {
		var post = ['<div class="col-md-6 col-sm-6 col-lg-6 col-xs-12 grid-item"> <div class="item-box"> <article class="post"> <div class="post_header"> <img src="assets/img/a0.png"> <div class="author-date"> <a class="h4 post__author-name fn" href="#">Marina Valentine</a> <div class="post__date"> <time class="published" datetime="2004-07-24T18:18"> March 4 at 2:05pm </time> </div> </div> <div class="more-settings"> <a href="" title="" class="dropdown-toggle bg clear" data-toggle="dropdown"> <i class="flaticon-more-1"></i> </a> <ul class="dropdown-menu"> <li> <a href="#">Gönderiyi Düzenle</a> </li> <li> <a href="#">Gönderiyi Sil</a> </li> </ul> </div> </div> <div class="post_main"> <p>Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p> <div class="post-thumb"> <img src="assets/img/post__thumb1.jpg" alt="photo"> </div> </div> <div class="post_footer"> <div class="post-additional-info inline-items"> <a href="#" class="post-add-icon inline-items"> <i class="flaticon-like"></i> <span>49 Beğeni</span> </a> <a href="#" class="post-add-icon inline-items"> <i class="flaticon-chat-1"></i> <span>264 Yorum</span> </a> <div class="comments-shared"> </div> </div> </div> </article> </div> </div>'];

    var z;
    if ($('.grid').length > 0) {
      z = "col-md-4 col-sm-4 col-lg-4 col-xs-12";
    } else{
      z = "col-md-12 col-sm-12 col-lg-12 col-xs-12";
    }

    var once = '<div class="' + z +' grid-item"> <div class="item-box"> <div class="post-category">Film</div><article class="post"> <div class="post_header"> <img src="assets/img/a0.png"> <div class="author-date"> <a class="h4 post__author-name fn" href="@Url.Action("Index","Profile")">Muhittin Topalak</a> <div class="post__date"> <time class="published" datetime="2004-07-24T18:18"> March 4 at 2:05pm </time> </div> </div> <div class="more-settings"> <a href="" title="" class="dropdown-toggle bg clear" data-toggle="dropdown"> <i class="flaticon-more-1"></i> </a> <ul class="dropdown-menu"> <li> <a href="#">Gönderiyi Düzenle</a> </li> <li> <a href="#">Gönderiyi Sil</a> </li> </ul> </div> </div> <div class="post_main"> <p>Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p> <div class="post-thumb">';

		var sonra = '</div> </div> <div class="post_footer"> <div class="post-additional-info inline-items"> <div class="post-additional-number"> <span><mark>49</mark> Beğeni</span> <span><mark>264</mark> Yorum</span> </div> <div class="post-additional-button"> <button><i class="flaticon-like"></i>  </button> <button><i class="flaticon-chat-1"></i> </button> <div class="comments-shared"> </div> </div></div> </div> </article> </div> </div>';

		var i=1,length=12;
		for(i; i<=length;i++){
		  //var x = Math.floor((Math.random() * 12));
		  $('.grid').append($(once+'<img src="assets/img/film_poster/poster_'+i+'.jpg" alt="photo"> '+sonra));

      $('.grid-2').append($(once+'<img src="assets/img/film_poster/poster_'+i+'.jpg" alt="photo"> '+sonra));
		}

    var $grid = $('.grid').imagesLoaded( function() {
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
