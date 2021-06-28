# 
# strings
# 
# 1)написати прогу яка вибирає зі введеної строки цифри і виводить їх через кому,
# наприклад:
# st = 'as 23 fdfdg544' введена строка
# 2,3,5,4,4        #вивело в консолі.

# st = 'as 23 fdfdg544'
# dec = ''
# for i in st:
# 	if i.isdecimal():
# 		dec += i + ','
# print(dec)

# #################################################################################
# 2)написати прогу яка вибирає зі введеної строки числа і виводить їх 
# так як вони написані
# наприклад:
#   st = 'as 23 fdfdg544 34' #введена строка
#   23, 544, 34              #вивело в консолі

# st = 'as 23 fdfdg544 34'
# numbers = ''
# for i in st:
# 	if i.isdecimal():
# 		numbers += i
# 	else:
# 		numbers += ' '
# numbers = ','.join(numbers.split())
# print(numbers)

# #################################################################################
# 
# list comprehension
# 
# 1)есть строка:
# greeting = 'Hello, world'
# записать каждый символ в лист поменяв его на верхний регистр
# пример:
# ['H', 'E', 'L', 'L', 'O', ',', ' ', 'W', 'O', 'R', 'L', 'D']
# greeting = 'Hello, world'
# letters = [i.upper() for i in greeting]
# print(letters)


# 
# 2) с диапазона от 0-50 записать в лист только не парные числа, при этом возвести их в квадрат
# пример:
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, ...]
# 
# odd_num = [num ** 2 for num in range(50) if num % 2 != 0]
# print(odd_num)

# 
# function
# 
# - створити функцію яка виводить ліст

l=[-1, 22, 0, 30, 55, 7, 8]
# def func(l):
# 	print(l)
# func(l)
# - створити функцію яка приймає три числа та виводить та повертає найменьше.

# def func_min(a, b, c):
# 	res = min(a, b, c)
# 	print(res)
# 	return(res)
# func_min(-39, 3, 55)


# - створити функцію яка приймає три числа та виводить та повертає найбільше.

# def func_max(a, b, c):
# 	res = max(a, b, c)
# 	print(res)
# 	return(res)
# func_max(234, -47, 0)

# - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

# def func_any(*args):
# 	print(max(args))
# 	return min(args)
# numbers = func_any(0, 4, 22, -455)
# print(numbers)

# - створити функцію яка повертає найбільше число з ліста

# def max_num(l):
# 	return max(l)
# print(max_num(l))

# - створити функцію яка повертає найменьше число з ліста

# def min_num(l):
# 	return min(l)
# print(min_num(l))

# - створити функцію яка приймає ліст чисел та складає значення елементів ліста та повертає його.

# def sum_num(l):
# 	return sum(l)
# print(sum_num(l))

# - створити функцію яка приймає ліст чисел та повертає середнє арифметичне його значень.
 
# def avg_num(l):
# 	return sum(l) / len(l)
# print(avg_num(l))


# 
# decorators
# - є функція: 
# def pr(): 
#     return 'Hello_boss_!!!'
#  написати декоратор до цієї функції, який замінює нижні підчеркування на пробіли і повертає це значення

def decor(func):
	def wrap(*args,**kwargs):
		return func(*args,**kwargs).replace('_', ' ')
	return wrap()

@decor
def pr():
	return 'Hello_Boss_!!!'

print(pr())
