$(function() {
    $.ajax({
        type: "get",
        url: "../PHP/getshangpin.php",
        dataType: "json",
        success: function(response) {
            var splx = $('.splx1');
            var abc = "";
            console.log(response);
            response.forEach(function(elm, i) {
                var pic = JSON.parse(elm.pic);

                abc = `
                <a href="../xianyushangpin/xiangqing.html?id=${elm.id}" class="huaduo">
    <div class="item-img"><img data-original="../${pic.a}" alt="" class="lazy"></div>
    <div class="item-info">
        <p class="item-title">${elm.title}</p>
        <div class="price-line">

            <p class="price-unit">￥</p>
            <p class="price-value">${elm.price}</p>

        </div>
    </div>
    <div class="user-line">
        <div class="user-info"><img src="../imgs/T11FtVFwhXXXb1upjX.jpg" class="usericon">
            <p class="user-name">l***m</p> <img src="../imgs/TB1HCq9GN1YBuNjy1zcXXbNcXXa-168-24.png" class="user-tag"></div>
    </div>
</a>
                                       
                `
                splx.append(abc)
            })
            $("img").lazyload({
                effect: "fadeIn"
            });
        }

    });
})
window.onload = function() {
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
        touxiang.style.borderRadius = "50%"
        zhuce.innerHTML = "";
        zhuce1.innerHTML = "";
    }
}
$(function() {
    $("img").lazyload({
        effect: "fadeIn"
    });
});