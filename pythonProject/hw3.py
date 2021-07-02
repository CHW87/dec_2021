# 1)
# создать два класса Prince и Cinderella:
# у золушки должно быть имя возраст и размер ноги
# у принца имя, возраст и размер найденой туфельки, так же должен быть метод который принимает лист золушек и ищет ту самую
# 
# 2) максимально в этих двух классах проанотировать типы
# 
# 3) у класса золушки должна быть переменная count которая будет считать сколько экземпляров класса золушка было создано

class Cinderella:
	count = 0

	def __init__(self, name: str, age: int, foot_size: int):
		self.name = name
		self.age = age
		self.foot_size = foot_size
		Cinderella.count += 1

	def __str__(self):
		return f'Cinderella {self.name}-{self.age}-{self.foot_size}'

	def __repr__(self):
		return f'Cinderella {self.name}-{self.age}-{self.foot_size}'


class Prince:
	def __init__(self, name: str, age: int, shoe_size: int):
		self.name = name
		self.age = age
		self.shoe_size = shoe_size

	def find_cinderella(self, *cinderellas):
		for cinderella in cinderellas:
			if cinderella.foot_size == prince.shoe_size:
				return cinderella





prince = Prince('Ivan', 25, 36)
print(
		(Prince.find_cinderella(
				Cinderella('Nadia', 18, 35),
				Cinderella('Sveta', 23, 37),
				Cinderella('Ira', 19, 36),
				Cinderella('Katya', 25, 38))))
print(Cinderella.count)
