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
                            id: 'slide-12-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-12-back.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-12-box-2',
                            type: 'image',
                            rect: ['181px', '210px', '616px', '311px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-12-box-2.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-12-shield',
                            display: 'none',
                            type: 'image',
                            rect: ['604px', '286px', '184px', '128px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-12-shield.png",'0px','0px']
                        },
                        {
                            id: 'slide-12-lines',
                            type: 'image',
                            rect: ['248px', '288px', '343px', '167px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 167px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-12-lines.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['181px', '210px', '616px', '301px', 'auto', 'auto'],
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
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "In": 250
                    },
                    data: [
                        [
                            "eid3",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${slide-12-lines}",
                            [0,0,167,0],
                            [0,343,167,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide-12-shield}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4",
                            "display",
                            750,
                            0,
                            "linear",
                            "${slide-12-shield}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${slide-12-shield}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-12_edgeActions.js");
})("EDGE-62044912");
