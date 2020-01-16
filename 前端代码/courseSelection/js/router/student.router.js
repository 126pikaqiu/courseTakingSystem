$(document).ready(function () {
    if(getCookie('role') !== 'student'){
        window.location.href= 'login.html';
    } else {
        $('.student-container').css('display','block');
        if(parseInt(getCookie('courseStatus')) !== 1){
            $('.select-allow').css('display','none');
            $('.select-not-allow').css('display','block');
        }
    }

});