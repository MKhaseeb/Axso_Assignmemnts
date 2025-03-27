from animal import Animal

class Tiger(Animal):
    def __init__(self, name, age, health_level, happiess_level, gender,species):
        super().__init__(name, age, health_level, happiess_level, gender)
        self.species = species
    def display_info(self):
        print(f"Name: {self.name} - Age: {self.age} - Gender: {self.gender} - Health Level: {self.health_level} - Happinss Level: {self.happiess_level} - Species: {self.species} ")



    def feed(self):
        self.happiess_level += 10
        self.health_level += 10
        print("Fast")