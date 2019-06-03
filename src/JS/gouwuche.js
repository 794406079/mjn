$(function() {
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        var idList = shop.map(elm => elm.id).join();
        // console.log(idList)
        $.ajax({
            type: "get",
            url: "../PHP/gouwuche.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function(response) {
                var template = "";
                response.forEach(function(elm, i) {
                    // console.log(elm);
                    var pic = JSON.parse(elm.pic);
                    // console.log(pic)
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });

                    template = `<div class="cart-main-a">
        <div class="cart-show-box">
            <input type="checkbox" class="${elm.id}"  >
            <div class="img-box">
                <img src="../${pic.a}" alt="" style="width:80px;height:80px">
            </div>
            <div class="item-basic-info">
                <a href="#" title="" class="item-title J_GoldReport J_MakePoint">${elm.title}</a>
            </div>
            <div class="item-icon-list clearfix">
                <div class="item-icons J_ItemIcons  item-icons-fixed ">
                    <span class="item-icon item-icon-0" title="支持信用卡支付">
                        <img src="../imgs/T1BCidFrNlXXaSQP_X-16-16.png" alt="">
                    </span>
                    <a href="#" class="item-icon item-icon-1 J_MakePoint" title="消费者保障服务，卖家承诺7天退换">
                        <img src="../imgs/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="">
                    </a>
                    <a href="#" class="item-icon item-icon-2 J_MakePoint" title="消费者保障服务，卖家承诺如实描述">
                        <img src="../imgs/xcard.png" alt="">
                    </a>
                </div>
            </div>
            <div class="item-props item-props-can">
                <p class="sku-line">${elm.details}</p>
              
            </div>
            <div class="td-inner">
                <em tabindex="0" class="J_ItemSum number">
                  数量：${arr[0].num} <br>￥${elm.price}
                </em>
            </div>
            <div class="td-inner-all">
                <em tabindex="0" class="J_ItemSum number">
                        共计：${(arr[0].num*elm.price).toFixed(2)}元
                    </em>
            </div>
             <button id="${elm.id}" style="
              position: absolute;
             right: 50px;
                 top: 20px;">删除</button>
            </div>
                </div>
                    `;

                    $('.cart-main').append(template);



                    //删除
                    $('#' + elm.id).on('click', function() {
                        // console.log(elm.id);
                        var a = elm.id;
                        var b = JSON.parse(cookie.get('shop')).filter(function(elm, i) {
                                return elm.id != a
                            })
                            // console.log(b)
                        var c = JSON.stringify(b)
                            // console.log(c)
                        cookie.set("shop", c, 1)
                        $(this)[0].parentNode.parentNode.remove();
                    });
                    //算价格

                    $("." + elm.id).on('change', function() {
                        var zongjia = $('#zongjia').html().split(':')[1] - 0
                        if ($("." + elm.id).prop("checked")) {
                            zongjia = zongjia + arr[0].num * elm.price;
                        } else {
                            zongjia = zongjia - arr[0].num * elm.price;
                        }
                        return $('#zongjia').html('总价:' + zongjia)
                    })

                });
                //点击购买
                $('#gmcg').on('click', function() {
                    var a = $('#zongjia').html().split(':')[1] - 0
                    alert('购买成功，总价:' + a)
                })

            }
        });
    }
    //用户名问题
    if (cookie.get('isLogin')) {
        var denglu = $('#denglu');
        var zhuce = $('#zhuce');
        denglu.html(cookie.get('username'));
        zhuce.html('')

    }
});