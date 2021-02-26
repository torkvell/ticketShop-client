const initialState = {
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
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "PAYMENT_METHODS":
      return action.payload;
    default:
      return state;
  }
};
