/*$('input[type=radio][name=flexRadioDefault]').on('click', function() {

    var chkValue = $('input[type=radio][name=flexRadioDefault]:checked').val();

    if (chkValue == '1') {
        $('.pay1').css('display', 'block');
        $('.pay2').css('display', 'none');
    } else if (chkValue == '2') {
        $('.pay1').css('display', 'none');
        $('.pay2').css('display', 'block');
    }
});

*/


window.onload = function () {
    $(".form-check").click(stay_contents_work);

    function stay_contents_work(){
        let index = $(this).index();
        console.log(index);
        $(".ee").eq(index).css("z-index", 0);
        $(".ee").eq(index).css("z-index", 10);
    }

}



/*
window.onload = function () {
    $(".stay_contents").click(stay_contents_work);

    function stay_contents_work(){
        let index = $(this).index();
        console.log(index);
        $(".stay_contents").css("z-index", 0);
        $(".stay_contents").find("h3 > a").removeClass("target");
        $(".stay_contents").eq(index).css("z-index", 10);
        $(".stay_contents").eq(index).find("h3 > a").addClass("target");
    }

}*/