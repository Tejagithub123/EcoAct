
# Create your views here.

from rest_framework.decorators import api_view

from django.core.mail import send_mail
from django.http import JsonResponse
import logging

logger = logging.getLogger(__name__)


@api_view(['POST'])
def submit_contact_form(request):
    if request.method == 'POST':
        name = request.data.get('name', '')
        email = request.data.get('email', '')  
        subject = request.data.get('subject', '')
        message = request.data.get('message', '')

        if email:
            try:
                # Construct the message body including sender's email
                message_body = f'Name: {name}\nMessage: {message}\n\nFrom: {email}'

                # Ensure that your EMAIL_HOST settings are correctly configured
                send_mail(
                    subject,
                    message_body,
                    'aicademyelearning@gmail.com',  # Sender's email address
                    ['aicademyelearning@gmail.com'],  # Receiver's email address
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