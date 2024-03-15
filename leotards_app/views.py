from django.shortcuts import render

def index(request):
  return render(request, 'index.html')

def conditions(request):
  return render(request, 'conditions.html')

def contact(request):
  return render(request, 'contact.html')

