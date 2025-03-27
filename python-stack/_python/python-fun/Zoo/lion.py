from animal import Animal

class Lion(Animal):
    def __init__(self, name, age, health_level, happiess_level, gender,majestic):
        super().__init__(name, age, health_level, happiess_level, gender)
        self.majestic = majestic
    def display_info(self):
        print(f"Name: {self.name} - Age: {self.age} - Gender: {self.gender} - Health Level: {self.health_level} - Happinss Level: {self.happiess_level} - Is Majestic ?: {self.majestic}")
    def feed(self):
        self.happiess_level += 10
        self.health_level += 10
        print("Roar loudly")





# momo = Lion("Soso", "21", "Male", 100 , 70 , "White")
# momo.display_info()