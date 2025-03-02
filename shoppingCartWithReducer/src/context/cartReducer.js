export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return state.find(item => item.id === action.payload.id)
                ? state.map(item =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                )
                : [...state, { ...action.payload, qty: 1 }];

        case "INCREASE_QUANTITY":
            return state.map(item =>
                item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            );

        case "DECREASE_QUANTITY":
            return state.map(item =>
                item.id === action.payload && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );

        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
};
