from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    """ return HttpResponse("Hello, this is the home page of the My project app.") """
    return render(request, 'home.html')

def about(request):
    """ return HttpResponse("This is about page") """
    return render(request, 'about.html')
