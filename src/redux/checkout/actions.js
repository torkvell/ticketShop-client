import axios from "axios";
// const serverUrl = "https://ticket-shop-server.herokuapp.com";
const serverUrl = "http://localhost:4000";

/*--------------------SIGN UP--------------------*/

export function getPaymentMethods(countryCode, currencyCode) {
    console.log('inside redux action get paymentMethods')
  return async function (dispatch) {
      console.log(`async function get paymentMethods. CountryCode: ${countryCode} CurrencyCode: ${currencyCode}`)
    try {
    //   const response = await axios.post(`${serverUrl}/paymentsMethods`, {
    //     countryCode,
    //     currencyCode,
    //   });
        const response = {
            "paymentMethods": [
                {
                    "brand": "vvvgiftcard",
                    "details": [
                        {
                            "key": "encryptedCardNumber",
                            "type": "cardToken"
                        },
                        {
                            "key": "encryptedSecurityCode",
                            "optional": true,
                            "type": "cardToken"
                        },
                        {
                            "key": "encryptedExpiryMonth",
                            "optional": true,
                            "type": "cardToken"
                        },
                        {
                            "key": "encryptedExpiryYear",
                            "optional": true,
                            "type": "cardToken"
                        },
                        {
                            "key": "encryptedPassword",
                            "optional": true,
                            "type": "cardToken"
                        },
                        {
                            "key": "holderName",
                            "optional": true,
                            "type": "text"
                        }
                    ],
                    "name": "VVV Giftcard",
                    "type": "giftcard"
                }
            ]
        };
      // Success 🎉
      dispatch(paymentMethods(response));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function paymentMethods(data) {
  return { type: "PAYMENT_METHODS", payload: data };
}

/*--------------------ERROR HANDLING--------------------*/

function errorHandler(data) {
    return { type: "ERROR", payload: data };
  }