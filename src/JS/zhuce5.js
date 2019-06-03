'use strict';

window.onload = function () {
    var password = document.querySelector('#password');
    var username = document.querySelector('#username');
    var submit = document.querySelector('#submit');
    var span = document.querySelector('#span');
    var span1 = document.querySelector('#span1');
    if (username.value == "") {
        span.innerHTML = '';
    }
    username.onkeyup = function () {
        var reg = /^1[3-9]\d{9}$/; //正则 以1开头 第二位是3到9 之后九位是随机数字
        if (reg.test(username.value)) {
            //正则 test 这个内容
            span.innerHTML = '通过验证'; //如果成功 span的内容为验证成功
            this.dataset.pass = "true"; //如果成功  给username 设置一个data-pass=“true”属性
        } else {
            span.innerHTML = '请输入正确手机号'; //如果失败 span的内容为请输入正确的手机号
            this.dataset.pass = "false"; //如果失败  给username 设置一个data-pass="flase”属性
        }
        check();
    };

    password.onkeyup = function () {
        var reg = /^.{6,}$/;

        if (reg.test(password.value)) {
            span1.innerHTML = '通过验证';
            this.dataset.pass = "true";
        } else {
            span1.innerHTML = '请输入6位以上密码';
            this.dataset.pass = "false";
        }
        check();
    };

    function check() {
        var pass = document.querySelectorAll('input[data-pass="true"]');
        if (pass.length == 2) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', 'disabled');
        }
    }
};
