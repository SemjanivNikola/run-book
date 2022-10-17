<template>
    <div class="form-wrapper">
        <content-loader
            @is-fetched="fetched"
            path="activeProcess/readActionById"
            :param="id"
        />
        <div v-if="form">
            <FormRenderer :formConfiguration="TEST_DATA" v-model="formInput" />
            <div class="container">
                <button type="submit" class="md-button" @click="onActionPress">
                    Test input
                </button>
                <div style="height: 32px" />
            </div>
        </div>
    </div>
</template>

<script>
import TEST_DATA from "../../docs/testData.json";
import { FormRenderer } from "v-form-builder";
import ContentLoader from "@/components/ContentLoader.vue";

export default {
    name: "FormScreen",
    components: { FormRenderer, ContentLoader },
    props: {
        id: {
            type: Number || String, // On page refresh id from URL becomes string
            required: true,
        },
    },
    data () {
        return {
            formInput: null,
            TEST_DATA,
            form: null,
        };
    },
    methods: {
        fetched (content) {
            console.warn("content >> ", content);
            this.form = content;
        },
        onActionPress () {
            this.$store.commit(
                "activeProcess/setDetailAction",
                this.formInput,
                { root: true },
            );
            this.$router.go(-1);
        },
    },
};
</script>

<style src="@/styles/formScreenStyle.css">
</style>
