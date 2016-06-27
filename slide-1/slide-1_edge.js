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
                            id: 'slide-1_-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-back.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-1_-green',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '157px', '1024px', '540px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-green.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-1_-gray_1',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '157', '1024px', '540px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-gray_1.png",'0px','0px']
                        },
                        {
                            id: 'slide-1_-gray_2',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '157', '1024px', '540px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-gray_2.png",'0px','0px']
                        },
                        {
                            id: 'slide-1_-gray_3',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '157', '1024px', '540px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-gray_3.png",'0px','0px']
                        },
                        {
                            id: 'slide-1_-gray_4',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '157', '1024px', '540px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-gray_4.png",'0px','0px']
                        },
                        {
                            id: 'slide-1_-gray_5',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '157', '1024px', '540px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-gray_5.png",'0px','0px']
                        },
                        {
                            id: 'slide-1_-gray_6',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '157', '1024px', '540px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-gray_6.png",'0px','0px']
                        },
                        {
                            id: 'slide-1_-logo',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '157px', '1033px', '546px', 'auto', 'auto'],
                            borderRadius: ["0px 51px", "0px", "0px", "0px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-1_-logo.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0.16, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['0px', '162px', '1024px', '540px', 'auto', 'auto'],
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
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "In": 250
                    },
                    data: [
                        [
                            "eid57",
                            "opacity",
                            1000,
                            250,
                            "easeInQuad",
                            "${slide-1_-gray_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            500,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-logo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            750,
                            0,
                            "easeInQuad",
                            "${slide-1_-logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-logo}",
                            'block',
                            'block'
                        ],
                        [
                            "eid42",
                            "opacity",
                            500,
                            250,
                            "easeInQuad",
                            "${slide-1_-gray_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            1000,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "opacity",
                            750,
                            1000,
                            "easeInQuad",
                            "${slide-1_-logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            250,
                            250,
                            "easeInQuad",
                            "${slide-1_-gray_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            250,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-green}",
                            'block',
                            'block'
                        ],
                        [
                            "eid32",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-green}",
                            'block',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            1250,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "opacity",
                            750,
                            250,
                            "easeInQuad",
                            "${slide-1_-gray_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            1500,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            1750,
                            0,
                            "easeInQuad",
                            "${slide-1_-gray_6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1250,
                            250,
                            "easeInQuad",
                            "${slide-1_-gray_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1500,
                            250,
                            "easeInQuad",
                            "${slide-1_-gray_6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-1_edgeActions.js");
})("EDGE-6666357");
