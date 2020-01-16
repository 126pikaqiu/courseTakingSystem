$(document).ready(function () {
    console.log(getCookie('role') )
    if(getCookie('role') === null){
        window.location.href= 'login.html';
    }else {
        $('.index-container').css('display','block');
        $('.user_name').html(unescape(getCookie('user_name')));
        switch (getCookie('role')) {
            case 'root':
                $('#root-menu').css('display','block');
                $("#root-allow").css('display','block');
                $("#role-item").html('管理员事务');
                break;
            case 'instructor':
                $('#instructor-menu').css('display','block');
                $("#role-item").html('教师事务');
                break;

            case 'student':
                $('#student-menu').css('display','block');
                $("#role-item").html('学生事务');
                break;
        }
    }
});