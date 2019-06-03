"use strict";

$(function () {
    $.ajax({
        type: "get",
        url: "../PHP/getshangpin.php",
        dataType: "json",
        success: function success(response) {
            var splx = $('.splx1');
            var abc = "";
            console.log(response);
            response.forEach(function (elm, i) {
                var pic = JSON.parse(elm.pic);

                abc = "\n                <a href=\"../xianyushangpin/xiangqing.html?id=" + elm.id + "\" class=\"huaduo\">\n    <div class=\"item-img\"><img data-original=\"../" + pic.a + "\" alt=\"\" class=\"lazy\"></div>\n    <div class=\"item-info\">\n        <p class=\"item-title\">" + elm.title + "</p>\n        <div class=\"price-line\">\n\n            <p class=\"price-unit\">\uFFE5</p>\n            <p class=\"price-value\">" + elm.price + "</p>\n\n        </div>\n    </div>\n    <div class=\"user-line\">\n        <div class=\"user-info\"><img src=\"../imgs/T11FtVFwhXXXb1upjX.jpg\" class=\"usericon\">\n            <p class=\"user-name\">l***m</p> <img src=\"../imgs/TB1HCq9GN1YBuNjy1zcXXbNcXXa-168-24.png\" class=\"user-tag\"></div>\n    </div>\n</a>\n                                       \n                ";
                splx.append(abc);
            });
            $("img").lazyload({
                effect: "fadeIn"
            });
        }

    });
});
window.onload = function () {
    if (cookie.get('isLogin')) {
        var denglu = document.querySelector('#denglu');
        var denglu1 = document.querySelector('#denglu1');
        var zhuce = document.querySelector('#zhuce');
        var zhuce1 = document.querySelector('#zhuce1');
        var touxiang = document.querySelector('#touxiang');
        denglu.innerHTML = cookie.get('username');
        denglu1.innerHTML = cookie.get('username');
        denglu.setAttribute("href", "javascript:;");
        denglu1.setAttribute("href", "javascript:;");
        touxiang.setAttribute("src", "../imgs/cgx.jpg");
        touxiang.style.borderRadius = "50%";
        zhuce.innerHTML = "";
        zhuce1.innerHTML = "";
    }
};
$(function () {
    $("img").lazyload({
        effect: "fadeIn"
    });
});
