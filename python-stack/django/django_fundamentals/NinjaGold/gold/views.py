from django.shortcuts import render , redirect
from django.http import HttpResponse
import random



def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    context = {
        'gold': request.session['gold'],
    }
    return render(request, "index.html", context)


def gold(request):
    if request.method == "POST":
        gold = 0
        location  = request.POST['location']
        if location == 'Farm':
            gold = random.randint(10, 20)
        if location == 'Cave':
            gold = random.randint(10, 20)
        if location == 'House':
            gold = random.randint(10, 20)
        if location == 'Quest':
            gold = random.randint(-50, 50)
        request.session['gold'] += gold
    return redirect('/')







def result(request):
    pass