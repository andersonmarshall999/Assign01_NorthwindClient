$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();

        // replace placeholder text with name and code
        document.getElementById("product-name").innerHTML = ($(this).data('name'));
        document.getElementById("code").innerHTML = ($(this).data('code'));
        // console.log(($(this).data('name')) + " | " + ($(this).data('code')));
        
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});

$(document).keyup(function(e) {
    // detect Esc key press and autoclick close button
    if (e.key === "Escape") {
        e.preventDefault();
        document.getElementById("toast-close").click();
    }
});