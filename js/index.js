$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});

/////////////////////////////////////////////////


let $heading = $('.slide');
let $b = $('.bd');


setTimeout(function () {
    $heading.addClass('js-show fadeInUp animated');},
           250
);

setTimeout(function () {
    $b.addClass('js-show fadeInRight animated');},
           1000
);



