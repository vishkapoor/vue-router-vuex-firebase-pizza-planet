<template>
<div class="row">
    <div class="col-sm-12 col-md-6">
        <table class="table table-hover">
            <thead class="thead-default">
                <tr>
                   <th>Size</th>
                   <th>Price</th>
                   <th>Add To Basket</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in items">
                    <tr>
                        <td colspan="3">
                            <p><strong>{{ item.name }}</strong></p>
                            <p>{{ item.description }}</p>
                        </td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td> {{ option.size }}"</td>
                        <td> &pound;{{ option.price }}</td>
                        <td>
                            <button
                                type="button"
                                @click="addToBasket(item, option)"
                                class="btn btn-sm btn-outline-success">+</button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
    <div class="col-sm-12 col-md-6">
        <table class="table">
            <thead class="thead-default">
                <tr>
                   <th>Quantity</th>
                   <th>Item</th>
                   <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!basket.length">
                    <tr>
                        <td colspan="3">No item(s) in the basket</td>
                    </tr>
                </template>
                <template v-for="item in basket">
                    <tr>
                        <td>
                            <button
                                type="button"
                                @click=""
                                class="btn btn-sm btn-danger">-</button>
                            <strong>{{ item.quantity}}</strong>
                            <button
                                type="button"
                                @click=""
                                class="btn btn-sm btn-success">+</button>
                        </td>
                        <td> {{ item.name }} {{ item.size }}" </td>
                        <td> &pound;{{ item.price * item.quantity }}  </td>
                    </tr>
                </template>
                <template v-if="basket.length">
                    <tr>
                        <td colspan="3">
                            Order total: &pound;{{ basketTotal }}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <button type="button" class="btn btn-success btn-block">
                                Place Order
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
        basket: [],
        items: [
            {
                name: 'Margherita',
                description: 'Tomato based pizza',
                options: [
                    { size: 6, price: 6.95 },
                    { size: 9, price: 8.95 },
                    { size: 12, price: 9.99 },
                ],
            },
            {
                name: 'Peperoni',
                description: 'Peperoni pizza',
                options: [
                    { size: 6, price: 7.95 },
                    { size: 9, price: 9.95 },
                    { size: 12, price: 10.99 },
                ],
            },
            {
                name: 'Spicy Paneer',
                description: 'Spicy Paneer pizza',
                options: [
                    { size: 6, price: 8.95 },
                    { size: 9, price: 9.95 },
                    { size: 12, price: 12.99 },
                ],
            }
        ]
    };
  },
  methods: {
    addToBasket(item, option) {
        this.basket.push({
            name: item.name,
            price: option.price,
            size: option.size,
            quantity: 1
        });
    }
  },
  computed: {
    basketTotal() {
        let total = 0;
        for(let x = 0; x < this.basket.length; x++) {
            total = parseFloat(total)
                + ( parseInt(this.basket[x].quantity) * parseFloat(this.basket[x].price));
        }

        return total.toFixed(2);
    }
  }
};
</script>
<style lang="css" scoped>
</style>
