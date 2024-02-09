$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceOutUp');
    });

    // random title animation
    const seekerList = [
        'animate__bounce',
        'animate__flash',
        'animate__pulse',
        'animate__rubberBand',
        'animate__shakeX',
        'animate__shakeY',
        'animate__headShake',
        'animate__swing',
        'animate__tada',
        'animate__wobble',
        'animate__jello',
        'animate__heartBeat'
    ];
    var seeker = Math.floor(Math.random() * 12);
    document.getElementById("title").classList.add(seekerList[seeker]);

    // preload audio
    var toast = new Audio('toast.wav');
    $('.submit').on('click', function(e) {
        e.preventDefault();
        
        // show toast if no checkboxes are checked
        if (document.querySelectorAll('.form-check-input:checked').length == 0) {
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
    
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });

    // check and uncheck all buttons
    $('.check-all').on('click', function() {
        $('.form-check-input:not(:checked)').click();
    });
    $('.uncheck-all').on('click', function() {
        $('.form-check-input:checked').click();
    });
    
    // title color change with checkbox hover
    $('.form-check-label').on('mouseover', function () {
        document.getElementById("title").style.color = $(this).attr('for');
    });
    $('.form-check-label').on('mouseout', function () {
        document.getElementById("title").style.color = '';
    });
});

$(document).keyup(function(e) {
    // detect Esc key press and autoclick toast close button
    if (e.key === "Escape") {
        e.preventDefault();
        document.getElementById("toast-close").click();
    }
});