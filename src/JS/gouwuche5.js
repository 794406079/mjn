"use strict";

$(function () {
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        var idList = shop.map(function (elm) {
            return elm.id;
        }).join();
        // console.log(idList)
        $.ajax({
            type: "get",
            url: "../PHP/gouwuche.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function success(response) {
                var template = "";
                response.forEach(function (elm, i) {
                    // console.log(elm);
                    var pic = JSON.parse(elm.pic);
                    // console.log(pic)
                    var arr = shop.filter(function (val, i) {
                        return val.id === elm.id;
                    });

                    template = "<div class=\"cart-main-a\">\n        <div class=\"cart-show-box\">\n            <input type=\"checkbox\" class=\"" + elm.id + "\"  >\n            <div class=\"img-box\">\n                <img src=\"../" + pic.a + "\" alt=\"\" style=\"width:80px;height:80px\">\n            </div>\n            <div class=\"item-basic-info\">\n                <a href=\"#\" title=\"\" class=\"item-title J_GoldReport J_MakePoint\">" + elm.title + "</a>\n            </div>\n            <div class=\"item-icon-list clearfix\">\n                <div class=\"item-icons J_ItemIcons  item-icons-fixed \">\n                    <span class=\"item-icon item-icon-0\" title=\"\u652F\u6301\u4FE1\u7528\u5361\u652F\u4ED8\">\n                        <img src=\"../imgs/T1BCidFrNlXXaSQP_X-16-16.png\" alt=\"\">\n                    </span>\n                    <a href=\"#\" class=\"item-icon item-icon-1 J_MakePoint\" title=\"\u6D88\u8D39\u8005\u4FDD\u969C\u670D\u52A1\uFF0C\u5356\u5BB6\u627F\u8BFA7\u5929\u9000\u6362\">\n                        <img src=\"../imgs/T1Vyl6FCBlXXaSQP_X-16-16.png\" alt=\"\">\n                    </a>\n                    <a href=\"#\" class=\"item-icon item-icon-2 J_MakePoint\" title=\"\u6D88\u8D39\u8005\u4FDD\u969C\u670D\u52A1\uFF0C\u5356\u5BB6\u627F\u8BFA\u5982\u5B9E\u63CF\u8FF0\">\n                        <img src=\"../imgs/xcard.png\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"item-props item-props-can\">\n                <p class=\"sku-line\">" + elm.details + "</p>\n              \n            </div>\n            <div class=\"td-inner\">\n                <em tabindex=\"0\" class=\"J_ItemSum number\">\n                  \u6570\u91CF\uFF1A" + arr[0].num + " <br>\uFFE5" + elm.price + "\n                </em>\n            </div>\n            <div class=\"td-inner-all\">\n                <em tabindex=\"0\" class=\"J_ItemSum number\">\n                        \u5171\u8BA1\uFF1A" + (arr[0].num * elm.price).toFixed(2) + "\u5143\n                    </em>\n            </div>\n             <button id=\"" + elm.id + "\" style=\"\n              position: absolute;\n             right: 50px;\n                 top: 20px;\">\u5220\u9664</button>\n            </div>\n                </div>\n                    ";

                    $('.cart-main').append(template);

                    //删除
                    $('#' + elm.id).on('click', function () {
                        // console.log(elm.id);
                        var a = elm.id;
                        var b = JSON.parse(cookie.get('shop')).filter(function (elm, i) {
                            return elm.id != a;
                        });
                        // console.log(b)
                        var c = JSON.stringify(b);
                        // console.log(c)
                        cookie.set("shop", c, 1);
                        $(this)[0].parentNode.parentNode.remove();
                    });
                    //算价格

                    $("." + elm.id).on('change', function () {
                        var zongjia = $('#zongjia').html().split(':')[1] - 0;
                        if ($("." + elm.id).prop("checked")) {
                            zongjia = zongjia + arr[0].num * elm.price;
                        } else {
                            zongjia = zongjia - arr[0].num * elm.price;
                        }
                        return $('#zongjia').html('总价:' + zongjia);
                    });
                });
                //点击购买
                $('#gmcg').on('click', function () {
                    var a = $('#zongjia').html().split(':')[1] - 0;
                    alert('购买成功，总价:' + a);
                });
            }
        });
    }
    //用户名问题
    if (cookie.get('isLogin')) {
        var denglu = $('#denglu');
        var zhuce = $('#zhuce');
        denglu.html(cookie.get('username'));
        zhuce.html('');
    }
});
