
const initialState={
  products:[],
  cart:[],
  order:[]
}

const Reducer =(state=initialState,action)=>{
  switch(action.type){
    case "GET" :
       return {...state,products:action.payload}

       case "CART" :
       return {...state,cart:[...state.cart,action.payload]}

       case "ORDER" :
        return {...state,order:[...state.order,action.payload]}

        case "DELETE":
          let delete1 = state.cart.filter(e=> e.id!=action.payload);
           return {...state, cart:delete1};

    default:
     return state;
  }
} 

export default Reducer;
