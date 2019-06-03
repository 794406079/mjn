$(function() {

    var id = location.search.split('=')[1];
    // console.log(id)
    $.ajax({
        type: "get",
        url: "../PHP/getItem",
        data: {
            id: id
        },
        dataType: "json",
        success: function(response) {
            var slider = $('.slider');
            var title = $('.title');
            var jiage = $('#jiage');
            var describe = $('.describe');
            var pic = JSON.parse(response.pic);
            a = `
            <div>

            <img src="../${pic.a}" alt="" style="width:700px;height:360px">
            <img src="../${pic.b}" alt=""  style="width:700px;height:360px">  
             </div>
            <span>&lt;</span>
            <span>&gt;</span>

            `;
            b = `
            ${response.title}

            `;
            c = `<b>¥</b>
            <em>${response.price}</em>
            <div class="num">库存${response.num}</div>
           
            数量：<input type="number" value="1" min="1" max="${response.num}" id="num">
                        `;
            d = `${response.details}`;
            title.append(b);
            jiage.append(c);
            describe.append(d);
            slider.append(a);
            $('.slider').slider();

            //购物车
            var jrgwc = $('#jrgwc');
            jrgwc.on('click', function() {;
                alert("添加成功")
                addgwc(response.id, response.price, $('#num').val())
            })
        }
    });

    function addgwc(id, price, num) {
        var shop = cookie.get('shop'); //从cookie获取shop
        var product = {
            "id": id,
            "price": price,
            "num": num
        };

        if (shop) {
            shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

            // function (elm){
            //      return elm.id==id
            // }


            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function(elm, i) {

                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
    if (cookie.get('isLogin')) {
        var denglu = $('#denglu');
        var zhuce = $('#zhuce');
        denglu.html(cookie.get('username'));
        denglu.attr("href", "javascript:;");
        zhuce.html('')

    }
});