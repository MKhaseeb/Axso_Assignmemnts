from lion import Lion
from tiger import Tiger
from rrabbit import Rrabbit

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    def add_lion(self, name, age, health_level, happiess_level, gender,majestic):
        self.animals.append( Lion(name, age, health_level, happiess_level, gender,majestic))
    def add_tiger(self, name, age, health_level, happiess_level, gender,species):
        self.animals.append( Tiger(name, age, health_level, happiess_level, gender,species) )
    def add_rrabbit(self, name, age, health_level, happiess_level, gender, fur_color):
        self.animals.append( Rrabbit(name, age, health_level, happiess_level, gender, fur_color) )
    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()
zoo1 = Zoo("Ramallah Zoo")
zoo1.add_lion("Simba", 31 , 100 , 210 , "Male", True) 
zoo1.add_tiger("Mofasa", 31 , 100 , 210 , "Male", "Fast")
zoo1.add_rrabbit("Raboot", 31 , 100 , 210 , "Male", "Black")

zoo1.print_all_info()

