import * as env from 'env-var';
import axios from 'axios';

const sendSMS = async (phone_number, message) =>{
    const sender_id = env.get('SENDER_ID');
    const base_url = env.get('BASE_URL');
    const api_key = env.get('API_KEY');
    try {
      const response = await axios
      .post(
        `${base_url}api_key/${api_key}/contacts/${phone_number}/senderId/${sender_id}/message/${message}`
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  export default sendSMS;
  