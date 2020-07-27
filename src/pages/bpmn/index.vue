<template>
    <div class="container">
        <div class="canvas" ref="canvas"></div>
    </div>
</template>
<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import { 
    xmlStr
} from '../../mock/xmlStr'

export default {
    name: 'bpmn',
    data() {
        return {
            bpmnModel: null,
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const canvas = this.$refs.canvas;
            this.bpmnModel = new BpmnModeler({
                container: canvas
            })
            this.createNewDiagram();
        },
        createNewDiagram() {
            this.bpmnModel.importXML(xmlStr, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    this.handleSuccess()
                }
            })
        },
        handleSuccess() {
            console.log('创建成功')
        },
    }
}
</script>

<style scoped>
.container{
	position: absolute;
	background-color: #ffffff;
	width: 100%;
	height: 100%;
}
.canvas{
	width: 100%;
	height: 100%;
}
.panel{
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}
</style>