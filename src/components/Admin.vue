<template>
<div>
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
                    <tr>
                        <th colspan="4">
                            Order Number: 1
                        </th>
                    </tr>
                    <tr>
                        <td> Margheria </td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm">x</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-md-12">
            <h3>Current Orders</h3>
            <table class="table table-sm">
                <thead class="default">
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="4">Order Number: 1
                            <span class="pull-right">
                                <button class="btn btn-sm btn-outline-danger">x</button>
                            </span>
                        </th>
                    </tr>
                      <tr>
                        <td> Margheria </td>
                        <td>9"</td>
                        <td>1</td>
                        <td>6.95</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <login></login>
        </div>
    </div>
</div>
</template>
<script>
import CreatePizza from './CreatePizza.vue';
import Login from './Login.vue';
export default {
  name: 'Admin',
  components: {
    CreatePizza,
    Login
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="css" scoped>
</style>
