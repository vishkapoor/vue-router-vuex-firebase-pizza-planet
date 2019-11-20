<template>
<form>
    <h3>Add New Pizza</h3>
    <div class="form-group row">
        <label class="col-sm-3">Name: </label>
        <div class="col-sm-9">
            <input
                v-model="form.name"
                type="text" class="form-control input-sm" />
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-3">Description:</label>
        <div class="col-sm-9">
            <textarea
                v-model="form.description"
                rows="5" class="form-control input-sm"></textarea>
        </div>
    </div>

    <p><strong>Option 1:</strong></p>
    <div class="form-group row">
        <label class="col-sm-3">Size ("):</label>
        <div class="col-sm-9">
            <input
                v-model='form.options[0].size'
                type="text" class="form-control input-sm" />
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-3">Price:</label>
        <div class="col-sm-9">
            <input
                v-model='form.options[0].price'
                type="text" class="form-control input-sm" />
        </div>
    </div>

    <p><strong>Option 2:</strong></p>
    <div class="form-group row">
        <label class="col-sm-3">Size ("):</label>
        <div class="col-sm-9">
            <input
                 v-model='form.options[1].size'
                type="text" class="form-control input-sm" />
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-3">Price:</label>
        <div class="col-sm-9">
            <input
                 v-model='form.options[1].price'
                type="text" class="form-control input-sm" />
        </div>
    </div>

    <div class="form-grouop row">
        <button class="btn btn-success btn-block" type="button">
            Add
        </button>
    </div>

</form>
</template>
<script>
export default {
    name: 'CreatePizza',
    data() {
        return {
            form: {
                name: '',
                description: '',
                quantity: 1,
                options: [
                    { size: '', price: '' },
                    { size: '', price: '' },
                ],
            }
        }
    },
}
</script>
<style lang="css" scoped>
.row {
    margin-bottom: 15px;
}
</style>
