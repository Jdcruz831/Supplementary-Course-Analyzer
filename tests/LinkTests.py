
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Firefox()
wait = WebDriverWait(driver, 10)

driver.get("http://localhost:3000/")

username = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id=":r1:"]'))
    )

username.send_keys("csuscatest@gmail.com")

password = driver.find_element(By.XPATH, '//*[@id=":r3:"]')
password.send_keys("test1234!") 

login_button = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/button[1]')
login_button.click()
time.sleep(1)
#Tests link to sac State through logo link
sac_link = sac_link = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, '.css-0 > a:nth-child(1)'))
)
driver.execute_script("arguments[0].scrollIntoView(true);", sac_link)
sac_link.click()
time.sleep(3)
driver.back()
time.sleep(3)
#Tests link to sac state to apply
apply_link = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div/div/div/div[1]/div[1]/nav/li[1]/a'))
)
apply_link.click()

time.sleep(3)
driver.back()
time.sleep(3)
#Tests link to sac state experience page
experience_link = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div/div/div/div[1]/div[1]/nav/li[2]/a'))
)
experience_link.click()
time.sleep(3)
driver.back()
time.sleep(3)
#Tests link to sac state give page
give_link = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '/html/body/div/div/div/div[1]/div[1]/nav/li[3]/a'))
)
give_link.click()
time.sleep(3)
driver.back()
time.sleep(3)

driver.quit()

