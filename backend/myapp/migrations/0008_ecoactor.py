# Generated by Django 5.0.2 on 2024-03-22 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_delete_ecoactor_rename_nom_category_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='EcoActor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('motdepasse', models.CharField(max_length=100)),
                ('telephone', models.CharField(max_length=20)),
                ('role', models.CharField(max_length=100)),
                ('adresse', models.CharField(max_length=255)),
                ('ville', models.CharField(max_length=100)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('activitis', models.CharField(max_length=255)),
                ('categories', models.ManyToManyField(to='myapp.category')),
            ],
        ),
    ]
