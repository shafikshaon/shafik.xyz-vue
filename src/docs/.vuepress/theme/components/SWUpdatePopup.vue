<template>
    <SWUpdatePopup>
        <div v-slot="{ enabled, reload, message, buttonText }"
                class="my-sw-update-popup">
            {{ message }}<br>
            <button @click="reload">{{ buttonText }}</button>
        </div>
    </SWUpdatePopup>
</template>

<script>
    import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

    export default {
        components: {SWUpdatePopup},
        data() {
            return {
                SW_UPDATE_POPUP: true
            }
        },
    }
</script>

<style>
    .my-sw-update-popup {
        text-align: right;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #fff;
        font-size: 20px;
        padding: 10px;
        border: 5px solid #3eaf7c;
    }

    .my-sw-update-popup button {
        border: 1px solid #fefefe;
    }
</style>