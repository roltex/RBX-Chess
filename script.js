  /* eslint-env jquery */
  var $jq = jQuery.noConflict();
$jq(document).ready(function() {
var $current = $jq('.tech__current');
var $all = $jq('.tech__all');
var $slickElement = $jq('.tech__slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $current.text('0'+i);
    $all.text('0'+slick.slideCount);
});



function setProgress(index) {
    var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('width', calc + '%')
        .attr('aria-valuenow', calc );

    $progressBarLabel.text(calc + '% completed');
}

var $slider = $jq('.tech__slider');
var $progressBar = $jq('.progress-bar');
var $progressBarLabel = $jq( '.slider__label' );

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

$jq('.tech__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 400,
    asNavFor: $jq('.tech__slider-left'),
    prevArrow: $jq('.tech__prev'),
    nextArrow: $jq('.tech__next'),
    responsive: [
        {
            breakpoint: 991,
            settings: {
               
                arrows: false
                
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$jq(".tech__slider-left").slick({
    dots: true,
    vertical: true,
    asNavFor: $jq('.tech__slider'),
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 400,
    prevArrow: $jq('.tech__prev'),
    nextArrow: $jq('.tech__next')

});

setProgress(0);

});
