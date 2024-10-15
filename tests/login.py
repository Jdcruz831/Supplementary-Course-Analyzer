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

#Login
try:
    #Navigate to webpage
    driver.get('http://localhost:3000/#/Login')
    
    #wait until the email field is loaded or quit after 10 secs
    email_box = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id=":r1:"]'))
    )

    #input string into email field
    email_box.send_keys("csuscatest@gmail.com")
    #locate password field
    pass_box = driver.find_element(By.XPATH, '//*[@id=":r3:"]')
    #input password into field
    pass_box.send_keys("test1234!")

    login_button = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/button[1]')
    login_button.click()
    
    try: 
        WebDriverWait(driver, 3).until(EC.url_to_be('http://localhost:3000/#/')) 
        print("Login successful")
        time.sleep(3)
    #if login fails, return error from div
    except:
        error_div = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/div[1]')
        print(f"Login failed: {error_div.text}")
 
except TimeoutException:
    print("Could not find email field in time") 
        
except Exception as e:
    print("Script failed")
    print(f"Error: {e}")
    
finally:
    driver.quit()
