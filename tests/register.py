# Istall webdriver-manager python package

import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

#Setup chrome driver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

try:
    #Navigate to login page
    driver.get('http://localhost:3000/#/Login')
    
    #wait until the create account button is loaded
    create_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/button[2]'))
    )
    create_button.click()
    
    email_box = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.NAME, 'user_email'))
    )
    email_box.send_keys("test123456@email.com")
    
    password_box = driver.find_element(By.NAME, 'user_password')
    password_box.send_keys("Test1234!")
    confirm_box = driver.find_element(By.NAME, 'confirm_password')
    confirm_box.send_keys("Test1234!")
    
    signup_button = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/div[2]/button').click()
    
    try: 
        WebDriverWait(driver, 5).until(EC.url_contains('ogin'))
        print("Sign Up Successful")
        time.sleep(4)
    except:
        error_msg = WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/form/div[2]/div/div[2]'))
        )
        print(f"Error: {error_msg.text}")
        time.sleep(3)
    
except TimeoutException:
    print("Page took too long to load")    
except Exception as e:
    print("Script failed")
    print(f"Error: {e}")   
finally:
    driver.quit()