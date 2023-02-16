<template>
    <div class="home">
        <van-button type="primary" @click="testGet">Get</van-button>
        <br><br>
        <van-button type="primary" @click="testPost">Post</van-button>
        <br><br>
        <van-button type="primary" @click="testPut">Put</van-button>
        <br><br>
        <van-button type="primary" @click="testDelete">Delete</van-button>
        <br><br>
        <van-uploader v-model="fileList" :after-read="afterRead" />
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
    data() {
        return {
            fileList: []
        }
    },
    methods: {
        testGet() {
            this.$get('/test', {
                data: 'test'
            }).then(res => {
                console.log(res)
            })
        },
        testPost() {
            this.$post('/test', {
                data: 'test'
            }).then(res => {
                console.log(res)
            })
        },
        testPut() {
            this.$put('/test/1', {
                data: 'test'
            }).then(res => {
                console.log(res)
            })
        },
        testDelete() {
            this.$delete('/test/1', {
                data: 'test'
            }).then(res => {
                console.log(res)
            })
        },
        afterRead(file) {

        },
    },
}
</script>

<style scoped>
.home {
    padding: 30px;
    text-align: center;
}
</style>
