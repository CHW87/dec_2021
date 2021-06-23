# 1)Дан лист:
list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]

while True:
	choice = input('make your choice:')
	if choice == '1':
		print('1.найти min число в листе')
		min_num = list[0]
		for i in list:
			if min_num > i:
				min_num = i
		print(list)
		print('min_num: ', min_num)

	elif choice == '2':
		print('2.удалить все одинаковые значения')
		list2 = list.copy()
		for i in range(len(list2) - 1, 0, -1):
			if list2.count(list2[i]) > 1:
				del list2[i]
		print(list)
		print(list2)

	elif choice == '3':
		print('3.заменить каждое четвертое значение на "Х" ')
		list2 = list.copy()
		for i in range(3, len(list2), 4):
			list2[i] = 'X'
		print(list2)

	elif choice == '4':
		print('4.вывести на экран пустой квадрат из "*" сторона которого указана в переменой:')
		for i in range(10):
			if i == 0 or i == 9:
				for j in range(10):
					print('*', end='')
			else:
				print('*', end='')
				for j in range(1, 9):
					print(' ', end='')
				print('* ', end='')
			print()

	elif choice == '5':
		print('5.вывести табличку умножения с помощью цикла while')
		print('x', end='\t')
		x = 1
		while x <= 10:
			print(x, end='\t')
			x += 1
		y = 1
		while y <= 10:
			print('')
			print(y, end='\t')
			z = 1
			while z <= 10:
				print(y * z, end='\t')
				z += 1
			y += 1
		print()
	elif choice == '6':
		break




# 4) переделать первое задание под меню с помощью цикла

# ***  - вывести элемент листа, значение которого ближе всего к среднему арифметическому всех элементов этого же листа
# пример:
# [1, 2, 3, 4, 5, 6, 7, 8, 9] => 5
# [-1, -2, 3, 4, 555] => 4
# [5, 5, 5, 5] => 5
# [-10, 5, 5] => 5

# l = [21, 2, -3, 4, 0, 6, 7, 85, 9]
# sum = 0
# for i in l :
# 	sum += i
# avg = sum/len(l)
# print(avg)



