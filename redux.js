//! Catatan :
// store (store ini sebagai tempat penyimpanan apabila ada perubahan state dan membutuhkan reducer sebagai parameternya)
// reducer (reducer atau task list ini merupakan sebuah func yg membutuhkan 2 params yaitu state dan action)
// dispatch / action (menentukan reducer apa yang akan dipanggil)
// subscription (memberitahu apabila ada perubahan pada store)

const redux = require("redux");

const initialState = {
  name: "",
  age: 0,
};

// reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_NAME":
      return {
        ...state,
        name: state.name + action.newName,
      };
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      return state;
  }
};

// store
const store = redux.legacy_createStore(rootReducer);
console.log("initial store", store.getState());

// subscription
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch({ type: "INSERT_NAME", newName: "M KEVIN" });
store.dispatch({ type: "ADD_AGE" });
console.log("hasil akhir", store.getState());
