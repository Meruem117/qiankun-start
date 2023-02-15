<template>
    <div class="home">
        <van-button type="primary" @click="test">测试</van-button>
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
    data() {
        return {}
    },
    methods: {
        test() {
            this.$get('/test', {
                orgcode: '3204',
                type: '12',
                name: 'test'
            })
        }
    },
}
</script>

<style scoped>
.home {
    padding: 30px;
    text-align: center;
}
</style>
