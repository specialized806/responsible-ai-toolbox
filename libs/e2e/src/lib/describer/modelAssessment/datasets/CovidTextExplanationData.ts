// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const localExplanationData = [
  [
    -0.000636495096841827, -0.0007205095098470338, -0.0032467793207615614,
    -0.000634230935247615, 1.7687285435386002e-5, -6.931095413165167e-6,
    -3.918043876183219e-5, 0.004688547545811161
  ],
  [
    -0.0008207837672671303, -0.000300601743219886, -0.015251807169988751,
    0.0001021451607812196, 0.0003124179638689384, 0.00010389489398221485,
    4.6507349907187745e-5, 0.021539930894505233
  ],
  [
    -0.0012885876712971367, -0.0009655082758399658, -0.0029418114572763443,
    0.00027555986889638007, 0.00024787593429209664, 1.5714213077444583e-6,
    -2.3954198695719242e-5, 0.014757379743969068
  ],
  [
    -0.002681086021766532, -0.003543577615346294, 0.024428741075098515,
    -0.012014517473289743, -0.0001209374240715988, -0.0002215801905549597,
    -0.0002775677203317173, 0.017724030825775117
  ],
  [
    -0.0009634038130267678, -0.001734571188232318, 0.0009469674550928175,
    0.00024288176306678605, -6.0349391181565196e-5, -0.00011645010818028823,
    -9.025637761321073e-5, 0.0036910950681582717
  ],
  [
    -0.0010006408107680422, -0.0016011600879816492, 0.009218675142619759,
    3.224057824506116e-5, 7.84534774235605e-5, -8.594688915763982e-5,
    -6.105914568858375e-5, 0.006865168945902648
  ],
  [
    -0.0011893104698780612, -0.0023516468669792325, -0.030754483304917812,
    -0.0023499438151096306, -0.0004369707579220024, -0.00024131371537805535,
    -0.0002455555501607402, 0.010249472174715871
  ],
  [
    0.0006246408447623253, 0.002342509338632226, 0.00923523714300245,
    0.0019997319614049047, 0.00023446171690011397, 0.0001919330097734928,
    0.00021679180645151064, 0.0020690857782028615
  ],
  [
    0.0022972098377067596, 0.0060527346868184395, 0.015584435488563031,
    0.0005853832990396768, 0.0012316165593801998, 0.0006548328092321754,
    0.000637557383015519, 0.005034984787926078
  ],
  [
    0.0018196230521425605, 0.007721510635747109, 0.018698231026064605,
    0.0004785316123161465, 0.0013870042821508832, 0.0006805006196373142,
    0.0007383011870842893, -0.011809031071607023
  ],
  [
    0.0010852971317945048, 0.003154348371026572, 0.003427802410442382,
    -0.001960556401172653, 0.0006982677514315583, 0.00036231218109605834,
    0.0003644152748165652, 0.0036861097323708236
  ],
  [
    -0.0034189091384178028, -0.007213740384031553, -0.006431239133235067,
    -0.005346366233425215, -0.0006793363500037231, -0.0006198389892233536,
    -0.0006056503334548324, 0.007714569161180407
  ],
  [
    -0.0007393609957944136, -0.007273226514371345, -0.02623181536910124,
    -0.013174322812119499, -0.0016040346527006477, -0.0007529620852437802,
    -0.000824675649710116, 0.023763758581480943
  ],
  [
    -0.0003837457225017715, -0.0050439760998415295, -0.046733961993595585,
    -0.022258116223383695, -0.003616276750108227, -0.0011161112997797318,
    -0.0011007469747710275, -0.04756225926394109
  ],
  [
    -0.0008517571914126165, -0.0011708455858752131, 0.0046375583042390645,
    0.0004948775313096121, 0.0007063844750518911, 0.0001380217927362537,
    8.317713945871219e-5, 0.01579254692478571
  ],
  [
    -0.002623482250783127, -0.008062604487349745, -0.06921439099824056,
    0.005129237033543177, -0.0006311755641945638, -0.0006044579113222426,
    -0.0005724201291741338, 0.045481551976990886
  ],
  [
    0.003384354233276099, 0.005953140847850591, -0.0060012193862348795,
    -0.002675734052900225, 0.0009643001394579187, 0.0006162012286949903,
    0.0005579914941336028, -0.005978768924251199
  ],
  [
    -0.00022346741025103256, 0.00030636634619440883, -0.017040073696989566,
    -0.00027059836429543793, 0.0001363793053315021, 4.7524208639515564e-5,
    1.0728446795837954e-5, 0.007698185145272873
  ],
  [
    0.00039468170871259645, 0.0021830713230883703, -0.01428054814459756,
    -7.028735126368701e-5, 0.00021556259162025526, 0.0001284251375182066,
    0.00012055500337737612, 0.009314028939115815
  ],
  [
    -0.0011349946216796525, -0.001752316122292541, -0.007893522444646806,
    0.00308342173229903, 6.583183858310804e-5, -0.00011383682431187481,
    -7.640518742846325e-5, 0.010317111649783328
  ],
  [
    -0.0012319715533521958, -0.0020847628911724314, -0.00826293573481962,
    -0.00030804506968706846, -3.929490048903972e-6, -0.00014627249038312584,
    -0.0001269117128686048, 0.010348739451728761
  ],
  [
    -0.0007330782791541424, -0.0010875145174698748, 0.023878549924120307,
    -0.0076742589808418415, 0.00022527729743160307, 8.801273603846008e-6,
    -4.192216450367899e-5, 0.008232045358454343
  ],
  [
    -0.0011065786493418273, -0.0014619758161037073, 0.06873297173297033,
    -0.011727764118404593, 0.0003360078771947883, 3.598638674399505e-5,
    -1.8943460721250936e-5, 0.019380909092433285
  ],
  [
    -0.0033037302273442037, -0.0036707416341717667, 0.0762235201545991,
    -0.008046803486649878, -0.0003903954348061234, -0.00020940844600166505,
    -0.0002381691568492291, -0.004982785016181879
  ],
  [
    7.087326957844198e-5, 0.00164293751004152, 0.05354635766707361,
    -0.0020767449168488383, 0.0007212942364276387, 0.0002962203179777134,
    0.0002837081665347796, 0.01052605130826123
  ],
  [
    0.00039436684164684266, -0.00050717280828394, -0.004193105502054095,
    -0.002728222112637013, -0.00036901865678373724, -9.391411731485277e-5,
    -7.368148362729698e-5, -0.0036659656034316868
  ],
  [
    -0.0031497719610342756, -0.00614386671804823, -0.06374513520859182,
    -0.01880467386217788, -0.0008927713060984388, -0.0004954130563419312,
    -0.0005684584757545963, 0.022353752137860283
  ],
  [
    -0.00037755732773803174, -7.25838472135365e-5, 0.012842112686485052,
    0.001219944329932332, -2.0157982362434268e-5, 6.532136467285454e-6,
    -7.582246325910091e-6, 0.004326543654315174
  ],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

export const textExplanationData = {
  classNames: [
    "event1",
    "event2",
    "event3",
    "event4",
    "event5",
    "event6",
    "event7",
    "event8"
  ],
  expectedFeaturesValues: {
    allFeaturesExpectedValues: 13,
    negativeFeaturesExpectedValues: 4,
    positiveFeaturesExpectedValues: 13
  },
  explanationIndex: 0,
  localExplanations: localExplanationData,
  text: [
    "",
    "As ",
    "of ",
    "Friday ",
    "7 ",
    "February ",
    "2020",
    ", ",
    "a ",
    "total ",
    "of ",
    "620 ",
    "UK ",
    "tests ",
    "have ",
    "concluded",
    ", ",
    "of ",
    "which ",
    "61",
    "7 ",
    "were ",
    "confirmed ",
    "negative ",
    "and ",
    "3 ",
    "positive",
    ".",
    ""
  ]
};
