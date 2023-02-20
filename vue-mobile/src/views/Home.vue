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
        <van-uploader v-model="picList" :after-read="afterRead" />
        <br><br>
        <van-uploader v-model="fileList" :after-read="afterRead" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt" />
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
    data() {
        return {
            picList: [],
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
            let fileArr = []
            if (file instanceof Array && file.length) {
                fileArr = file
            } else {
                fileArr.push({ file: file.file })
            }
            fileArr.forEach(item => {
                item.status = 'uploading'
                item.message = 'uploading...'
                let that = this
                let formData = new FormData()
                formData.append('file', item.file)
                formData.append('bucket', 'simple')
                that.$postFile('/test/upload', formData).then(res => {
                    console.log(res)
                })
            })
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
