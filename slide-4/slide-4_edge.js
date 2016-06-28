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
                            id: 'slide-4-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-4-back.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-4-curve-1',
                            type: 'image',
                            rect: ['218px', '270px', '22px', '257px', 'auto', 'auto'],
                            clip: 'rect(257px 22px 257px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-4-curve-1.png",'0px','0px']
                        },
                        {
                            id: 'slide-4-curve2',
                            type: 'image',
                            rect: ['218', '270px', '597px', '257px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 257px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-4-curve.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['17px', '238px', '985px', '321px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['17px', '696px', '576px', '17px', 'auto', 'auto'],
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
                    duration: 750,
                    autoPlay: true,
                    labels: {
                        "In": 250
                    },
                    data: [
                        [
                            "eid17",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${slide-4-curve-1}",
                            [257,22,257,0],
                            [0,22,257,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${slide-4-curve2}",
                            [0,0,257,0],
                            [0,597,257,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-4_edgeActions.js");
})("EDGE-60062913");
