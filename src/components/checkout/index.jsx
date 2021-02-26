import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
} from "@material-ui/core";
import {
  getPaymentMethods
} from "../../redux/checkout/actions";
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

const Checkout = props => {
  const paymentContainer = React.createRef();

  const setConfiguration = paymentMethods => {
    return {
        paymentMethodsResponse: paymentMethods, // The `/paymentMethods` response from the server.
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
  }

  React.useEffect(() => {
    console.log('use effect triggered');
    console.log(props.checkout);
    console.log(paymentContainer.current)
    let checkout = new AdyenCheckout(setConfiguration(props.checkout));
    checkout.create('dropin').mount(paymentContainer.current);
    console.log(paymentContainer.current) //paymentContainer is changed but no update due to ref
  });

  const handleSubmit = event => {
    event.preventDefault();
    let countryCode = document.searchForm.countryCodeSelector.value;
    let currencyCode = document.searchForm.currencyCodeSelector.value
    props.getPaymentMethods(countryCode, currencyCode);
  };

  return (
    <Container>
        <form name="searchForm" onSubmit={handleSubmit} noValidate>
            <select name="countryCodeSelector">
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antartica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo">Congo, the Democratic Republic of the</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                <option value="Croatia">Croatia (Hrvatska)</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="France Metropolitan">France, Metropolitan</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                <option value="Holy See">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran (Islamic Republic of)</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia, Federated States of</option>
                <option value="Moldova">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands" selected>Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                <option value="Saint LUCIA">Saint LUCIA</option>
                <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                <option value="Span">Spain</option>
                <option value="SriLanka">Sri Lanka</option>
                <option value="St. Helena">St. Helena</option>
                <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Viet Nam</option>
                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Serbia">Serbia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <select name="currencyCodeSelector">
                <option selected value="">Select currency</option>
                <option value="America (United States) Dollars - USD">America (United States) Dollars – USD</option>
                <option value="Afghanistan Afghanis - AFN">Afghanistan Afghanis – AFN</option>
                <option value="Albania Leke - ALL">Albania Leke – ALL</option>
                <option value="Algeria Dinars - DZD">Algeria Dinars – DZD</option>
                <option value="Argentina Pesos - ARS">Argentina Pesos – ARS</option>
                <option value="Australia Dollars - AUD">Australia Dollars – AUD</option>
                <option value="Austria Schillings - ATS">Austria Schillings – ATS</option>
                
                <option value="Bahamas Dollars - BSD">Bahamas Dollars – BSD</option>
                <option value="Bahrain Dinars - BHD">Bahrain Dinars – BHD</option>
                <option value="Bangladesh Taka - BDT">Bangladesh Taka – BDT</option>
                <option value="Barbados Dollars - BBD">Barbados Dollars – BBD</option>
                <option value="Belgium Francs - BEF">Belgium Francs – BEF</option>
                <option value="Bermuda Dollars - BMD">Bermuda Dollars – BMD</option>
                
                <option value="Brazil Reais - BRL">Brazil Reais – BRL</option>
                <option value="Bulgaria Leva - BGN">Bulgaria Leva – BGN</option>
                <option value="Canada Dollars - CAD">Canada Dollars – CAD</option>
                <option value="CFA BCEAO Francs - XOF">CFA BCEAO Francs – XOF</option>
                <option value="CFA BEAC Francs - XAF">CFA BEAC Francs – XAF</option>
                <option value="Chile Pesos - CLP">Chile Pesos – CLP</option>
                
                <option value="China Yuan Renminbi - CNY">China Yuan Renminbi – CNY</option>
                <option value="RMB (China Yuan Renminbi) - CNY">RMB (China Yuan Renminbi) – CNY</option>
                <option value="Colombia Pesos - COP">Colombia Pesos – COP</option>
                <option value="CFP Francs - XPF">CFP Francs – XPF</option>
                <option value="Costa Rica Colones - CRC">Costa Rica Colones – CRC</option>
                <option value="Croatia Kuna - HRK">Croatia Kuna – HRK</option>
                
                <option value="Cyprus Pounds - CYP">Cyprus Pounds – CYP</option>
                <option value="Czech Republic Koruny - CZK">Czech Republic Koruny – CZK</option>
                <option value="Denmark Kroner - DKK">Denmark Kroner – DKK</option>
                <option value="Deutsche (Germany) Marks - DEM">Deutsche (Germany) Marks – DEM</option>
                <option value="Dominican Republic Pesos - DOP">Dominican Republic Pesos – DOP</option>
                <option value="Dutch (Netherlands) Guilders - NLG">Dutch (Netherlands) Guilders – NLG</option>
                
                <option value="Eastern Caribbean Dollars - XCD">Eastern Caribbean Dollars – XCD</option>
                <option value="Egypt Pounds - EGP">Egypt Pounds – EGP</option>
                <option value="Estonia Krooni - EEK">Estonia Krooni – EEK</option>
                <option value="Euro - EUR" selected>Euro – EUR</option>
                <option value="Fiji Dollars - FJD">Fiji Dollars – FJD</option>
                <option value="Finland Markkaa - FIM">Finland Markkaa – FIM</option>
                
                <option value="France Francs - FRF*">France Francs – FRF*</option>
                <option value="Germany Deutsche Marks - DEM">Germany Deutsche Marks – DEM</option>
                <option value="Gold Ounces - XAU">Gold Ounces – XAU</option>
                <option value="Greece Drachmae - GRD">Greece Drachmae – GRD</option>
                <option value="Guatemalan Quetzal - GTQ">Guatemalan Quetzal – GTQ</option>
                <option value="Holland (Netherlands) Guilders - NLG">Holland (Netherlands) Guilders – NLG</option>
                <option value="Hong Kong Dollars - HKD">Hong Kong Dollars – HKD</option>
                
                <option value="Hungary Forint - HUF">Hungary Forint – HUF</option>
                <option value="Iceland Kronur - ISK">Iceland Kronur – ISK</option>
                <option value="IMF Special Drawing Right - XDR">IMF Special Drawing Right – XDR</option>
                <option value="India Rupees - INR">India Rupees – INR</option>
                <option value="Indonesia Rupiahs - IDR">Indonesia Rupiahs – IDR</option>
                <option value="Iran Rials - IRR">Iran Rials – IRR</option>
                
                <option value="Iraq Dinars - IQD">Iraq Dinars – IQD</option>
                <option value="Ireland Pounds - IEP*">Ireland Pounds – IEP*</option>
                <option value="Israel New Shekels - ILS">Israel New Shekels – ILS</option>
                <option value="Italy Lire - ITL*">Italy Lire – ITL*</option>
                <option value="Jamaica Dollars - JMD">Jamaica Dollars – JMD</option>
                <option value="Japan Yen - JPY">Japan Yen – JPY</option>
                
                <option value="Jordan Dinars - JOD">Jordan Dinars – JOD</option>
                <option value="Kenya Shillings - KES">Kenya Shillings – KES</option>
                <option value="Korea (South) Won - KRW">Korea (South) Won – KRW</option>
                <option value="Kuwait Dinars - KWD">Kuwait Dinars – KWD</option>
                <option value="Lebanon Pounds - LBP">Lebanon Pounds – LBP</option>
                <option value="Luxembourg Francs - LUF">Luxembourg Francs – LUF</option>
                
                <option value="Malaysia Ringgits - MYR">Malaysia Ringgits – MYR</option>
                <option value="Malta Liri - MTL">Malta Liri – MTL</option>
                <option value="Mauritius Rupees - MUR">Mauritius Rupees – MUR</option>
                <option value="Mexico Pesos - MXN">Mexico Pesos – MXN</option>
                <option value="Morocco Dirhams - MAD">Morocco Dirhams – MAD</option>
                <option value="Netherlands Guilders - NLG">Netherlands Guilders – NLG</option>
                
                <option value="New Zealand Dollars - NZD">New Zealand Dollars – NZD</option>
                <option value="Norway Kroner - NOK">Norway Kroner – NOK</option>
                <option value="Oman Rials - OMR">Oman Rials – OMR</option>
                <option value="Pakistan Rupees - PKR">Pakistan Rupees – PKR</option>
                <option value="Palladium Ounces - XPD">Palladium Ounces – XPD</option>
                <option value="Peru Nuevos Soles - PEN">Peru Nuevos Soles – PEN</option>
                
                <option value="Philippines Pesos - PHP">Philippines Pesos – PHP</option>
                <option value="Platinum Ounces - XPT">Platinum Ounces – XPT</option>
                <option value="Poland Zlotych - PLN">Poland Zlotych – PLN</option>
                <option value="Portugal Escudos - PTE">Portugal Escudos – PTE</option>
                <option value="Qatar Riyals - QAR">Qatar Riyals – QAR</option>
                <option value="Romania New Lei - RON">Romania New Lei – RON</option>
                
                <option value="Romania Lei - ROL">Romania Lei – ROL</option>
                <option value="Russia Rubles - RUB">Russia Rubles – RUB</option>
                <option value="Saudi Arabia Riyals - SAR">Saudi Arabia Riyals – SAR</option>
                <option value="Silver Ounces - XAG">Silver Ounces – XAG</option>
                <option value="Singapore Dollars - SGD">Singapore Dollars – SGD</option>
                <option value="Slovakia Koruny - SKK">Slovakia Koruny – SKK</option>
                
                <option value="Slovenia Tolars - SIT">Slovenia Tolars – SIT</option>
                <option value="South Africa Rand - ZAR">South Africa Rand – ZAR</option>
                <option value="South Korea Won - KRW">South Korea Won – KRW</option>
                <option value="Spain Pesetas - ESP">Spain Pesetas – ESP</option>
                <option value="Special Drawing Rights (IMF) - XDR">Special Drawing Rights (IMF) – XDR</option>
                <option value="Sri Lanka Rupees - LKR">Sri Lanka Rupees – LKR</option>
                
                <option value="Sudan Dinars - SDD">Sudan Dinars – SDD</option>
                <option value="Sweden Kronor - SEK">Sweden Kronor – SEK</option>
                <option value="Switzerland Francs - CHF">Switzerland Francs – CHF</option>
                <option value="Taiwan New Dollars - TWD">Taiwan New Dollars – TWD</option>
                <option value="Thailand Baht - THB">Thailand Baht – THB</option>
                <option value="Trinidad and Tobago Dollars - TTD">Trinidad and Tobago Dollars – TTD</option>
                
                <option value="Tunisia Dinars - TND">Tunisia Dinars – TND</option>
                <option value="Turkey New Lira - TRY">Turkey New Lira – TRY</option>
                <option value="United Arab Emirates Dirhams - AED">United Arab Emirates Dirhams – AED</option>
                <option value="United Kingdom Pounds - GBP">United Kingdom Pounds – GBP</option>
                <option value="United States Dollars - USD">United States Dollars – USD</option>
                <option value="Venezuela Bolivares - VEB">Venezuela Bolivares – VEB</option>
                
                <option value="Vietnam Dong - VND">Vietnam Dong – VND</option>
                <option value="Zambia Kwacha - ZMK">Zambia Kwacha – ZMK</option>
            </select>
            <button type="submit" value="Submit" type="submit">GET paymentMethods</button>
        </form>
        <div ref={paymentContainer} id="dropin-container"></div>
    </Container>
  );
}

function mapStateToProps(reduxState) {
  return {
    checkout: reduxState.checkout
  };
}

export default connect(mapStateToProps, {getPaymentMethods})(Checkout);
