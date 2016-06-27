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
                            id: 'slide-17-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-17-back.png",'0px','0px']
                        },
                        {
                            id: 'slide-17-objects',
                            type: 'image',
                            rect: ['580px', '438px', '392px', '208px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-17-objects.png",'0px','0px']
                        },
                        {
                            id: 'slide-17-back-clear',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-17-back-clear.png",'0px','0px']
                        },
                        {
                            id: 'Lipo',
                            symbolName: 'Lipo',
                            type: 'rect',
                            rect: ['42px', '108px', '392', '208', 'auto', 'auto']
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
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid20",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Lipo}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide-17-back-clear}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Lipo}",
                            '42px',
                            '42px'
                        ]
                    ]
                }
            },
            "Lipo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '392px', '208px', 'auto', 'auto'],
                            id: 'slide-17-objects2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/slide-17-objects.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '392px', '208px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    labels: {
                        "In": 500,
                        "Out": 1250
                    },
                    data: [
                        [
                            "eid16",
                            "height",
                            500,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '208px',
                            '508px'
                        ],
                        [
                            "eid40",
                            "height",
                            1250,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '508px',
                            '208px'
                        ],
                        [
                            "eid14",
                            "top",
                            500,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '330px',
                            '0px'
                        ],
                        [
                            "eid38",
                            "top",
                            1250,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '0px',
                            '330px'
                        ],
                        [
                            "eid18",
                            "width",
                            500,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '392px',
                            '931px'
                        ],
                        [
                            "eid39",
                            "width",
                            1250,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '931px',
                            '392px'
                        ],
                        [
                            "eid17",
                            "left",
                            500,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '539px',
                            '0px'
                        ],
                        [
                            "eid37",
                            "left",
                            1250,
                            500,
                            "linear",
                            "${slide-17-objects2}",
                            '0px',
                            '539px'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide-17-objects2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            500,
                            0,
                            "linear",
                            "${slide-17-objects2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-17_edgeActions.js");
})("EDGE-65126757");
