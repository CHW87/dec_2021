# реализовать записную книжку покупок:
# - каждая запись должна содержать название покупки и ее цену
# -сделать менюшку для работы с записной книжкой:
#     '1) Создать запись'
#     '2) Список все записей'
#     '3) Общая сумма всех покупок'
#     '4) Самая дорогая покупка'
#     '5) Поиск по названию покупки'
#     '9) Выход'
# - можете придумать свои пункты
note = [
	{'name': 'bread', 'price': 20},
	{'name': 'juice', 'price': 32},
]


while True:
	print('1) Создать запись')
	print('2) Список все записей') 
	print('3) Общая сумма всех покупок') 
	print('4) Самая дорогая покупка') 
	print('5) Поиск по названию покупки') 
	print('9) Выход')

	choice = input('choose item:')

	if choice not in [1, 2, 3, 4, 5, 9]:
		continue

	if choice == '1':
		name = input('enter name:')
		price = input('enter price:')
		note.append({'name': name, 'price': int(price)})

	elif choice == '2':
		for item in note :
			print(item)

	elif choice == '3':
		summ = 0
		for item in note:
			sum += item['price']
		print('Сума:', summ)

	elif choice == '4':
		max_price = 0
		for item in note:
			if max_price < item[price]:
				max_price = item[price]
		for item in note:
			if item['price'] == max_price:
				print(item)
			break
	elif choice == '5':
		name = input('enter searching name: ')
		for item in note :
			if item['name']== name:
				print(item)
				break
	elif choice == '9':
		break
