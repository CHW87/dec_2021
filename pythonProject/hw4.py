# Создать класс Rectangle:
# -конструктор принимает две стороны x,y
# -описать арифметические методы:
#   + сума площадей двух экземпляров класса
#   - разница площадей
#   == или площади равны
#   != не равны
#   >, < меньше или больше
#   при вызове метода len() подсчитывать сумму сторон

# class Rectangle:
# 	def __init__(self, x: int, y: int):
# 		self.x = x
# 		self.y = y
# 		self.__area = x * y
# 
# 	def __add__(self, other):
# 		return self.__area + other.__area
# 
# 	def __sub__(self, other):
# 		return self.__area - other.__area
# 
# 	def __eq__(self, other):
# 		return self.__area == other.__area
# 
# 	def __ne__(self, other):
# 		return self.__area != other.__area
# 
# 	def __lt__(self, other):
# 		return self.__area < other.__area
# 
# 	def __gt__(self, other):
# 		return self.__area > other.__area
# 
# 	def __len__(self):
# 		return self.x + self.y


# rec1 = Rectangle(8, 10)
# rec2 = Rectangle(3, 9)
# 
# print(rec1 + rec2)
# print(rec1 - rec2)
# print(rec1 == rec2)
# print(rec1 != rec2)
# print(rec1 < rec2)
# print(rec1 > rec2)
# print(len(rec1))

###############################################################################
# 1) написати програму для запису відомостей про пасажирські перевезення
# 2) перевезення відбувається трьома способами, літаком, машиною, поїздом,
# 3) дані які треба буде зберігати:
#   - вартість квитка(літак, поїзд)
#   - кількість пасажирів(машина)
#   - час в дорозі(всі)
#   - час реєстрації(літак)
#   - клас:перший,другий(літак)
#   - вартість пального(машина)
#   - км(машина)
#   - місце: купе,св(поїзд)
# 4) методи:
#   - розрахунок вартості доїзду(машина)
#   - загальний час перельоту(літак)
#   - порівняти час в дорозі між двома будь якими транспортними засобами(двома об'єктами) - наприклад "літак на 5 годин швидше за поїзд"
# - вивести всі дані про перевезення(поїзд)

class Transport:
	def __init__(self, travel_time: float):
		self.travel_time = travel_time

	def __eq__(self, other):
		diff_time = self.travel_time - other.travel_time
		return \
			f'{self.__class__.__name__} на {diff_time} год швидше ніж {other.__class__.__name__}' \
				if diff_time < 0 else \
				f'{self.__class__.__name__} на {diff_time} год повільніше ніж {other.__class__.__name__}'


class AirplaneTrain(Transport):
	def __init__(self, travel_time: float, ticket_cost: int):
		super().__init__(travel_time)


class Train(AirplaneTrain):
	def __init__(self, travel_time: float, ticket_cost: int, class_of_sit: str):
		super().__init__(travel_time, ticket_cost)
		self.class_of_sit = class_of_sit
		self.ticket_cost = ticket_cost

	def __str__(self):
		return f'Train({self.travel_time}-{self.ticket_cost}-{self.class_of_sit})'


class Airplane(AirplaneTrain):
	def __init__(self, travel_time: float, ticket_cost: int, class_of_sit: str, register_time: int):
		super().__init__(travel_time, ticket_cost)
		self.class_of_sit = class_of_sit
		self.register_time = register_time

	def total_time(self):
		return self.travel_time + self.register_time


class Car(Transport):
	def __init__(self, travel_time: float, passengers_count: int, patrol_cost: float, distance: int):
		super().__init__(travel_time)
		self.distance = distance
		self.patrol_cost = patrol_cost
		self.passengers_count = passengers_count

	def cost_of_travel(self):
		return self.distance / 100 * self.patrol_cost


plane = Airplane(1, 1500, '1', 14)
train = Train(2, 700, 'SV')
car = Car(10, 5, 30, 100)
print(train == plane)
print(train)

######################################################################

# 1)Створити пустий list 
# 2)Створити клас Letter
# 3) створити змінну класу __count.
# 4) при створенні об'єкта має створюватись змінна об'єкта(пропертя) __text, для цієї змінної мають бути гетер і сетер
# 5) при створені об'єкта __count має збільшуватися на 1
# 6) має бути метод(метод класу) для виводу __сount
# 7) має бути метод який записує в наш ліст текст з нашої змінної __text
# 
# L = []
# 
# 
# class Letter:
# 	__count = 0
# 
# 	def __init__(self):
# 		self.__text = ''
# 		Letter.__count += 1
# 
# 	@classmethod
# 	def get_count(cls):
# 		print(cls.__count)
# 
# 	@property
# 	def text(self):
# 		return self.__text
# 
# 	@text.setter
# 	def text(self, text):
# 		self.__text = text
# 
# 	def save(self):
# 		L.append(self.__text)
# 
# 	@staticmethod
# 	def show_list():
# 		print(L)
# 
# 
# letter = Letter()
# letter.text = 'Python'
# letter.save()
# letter.text = 'is a'
# letter.save()
# letter.text = 'programming'
# letter.save()
# Letter.show_list()
# letter2 = Letter()
# letter2.text = 'language'
# letter2.save()
# Letter.show_list()
# Letter.get_count()
