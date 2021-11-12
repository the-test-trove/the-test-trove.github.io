# Sending Mail Containing API Test using Newman  and UI Test Reports From Gitlab Pipeline to a list of Emails 
## Prerequisites:
* Gitlab Pages must have been configured in the pipeline
* Excel file with a name that must be same as specified in the read_excel() method
* SMTP server with port 25 open

* Create a file with name sendmail.py and add it to your project root. Below should be the content of sendmail.py

``` 
import smtplib
import pandas as pd
import requests
from bs4 import BeautifulSoup

URL = "<your pages url where newman html-extra report is hosted>”
page = requests.get(URL, verify=False)
soup = BeautifulSoup(page.content, "html.parser")
total_assertion=soup.find('h6',string='Total Assertions')
totassert=total_assertion.text
total_failed=soup.find('h6',string='Total Failed Tests')
failedtest=total_failed.text
total_failed_count=soup.find('h6',string='Total Failed Tests').find_next('h1')
total_assertion_count=soup.find('h6',string='Total Assertions').find_next('h1')
total_failing=total_failed_count.text
total_assert=total_assertion_count.text
e=pd.read_excel("FileName.xlsx",engine='openpyxl')
emails=e['Column name having the emails'].values
print(emails)
smtp_server = "<smtp-server-url>"
smtpUser = "smtp-user-id"
port = 25
smtpAuth = "none"
sender_email = "<sender-mail>"
receiver_email =emails
message = """\
Subject: <Subject>

Summary of API Test Report:
{totassert} : {total_assert}
{failedtest} : {total_failing}

Please Find Detailed Report Below:
<gitlab pages url>

UI Test Report
<gitlab pages url>

""".format(totassert=totassert,total_assert=total_assert, failedtest=failedtest,total_failing=total_failing)

#context = ssl.create_default_context()
with smtplib.SMTP(smtp_server, port) as server:
   server.connect("<smtp server url>",25)
   server.ehlo()  # Can be omitted
   server.set_debuglevel(1)
   server.sendmail(sender_email, receiver_email, message) 
```



* The sender_email,receiver_email, message parameter’s values may be changed as per your projects. 
* The link to the report will be found once Gitlab Pages has been configured for your project.
* The smtpUser,port and the smtp_server must be set accordingly
* In .gitlab-ci.yml file, add the following and also add notify stage in the stages of the pipeline

```
send_email:
 stage: notify
 needs: [pages]
before_script:
 - pip3 install pandas
 - pip3 install openpyxl
 - pip3 install beautifulsoup4
 - pip3 install requests

 script:
   - python3 sendmail.py ```
