export default {
    items: [
        {
            name: 'Margherita',
            description: 'Tomato based pizza',
            quantity: 1,
            options: [
                { size: 6, price: 6.95 },
                { size: 9, price: 8.95 },
                { size: 12, price: 9.99 },
            ],
        },
        {
            name: 'Peperoni',
            description: 'Peperoni pizza',
            quantity: 1,
            options: [
                { size: 6, price: 7.95 },
                { size: 9, price: 9.95 },
                { size: 12, price: 10.99 },
            ],
        },
        {
            name: 'Spicy Paneer',
            description: 'Spicy Paneer pizza',
            quantity: 1,
            options: [
                { size: 6, price: 8.95 },
                { size: 9, price: 9.95 },
                { size: 12, price: 12.99 },
            ],
        }
    ],
    orders: [],
    user: null,
}