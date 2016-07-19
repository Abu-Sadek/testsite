/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='media/images/',
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
                            id: 'slide-10-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-10-back.png",'0px','0px']
                        },
                        {
                            id: 'symText',
                            symbolName: 'symText',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['15px', '165px', '1002px', '143px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['15px', '694px', '640px', '41px', 'auto', 'auto'],
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
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${symText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            500,
                            0,
                            "linear",
                            "${symText}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "symText": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            type: 'image',
                            id: 'slide-10-text',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'media/images/slide-10-text.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "In": 250
                    },
                    data: [
                        [
                            "eid4",
                            "display",
                            250,
                            0,
                            "linear",
                            "${slide-10-text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid8",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${slide-10-text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-10_edgeActions.js");
})("EDGE-102318270");
