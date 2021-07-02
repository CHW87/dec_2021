# =========================================
# Деструктуризація
# =========================================

# tuple1 = (1, 2)
# a,b = tuple1
# print(a, b)

# вивід  1 2

# l = [1, 2, 3, 4, 5, 6]
# 
# a, b, *_, z = l
# print(_)
# print(a, b, z)

# вивід [3, 4, 5]
# вивід  1 2 6

# l = [1, 2, 3]
# a, _, c = l
# print(a, b)

# def func(arg1='a', arg2='b', arg3='c'):
# 	return (arg1, arg2, arg3)
# 
# 
# d = {
# 		"arg1": 1,
# 		"arg2": 2,
# 		"arg3": 3,
# }

# print(func())
# print(func(1, 2, 3))
# print(func(*d))
# print(func(**d)) #func(arg1 = 1, arg2 = 2 , arg3 = 3)

# вивід  ('a', 'b', 'c')
# вивід  (1, 2, 3)
# вивід  ('arg1', 'arg2', 'arg3')--key
# вивід  (1, 2, 3)--value

################################################
# scope
################################################

# name = 'Max'
# print(locals())
# print()
# print(globals())

# def a():
# 	 name = 'Vasia'
# 	def b():
# 		# global name
# 		nonlocal name #працює на рівень вище - переіменує Васю на Петю
# 		name = 'Petya'
# 		print(name)
# 
# 	b()
# 	print(name)
# a()
# print(name)

################################################
# Замикання
################################################

# def counter():
# 	count = 0
# 
# 	def wrap():
# 		nonlocal count
# 		count += 1
# 		return count
# 	return wrap
# 
# count1 = counter()
# count2 = counter()
# 
# print(count1())
# print(count1())
# print(count2())
# print(count1())
# print(count2())
# print(count1())
# print(count1())

################################################
# Lambda function
################################################

# func = lambda x, y: x + y
# 
# print (func(1,5))
# 
# l = [1, 2, 3, 4, 5]
# map1 = map(lambda x: x**2, l)
# print(map)
# 
# for item in map1:
# 	print(item)
# print(list(map1))
# 
# print(list(filter(lambda x: x < 4, l)))

################################################
# Type hinting (Анотація типів)
################################################

# def splitter(st: str,char: str):
# 	res = st + 25
# 	print(res)
# 
# splitter(1, ' ')

from typing import List, Tuple, Optional, Union, Callable


# def splitter(st: str, char: str) -> Optional[Tuple[str, ...]]:  # [str,...] ->строки або [str,int,float] -> всі значення
# 	return tuple(st.split(char))  # або None

# def splitter(st: str, char: str) -> Union[Tuple[str, ...], List[int]]:  # [str,...] ->всі строки або [str,int,float] -> всі значення
# 	return tuple('ddd',)  # або [111,222]


# splitter('Hello world', ' ')

# def counter() -> Callable:
# 	count = 0
# 
# 	def wrap() -> int:
# 		nonlocal count
# 		count += 1
# 		return count
# 	return wrap

################################################
#   Class   
################################################

# class User:
# 	count = 0
# 	__count = 0 # __ -> означає private
# 
# 
# user = User()
# print(user.count)
# print(User._User__count) #-> дістає private
# print(User.count)


# class User:
# 	def __init__(self, name, age):
# 		self.name = name
# 		self.age = age
# 	
# 	def __str__(self):
# 		return f'User({self.name}-{self.age})'
# 
# 	def __repr__(self):
# 		# return f'User({self.name}-{self.age})'
# 		# або
# 		return self.__str__()
# 
# 	def get_name(self):
# 		return self.name
# 
# 
# user1 = User('Max', 15)
# # print(user1.get_name())
# l = [User('Max', 15), User('Petya', 22), User('Vasya', 27)]
# # print(user1)
# print(l)

one_iterable = [2, 1, 3, 4, 7, 11]
another_iterable = ['P', 'y', 't', 'h', 'o', 'n']
for n, letter in zip(one_iterable, another_iterable):
    print(letter, n)
