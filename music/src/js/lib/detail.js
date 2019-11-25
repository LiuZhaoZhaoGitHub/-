let baseUrl = "http://localhost:8088/liuzhaozhao1910/music";
define(['jquery'], function($) {
    return {
        hotshop: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/lib/star.php`,
                dataType: "JSON",
                success: function(hot) {
                    var hotli = '';
                    $.each(hot, function(index, value) {
                        hotli += `
		
			<div class="list-item">
			   <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">
					<img src="${value.url}" style="opacity: 1;">
					
				</a>
				<div class="list-info">
					<h3 title="${value.title}">
					   <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">${value.title}</a>
					</h3>
					<strong>
						<em class="property-rmb">¥</em><em class="property-num">
							
                        ${value.price}
							
						</em>
						
					</strong>
					
						<span class="property-old ">
							<em class="property-rmb">¥</em><em class="property-num">510</em>
						</span>
					
				</div>
			</div>             
                        `

                    })
                    $('.list-box').html(hotli);

                }
            });

        },
        gooscar: function() {
            var picsid = location.search.substring(1).split('=')[1];
            $.ajax({
                type: "get",
                url: `${baseUrl}/lib/particulars.php`,
                data: {
                    sid: picsid,
                },
                dataType: "JSON",
                success: function(cargoos) {
                        console.log(cargoos);
                        //将商品详情
                        $('.gallery-img').attr('src', cargoos.url);
                        $('.property-title>h3').html(cargoos.title);
                        $('.property-num').html(cargoos.price);




                        //对小的urls进行
                        var arr = cargoos.urls.split(',');
                        var str = "";
                        $.each(arr, function(index, value) {
                            str += `
                        

                        <li class="gallery-item" n-type="smallImg"><img src="${value}"></li>

                      
                    `

                        })
                        $('.gallery-mask').html(str);
                        $('.gallery-item').hover(function() {
                            $(this).addClass('active').siblings().removeClass("active");
                            var $imgurl = $(this).find('img').attr('src');
                            $('.gallery-img').attr('src', $imgurl);
                            // $('#bpic').attr('src', $imgurl);
                        })


                    }
                    //点击加和点击减

            });
        },



    }
})