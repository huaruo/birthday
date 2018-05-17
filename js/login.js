$('#login-button').click(function (event) {
    var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if((userName=="殷荟" || userName == "荟荟" || userName == "小歪") && pwd=="19900524") {
        event.preventDefault();
        $('form').fadeOut(500);
        $('#name-text').fadeIn(2000);
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="cake.html";},3500);
    }
    else {
        if(userName!="荟荟" && userName!="殷荟" && userName!="小歪") {
            alert("姓名错误！一起祝小宝贝生日快乐吧");
        }
        else {
            alert("密码错误！\n提示：你的生日（8位数字，例：19900524）");
        }
    }
});
