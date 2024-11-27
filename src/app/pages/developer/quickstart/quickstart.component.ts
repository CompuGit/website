import { Component} from '@angular/core';
import { MainComponent } from '../../../components/main/main.component';
import { CodeHighlightComponent } from '../../../components/code-highlight/code-highlight.component';
import { OnPageNavigationComponent } from '../../../components/on-page-navigation/on-page-navigation.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  imports: [MainComponent, CodeHighlightComponent, OnPageNavigationComponent, MatTabsModule],
  templateUrl: './quickstart.component.html',
  styleUrl: './quickstart.component.scss'
})

export class QuickstartComponent {
  hasOnPageAnchors = false;
  anchors = [
    {
      name: "Get Started",
      href: "/developer/quickstart#get_started"
    },
    {
      name: "Sandbox",
      href: "/developer/quickstart#sandbox"
    },
    {
      name: "Run In Postman",
      href: "/developer/quickstart#run_in_postman"
    },
    {
      name: "Authentication",
      href: "/developer/quickstart#authentication"
    },
    {
      name: "Message Structure",
      href: "/developer/quickstart#message_structure"
    },
    {
      name: "Http Request Header",
      href: "/developer/quickstart#http_req_header"
    },
    {
      name: "Http Request Data Structure",
      href: "/developer/quickstart#http_req"
    },
  ];


  auth_http = `POST /api/user/inq HTTP/2

Host: sandbox.toucanus.net

Accept: application/json, text/plain, */*

Content-Type: application/json; charset=utf-8

X-API-Key: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYXV0YW1AdG91Y2FuIiwiaWF0IjoxNjI2MDk3NzcxLCJle

Content-Length: 83

Origin: https://sandbox.toucanus.net

DNT: 1

Connection: keep-alive

Referer: https://sandbox.toucanus.net/

TE: Trailers`;

  http_req_header = `Authorization use X-API-Key tag for authentication

Content Type application/json

Request Method POST`;

  http_request = {
    "messageID": "QUERY",
    "version": null,
    "requestType": null,
    "pageSize": null,
    "userData": null,
    "pageNo": null,
    "token": null,
    "object": {
        "dccMarkupAmount": {
            "code": "INR"
        },
        "dccIncomingAmount": {
            "code": "INR"
        },
        "dccMarkupPercentage": {
            "code": "INR"
        },
        "tranAmtInMerchantCurrency": {
            "code": "INR",
            "value": "31.00"
        },
        "offerDiscountAmount": {
            "code": "INR"
        },
        "transactionamount": {
            "code": "INR",
            "value": "31.00"
        },
        "de52base64": "Yav6WxNk9lsImozNSXUw7ULVuycNGoZEfaDxxtCDbmEIsp3d65+TxS2E2JHUVqy8tc+06n6tdhFKoeO/QUC+GyIp6hHNfltUbSjbLGxN8X00SG9mo6zlH52yyguyGHT46RNhZwRFZs4i8h5G+AJxkRxGvLHtzFPHqECqyPm32lhfgNGefr3UtF8mAVF+au9yX5wLYiyu0R1V1JP30QU+/1c6bvOeMhXwZVm811bn0RCAgauHLwrU4qXgaQzuRIscOnq7S0w05ZpEZlaACzqppQ3ggTaNuhdSNBblODokLyNVu+J8TeZxKc22wepPwSE+neVmdfR9x66umcdoeDWeDw==",
        "authCode": "adc123",
        "cashbackAmount": null,
        "feeAmount": null,
        "emiMarginAmount": {
            "code": null,
            "value": null
        },
        "emiAmount": {
            "code": null,
            "value": null
        },
        "creditOrDebitEnum": "DEBIT",
        "SelectCardType": "MAG_CARD",
        "schemeCode": null,
        "panEntryMode": "EBT_PANEntry_90_B",
        "pinEntryMode": "EBT_PINEntry_0",
        "posConditionCode": "EBT_POSCondCode_00",
        "de3FromAccount": "98",
        "de3ToAccount": "00",
        "de35": "JVdc9qWsGgz2bAausERzHbpNn2bICc3rkxXvLYRCDvGR1A7BmS6zcYYjVOHIoPX58tzBARFNFvbNo95O1Zp6r3qaAZQ4TrQgNavsT31zncW4z6x5DQ9x3wTD8CRXoVg5EbwBSdmrEIlv9diGrJLK39OYSMD2DxL+pUp/sw9PL+NeTkGsynSp7PwQ1OsozZOUXUZZcljUWjtvDRXhc834WoPmYWUVL9gDi1dRUO5kZIK4ulETI6L+1+bHDCD7WIQNZY5voN4Obkq4fJaoRBXFbRmJhh3E+81P9X657hJTW+Wg/7qH73hH1q05hg/mLy86FEXA0bMYZFCJz5/RVOWXnw==",
        "terminalNumber": "9080098m",
        "merchantNumber": "9080098",
        "transactionCurrency": "INR",
        "mcc": "5411",
        "countryCode": "INR",
        "cardDataInputCapability": null,
        "terminalType": null,
        "pinCaptureCapability": null,
        "terminalOperatingEnvironment": null,
        "partialAuth": null,
        "invoiceNumber": "20230713121848",
        "encryptionTechniqueIndicator": "05",
        "messageType": "AUTH",
        "messageSubType": "NORMAL_AUTH",
        "saleDate": "2023-07-13",
        "saleTime": "12:18:48",
        "cardholderAuthenticationMethod": null,
        "mOTOEcomPaymnt": null,
        "specialCondInd": null,
        "cardKeyIndex": "64af9e5020c1635afd8fa91b",
        "cardNumber": "nFS//upmCHa+0PrphWGw46CzWe5Pzkz4AkuLLhp3vE50alG2ueN3Ny39kZg16WZY9IhPSHtXMw/pgUXmhNGLesBYNTUNjhM9SMcFqI1XAv3ewfp7teald8tu3gU8ZxBSeK8wg+mvzdn633ojbTjZCGAw/9efTj+js3p4HHuQwiZ7UeCHwwkDlD3Y13bMlPuI6weDAujPOZfztiKQke/ubvT1Pp1scvYRndUo4H4nmjiZAOJ5ss3O4cX4fe7HMuvt3ZICn5WSnQTmk/D83f9r3ITcgOr1t5ouEwHEGAYMf4hi5qLd81mAQCnkiwKxk6oTEHyDV8Oqs3WhXBgU9HKjwA==",
        "cardExpiry": "UN2MSZ7ZW/THZb9TUmPu4dqLszeCBEDEINQBAtLQtoeOE7Hk2kL2uYSjMtBT7ifzw2Mm8KDivUvbwPdSfo1npYlrkzjq/LtsJO6xJB2e2kCKnCHstsW6aa3FfcBjDwhRXwYxQn+BKrg+SSivHKLRruIH6TEoi/frpeFE9S7MnjA/aIYDvNyg9huylDMf5nQ6+6D6jfEdu0qQ2meT3fXcYhZaP/D/n2lEwJ7WgTbWyhOTiDVyvrgXtRF701QOkbRpt2xGTjJJ1Ntapj7//ThpD8pSPlsLIhrDQggNdJSKvwbHTx2BmR29ZHgj+xboGx9/PDqOITVgsXP34aQ2Ar78XA==",
        "cardDataOutputCapability": null,
        "cardholderAuthenticationCapability": null,
        "terminalDataOutputCapability": null,
        "carddataInputMode": "2",
        "cardholderPresent": "1",
        "cardPresentData": "1",
        "cardholderAuthenticationEntity": null,
        "cvc2": null,
        "last4digit": null,
        "cardBin": null,
        "originalInvoice": "",
        "originalRRN": "",
        "refundDescription": null,
        "refundReason": null
    },
    "sort": null
}
}
