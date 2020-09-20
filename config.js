var config = {
    style: 'mapbox://styles/evelina-judeikyte/ckeuentyb3vpp19uiv9aj8wsr',
    accessToken: 'pk.eyJ1IjoiZXZlbGluYS1qdWRlaWt5dGUiLCJhIjoiY2tlcG1qeXNrMXN2ZTJ2azc3N3AyYjlhMCJ9.aejgw0Sn0uaAnE1Dgday5g',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Bridges to Prosperity',
    //subtitle: 'Rwanda',
    //byline: 'By Evelina Judeikyte',
    footer: 'Story created by Evelina Judeikyte. Data source: Catchment survey and interviews by Bridges to Prosperity.',
    chapters: [
        {
            id: 'story-intro-1',
            //title: 'Intro to B2P',
            //image: 'images/B2P_PrimaryLockup_Green.svg',
            description: 'Dativa lives in Gaseke, Rwanda. She runs a business, takes her crops to the market, her children to school or the doctor, and gathers water and firewood. To do that, Gativa needs to cross the Mwange river by foot. It is a long walk, which becomes too dangerous altogether when it rains. And she is not alone. Most people in Rwanda live in rural areas and lack safe access to critical resources due to impassable rivers.',
            location: {
                center: [1.79884, 3.17168],
                zoom: 2.4,
                pitch: 0.00,
                bearing: 4.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'story-intro-2',
            //title: 'Intro to B2P',
            //image: 'images/B2P_PrimaryLockup_Blue.jpg',
            description: "The non-profit <b>Bridges to Prosperity (B2P)</b> have found a solution. They build footbridges to connect rural communities facing isolation to road networks and critical destinations and services. B2P has constructed more than 342 bridges in 21 countries, 76 of them in Rwanda. Let's zoom into the impact six of these bridges have had on people’s lives.",
            location: {
                center: [1.79884, 3.17168],
                zoom: 2.4,
                pitch: 0.00,
                bearing: 4.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'story-intro-3',
            //title: 'People directly served at each site',
            image: 'https://github.com/EvelinaJ/b2p_scrolly/blob/master/b2pbars.svg',
            //image: 'images/b2pbars.jpg',
            //description: 'no text',
            location: {
                center: [29.31543, -2.01033],
                zoom: 8.1,
                pitch: 0.00,
                bearing: 4.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'bridge-1-2',
            title: 'Muregeya and Rwamamara bridges',
            image: 'Rwanda_Suspended_Moto on Bridge.png',
            description: 'The Muregeya and Rwamamara bridges, constructed in the Western province of Rwanda in 2013 and 2019, serve more than 14,000 people. People who use them travel from Gasiza, Isure, Gaseke and and 59 other villlages. For most of the travelers, their livelihood—buying and selling goods, farming, wage labour—depends on these bridges.',
            location: {
                center: [29.25304, -1.88943],
                zoom: 10.2,
                pitch: 0,
                bearing: 4
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bridge-3',
            title: 'Kanyarira bridge',
            image: 'Rwanda_Suspended_Children Crossing 3 .jpg',
            description: "The Kanyarira bridge was built in Rwanda's Southern Province in 2016. It serves at least 8,000 people in 60 neighbouring villages who mainly travel to buy goods and to visit friends and family.",
            location: {
                center: [29.705778, -2.113750],
                zoom: 10.2,
                pitch: 0,
                bearing: 4
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bridge-4-5-6',
            title: 'Gahororo, Ruharazi and Rwimvubu bridges',
            image: 'Rwanda_Suspension_Side View with Child Crossing.jpg',
            description: 'Three more bridges in the very South of Rwanda help nearly 16,000 individuals to safely travel for their daily business. Since their construction in 2017 and 2019, they cover Bunazi, Muhembe, Mashya and 100 other villages. ',
            location: {
                center: [29.649033, -2.621482],
                zoom: 10.2 ,
                pitch: 0,
                bearing: 4
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'story-conclusion',
            title: 'Now what?',
            //image: './path/to/image/source.png',
            description: 'A simple footbridge can provide access to work and healthcare for thousands of people. Impact studies have shown that, in the rural isolated areas where B2P intervened, there has been a 25% increase in labour market income. It could be the way out of poverty for these communities.<br><br><big><b>If you can, donate at <a href="bridgestoprosperity.org/donate">B2P/donate</a></big>.</big>',
            location: {
                center: [29.72672, -1.98711],
                zoom: 2.8,
                pitch: 0,
                bearing: 4
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
