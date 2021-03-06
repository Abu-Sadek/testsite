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
                            id: 'slide-8-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-8-back.png",'0px','0px']
                        },
                        {
                            id: 'symText',
                            symbolName: 'symText',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['22px', '151px', '956px', '87px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['15px', '692px', '648px', '29px', 'auto', 'auto'],
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
                    duration: 795,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4",
                            "width",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '956px',
                            '956px'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${symText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            500,
                            0,
                            "linear",
                            "${symText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid5",
                            "height",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '87px',
                            '87px'
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
                            id: 'slide-8-text',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'media/images/slide-8-text.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 795,
                    autoPlay: true,
                    labels: {
                        "In": 500
                    },
                    data: [
                        [
                            "eid6",
                            "display",
                            500,
                            0,
                            "linear",
                            "${slide-8-text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid12",
                            "opacity",
                            500,
                            295,
                            "linear",
                            "${slide-8-text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-8_edgeActions.js");
})("EDGE-99540478");
