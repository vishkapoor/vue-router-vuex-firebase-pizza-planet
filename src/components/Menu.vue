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
                <tr v-if="hasOrderPlaced">
                    <th colspan="3">
                        <div class="alert alert-success">
                            Thank you, your order has been placed :)
                        </div>
                        {{ orders }}
                    </th>
                </tr>
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
                                @click="decreaseQuantity(item)"
                                class="btn btn-sm btn-danger">-</button>
                            <strong>{{ item.quantity}}</strong>
                            <button
                                type="button"
                                @click="increaseQuantity(item)"
                                class="btn btn-sm btn-success">+</button>
                        </td>
                        <td> {{ item.name }} {{ item.size }}" </td>
                        <td> &pound;{{ (item.price * item.quantity).toFixed(2)}}  </td>
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
                            <button
                                @click="addOrder"
                                type="button" class="btn btn-success btn-block">
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
import { mapGetters } from 'vuex';
import { dbOrders } from '../firebaseConfig';

export default {
  name: 'Menu',
  data() {
    return {
        basket: [],
        hasOrderPlaced: false,
    };
  },
  methods: {
    addOrder() {
        //this.$store.dispatch('addOrder', this.basket);
        dbOrders.push(this.basket);
        this.basket = [];
        this.hasOrderPlaced = true;
    },
    decreaseQuantity(item) {
        item.quantity--;
        if(parseFloat(item.quantity) <=0) {
            this.removeFromBasket(item);
        }
    },
    increaseQuantity(item) {
        item.quantity++;
    },
    removeFromBasket(item) {
        this.basket.splice(
            this.basket.indexOf(item),
            1
        );
    },
    addToBasket(item, option) {
        this.hasOrderPlaced = false;
        this.basket.push({
            name: item.name,
            price: option.price,
            size: option.size,
            quantity: item.quantity,
        });
    }
  },
  computed: {
    ...mapGetters({
        items: 'getItems',
    }),
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
