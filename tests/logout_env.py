# Istall python-dotenv and webdriver-manager python packages
# This login script uses a .env file.
# Setup .env file in same folder as the script.
# .env file has two fields: "LOGIN_EMAIL" & "LOGIN_PASSWORD"

import os
import sys
import time
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.action_chains import ActionChains

#get current directory of script
current_directory = os.path.dirname(os.path.abspath(__file__))

#check if .env file exists
if not os.path.isfile(os.path.join(current_directory, ".env")):
    print(".env file not found")
    sys.exit(1)

#Load email and password from .env file
load_dotenv()

#check if .env file is setup
if not os.getenv("LOGIN_EMAIL") or not os.getenv("LOGIN_PASSWORD"):
    print(".env file is not properly setup")
    sys.exit(1)
    
#get email from .env
email = os.getenv("LOGIN_EMAIL")
#Retrieve password from .env file
password = os.getenv("LOGIN_PASSWORD")
    
#Setup chrome driver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

try:
    #Navigate to webpage
    driver.get('http://localhost:3000/#/Login')
    
    #wait until the email field is loaded or quit after 10 secs
    email_box = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id=":r1:"]'))
    )

    #input string into email field
    email_box.send_keys(email)
    #locate password field
    pass_box = driver.find_element(By.XPATH, '//*[@id=":r3:"]')
    #input password into field
    pass_box.send_keys(password)

    login_button = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/button[1]')
    login_button.click()
    
    try: 
        WebDriverWait(driver, 3).until(EC.url_to_be('http://localhost:3000/#/')) 
        print("Login successful")
    #if login fails, return error from div
    except:
        error_div = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/div[1]')
        print(f"Login failed: {error_div.text}")
        driver.quit()
        sys.exit(1)

except TimeoutException:
    print("Could not find email field in time") 
    driver.quit()
    sys.exit(1)
except Exception as e:
    print("Script failed")
    print(f"Error: {e}")
    driver.quit()
    sys.exit(1)
   
#Go to menu and click logout    
try:
    menu_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/nav/li[4]/button'))
    )
    #Move mouse over icon and click
    ActionChains(driver).move_to_element(menu_button).click().perform()

    logout_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '/html/body/div[2]/div[3]/div/ul/li/div/div/span'))
    )
    time.sleep(2)
    ActionChains(driver).move_to_element(logout_button).click().perform()
    
    try:
        WebDriverWait(driver, 5).until(EC.url_to_be('http://localhost:3000/#/Login'))
        print("Logout successful")
        time.sleep(4)
    except TimeoutException:
        print("Logout button did not lead to login page")
    
except TimeoutException:
    print("Could not find menu button in time") 
except Exception as e:
    print("Script failed")
    print(f"Error: {e}")
finally:
    driver.quit()
    
