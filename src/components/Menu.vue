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
                <template v-for="item in items">
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
                                class="btn btn-sm btn-outline-success">+</button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
    <div class="col-sm-12 col-md-6">

    </div>
</div>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
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
};
</script>
<style lang="css" scoped>
</style>
