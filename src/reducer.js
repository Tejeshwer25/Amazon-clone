// knows what to do when we update basket
export const initialState = {
    basket: [],
};


// Selector Professional Practice
// for loop to increment, tally and return total
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: [],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }

            return {
                ...state,
                basket: newBasket
            }
            // return {
            //     ...state, 
                // basket: state.basket.filter(item => item.id !==action.id)    This code is wrong as it removes all similar items rather than just one
            // };

        case "SET_USER" :
            return {
                ...state,
                user: action.user
            }
            

        default:
            return state;
    }
};

export default reducer;