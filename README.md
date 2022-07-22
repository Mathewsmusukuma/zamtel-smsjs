# Zamtel Bulk SMS API - JS Package 


## Installation

```
import sendSMS from 'zamtel-sms';

```

# Configuration
 
Create a .env file in the root of your project and add the following
```
API_KEY=YOUR_API_KEY_FROM_ZAMTEL
SENDER_ID=YOUR_SENDER_ID_FROM_ZAMTEL
BASE_URL=https://bulksms.zamtel.co.zm/api/v2.1/action/send/

```
* API_KEY is the API_KEY you were given by Zamtel
* SENDER_ID is the SENDER_ID you were given by Zamtel


## Usage

```
const response = sendSMS(0955786543,'Hello World!');
console.log(response);

```

You can also send a list of number as follows

```

const response = sendSMS([0955786543,0955786543],'Hello World!');
console.log(response);

```

Happy Coding!!
