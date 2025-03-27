from animal import Animal

class Rrabbit(Animal):
    def __init__(self, name, age, health_level, happiess_level, gender,fur_color):
        super().__init__(name, age, health_level, happiess_level, gender)
        self.fur_color = fur_color
    def display_info(self):
        print(f"Name: {self.name} - Age: {self.age} - Gender: {self.gender} - Health Level: {self.health_level} - Happinss Level: {self.happiess_level} - Fur Color: {self.fur_color}")
    


    def feed(self):
        self.happiess_level += 10
        self.health_level += 10
        print("Run!")