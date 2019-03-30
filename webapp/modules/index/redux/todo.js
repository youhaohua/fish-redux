import {createStore} from "redux"
const initState={
check:"空"

}

export function reduce(state=initState, action){
	switch(action.type){
		case "select_data":
			return {...state,check:action.payload}
		default:
			return state
	}
} 



export const store=createStore(reduce);


/* export const init=store.getState(); */


/* store.subscribe(()=>{}) */