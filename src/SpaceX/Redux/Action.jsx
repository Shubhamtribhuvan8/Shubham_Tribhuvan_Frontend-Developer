
export  function Action(dispatch,payload) {
 dispatch({
    type:"GET",
    payload:payload
 })
}


export function ActionCart(dispatch,payload) {
   dispatch({
      type:"CART",
      payload:payload
   })
  }

  export function ActionOrder(dispatch,payload) {
   dispatch({
      type:"ORDER",
      payload:payload
   })
  }

  export function ActionDelete(dispatch,payload) {
   dispatch({
      type:"DELETE",
      payload:payload
   })
  }
  