/* eslint-disable default-case */
//Define all application statuses

export const initialState={
    basket: [],
}

//Selector 

const reducer = (state,action) =>{
    switch(action.type){
        case  "add_To_Basket" :
            return {
            ...state,
            basket: [...state.basket,action.item ],
        }
    }
}

export default reducer;