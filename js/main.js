$(document).ready(function () {
    $('#youtube_video').magnificPopup({
        type: 'iframe',

        iframe: {


            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                },

                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }

                // you may add here more sources

            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }

    });
});
/* Owl Carousel js start */
 $('.owl-carousel').owlCarousel({
         loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
            items:1
                },
             600:{
             items:3
                },
            1000:{
            items:5
                }
                 }
                })
/* Owl Carousel js end */
