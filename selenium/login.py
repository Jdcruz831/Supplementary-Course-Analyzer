#chrome driver win64 129.0.6668
#python 3.12.2
#selenium 4.25.0
#python-dotenv-1.0.1
#Windows 11 23H2

#Drop the Chrome driver in the same folder as script
#Istall python-dotenv and setup .env file
#.env file two fields: "LOGIN_EMAIL" & "LOGIN_PASSWORD"

import os
import time
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

#Load email and password from .env file
load_dotenv()

#get current directory of script
current_directory = os.path.dirname(os.path.abspath(__file__))
#create path to chromedriver
driver_path = os.path.join(current_directory, "chromedriver_129.0.6668.exe")

#Create service for chrome driver instantiation
service = Service(driver_path)
driver = webdriver.Chrome(service=service)

try:
    #Navigate to webpage
    driver.get('http://localhost:3000/#/Login')
    
    #wait until the email field is loaded or quit after 10 secs
    login_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id=":r1:"]'))
    )
    #get email from .env
    email = os.getenv("LOGIN_EMAIL")
    #input string into email field
    login_box.send_keys(email)

    #locate password field
    pass_box = driver.find_element(By.XPATH, '//*[@id=":r3:"]')
    #Retrieve password from .env file
    password = os.getenv("LOGIN_PASSWORD")
    #input password into field
    pass_box.send_keys(password)

    login_button = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/button[1]')
    login_button.click()
    
    print("Login successful")
    
    #Pause 5 seconds before closing
    time.sleep(5) 
       
except Exception as e:
    print("Login failed")
    print(f"Error: {e}")
    
finally:
    driver.quit()