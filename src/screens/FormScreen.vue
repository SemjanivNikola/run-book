<template>
    <div class="form-wrapper">
        <FormRenderer :formConfiguration="TEST_DATA" v-model="formInput" />
    </div>
</template>

<script>
import TEST_DATA from "../../docs/testData.json";
import { FormRenderer } from "v-form-builder";

export default {
    name: "FormScreen",
    components: { FormRenderer },
    data () {
        return {
            formInput: null,
            TEST_DATA,
        };
    },
};
</script>

<style src="@/styles/formScreenStyle.css">
</style>
