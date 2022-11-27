


$('input:radio[name=tp_cd]').click(function() {

    var chkValue = $('input:radio[name=tp_cd]:checked').val();
    
    
    
    if (chkValue == '1') {
    
    $('#POP1').css('display', 'block');
    
    $('#POP2').css('display', 'none');
    
    
    } else if (chkValue == '2') {
    
    $('#POP1').css('display', 'none');
    
    $('#POP2').css('display', 'block');
    
    
    }
    
    });