<template>
    <div class="form-wrapper">
        <content-loader
            @is-fetched="fetched"
            path="processStore/readActionById"
            :param="3"
        />
        <div v-if="form" class="container">
            <FormRenderer :formConfiguration="form" v-model="formInput" />
            <button
                type="submit"
                class="md-button transparent bottom-right"
                @click="onActionPress"
            >
                SPREMI
            </button>
        </div>
    </div>
</template>

<script>
import { FormRenderer } from "v-form-builder";
import ContentLoader from "@/components/ContentLoader.vue";

export default {
    name: "FormScreen",
    components: { FormRenderer, ContentLoader },
    props: {
        id: {
            type: Number || String, // On page refresh id from URL becomes string
            required: false,
        },
    },
    data () {
        return {
            formInput: null,
            form: null,
        };
    },
    methods: {
        fetched (content) {
            this.form = content;
        },
        onActionPress () {
            this.$store.commit("processStore/setDetailAction", this.formInput, {
                root: true,
            });
            this.$router.push({ name: "SuccessfulFormScreen" });
        },
    },
};
</script>

<style src="@/styles/formScreenStyle.css">
</style>
