from django.db import models

# Create your models here.
class Wheel(models.Model):
    name=models.CharField(max_length=100)
    img=models.CharField(max_length=100)

    class Meta:
        db_table='网易考拉——轮播图'

class Tuijian(models.Model):
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=100)

    class Meta:
        db_table = '网易考拉——推荐'

class User(models.Model):
    account=models.CharField(max_length=100,unique=True)
    password=models.CharField(max_length=300)
    phone=models.CharField(max_length=100)

    class Meta:
        db_table='网易考拉——注册表'

class Goods(models.Model):
    name=models.CharField(max_length=100)
    price=models.FloatField()
    img=models.CharField(max_length=100)
    store_num=models.IntegerField(default=20)

    class Meta:
        db_table='网易考拉——商品'

class Cart(models.Model):
    user=models.ForeignKey(User)

    goods=models.ForeignKey(Goods)

    number=models.IntegerField(default=0)

    isselect=models.BooleanField(default=True)

    isdelete=models.BooleanField(default=False)

    class Meta:
        db_table='网易考拉——购物车'

class Order(models.Model):
    user=models.ForeignKey(User)

    status=models.IntegerField(default=0)

    creat_time=models.DateTimeField(auto_now_add=True)

    update_time=models.DateTimeField(auto_now=True)

    identifier=models.CharField(max_length=300)

    class Meta:
        db_table='网易考拉——订单'

class OrderGoods(models.Model):
    order=models.ForeignKey(Order)

    goods=models.ForeignKey(Goods)

    number=models.IntegerField(default=0)

    class Meta:
        db_table='网易考拉——订单商品'

