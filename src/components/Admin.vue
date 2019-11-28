<template>
<div class="container">
    <section v-if="user">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <create-pizza></create-pizza>
            </div>
            <div class="col-md-6 col-sm-12">
                <h3> Menu:</h3>
                <table class="table table-hover">
                    <thead class="default">
                        <tr>
                            <th>Item(s)</th>
                            <th>Remove From Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(item, index) in items">
                            <tr>
                                <td> {{ item.name }} </td>
                                <td>
                                    <button
                                        @click="removeMenuItem(item['.key'])"
                                        class="btn btn-outline-danger btn-sm">x</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <h3>Current Orders: {{ numberOfOrders }}</h3>
                <table class="table table-sm table-bordered" v-for="(order, index) in orders">
                    <thead class="default">
                        <tr>
                            <th colspan="4">
                                Order Number: {{ index + 1 }}
                                <span class="pull-right">
                                    <button
                                    @click="removeOrder(order['.key'])"
                                    class="btn btn-sm btn-outline-danger">x</button>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tr v-for="item in order">
                            <td> {{ item.name }} </td>
                            <td> {{ item.size }} </td>
                            <td> {{ item.quantity }} </td>
                            <td> {{ item.price }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import CreatePizza from './CreatePizza.vue';
import Login from './Login.vue';
import { mapGetters } from 'vuex';
import { dbMenu, dbOrders } from '../firebaseConfig';

export default {
  name: 'Admin',
  components: {
    CreatePizza,
    Login
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
        if(!vm.user) {
            vm.$router.push({name: 'login'});
            return false;
        }
        return true;
    });
  },
  mounted() {
    console.log(this.orders);
  },
  data() {
    return {

    };
  },
  methods: {
    removeMenuItem(key) {
        let yn = confirm('Are you sure you want to perform this action?');
        if(!yn) { return; }
        dbMenu.child(key).remove();
        alert('Menu item removed successfully.')
    },
    removeOrder(key) {
      let yn = confirm('Are you sure you want to perform this action?');
        if(!yn) { return; }
        dbOrders.child(key).remove();
        alert('Order removed successfully.')
    }
  },
  computed: {
    ...mapGetters({
        numberOfOrders: 'numberOfOrders',
        items: 'getItems',
        orders: 'getOrders',
        user: 'getUser'
    }),
  }
};
</script>
<style lang="css" scoped>
</style>
