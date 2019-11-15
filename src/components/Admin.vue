<template>
<div class="row">
    <div class="col-md-6 col-sm-12">

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
                    <td> Margheria </td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger">
                            x
                        </button>
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
                        <spam class="pull-right">
                            <button class="btn btn-sm btn-outline-danger">x</button>
                        </spam>
                    </th>
                </tr>
                  <tr>
                    <td> Margheria </td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger">
                            x
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default {
  name: 'Admin',
  data() {
    return {

    };
  },
};
</script>
<style lang="css" scoped>
</style>
