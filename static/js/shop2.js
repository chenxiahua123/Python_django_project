$(document).ready(function () {
    console.log(888)

    var number=$('.ctrnum_wrap input').attr('number',0)

    $('.add button').click(function () {
		console.log('加操作成功')

        var number=$(this).parent().prev().attr('number')

        var goodsid=$(this).attr('goodsid')

        var $that=$(this)

        console.log(goodsid)

        data={
		    'goodsid':goodsid,
            'number':number,
        }

        $.get('/addcart',data,function (response) {

            if (response.status==0){
                window.open('/login',target='_self')
            }else if (response.status==1){
                $that.parent().prev().attr('number',response.number)
                $that.parent().prev().val(response.number)

            }


        })
        console.log($that.parent().prev().attr('number'))
    })

    $('.raduce button').click(function () {

        var number=$(this).parent().next().attr('number')

        var goodsid=$(this).attr('goodsid')

        console.log(goodsid)

        var $that=$(this)

        data={
            'goodsid':goodsid,
            'number':number,
        }

        $.get('/minuscart',data,function (response) {


            if (response.status==0){
                window.open('/login',target='_self')
            }else if (response.status==1){

                $that.parent().next().attr('number',response.number)
                $that.parent().next().val(response.number)
                if (response.number<0){

                    $that.parent().next().attr('number',0)
                    $that.parent().next().val(0)
                }
            }

        })
        console.log($that.parent().next().attr('number'))
    })

    $('.addcart').click(function () {
        console.log('添加购物车单击成功')

        var number=$('.ctrnum_wrap input').attr('number')

        var goodsid=$('.ctrnum_wrap input').attr('goodsid')

        data={
            'number':number,
            'goodsid':goodsid,
        }

        $.get('/add_cart',data,function (response) {
            console.log(response)
            if (response.status==0){
                window.open('/login',target='_self')
            }else if (response.status==1){
                alert('添加购物车成功')
            }
        })

    })

    $('.buybtns .buybtn').click(function () {
        console.log('success clicking')

        var goodsid=$(this).attr('goodsid')

        var number=$('.ctrnum_wrap input').attr('number')

        data={
            'goodsid':goodsid,
            'number':number,
        }

        $.get('/buy_immediatly',data,function (response) {
            console.log(response)
            if (response.status){
                window.open('/generateorder2',target='_self')
            }

        })
    })

})