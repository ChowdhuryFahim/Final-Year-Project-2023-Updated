# Generated by Django 3.1.4 on 2022-01-08 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0031_auto_20220107_2358'),
    ]

    operations = [
        migrations.CreateModel(
            name='TempUser',
            fields=[
                ('temp_user_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('temp_user_firstName', models.CharField(max_length=200)),
                ('temp_user_name', models.CharField(max_length=200)),
                ('temp_user_mobile', models.CharField(max_length=200)),
                ('temp_user_email', models.CharField(max_length=200)),
            ],
        ),
    ]
