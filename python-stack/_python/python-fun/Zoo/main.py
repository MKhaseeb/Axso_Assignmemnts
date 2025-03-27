from lion import Lion
from rrabbit import Rrabbit
from tiger import Tiger


l=Lion("Simba", 31 , 100 , 210 , "Male", True)
print("-"*100)
l.display_info()
l.feed()
l.display_info()
print("-"*100)
t=Tiger("Mofasa", 31 , 100 , 210 , "Male", "fast")
t.display_info()
t.feed()
t.display_info()
print("-"*100)
r=Rrabbit("Raboot", 31 , 100 , 210 , "Male", "Black")
r.display_info()
r.feed()
r.display_info()
print("-"*100)