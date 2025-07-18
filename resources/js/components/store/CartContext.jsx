import { createContext, useReducer } from "react"

const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(item)=>{}
})

let existItem=null;
let updatedItems=[];

function cartReducer(state,action){
    if(action.type=="ADD_ITEM"){
        existItem=state.items.findIndex((item)=>item.id==action.item.id)
            const updatedItems=[...state.items];
            if(existItem==-1){
                const newItem={...action.item,qty:1}
                updatedItems.push(newItem);
            }else{
                updatedItems[existItem].qty++;

            }  
            
      
            return {...state,items:updatedItems}
        }






    if(action.type=="REMOVE_ITEM"){
        
        existItem=state.items.findIndex((item)=>item.id==action.item.id)
        const updatedItems=[...state.items];
        if(updatedItems[existItem].qty > 1){
            updatedItems[existItem].qty--
        }else{
            updatedItems.splice(existItem,1)
        }
        
        console.log(updatedItems);

        return {...state,items:updatedItems};
    }


    return state;
}

export function CartContextProvider({children}){
    const [cart,dispatchAction] = useReducer(cartReducer,{items:[]});

    function addItem(item){

        dispatchAction({type:"ADD_ITEM",item})
    }

    function removeItem(item){
        dispatchAction({type:"REMOVE_ITEM",item})
    }


    const cartContext = {
        items:cart.items,
        addItem:addItem,
        removeItem:removeItem
    }

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>

}

export default CartContext;