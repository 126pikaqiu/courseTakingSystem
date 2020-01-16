$(document).ready(function () {
    if(getCookie('role') != null){
        window.location.href = 'index.html';
    }
    initResource();
    bindEvents();
});

function bindEvents() {
    const role2str = {0:'root',1:'student',2:'instructor'}
    $("#login-btn").click(function () {
        if (checkData()) {
            let username = $("#inputUsername").val();
            let pwd = $("#inputPassword").val();
            let data = {'user_id': username, 'password': pwd};
            $.when(login(data))
                .done(function (res) {
                    if(res.code < 0){
                        showMessage("登录失败，请检查用户名或密码是否正确。",2);
                    } else {
                        showMessage("登录成功，即将跳转。",1);
                        setCookie('role',role2str[res.role]);
                        setCookie('user_id',username);
                        setCookie('user_name',res.user_name);
                        setCookie('courseStatus',res.course_status);
                        setTimeout(function () {
                            window.location.href = 'index.html';
                        },500);
                    }
                }).fail(function () {
                showMessage("登录失败，请检查用户名或密码是否正确。",2);
            })
        }
    });
}
function checkData() {
    let legal = true;
    let name = $("#inputUsername").val();
    let pwd = $("#inputPassword").val();
    if(name == '') {
        $("#name_info").css('visibility','visible');
        legal = false;
    }
    if(pwd == '') {
        $("#pwd_info").css('visibility','visible');
        legal = false;
    }
    setTimeout(function () {
        $(".info").css('visibility','hidden');
    },1500);
    return legal;
}


function initResource() {

}