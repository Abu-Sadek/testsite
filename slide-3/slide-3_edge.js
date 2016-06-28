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
                            id: 'slide-3-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-3-back.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-1',
                            display: 'block',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-1.png",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-2',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-2.png",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-3',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-3.png",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-4',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-4.png",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-5',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-5.png",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-6',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-6.png",'0px','0px']
                        },
                        {
                            id: 'slide-3-c-7',
                            type: 'image',
                            rect: ['220px', '-40px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-3-c-7.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['16px', '692px', '570px', '22px', 'auto', 'auto'],
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
                    duration: 2468,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "opacity",
                            0,
                            391,
                            "linear",
                            "${slide-3-c-1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1391,
                            359,
                            "linear",
                            "${slide-3-c-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1750,
                            359,
                            "linear",
                            "${slide-3-c-6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            750,
                            359,
                            "linear",
                            "${slide-3-c-3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2109,
                            359,
                            "linear",
                            "${slide-3-c-7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            391,
                            359,
                            "linear",
                            "${slide-3-c-2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide-3-c-1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1109,
                            359,
                            "linear",
                            "${slide-3-c-4}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-3_edgeActions.js");
})("EDGE-58846788");
