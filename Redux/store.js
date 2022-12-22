// const incCountAction = { type: "INC_COUNT", payload: "1" };

// const addTodoAction = { 
//     type: "ADD_TODO", 
//     payload: { id:1, title: "Learn Redux", status: false },
//  }; // Fixed , payload optionl


//  const updateTodoAction = { 
//     type: "UPDATE_TODO", 
//     payload: { id: 3 , title: "Learn React Redux", status: false },
//  }; // Fixed , payload optionl

// const { createStore } = require("redux");
import { createStore } from "redux"
import { INC_COUNT, DEC_COUNT } from "./actionTypes.js";
import { reducer } from "./reducer.js";
import { incCount } from "./actions.js";
// class Store {
//     constructor(reducer, init){
//         this.reducer = reducer;
//         this.state = init;
//     }

//     getState() {
//         return this.state;
//     }

//     dispatch(action){
//         this.state = this.reducer(this.state, action);
//     }

// }


// pure function
// Fixed 



// const reducer = (state, action) => {
    // if (action.type === "INC_COUNT") { 
    //     return { ...state , count: state.count + action.payload };
    // }
    // return state;


const init = { count : 0, todo: [] };

export const store = createStore(reducer, init); //fixed


// console.log(store.getState());

// store.dispatch(incCount(1));
// store.dispatch(incCount(10));

// // store.dispatch({ type: INC_COUNT, payload: 1 });
// // store.dispatch({ type: INC_COUNT, payload: 10 });

// console.log(store.getState());

// store.dispatch({ type: DEC_COUNT, payload: 1 });

// console.log(store.getState());

// store.dispatch({
//     type: "ADD_TODO",
//     payload: { title: "Learn Redux", status: false},
// });

// store.dispatch({
//     type: "ADD_TODO",
//     payload: { title: "Learn React Redux", status: false},
// });

// console.log(store.getState());

// store.dispatch({ type: INC_COUNT, payload: 10 });
