# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-03-14 12:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tuijian',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=100)),
            ],
            options={
                'db_table': '网易考拉——推荐',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=300)),
                ('phone', models.CharField(max_length=100)),
            ],
            options={
                'db_table': '网易考拉——注册表',
            },
        ),
        migrations.CreateModel(
            name='Wheel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=100)),
            ],
            options={
                'db_table': '网易考拉——轮播图',
            },
        ),
    ]
