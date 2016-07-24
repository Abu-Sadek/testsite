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
                            id: 'slide-13-back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-13-back.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['25px', '692px', '653px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'slide-13-box-2',
                            type: 'image',
                            rect: ['196', '278', '594px', '286px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slide-13-box-2.jpg",'0px','0px']
                        },
                        {
                            id: 'slide-13-lines',
                            type: 'image',
                            rect: ['265px', '321px', '310px', '191px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 191px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"slide-13-lines.png",'0px','0px']
                        },
                        {
                            id: 'slide-13-shield2',
                            display: 'none',
                            type: 'image',
                            rect: ['588px', '325px', '189px', '136px', 'auto', 'auto'],
                            clip: 'rect(5px 186px 136px 3px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slide-13-shield.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['196px', '278px', '594px', '286px', 'auto', 'auto'],
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
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slide-13-shield2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            750,
                            0,
                            "linear",
                            "${slide-13-shield2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${slide-13-shield2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${slide-13-lines}",
                            [0,0,191,0],
                            [0,310,191,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slide-13_edgeActions.js");
})("EDGE-63445724");
