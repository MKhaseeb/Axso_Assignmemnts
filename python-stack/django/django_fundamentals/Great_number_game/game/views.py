from django.shortcuts import render
from django.http import HttpResponse
import random



def index(request):    
    request.session['number']  = random.randint(1, 100) 
    if not 'number' in request.session:
        request.post['res'] == request.session['number'] 
    return render(request,('index.html'))
# Create your views here.


def save(request):
    if request.method == "POST":
        guess = (request.POST['res']) 
        number = request.session['number']
    if guess > number:
        return render(request, 'high.html')
    if guess < number:
        return render(request, ('low.html'))
    if guess == number:
        return render(request, ('correct.html'))
    else:
        return render(request,('index.html'))
    


def test(request):
    return render(request, 'correct.html')



