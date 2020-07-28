<template>
    <div class="container">
        <div class="loading" v-if="loading">
            Loading...
        </div>
        <template v-else>
            <div class="canvas" ref="canvas">
            </div>
        </template>
    </div>
</template>
<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
// import axios from 'axios'
import { 
    xmlStr
} from '../../mock/xmlStr'

export default {
    name: 'getBpmnFromHttp',
    data() {
        return {
            loading: false,
            bpmnModeler: null,
            xmlUrl: '',
            defaultXmlStr: xmlStr,
        }
    },
    mounted() {
        // this.initBpmn();
        this.init()
    },
    methods: {
        async init() {
            this.loading = true;
            this.xmlUrl = await this.getXmlStr()
            this.loading = false
            console.log(this.xmlUrl)
            this.$nextTick(() => {
                this.initBpmn();
            })
        },
        // 异步获取xmlStr
        getXmlStr() {
            // 模拟后台请求
            return new Promise(resolve => {
                setTimeout(() => {
                    const url = 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmnMock.bpmn' // 模拟网络请求的一个地址
                    resolve(url)
                }, 300)
            })
        },
        initBpmn() {
            const canvas = this.$refs.canvas
            this.bpmnModeler = new BpmnModeler({
                container: canvas
            })
            this.createNewDiagram();
        },
        async createNewDiagram() {
            // const self = this;
            let bpmnXmlStr = '';
            if (this.xmlUrl === '') {
                bpmnXmlStr = this.defaultXmlStr
                this.transformCanvas(bpmnXmlStr)
            } else {
                // 请求接口获取到字符串, 此处仍然用模拟数据
                bpmnXmlStr = this.defaultXmlStr;
                this.transformCanvas(bpmnXmlStr)
            }
        },
        transformCanvas(bpmnXmlStr) {
            this.bpmnModeler.importXML(bpmnXmlStr, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    this.handleSuccess()
                }
                // 自适应屏幕
                let canvas = this.bpmnModeler.get('canvas')
                canvas.zoom('fit-viewport')
            })
        },
        handleSuccess() {
            console.log('创建成功')
            this.addBpmnListener()
        },
        addBpmnListener() {
            const self = this;
            this.bpmnModeler.on('commandStack.changed', () => {
                self.saveDiagram((err, xml) => {
                    console.log(xml)
                })
            })
        },
        // 保存更新后的
        saveDiagram(done) {
            this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
                done(err, xml)
            })
        },
    },
}
</script>
<style lang="scss" scoped>
    .container {
        height: 100%;
        .canvas {
            height: 100%;
        }
    }
</style>