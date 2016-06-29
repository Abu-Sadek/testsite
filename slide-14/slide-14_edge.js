/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'slide-14-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-14-back.png",'0px','0px']
                        },
                        {
                            id: 'slide-14-box-2',
                            type: 'image',
                            rect: ['210', '292', '603px', '294px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-14-box-2.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-14-lines',
                            type: 'image',
                            rect: ['276px', '322px', '392px', '203px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 203px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-14-lines.png",'0px','0px']
                        },
                        {
                            id: 'slide-14-shield',
                            display: 'none',
                            type: 'image',
                            rect: ['609px', '395px', '194px', '92px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"slide-14-shield.jpg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['210px', '292px', '603px', '294px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['13px', '693px', '655px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "In": 250
                    },
                    data: [
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide-14-shield}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            750,
                            0,
                            "linear",
                            "${slide-14-shield}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${slide-14-lines}",
                            [0,0,203,0],
                            [0,392,203,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid8",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${slide-14-shield}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-14_edgeActions.js");
})("EDGE-64107850");
