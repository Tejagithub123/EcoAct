from django.shortcuts import render,redirect,HttpResponse
from .forms import ContactUsForm
# Create your views here.

from rest_framework.decorators import api_view

from django.core.mail import send_mail
from django.http import JsonResponse


def contact(request):
    if request.method == 'POST':
        form = ContactUsForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse(content="Message Sent",status=201)
    return HttpResponse(content="<p>Error sending message</p>")


@api_view(['POST'])
def submit_contact_form(request):
    if request.method == 'POST':
        name = request.data.get('name', '')
        email = request.data.get('email', '')  
        subject = request.data.get('subject', '')
        message = request.data.get('message', '')

        if email:
            try:
                # Ensure that your EMAIL_HOST settings are correctly configured
                send_mail(
                    'New Contact Form Submission',
                    f'Name: {name}\nEmail: {email}\nsubject: {subject}\nMessage: {message}',
                    email,
                    ['benhajalayateja@gmail.com'],
                    fail_silently=False
                )
                return JsonResponse({'message': 'Form submitted successfully.'})
            except Exception as e:
                # Log the error for debugging purposes
                logger.error(f'Failed to send email: {str(e)}')
                return JsonResponse({'error': 'An error occurred while sending the email.'}, status=500)
        else:
            return JsonResponse({'error': 'Email is required.'}, status=400)
    return JsonResponse({'error': 'Invalid request method.'}, status=400)
