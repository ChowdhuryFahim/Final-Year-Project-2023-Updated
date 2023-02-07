import random
import smtplib
from smtplib import SMTPException

def send_otp(user_email, otp_code):
    try:
       server = smtplib.SMTP('smtp.gmail.com', 587)
       server.starttls()
       server.login('macfahim087@gmail.com', 'lujkmufatzqeuxbg')
       msg = 'Hello, your otp is '+ str(otp_code)
       server.sendmail('macfahim087@gmail.com', user_email, msg) 
       server.quit()
       return True
    except SMTPException:
        return False
