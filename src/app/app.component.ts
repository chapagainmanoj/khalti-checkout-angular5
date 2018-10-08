import { Component, OnInit } from '@angular/core';

import * as KhaltiCheckout from 'khalti-web';

// var KhaltiCheckout = require("khalti-web");


console.log(KhaltiCheckout)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // constructor() { }

  ngOnInit() {

    let config = {
      // replace this key with yours
      "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
      "productIdentity": "1234567890",
      "productName": "Drogon",
      "productUrl": "http://gameofthrones.com/buy/Dragons",
      "eventHandler": {
          onSuccess (payload) {
              // hit merchant api for initiating verfication
              console.log(payload);
          },
          // onError handler is optional
          onError (error) {
              // handle errors
              console.log(error);
          },
          onClose () {
              console.log('widget is closing');
          }
      }
    };

    let checkout = new KhaltiCheckout(config);
    console.log(checkout)
    let btn = document.getElementById("khalti-btn");
    console.log(btn)
    btn.onclick = function () {
        checkout.show({amount: 1000});
    }
  }

}
