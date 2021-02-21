import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
} from "@material-ui/core";
import {
  removeProductFromCart,
  updateItemCart
} from "../../redux/cart/actions";
import "./checkout.css";
import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

const useStyles = makeStyles({
  table: {
    minWidth: 550
  },
  navLinkBlack: {
    color: "black",
    textDecoration: "none",
    "&:hover, &:focus": {
      color: "black",
      textDecoration: "none"
    }
  },
});

const paymentMethodsResponse = {
    "paymentMethods": [
        {
            "configuration": {
                "intent": "capture"
            },
            "name": "PayPal",
            "type": "paypal"
        },
        {
            "brands": [
                "visa",
                "mc",
                "amex"
            ],
            "details": [
                {
                    "key": "encryptedCardNumber",
                    "type": "cardToken"
                },
                {
                    "key": "encryptedSecurityCode",
                    "type": "cardToken"
                },
                {
                    "key": "encryptedExpiryMonth",
                    "type": "cardToken"
                },
                {
                    "key": "encryptedExpiryYear",
                    "type": "cardToken"
                },
                {
                    "key": "holderName",
                    "optional": true,
                    "type": "text"
                }
            ],
            "name": "Credit Card",
            "type": "scheme"
        },
        {
            "name": "Online bank transfer.",
            "type": "directEbanking"
        },
        {
            "name": "GiroPay",
            "type": "giropay"
        },
        {
            "name": "SEPA Bank Transfer",
            "type": "bankTransfer_IBAN"
        },
        {
            "name": "AliPay",
            "type": "alipay"
        },
        {
            "details": [
                {
                    "key": "shopperEmail",
                    "type": "emailAddress"
                },
                {
                    "key": "firstName",
                    "type": "text"
                },
                {
                    "key": "lastName",
                    "type": "text"
                },
                {
                    "key": "infix",
                    "optional": true,
                    "type": "text"
                }
            ],
            "name": "CIMB VA",
            "type": "doku_cimb_va"
        },
        {
            "brand": "genericgiftcard",
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
            "name": "Generic GiftCard",
            "type": "giftcard"
        },
        {
            "name": "Moneybookers",
            "type": "moneybookers"
        },
        {
            "configuration": {
                "merchantId": "1000",
                "gatewayMerchantId": "ToralfKvelland"
            },
            "details": [
                {
                    "key": "paywithgoogle.token",
                    "type": "payWithGoogleToken"
                }
            ],
            "name": "Google Pay",
            "type": "paywithgoogle"
        },
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
  }

function Checkout(props) {
    
  const configuration = {
    paymentMethodsResponse: paymentMethodsResponse, // The `/paymentMethods` response from the server.
    clientKey: "YOUR_CLIENT_KEY", // Web Drop-in versions before 3.10.1 use originKey instead of clientKey.
    locale: "en-US",
    environment: "test",
    onSubmit: (state, dropin) => {
        // Your function calling your server to make the `/payments` request
        // makePayment(state.data)
        //   .then(response => {
        //     if (response.action) {
        //       // Drop-in handles the action object from the /payments response
        //       dropin.handleAction(response.action);
        //     } else {
        //       // Your function to show the final result to the shopper
        //       showFinalResult(response);
        //     }
        //   })
        //   .catch(error => {
        //     throw Error(error);
        //   });
      },
    onAdditionalDetails: (state, dropin) => {
      // Your function calling your server to make a `/payments/details` request
      // makeDetailsCall(state.data)
      //   .then(response => {
      //     if (response.action) {
      //       // Drop-in handles the action object from the /payments response
      //       dropin.handleAction(response.action);
      //     } else {
      //       // Your function to show the final result to the shopper
      //       showFinalResult(response);
      //     }
      //   })
      //   .catch(error => {
      //     throw Error(error);
      //   });
    },
    paymentMethodsConfiguration: {
      card: { // Example optional configuration for Cards
        hasHolderName: true,
        holderNameRequired: true,
        enableStoreDetails: true,
        hideCVC: false, // Change this to true to hide the CVC field for stored cards
        name: 'Credit or debit card'
      }
    }
  };

  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    // Runs after the first render() lifecycle
    console.log('component mounted');  
    const checkout = new AdyenCheckout(configuration);
    const dropin = checkout.create('dropin').mount('#dropin-container');
  }, [state]);

  return (
    <Container>
      Checkout
        <div id="dropin-container"></div>
    </Container>
  );
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Checkout);
