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
                            id: 'slide-11-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-11-back.png",'0px','0px']
                        },
                        {
                            id: 'slide-11-b1',
                            type: 'image',
                            rect: ['306px', '325px', '73px', '199px', 'auto', 'auto'],
                            clip: 'rect(0px 73px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-11-b1.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-11-b2',
                            type: 'image',
                            rect: ['445px', '325px', '72px', '209px', 'auto', 'auto'],
                            clip: 'rect(0px 72px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-11-b2.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-11-b3',
                            type: 'image',
                            rect: ['587px', '326px', '82px', '237px', 'auto', 'auto'],
                            clip: 'rect(0px 82px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-11-b3.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-11-b4',
                            type: 'image',
                            rect: ['728px', '327px', '82px', '281px', 'auto', 'auto'],
                            clip: 'rect(0px 82px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-11-b4.jpg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['89px', '193px', '846px', '447px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
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
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "In": 250
                    },
                    data: [
                        [
                            "eid12",
                            "clip",
                            750,
                            250,
                            "linear",
                            "${slide-11-b3}",
                            [0,82,0,0],
                            [0,82,237,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid15",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${slide-11-b4}",
                            [0,82,0,0],
                            [0,82,281,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid4",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${slide-11-b1}",
                            [0,73,0,0],
                            [0,73,199,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid8",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${slide-11-b2}",
                            [0,72,0,0],
                            [0,72,209,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-11_edgeActions.js");
})("EDGE-60987069");
