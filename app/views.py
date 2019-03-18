import hashlib
import random
from datetime import time

from django.core.cache import cache
from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import Wheel, Tuijian, User, Goods, Cart, Order, OrderGoods


def index(request):

    # for i in range(1,8):
    #     goods=Goods()
    #     goods.name='goodsbanner-'+str(i)+'.jpg'
    #     goods.img='img/'+goods.name
    #     goods.price=100*i
    #     goods.store_num=20*i
    #     goods.save()
    #     wheels=Wheel()
    #     wheels.name='goodsbanner-'+str(i)+'.jpg'
    #     wheels.img='img/'+goods.name
    #     wheels.save()


    goods = Goods.objects.all()[1:5]
    wheels = Wheel.objects.all()
    tuijians = Tuijian.objects.all()
    token = request.session.get('token')

    userid = cache.get(token)

    if userid:

        user = User.objects.get(pk=userid)

        return render(request, 'index.html',
                      context={'wheels': wheels, 'tuijians': tuijians, 'user': user, 'token': token, 'goods': goods})
    else:
        return render(request, 'index.html', context={'wheels': wheels, 'tuijians': tuijians, 'goods': goods})


def generate_token():
    # token = str(time()) + str(random.random)
    # md5 = hashlib.md5()
    # md5.update(token.encode('utf-8'))
    #
    # return md5.hexdigest()

    token = str(time()) + str(random.random)
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))

    return md5.hexdigest()


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()


def register(request):
    if request.method == "GET":
        return render(request, 'register.html')
    if request.method == 'POST':
        user = User()
        account_name = request.POST.get('account')
        account_mail = request.POST.get('mail')
        user.account = account_name + account_mail

        user.password = generate_password(request.POST.get('password'))
        user.phone = request.POST.get('phone')

        user.save()

        token = generate_token()

        cache.set(token, user.id, 60 * 60 * 24 * 3)

        request.session['token'] = token

        return redirect('app:index')


def logout(request):
    request.session.flush()

    return redirect('app:index')


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    if request.method == 'POST':
        account = request.POST.get('account')
        password = generate_password(request.POST.get('password'))

        user = User.objects.filter(account=account).filter(password=password)
        print(111111)

        if user:
            print(222222)
            user = user.first()
            token = generate_token()
            request.session['token'] = token
            cache.set(token, user.id)

            return redirect('app:index')

        else:
            print(333333)
            return render(request, 'login.html', context={'error': '账户密码错误'})


def account_check(request):
    print('pppppppppppppppp')
    account = request.GET.get('account')
    mail = request.GET.get('mail')
    print(account, mail)
    new_account = account + mail
    print(6666)
    user = User.objects.filter(account=new_account)
    print(11111111111111111)

    if user:
        print(222222222222)
        return JsonResponse({'msg': '账户存在', 'status': 0})
    else:
        print(33333333333333333)
        return JsonResponse({'msg': '账户可使用', 'status': 1})


def detail(request):
    return render(request, 'detail.html')


def shop(request, id=1):
    token = request.session.get('token')
    userid = cache.get(token)

    if userid:

        user = User.objects.get(pk=userid)

        print(id)
        print(type(id))
        id = int(id) - 1
        goods = Goods.objects.all()
        goods = goods[id]

        data = {
            'goods': goods,
            'userid': userid,
            'user': user
        }

        return render(request, 'shop.html', context=data)

    else:
        id = int(id) - 1
        goods = Goods.objects.all()
        goods = goods[id]

        data = {
            'goods': goods,
            'userid': userid,
        }
        return render(request, 'shop.html', context=data)


def addcart(request):
    token = request.session.get('token')

    userid = cache.get(token)

    goodsid = request.GET.get('goodsid')

    number = int(request.GET.get('number'))

    print(userid)
    print(goodsid)

    if userid:
        # print(1111111111)
        # user=User.objects.get(pk=userid)
        # print(222222)
        goods = Goods.objects.get(pk=goodsid)
        # print(33333)
        # cart=Cart.objects.filter(user=user).filter(goods=goods)
        # print(44444)
        # if cart.exists():
        #     print(55555)
        #     cart=cart.first()
        #     cart.number=cart.number+1
        #     cart.save()
        #     print(cart.goods.name)

        number += 1

        return JsonResponse({'msg': '{}-添加成功,数量为-{}'.format(goods.name, number), 'number': number, 'status': 1})

    else:
        return JsonResponse({'msg': '请先登录，后操作', 'status': 0})


def minuscart(request):
    token = request.session.get('token')
    userid = cache.get(token)
    goodsid = request.GET.get('goodsid')

    print(userid, goodsid)

    if userid:
        user = User.objects.get(pk=userid)
        goods = Goods.objects.get(pk=goodsid)

        number = int(request.GET.get('number'))

        if number == 0:
            pass
        else:
            number -= 1

        # cart=Cart.objects.filter(user=user).filter(goods=goods)
        #
        # cart=cart.first()
        # cart.number=cart.number-1
        # cart.save()

        return JsonResponse({'msg': '{}-减操作连接成功,数量为-{}'.format(goods.name, number), 'status': 1, 'number': number})
    else:
        return JsonResponse({'msg': '减操作连接成功', 'status': 0})


def add_cart(request):
    token = request.session.get('token')
    userid = cache.get(token)

    goodsid = request.GET.get('goodsid')

    number = int(request.GET.get('number'))
    print(number)

    if userid:

        user = User.objects.get(pk=userid)

        goods = Goods.objects.get(pk=goodsid)

        cart = Cart.objects.filter(user=user).filter(goods=goods)

        if cart.exists():
            cart = cart.first()
            cart.number = cart.number + number

            cart.save()
        else:
            cart = Cart()
            cart.user = user
            cart.goods = goods
            cart.number = number
            cart.save()

        return JsonResponse({'msg': '{}-添加购物车成功,数量为-{}'.format(cart.goods.name, cart.number), 'status': 1})
    else:
        return JsonResponse({'msg': '请先登录，后操作', 'status': 0})


# def cart(request):
#     token = request.session.get('token')
#     userid = cache.get(token)
#
#
#
#     if userid:
#
#         user = User.objects.get(pk=userid)
#
#         carts = user.cart_set.all()
#
#         isall = True
#         print('kkkkkkkkkkkkkkkkk')
#         for cart in carts:
#             if not cart.isselect:
#                 print(111111)
#                 print(cart.isselect)
#                 print(222222)
#                 isall = False
#
#         print(isall)
#         print('yyyyyyyyyyyyyyyyyy')
#
#         data = {
#             'carts': carts,
#             'token': token,
#             'user': user,
#             'isall': isall,
#         }
#
#         return render(request, 'cart.html',context=data)

def cart(request):
    token = request.session.get('token')
    userid = cache.get(token)
    if userid:  # 有登录才显示
        user = User.objects.get(pk=userid)
        carts = user.cart_set.filter(number__gt=0)

        isall = True
        for cart in carts:
            if not cart.isselect:
                isall = False

        return render(request, 'cart.html', context={'carts': carts, 'isall':isall,'token':token,'user':user})
    else:   # 未登录不显示
        return render(request, 'login.html')


def deletecart(request):
    token = request.session.get('token')

    userid = cache.get(token)

    cartid = request.GET.get('cartid')

    cart = Cart.objects.get(pk=cartid)

    cart.delete()

    return JsonResponse({'msg': '{}-删除成功'.format(cart.goods.name)})


def changestatus(request):
    cartid = request.GET.get('cartid')

    cart = Cart.objects.get(pk=cartid)

    print(cart.isselect)

    cart.isselect = not cart.isselect

    cart.save()

    print(cart.isselect)

    return JsonResponse({'msg': '更改状态成功', 'isselect': cart.isselect})


def generate_identifier():
    temp = str(random.randrange(10000, 100000)) + str(random.randrange(10000, 100000))
    return temp


def generateorder(request):
    token = request.session.get('token')
    userid = cache.get(token)

    user = User.objects.get(pk=userid)

    # 筛选出勾选的购物车
    carts = user.cart_set.filter(isselect=0)

    # 订单创建
    order = Order()
    order.user = user
    order.identifier = generate_identifier()
    order.save()

    for cart in carts:
        global orderGoods
        orderGoods = OrderGoods()
        orderGoods.goods = cart.goods
        orderGoods.order = order
        orderGoods.number = cart.number
        cart.delete()
        orderGoods.save()

    data = {
        'orders': order,
        'orderGoods': orderGoods,
    }

    return render(request, 'orderdetial.html', context=data)


def changeall(request):
    token = request.session.get('token')
    userid = cache.get(token)

    isall = request.GET.get('isall')
    print(isall)


    user = User.objects.get(pk=userid)

    carts = user.cart_set.all()

    if isall=='true':
        isall=True
    if isall =='false':
        isall=False


    print(isall)
    for cart in carts:
        cart.isselect = isall
        print(cart.isselect)
        cart.save()

    if isall:
        isall='false'
        return JsonResponse({'msg': '单击全选成功', 'status': 0, 'isall': isall})
    else:
        isall='true'
        return JsonResponse({'msg': '单击全选成功', 'status': 1, 'isall': isall})


def buy_immediatly(request):

    token=request.session.get('token')
    userid=cache.get(token)

    goodsid=request.GET.get('goodsid')
    number=request.GET.get('number')

    user=User.objects.get(pk=userid)

    goods=Goods.objects.get(pk=goodsid)

    order=Order()

    order.user=user

    order.identifier=generate_identifier()

    order.save()
    print('5555555555555555555')

    ordergoods=OrderGoods()

    ordergoods.order=order

    ordergoods.goods=goods

    ordergoods.number=number
    print(ordergoods.number)

    ordergoods.save()
    print(666666666666666)

    return JsonResponse({'msg':'connect success','status':1})

def generateorder2(request):

    token=request.session.get('token')

    userid=cache.get(token)

    user=User.objects.get(pk=userid)

    orders=user.order_set.last()

    data={
        'orders':orders,
    }

    return render(request, 'orderdetial.html', context=data)