let basrUrl = "http://localhost:8088/liuzhaozhao1910/music"

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `${basrUrl}/lib/goos.php`,
                dataType: "json",
                success: function(res) {
                    // console.log(res);
                    var recomm = '';
                    var newgoods = '';
                    //先遍历取出来的数据
                    $.each(res, function(index, value) {
                            console.log(value.sale)
                            if (value.sale) {
                                recomm += `
                        <li class="item" >
                   
                        <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">
                            <div class="figure">
                                <img src="${value.url}" width="240" height="240" alt="" style="opacity: 1;">

                            </div>
                            <h3 title="${value.titile}">${value.titile}</h3>
                            <p class="desc">${value.info}</p>
                            <p class="price">
                                <em class="rmb">
                                           ${value.price}
                                    </em>  
                            </p>
                        </a>
                    </li>   `
                            } else {
                                recomm += `
                           <li class="item item-m" style="background:#f7f7f7">
                          <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">
								<div class="figure">
									<img src="${value.url}" width="150" height="150" alt="" style="opacity: 1;">
									
								</div>
								<div class="content-right">
                                <h3 title="${value.titile}">${value.titile}</h3>
									<p class="price">
										<em class="rmb">
											
											   ${value.price}
											
										</em>
										
											<em class="rmb oldPrice">${value.nowp}</em>
										
									</p>
								</div>
								
									<span class="discount">${value.dee}</span>
								
							</a>
						</li>
                           `
                            }

                        }
                        // 影音硬件
                    )
                    $('.remonn').html(recomm);
                }
            });

        },
        //影音
        star: function() {
            $.ajax({
                type: "get",
                url: `${basrUrl}/lib/star.php`,
                dataType: "JSON",
                success: function(data) {
                    // console.log(data)
                    var starlist = '';
                    $.each(data, function(index, value) {
                        starlist += `
                        <li class="item item-first">
                          <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">
                                <div class="figure">

                                    <img src="${value.url}" alt="" style="opacity: 1;">

                                </div>
                                <h3 title="${value.titile}">${value.titile}</h3>
                                <p class="price">
                                    <em class="rmb">
												
												   ${value.price}
												
											</em>

                                </p>


                                <span class="pay">立即购买</span>

                            </a>
                        </li>
                        
                        `

                    })
                    $('.listare').html(starlist);

                }
            });
        },
        round: function() {
            $.ajax({
                type: "get",
                url: `${basrUrl}/lib/main.php`,
                dataType: "JSON",
                success: function(data) {
                    // console.log(data)
                    var list = '';
                    $.each(data, function(index, value) {

                        if (value.hot) {
                            list += `
                            <li class="item item-first">
                          <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">
                                <div class="figure">
                                    <img src="${value.url}" alt="" style="opacity: 1;">
    
                                </div>
                                <h3 title="${value.titile}"> ${value.titile}</h3>
                                <p class="price">
                                    <em class="rmb">
                                                
                                                 ${value.price}
                                                
                                            </em>
    
                                    <em class="rmb oldPrice">${value.breaks}</em>
    
                                </p>
    
                                <span class="pay">立即购买</span>
    
                            </a>
                        </li>
              
                                `
                        } else {
                            list += `
                                <li class="item ">
                                      <a href="http://localhost:8088/liuzhaozhao1910/music/src/html/goos.html?goodsId=${value.sid}" target="_blank">
                                            <div class="figure">
                                                
                                                        <img src="${value.url}" alt="" style="opacity: 1;">
                                    
                                            </div>
                                            <h3 title="${value.titile}">${value.titile}</h3>
                                            <p class="price">
                                                <em class="rmb">
                                                    
                                                       ${value.price}
                                                    
                                                </em>
                                                
                                                    <em class="rmb oldPrice">${value.breaks}</em>
                                                
                                            </p>
                                            
                                            
                                        </a>
                                    </li>
                                `
                        }
                    })
                    $('.starlist').html(list);

                }
            });

        },
        //轮播图
        direct: function() {
            $.ajax({
                type: "get",
                url: `${basrUrl}/lib/direct.php`,
                dataType: "JSON",
                success: function(dir) {
                    var dire = '';
                    $.each(dir, function(index, value) {
                        dire += `
                        <li class="${index === 0 ? 'lunbo-li-before' : 'lunbo-li-after'}" style="position:absolute;top:0;"
                            <a target="_blank"  sid="${value.sid}">
                                <img src="${value.url}">
                            </a>
                        </li>`
                        console.log(value.url)
                    })

                    $(".direct").eq(0).html(dire);
                    var $img = $('.direct li');
                    var $btn = $('.point>em');
                    var $index = 0; //存储当前索引
                    var $len = $img.length;
                    var $priveindex = $len - 1;
                    var TimeNode = setInterval(() => {
                        clickNext();
                    }, 3000);
                    $.each($btn, function(index, value) {
                        $(value).on('click', function() {
                            $priveindex = $index;
                            $index = index;
                            switchImage();
                            clearInterval(TimeNode);
                            TimeNode = setInterval(() => {
                                clickNext();
                            }, 3000);
                        })
                    })

                    function switchImage() {
                        $img.eq($priveindex).removeClass('lunbo-li-before').addClass('lunbo-li-after');
                        $img.eq($index).removeClass('lunbo-li-after').addClass('lunbo-li-before');
                        $btn.removeClass('on');
                        $btn.eq($index).addClass('on');
                    }

                    function clickNext() {
                        $priveindex = $index;
                        $index = ($index + 1) % ($len);
                        switchImage();
                        clearInterval(TimeNode);
                        TimeNode = setInterval(() => {
                            clickNext();
                        }, 3000);
                    }

                    function clickPrev() {
                        $priveindex = $index;
                        $index = ($index - 1) % ($len);
                        switchImage();
                        clearInterval(TimeNode);
                        TimeNode = setInterval(() => {
                            clickNext();
                        }, 3000);
                    }
                    $('.left').on('click', function() {
                        clickPrev()
                    })
                    $('.right').on('click', function() {
                        clickNext()
                    })
                }
            });

        },
        //滚轮事件
        scrindex: function() {
            var $loutili = $('#leftMenu ul li'); //楼梯子元素li
            var $louceng = $('.louceng'); //楼层
            $(window).on('scroll', function() {
                let $thisscr = $(this).scrollTop();
                //给滚轮添加类
                $('.louceng').each(function(index, element) {
                    let $litop = $(element).offset().top; //楼层的top
                    // console.log($litop);
                    if ($litop + 400 > $thisscr) { //如果盒子的top值大于滚动条的top值，添加active.
                        $('#leftMenu').find('ul>li').eq(index).addClass('active').siblings().removeClass('active');
                        return false;
                    }
                    $loutili[index].top = 400 + $litop;
                    // $('html,body').animate({
                    //     scrollTop:$litop,
                    // })
                })
            })
            $('#leftMenu ul li.last').on('click', function() {
                $('html,body').animate({
                    scrollTop: 0
                });
            });
            //2.给左侧的楼梯添加点击事件，进行位置的跳转
            //offset():盒子的偏移值，返回一个对象，包含left/top
            $loutili.not('.last').on('click', function() {
                // $(this).addClass('active').siblings().removeClass('active');
                const top = $loutili[$(this).index()].top;
                console.log('top', top);
                var $top = $louceng.eq($(this).index()).offset().top; //当前楼梯li项对应的楼层的top值。
                console.log($top);
                $('html,body').animate({
                    scrollTop: $top
                })
            })
        }
    }


})