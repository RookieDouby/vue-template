<template>
    <div class="container">
        <el-button type="primary" @click="previewTemp">预览</el-button>
        <el-button type="success" @click="handleZoom(1)">放大</el-button>
        <el-button type="warning" @click="handleZoom(-1)">缩小</el-button>
        <div class="chart-preview">
            <div style="clear: both;"></div>
            <div class="view-canvas">
                <div id="container"
                     v-bind:style="{width: 100 * scale + '%',height: 100 * scale + '%'}"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>
  import BpmnViewer from 'bpmn-js/lib/Viewer';
  import {
      xmlStr
  } from '../../mock/testXmlStr'


  export default {
    data() {
      return {
        containerEl: null,
        bpmnModeler: null,
        scale: 1,
       // 此变量为预览的xml文件数据，由于行数过多，附在了附件中，使用时，将附件整个复值到currentCanvasXml即可
        currentCanvasXml: xmlStr
      };
    },
    methods: {
      handleZoom(flag) {
        if (flag < 0 && this.scale <= 1) {
          return;
        }
        this.scale += flag;
        this.$nextTick(() => {
          this.bpmnModeler.get('canvas').zoom('fit-viewport');
        });
      },
      previewTemp() {
        this.containerEl = document.getElementById('container');
        // 避免缓存，每次清一下
        this.bpmnModeler && this.bpmnModeler.destroy();
        this.scale = 1;
        this.bpmnModeler = new BpmnViewer({container: this.containerEl});
        const viewer = this.bpmnModeler;
        this.bpmnModeler.importXML(this.currentCanvasXml, (err) => {
          if (err) {
            console.error(err);
          } else {
            // 只实现预览，核心代码以下两句足够
            const canvas = viewer.get('canvas');
            canvas.zoom('fit-viewport');
            // 以下代码为：为节点注册鼠标悬浮事件
            const eventBus = this.bpmnModeler.get('eventBus');
            const overlays = this.bpmnModeler.get('overlays');
            const eventTypes = ['element.click', 'element.hover', 'element.out']
            const overlayHtml = `<div class="tipBox">我是第一个节点</span>`
            eventTypes.forEach(eventType => {
                eventBus.on(eventType, e => {
                    const { element } = e
                    if (!element.parent) return
                    if (!e || element.type === 'bpmn:Process') {
                        return false
                    } else {
                        if (eventType === 'element.click') {
                            console.log(element)
                        } else if (eventType === 'element.hover') {
                            console.log('鼠标划入了')
                            overlays.add(element.id, {
                                position: {
                                    top: element.height,
                                    left:0
                                },
                                html: overlayHtml,
                            })
                        } else if (eventType === 'element.out') {
                            console.log('鼠标划出了')
                            overlays.clear()
                        }
                    }
                })
            })
        //     eventBus.on('element.hover', (e) => {
        //         const overlayHtml = `<div class="tipBox">我是第一个节点</span>`
        //         overlays.add(e.element.id, {
        //             position: {top: e.element.height, left: 0},
        //             html: overlayHtml
        //         });
        //     });
        //     eventBus.on('element.out', () => {
        //         overlays.clear();
        //     });
        //   //  注册悬浮事件结束
          }
        });
      }
    }
  };
</script>
<style lang="scss">
    .container {
        height: 100%;
        .canvas {
            height: 100%;
        }
        .tipBox {
            width: 200px;
            background: #fff;
            border-radius: 4px;
            border: 1px solid #ebeef5;
            padding: 12px;
        }
    }
</style>