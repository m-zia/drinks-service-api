//default parameter used
export const getCoffee = (name = 'Latte') => {
    return {
        drinkType: 'Coffee',
        name,
    };
};