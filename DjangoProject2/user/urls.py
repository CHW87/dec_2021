from django.urls import path

from .views import home, add_user, remove_user

urlpatterns = [
		path('', home),
		path('/create/<int:user_id>/<str:name>/<int:age>', add_user),
		path('/delete/<int:user_id>', remove_user)

]
