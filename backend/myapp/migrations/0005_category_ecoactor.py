# Generated by Django 5.0.2 on 2024-03-22 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_alter_prediction_prediction'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='EcoActor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('motdepasse', models.CharField(max_length=100)),
                ('téléphone', models.CharField(max_length=20)),
                ('role', models.CharField(max_length=100)),
                ('adresse', models.CharField(max_length=255)),
                ('ville', models.CharField(max_length=100)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('activités', models.CharField(max_length=255)),
                ('categories', models.ManyToManyField(to='myapp.category')),
            ],
        ),
    ]
