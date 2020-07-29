export const xmlStr = `
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
<bpmn:process id="Process_1" isExecutable="false">
<bpmn:startEvent id="StartEvent_1">
<bpmn:outgoing>Flow_021z3si</bpmn:outgoing>
</bpmn:startEvent>
<bpmn:serviceTask id="Activity_1fru9kc" name="我是第一个节点">
<bpmn:incoming>Flow_021z3si</bpmn:incoming>
<bpmn:outgoing>Flow_1hwj8kv</bpmn:outgoing>
</bpmn:serviceTask>
<bpmn:sequenceFlow id="Flow_021z3si" sourceRef="StartEvent_1" targetRef="Activity_1fru9kc"> </bpmn:sequenceFlow>
<bpmn:userTask id="Activity_0ozmm5p" name="第二名">
<bpmn:incoming>Flow_1hwj8kv</bpmn:incoming>
<bpmn:outgoing>Flow_1tbnntc</bpmn:outgoing>
</bpmn:userTask>
<bpmn:sequenceFlow id="Flow_1hwj8kv" sourceRef="Activity_1fru9kc" targetRef="Activity_0ozmm5p"> </bpmn:sequenceFlow>
<bpmn:sequenceFlow id="Flow_1tbnntc" sourceRef="Activity_0ozmm5p" targetRef="Event_03kmy6i"> </bpmn:sequenceFlow>
<bpmn:endEvent id="Event_03kmy6i">
<bpmn:incoming>Flow_1tbnntc</bpmn:incoming>
</bpmn:endEvent>
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
<bpmndi:BPMNEdge id="Flow_021z3si_di" bpmnElement="Flow_021z3si">
<di:waypoint x="209" y="120"/>
<di:waypoint x="290" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_1hwj8kv_di" bpmnElement="Flow_1hwj8kv">
<di:waypoint x="390" y="120"/>
<di:waypoint x="480" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_1tbnntc_di" bpmnElement="Flow_1tbnntc">
<di:waypoint x="580" y="120"/>
<di:waypoint x="672" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
<dc:Bounds x="173" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_1fru9kc_di" bpmnElement="Activity_1fru9kc">
<dc:Bounds x="290" y="80" width="100" height="80"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_0ozmm5p_di" bpmnElement="Activity_0ozmm5p">
<dc:Bounds x="480" y="80" width="100" height="80"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Event_03kmy6i_di" bpmnElement="Event_03kmy6i">
<dc:Bounds x="672" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_0lkkmka_di">
<dc:Bounds x="820" y="80" width="100" height="80"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge id="Flow_1t2mucq_di">
<di:waypoint x="920" y="120"/>
<di:waypoint x="1012" y="120"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`