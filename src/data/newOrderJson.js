import { lion } from "../media/assets";
import { chuck } from "../media/assets";

export const newOrder = {
  groups: [
    {
      id: 1,
      index: "01",
      name: "burgery",
      products: [
        {
          index: "0101",
          itemName: "burger halloumi",
          price: 13.99,
          quantity: 1,
          size: 400,
          unit: "g",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9721,
              name: "bułka sezam",
              quantity: 1,
            },
            {
              id: 8801,
              name: "ser halloumi",
              quantity: 3,
            },
            {
              id: 9651,
              name: "salata",
              quantity: 2,
            },
            {
              id: 8293,
              name: "suszone pomidory",
              quantity: 2,
            },
          ],
        },
        {
          index: "0102",
          itemName: "burger vege",
          price: 14.99,
          quantity: 1,
          size: 350,
          unit: "g",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9721,
              name: "bułka sezam",
              quantity: 1,
            },
            {
              id: 843,
              name: "kotlet sojowy",
              quantity: 2,
            },
            {
              id: 9651,
              name: "salata",
              quantity: 2,
            },
            {
              id: 8293,
              name: "suszone pomidory",
              quantity: 2,
            },
          ],
        },
        {
          index: "0103",
          itemName: "burger konkret",
          price: 16.99,
          quantity: 1,
          size: 500,
          unit: "g",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9721,
              name: "bułka sezam",
              quantity: 1,
            },
            {
              id: 388,
              name: "szarpana wieprzowina",
              quantity: 2,
            },
            {
              id: 9651,
              name: "salata",
              quantity: 1,
            },
            {
              id: 8293,
              name: "suszone pomidory",
              quantity: 1,
            },
          ],
        },
        {
          index: "0104",
          itemName: "burger go",
          price: 15.99,
          quantity: 1,
          size: 450,
          unit: "g",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9721,
              name: "bułka sezam",
              quantity: 1,
            },
            {
              id: 8871,
              name: "wołowina szarpana",
              quantity: 2,
            },
            {
              id: 9651,
              name: "salata",
              quantity: 1,
            },
            {
              id: 8293,
              name: "suszone pomidory",
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      index: "02",
      name: "zimne napoje",
      products: [
        {
          index: "0201",
          itemName: "coca-cola",
          price: 5.99,
          quantity: 1,
          size: 0.5,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9622,
              name: "coca-cola",
              quantity: 0.5,
            },
            {
              id: 4719,
              name: "kubek napoje zimne",
              quantity: 1,
            },
            {
              id: 9256,
              name: "pokrywka napoje zimne",
              quantity: 1,
            },
            {
              id: 5641,
              name: "słomka papierowa",
              quantity: 1,
            },
          ],
        },
        {
          index: "0202",
          itemName: "coca-cola",
          price: 4.99,
          quantity: 1,
          size: 0.3,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9622,
              name: "coca-cola",
              quantity: 0.3,
            },
            {
              id: 4719,
              name: "kubek napoje zimne",
              quantity: 1,
            },
            {
              id: 9256,
              name: "pokrywka napoje zimne",
              quantity: 1,
            },
            {
              id: 5641,
              name: "słomka papierowa",
              quantity: 1,
            },
          ],
        },
        {
          index: "0203",
          itemName: "coca-cola",
          price: 6.99,
          quantity: 1,
          size: 0.7,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 9622,
              name: "coca-cola",
              quantity: 0.7,
            },
            {
              id: 4719,
              name: "kubek napoje zimne",
              quantity: 1,
            },
            {
              id: 9256,
              name: "pokrywka napoje zimne",
              quantity: 1,
            },
            {
              id: 5641,
              name: "słomka papierowa",
              quantity: 1,
            },
          ],
        },
        {
          index: "0204",
          itemName: "pepsi-cola",
          price: 5.99,
          quantity: 1,
          size: 0.5,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 5577,
              name: "pepsi-cola",
              quantity: 0.5,
            },
            {
              id: 4719,
              name: "kubek napoje zimne",
              quantity: 1,
            },
            {
              id: 9256,
              name: "pokrywka napoje zimne",
              quantity: 1,
            },
            {
              id: 5641,
              name: "słomka papierowa",
              quantity: 1,
            },
          ],
        },
        {
          index: "0205",
          itemName: "pepsi-cola",
          price: 4.99,
          quantity: 1,
          size: 0.3,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 5577,
              name: "pepsi-cola",
              quantity: 0.3,
            },
            {
              id: 4719,
              name: "kubek napoje zimne",
              quantity: 1,
            },
            {
              id: 9256,
              name: "pokrywka napoje zimne",
              quantity: 1,
            },
            {
              id: 5641,
              name: "słomka papierowa",
              quantity: 1,
            },
          ],
        },
        {
          index: "0206",
          itemName: "pepsi-cola",
          price: 6.99,
          quantity: 1,
          size: 0.7,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 5577,
              name: "coca-cola",
              quantity: 0.7,
            },
            {
              id: 4719,
              name: "kubek napoje zimne",
              quantity: 1,
            },
            {
              id: 9256,
              name: "pokrywka napoje zimne",
              quantity: 1,
            },
            {
              id: 5641,
              name: "słomka papierowa",
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      index: "03",
      name: "kawa / herbata",
      products: [
        {
          index: "0301",
          itemName: "espresso",
          price: 3.99,
          quantity: 1,
          size: 0.07,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 6615,
              name: "kawa ziarnista",
              quantity: 0.07,
            },
            {
              id: 4718,
              name: "kubek napoje gorące",
              quantity: 1,
            },
            {
              id: 8586,
              name: "pokrywka napoje gorące",
              quantity: 1,
            },
          ],
        },
        {
          index: "0302",
          itemName: "doppio",
          price: 6.99,
          quantity: 1,
          size: 0.14,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 6615,
              name: "kawa ziarnista",
              quantity: 0.14,
            },
            {
              id: 4718,
              name: "kubek napoje gorące",
              quantity: 1,
            },
            {
              id: 8586,
              name: "pokrywka napoje gorące",
              quantity: 1,
            },
          ],
        },
        {
          index: "0303",
          itemName: "cappucino",
          price: 8.99,
          quantity: 1,
          size: 0.24,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 6615,
              name: "kawa ziarnista",
              quantity: 0.24,
            },
            {
              id: 4718,
              name: "kubek napoje gorące",
              quantity: 1,
            },
            {
              id: 8586,
              name: "pokrywka napoje gorące",
              quantity: 1,
            },
          ],
        },
        {
          index: "0304",
          itemName: "english breakfast",
          price: 4.99,
          quantity: 1,
          size: 0.24,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 901,
              name: "herbata EB",
              quantity: 0.24,
            },
            {
              id: 4718,
              name: "kubek napoje gorące",
              quantity: 1,
            },
            {
              id: 8586,
              name: "pokrywka napoje gorące",
              quantity: 1,
            },
          ],
        },
        {
          index: "0305",
          itemName: "earl grey",
          price: 4.99,
          quantity: 1,
          size: 0.24,
          unit: "l",
          readyToPrepare: false,
          ingredients: [
            {
              id: 6595,
              name: "herbata EG",
              quantity: 0.24,
            },
            {
              id: 4718,
              name: "kubek napoje gorące",
              quantity: 1,
            },
            {
              id: 8586,
              name: "pokrywka napoje gorące",
              quantity: 1,
            },
          ],
        },
      ],
    },
  ],
  // rightsidebarViewOpenTime: null,
  // productViewOpenTime: null,
  chosenGroup: null,
  newOrderSummary: [],
  orders: [
  //   {
  //     "number": "001",
  //     "status": "notReady",
  //     "complete": false,
  //     "profiles": [
  //       {
  //         profileName: 'tiger',
  //         isActive: false,
  //         url: tiger
  //       },
  //       {
  //         profileName: 'chuck',
  //         isActive: false,
  //         url: chuck
  //       }
  //     ],  
  //     "orderItems": [
  //         {
  //             "index": "0101",
  //             "complete": false,
  //             "item": "burger halloumi",
  //             "quantity": "1",
  //             "size": "400",
  //             "unit": "g"
  //         },
  //         {
  //             "index": "0102",
  //             "complete": false,
  //             "item": "burger halloumi",
  //             "quantity": "1",
  //             "size": "400",
  //             "unit": "g"
  //         },
  //     ]
  // }
  ],
  totalPrice: 0,
  showOrderSummary: false,
  // productsToManage: null,
  // readyToPrepare: false,
  ingredientsToReserve: [],
  profiles: [
    {
      profileName: 'lion',
      isActive: false,
      url: lion
    },
    {
      profileName: 'chuck',
      isActive: false,
      url: chuck
    }
  ]
};
