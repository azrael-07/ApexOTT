$(document).ready(function () {
  console.log("hello");

  $('#hamburgerMenu').click(() => {
    $('#hamburgerMenu').toggleClass('active');
    $(".menuProfileWrap").toggleClass('active1');
  })
  $('.profileSettingWrap').hover(()=>{
    $('.profileSetting').toggleClass('activeSetting')

  }  )
  $(".itemAction").click(() => {
  
    $(".video").toggleClass('active1');
  })

  $('.slider').click(() => {
    console.log('aa')
    console.log($('.slider').css('right'))
    if ($('.slider').css('right') === '1px') {
      $('body').css('backgroundColor', 'white')
      $('.slider').css('right', '23px')
      $('.section-header').css('color','#330000')

    }
    else if ($('.slider').css('right') === '23px') {
      console.log('in left')
      $('body').css('backgroundColor', 'black')
      $('.slider').css('right', '1px')
      $('.section-header').css('color','#00FFFF')

    }
    else {
      console.log("noting")
    }


  })
  let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

  $('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true
  })
  $('#movieSlide').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    // margin: 15,
    responsive: {
      500: {
        items: 4
      },
      1260: {
        items: 4
      },
      1680: {
        items: 6
      }

    }

  })
  $('.cartoonSlide').owlCarousel({
    items: 2,
    dots: false,
  nav:true,
  
    margin: 20,
    navText:navText,
    responsive: {
      500: {
        items: 3
      },
      1260: {
        items: 4
      },
      1680: {
        items: 6
      }

    }

  })
  $('.showSlide').owlCarousel({
    items: 2,
    dots: false,
  nav:true,
  
    margin: 15,
    navText:navText,
    responsive: {
      500: {
        items: 3
      },
      1260: {
        items: 4
      },
      1680: {
        items: 6
      }

    }

  })



})
