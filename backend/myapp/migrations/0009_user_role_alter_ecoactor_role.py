# Generated by Django 5.0.2 on 2024-03-27 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0008_ecoactor'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.CharField(default='member', max_length=100),
        ),
        migrations.AlterField(
            model_name='ecoactor',
            name='role',
            field=models.CharField(default='actor', max_length=100),
        ),
    ]
