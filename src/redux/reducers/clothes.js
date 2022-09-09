import { createReducer } from "@reduxjs/toolkit";
import {
  fetched,
  changeState,
  changeStateLikeBox,
  changeStateOldOrderBox,
  changeStateRegistration,
  getCategory,
  getIdItem,
  getLike,
  getOrderServer,
  remove,
  removeLike,
  plus,
  minus,
  setServerPost,
  getItem,
  setServerLike,
} from "../actions/actions";

const initialState = {
  posts: [],
  order: [],
  orderServer: [],
  orderLike: [],
  category: [],
  idState: [],
  serverPost: [],
  isOpen: false,
  isOpenLike: false,
  isOpenOldOrder: false,
  isOpenRegistration: false,
  loadingStatus: "loading",
  addClassBuy: "",
  ucerName: "",
  ucerPassword: "",
  ucerName2: "",
  ucerPassword2: "",
};
export const newReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetched, (state, action) => {
      state.loadingStatus = "Pending";
      state.posts = action.payload;
    })
    .addCase(getCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(getIdItem, (state, action) => {
      state.idState = action.payload;
    })
    .addCase(remove, (state, action) => {
      state.order = state.order.filter((s) => s.id !== action.payload.id);
    })
    .addCase(getLike, (state, action) => {
      state.orderLike = [...action.payload]
    })
    .addCase(removeLike, (state, { payload }) => {
      state.orderLike = state.orderLike.filter((s) => s.id !== payload.id);
    })
    .addCase(getOrderServer, (state, { payload }) => {
      state.orderServer = payload;
    })
    .addCase(changeState, (state, { payload }) => {
      state.isOpen = !state.isOpen;
    })
    .addCase(changeStateLikeBox, (state, { payload }) => {
      state.isOpenLike = !state.isOpenLike;
    })
    .addCase(changeStateOldOrderBox, (state, { payload }) => {
      state.isOpenOldOrder = !state.isOpenOldOrder;
    })
    .addCase(changeStateRegistration, (state, { payload }) => {
      state.isOpenRegistration = !state.isOpenRegistration;
    })

    .addCase(plus, (state, { payload }) => {


      const indexOrder = state.orderServer.findIndex(
        (s) => s.id === payload.id
      );
      let newData = state.orderServer.map((val, idx) => {
        if (idx === indexOrder) {
          return {
            ...val,
            quantity: val.quantity + 1,
          };
        } else {
          return {
            ...val,
            quantity: val.quantity,
          };
        }
      });
      state.orderServer = newData;
    })
    .addCase(minus, (state, { payload }) => {
      let index = state.orderServer.findIndex((s) => s.id === payload.id);
      let newMass;
      if (payload.quantity > 1) {
        newMass = state.orderServer.map((vall, idx) => {
          if (idx === index) {
            return {
              ...vall,
              quantity: vall.quantity - 1,
            };
          } else {
            return {
              ...vall,
            };
          }
        });
      } else {
        newMass = state.orderServer.filter((s) => s.id !== payload.id);
      }
      state.orderServer = newMass;
    })
    .addCase(getItem,(state,{payload})=>{
      state.order.push(...state.orderServer)
      let index = state.order.findIndex((s) => s.id === payload.id);
      let newMass;
      if (index < 0) {
        let newOrder = {
          ...payload,
          quantity: 1,
        };
        newMass = [...state.order, newOrder];
      }
       else {
        newMass = state.order.map((vall, idx) => {
          if (idx === index) {
            return {
              ...vall,
              quantity: vall.quantity + 1,
            };
          } else {
            return {
              ...vall,
            };
          }
        });
      }
      state.order.push(...newMass);
    })
    .addCase(setServerPost, (state, { payload }) => {
      const time = new Date();
      let date1 =
        time.getHours() +
        ":" +
        time.getMinutes() +
        " " +
        time.getDate() +
        "." +
        time.getMonth() +
        "." +
        time.getFullYear();

      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, quantity: 1, date: date1 }),
      });
    })
    .addCase(setServerLike,(state,{payload})=>{
      fetch("http://localhost:3000/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, quantity: 1,like:true}),
      });
    })
    
});

// function clothes(state = initialState, { type, payload }) {

//   switch (type) {
//     case "SET_UCER_INFO_TO_SERVER": {
//       fetch("http://localhost:3000/ucerInfo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ucerName: state.ucerName2,
//           ucerPassword: state.ucerPassword2,
//         }),
//       });

//       return {
//         ...state,
//       };
//     }
//     case "GET_UCER_NAME": {
//       return {
//         ...state,
//         ucerName: payload,
//       };
//     }
//     case "GET_UCER_PASSWORD": {
//       return {
//         ...state,
//         ucerPassword: payload,
//       };
//     }
//     case "GET_UCER_NAME2": {
//       return {
//         ...state,
//         ucerName2: state.ucerName,
//       };
//     }
//     case "GET_UCER_PASSWORD2": {
//       return {
//         ...state,
//         ucerPassword2: state.ucerPassword,
//       };
//     }
//     case "FETCHING":
//       return {
//         ...state,
//         loadingStatus: "loading",
//       };

//     case "SERVER_POST": {
//       let newMass = state.order.map((item, idx) => {
//         return {
//           ...item,
//           idx: idx,
//           date: payload,
//         };
//       });
//       return {
//         ...state,
//         serverPost: [...state.serverPost, ...newMass],
//       };
//     }
//     case "SET_SERVER_POST": {
//       state.serverPost.forEach((item) => {
//         fetch("http://localhost:3000/posts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(item),
//         });
//       });

//       return {
//         ...state,
//       };
//     }
//     default:{
//       return state;
//     }
//   }
// }
// export default clothes;

// case "FETCHED":
//   return {
//     ...state,
//     loadingStatus: "Pending",
//     posts: payload,
//   };
// case "GETCATEGORY":
//   return {
//     ...state,
//     category: payload,
//   };
// case "GET_ID_ITEM": {
//   return {
//     ...state,
//     idState: payload,
//   };
// }
// case "GET_ITEM": {
//   let index = state.order.findIndex((s) => s.id === payload.id);
//   let newMass;
//   if (index < 0) {
//     let newOrder = {
//       ...payload,
//       quantity: 1,
//     };
//     newMass = [...state.order, newOrder];
//   } else {
//     newMass = state.order.map((vall, idx) => {
//       if (idx === index) {
//         return {
//           ...vall,
//           quantity: vall.quantity + 1,
//         };
//       } else {
//         return {
//           ...vall,
//         };
//       }
//     });
//   }

//   return {
//     ...state,
//     order: newMass,
//   };
// }
// case "PLUS": {
//   const indexOrder = state.order.findIndex((s) => s.id === payload.id);
//   let newData = state.order.map((val, idx) => {
//     if (idx === indexOrder) {
//       return {
//         ...val,
//         quantity: val.quantity + 1,
//       };
//     } else {
//       return {
//         ...val,
//         quantity: val.quantity,
//       };
//     }
//   });

//   return {
//     ...state,
//     order: newData,
//   };
// }

// case "MINUS": {
//   let index = state.order.findIndex((s) => s.id === payload.id);
//   let newMass;
//   if (payload.quantity > 1) {
//     newMass = state.order.map((vall, idx) => {
//       if (idx === index) {
//         return {
//           ...vall,
//           quantity: vall.quantity - 1,
//         };
//       } else {
//         return {
//           ...vall,
//         };
//       }
//     });
//   } else {
//     newMass = state.order.filter((s) => s.id !== payload.id);
//   }
//   return {
//     ...state,
//     order: newMass,
//   };
// }
// case "REMOVE": {
//   let newMass = state.order.filter((s) => s.id !== payload.id);

//   return {
//     ...state,
//     order: newMass,
//   };
// }
// case "GET_LIKE": {
//   return {
//     ...state,
//     orderLike: [...state.orderLike, payload],
//   };
// }

// case "REMOVE_LIKE": {
//   let newMass = state.orderLike.filter((s) => s.id !== payload.id);

//   return {
//     ...state,
//     orderLike: newMass,
//   };
// }
// case "GETORDERSERVER": {
//   return {
//     ...state,
//     orderServer: payload,
//   };
// }
// case "CHANGE_STATE":
//   return {
//     ...state,
//     isOpen: !state.isOpen,
//   };
// case "CHANGE_STATE_Like_Box":
//   return {
//     ...state,
//     isOpenLike: !state.isOpenLike,
//   };
// case "CHANGE_STATE_OLDORDER_BOX": {
//   return {
//     ...state,
//     isOpenOldOrder: !state.isOpenOldOrder,
//   };
// }
// case "CHANGE_STATE_REGISTRATION":
//   return {
//     ...state,
//     isOpenRegistration: !state.isOpenRegistration,
//   };
