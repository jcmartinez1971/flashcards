document.addEventListener('DOMContentLoaded', () => {
    const flashcardsContainer = document.getElementById('flashcards-container');
    const themeSelector = document.getElementById('theme-selector');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    const flashcardsData = {
        osteologia: [
    { "front": "¿Cuál es el hueso más largo del cuerpo humano?", "back": "El fémur." },
    { "front": "¿Cómo se llama el hueso que forma la frente?", "back": "El hueso frontal." },
    { "front": "¿Qué hueso forma la parte posterior de la cabeza?", "back": "El hueso occipital." },
    { "front": "¿Qué hueso se encuentra en la parte superior del brazo y se articula con el húmero?", "back": "El radio." },
    { "front": "¿Cuál es el nombre del hueso que se encuentra en la parte medial del antebrazo?", "back": "El cúbito." },
    { "front": "¿Qué hueso forma la parte superior del cráneo?", "back": "El hueso parietal." },
    { "front": "¿Qué hueso forma la mandíbula inferior?", "back": "El hueso mandibular." },
    { "front": "¿Qué hueso forma la parte central de la nariz?", "back": "El hueso etmoides." },
    { "front": "¿Cuál es el hueso que se encuentra en el centro del pecho y se articula con las costillas?", "back": "El esternón." },
    { "front": "¿Qué hueso forma la parte posterior y lateral de la pelvis?", "back": "El hueso ilíaco." },
    { "front": "¿Qué hueso forma la parte superior del esternón?", "back": "El manubrio." },
    { "front": "¿Qué hueso del cráneo forma la base del cráneo y parte de la órbita ocular?", "back": "El hueso esfenoides." },
    { "front": "¿Qué hueso se encuentra en la parte inferior del cráneo y forma la base del cráneo?", "back": "El hueso esfenoides." },
    { "front": "¿Cuál es el hueso que forma la parte superior de la columna vertebral?", "back": "El atlas." },
    { "front": "¿Qué hueso se articula con el atlas y forma el eje de rotación de la cabeza?", "back": "El axis." },
    { "front": "¿Qué hueso de la columna vertebral se encuentra en la región lumbar?", "back": "Las vértebras lumbares." },
    { "front": "¿Cuál es el hueso que se encuentra en el talón del pie?", "back": "El calcáneo." },
    { "front": "¿Qué hueso forma la parte anterior del cráneo y contribuye a la estructura de la órbita ocular?", "back": "El hueso frontal." },
    { "front": "¿Cuál es el hueso que forma la parte posterior del paladar?", "back": "El hueso palatino." },
    { "front": "¿Qué hueso forma la parte superior del arco de la ceja?", "back": "El hueso frontal." },
    { "front": "¿Qué hueso forma la parte externa del ojo y proporciona soporte a la cavidad ocular?", "back": "El hueso cigomático." },
    { "front": "¿Qué hueso del cráneo protege el cerebro y forma la base del cráneo?", "back": "El hueso occipital." },
    { "front": "¿Qué hueso se encuentra en la parte inferior de la mandíbula y es responsable de la masticación?", "back": "El hueso mandibular." },
    { "front": "¿Cuál es el hueso que se encuentra en el borde superior del esternón?", "back": "El manubrio." },
    { "front": "¿Qué hueso del cráneo forma la parte superior y lateral de la cabeza?", "back": "El hueso parietal." },
    { "front": "¿Qué hueso se encuentra en la parte central de la espalda y forma la columna vertebral?", "back": "Las vértebras torácicas." },
    { "front": "¿Qué hueso forma el borde medial de la órbita ocular?", "back": "El hueso lagrimal." },
    { "front": "¿Qué hueso del cráneo forma la parte inferior de la cavidad nasal?", "back": "El hueso etmoides." },
    { "front": "¿Qué hueso del cráneo protege el oído interno?", "back": "El hueso temporal." },
    { "front": "¿Qué hueso forma la base del cráneo y se articula con el hueso esfenoides?", "back": "El hueso occipital." },
    { "front": "¿Cuál es el nombre del hueso que forma la parte superior del brazo?", "back": "El húmero." },
    { "front": "¿Qué hueso se encuentra en el antebrazo y es más delgado que el radio?", "back": "El cúbito." },
    { "front": "¿Qué hueso de la columna vertebral es el más grande y soporta la mayor parte del peso del cuerpo?", "back": "El sacro." },
    { "front": "¿Cuál es el nombre del hueso que forma la parte lateral de la cabeza y proporciona soporte a la estructura facial?", "back": "El hueso cigomático." },
    { "front": "¿Qué hueso forma el borde inferior de la cavidad nasal?", "back": "El hueso maxilar." },
    { "front": "¿Cuál es el hueso que se encuentra en la base del cráneo y conecta con las vértebras cervicales?", "back": "El hueso occipital." },
    { "front": "¿Qué hueso forma la parte posterior y el techo de la cavidad nasal?", "back": "El hueso etmoides." },
    { "front": "¿Qué hueso se encuentra en la parte superior del tobillo y es conocido como el hueso del talón?", "back": "El calcáneo." },
    { "front": "¿Qué hueso se encuentra en la parte anterior de la pierna y es más grande que el peroné?", "back": "La tibia." },
    { "front": "¿Qué hueso forma la parte posterior del paladar?", "back": "El hueso palatino." },
    { "front": "¿Qué hueso proporciona la base para la mandíbula y forma parte del arco cigomático?", "back": "El hueso cigomático." },
    { "front": "¿Qué hueso forma la parte inferior del tórax y se articula con las costillas?", "back": "El esternón." },
    { "front": "¿Cuál es el hueso que forma la parte superior del cráneo y protege el cerebro?", "back": "El hueso parietal." },
    { "front": "¿Qué hueso de la columna vertebral es más pequeño y se encuentra en la región cervical?", "back": "Las vértebras cervicales." },
    { "front": "¿Qué hueso se encuentra en la parte posterior del tobillo y es el más grande del pie?", "back": "El calcáneo." },
    { "front": "¿Qué hueso del cráneo forma la parte inferior y posterior de la órbita ocular?", "back": "El hueso esfenoides." },
    { "front": "¿Cuál es el hueso que forma la parte superior de la cavidad nasal y la parte inferior de la órbita ocular?", "back": "El hueso frontal." },
    { "front": "¿Qué hueso se encuentra en la parte posterior de la cabeza y es el punto de articulación con la columna vertebral?", "back": "El hueso occipital." },
    { "front": "¿Qué hueso de la pierna forma la parte superior de la tibia?", "back": "El fémur." },
    { "front": "¿Qué hueso se encuentra en el borde medial del pie y es conocido como el hueso del talón?", "back": "El calcáneo." },
    { "front": "¿Qué hueso se encuentra en la parte anterior del brazo y es el más grande de los huesos del brazo?", "back": "El húmero." },
    { "front": "¿Cuál es el hueso que forma la parte media del cráneo y es parte del techo de la cavidad nasal?", "back": "El hueso etmoides." }
]
,
"artrologia": [
        { "front": "¿Qué es una articulación?", "back": "Es una unión entre dos o más huesos que permite el movimiento." },
        { "front": "¿Cuáles son los tipos principales de articulaciones?", "back": "Articulaciones sinoviales, no sinoviales y cartilaginosas." },
        { "front": "¿Qué tipo de articulación es la cadera?", "back": "Articulación esferoidea o en bola y cavidad." },
        { "front": "¿Cuál es la función principal de las articulaciones sinoviales?", "back": "Permitir un rango de movimiento amplio y libre." },
        { "front": "¿Qué es el líquido sinovial?", "back": "Un fluido que lubrica y reduce la fricción en las articulaciones sinoviales." },
        { "front": "¿Qué tipo de articulación es la rodilla?", "back": "Articulación bisagra, que permite flexión y extensión." },
        { "front": "¿Qué tipo de articulación es el codo?", "back": "Articulación bisagra que permite la flexión y extensión del antebrazo." },
        { "front": "¿Cuál es la función del cartílago articular?", "back": "Reducir la fricción y absorber impactos en la articulación." },
        { "front": "¿Qué son los ligamentos?", "back": "Bandas de tejido conectivo que estabilizan y refuerzan las articulaciones." },
        { "front": "¿Qué es una articulación esferoidea?", "back": "Una articulación que permite movimiento en múltiples direcciones, como la cadera." },
        { "front": "¿Qué es una articulación en bisagra?", "back": "Una articulación que permite movimiento en un solo plano, como el codo." },
        { "front": "¿Dónde se encuentra la articulación temporomandibular?", "back": "Entre el hueso temporal del cráneo y la mandíbula." },
        { "front": "¿Qué es una articulación cartilaginosa?", "back": "Una articulación en la que los huesos están unidos por cartílago." },
        { "front": "¿Qué tipo de articulación es la interfalángica?", "back": "Una articulación en bisagra, que permite solo flexión y extensión." },
        { "front": "¿Qué es una articulación sinovial?", "back": "Una articulación que tiene una cápsula articular llena de líquido sinovial." },
        { "front": "¿Qué es una articulación gomfosis?", "back": "Una articulación sinovial en la que un diente se encaja en una cavidad ósea." },
        { "front": "¿Qué es la cápsula articular?", "back": "Una estructura que rodea la cavidad articular y contiene líquido sinovial." },
        { "front": "¿Qué es el menisco?", "back": "Un cartílago que actúa como amortiguador en la rodilla." },
        { "front": "¿Qué es una articulación sinfisis?", "back": "Una articulación en la que los huesos están unidos por cartílago fibrocartilaginoso." },
        { "front": "¿Qué es una articulación plana?", "back": "Una articulación que permite movimientos deslizantes, como las articulaciones intercarpianas." },
        { "front": "¿Qué articulación permite el movimiento rotacional?", "back": "La articulación pivote, como la del atlas y el axis en el cuello." },
        { "front": "¿Qué es la articulación sacroilíaca?", "back": "Una articulación que conecta el sacro con el hueso ilíaco de la pelvis." },
        { "front": "¿Qué es una articulación condílea?", "back": "Una articulación que permite movimiento en dos planos, como la muñeca." },
        { "front": "¿Dónde se encuentra la articulación esternoclavicular?", "back": "Entre el esternón y la clavícula." },
        { "front": "¿Qué es una articulación esferoidea?", "back": "Una articulación con una cabeza esférica encajada en una cavidad, como la cadera." },
        { "front": "¿Qué articulación permite el movimiento de abducción y aducción?", "back": "La articulación de la cadera y el hombro." },
        { "front": "¿Qué es la articulación subraspinal?", "back": "Una articulación en la que la cabeza del hueso encaja en una cavidad." },
        { "front": "¿Qué tipo de articulación es la tibiofibular proximal?", "back": "Una articulación plana que permite un pequeño movimiento de deslizamiento." },
        { "front": "¿Qué es una articulación de silla de montar?", "back": "Una articulación que permite movimientos en dos ejes, como la articulación carpometacarpiana del pulgar." },
        { "front": "¿Qué articulación permite la rotación del antebrazo?", "back": "La articulación radioulnar proximal." },
        { "front": "¿Qué articulación se encuentra entre los huesos del carpo?", "back": "Las articulaciones intercarpianas." },
        { "front": "¿Qué es una articulación cartilaginosa primaria?", "back": "Una articulación donde los huesos están unidos por cartílago hialino, como en las epífisis de los huesos largos en crecimiento." },
        { "front": "¿Qué es una articulación fibrocartilaginosa?", "back": "Una articulación donde los huesos están unidos por fibrocartílago, como en los discos intervertebrales." },
        { "front": "¿Qué es una articulación gomfosis?", "back": "Una articulación inmóvil en la que un diente se ajusta a una cavidad ósea." },
        { "front": "¿Qué es una articulación sindesmosis?", "back": "Una articulación en la que los huesos están unidos por una lámina de tejido fibroso, como en la unión de la tibia y el peroné." },
        { "front": "¿Qué articulación permite la flexión y extensión de los dedos?", "back": "Las articulaciones interfalángicas." },
        { "front": "¿Qué articulación conecta el hueso esfenoides con el hueso frontal?", "back": "La articulación esfeno-frontal." },
        { "front": "¿Qué es una articulación sinovial uniaxial?", "back": "Una articulación que permite movimiento en un solo eje, como la articulación del codo." },
        { "front": "¿Qué es una articulación biaxial?", "back": "Una articulación que permite movimiento en dos ejes, como la articulación de la muñeca." },
        { "front": "¿Dónde se encuentra la articulación del tobillo?", "back": "Entre el hueso de la tibia, el peroné y el astrágalo." },
        { "front": "¿Qué articulación se encuentra entre la mandíbula y el hueso temporal?", "back": "La articulación temporomandibular." },
        { "front": "¿Qué es una articulación sinovial multiaxial?", "back": "Una articulación que permite movimiento en múltiples ejes, como la cadera o el hombro." },
        { "front": "¿Qué tipo de articulación es la interfalángica distal del dedo?", "back": "Una articulación en bisagra." },
        { "front": "¿Qué es una articulación sinovial de tipo esferoideo?", "back": "Una articulación con una cabeza esférica encajada en una cavidad, como la cadera y el hombro." },
        { "front": "¿Qué articulación está involucrada en el movimiento de rotación interna y externa del brazo?", "back": "La articulación glenohumeral." },
        { "front": "¿Qué es una articulación esferoidea de tipo ball-and-socket?", "back": "Una articulación donde la cabeza del hueso es esférica y encaja en una cavidad, como la cadera." },
        { "front": "¿Qué articulación conecta la clavícula con el esternón?", "back": "La articulación esternoclavicular." },
        { "front": "¿Qué es una articulación intervertebral?", "back": "La articulación entre dos vértebras adyacentes en la columna vertebral." },
        { "front": "¿Qué tipo de articulación es la tibiofemoral?", "back": "Una articulación sinovial de tipo bisagra en la rodilla." },
        { "front": "¿Qué tipo de articulación es la articulación acromioclavicular?", "back": "Una articulación sinovial plana." },
        { "front": "¿Qué es una articulación cartilaginosa secundaria?", "back": "Una articulación donde los huesos están unidos por fibrocartílago, como los discos intervertebrales." },
        { "front": "¿Qué articulación está formada por el hueso sacro y el hueso ilíaco?", "back": "La articulación sacroilíaca." },
        { "front": "¿Qué es una articulación sinovial uniaxial de tipo pivote?", "back": "Una articulación que permite rotación alrededor de un solo eje, como la radioulnar proximal." }
    ],
    
    miologia: [
    { "front": "¿Qué es la miología?", "back": "La miología es la rama de la anatomía que estudia los músculos y sus funciones." },
    { "front": "¿Cuál es el principal músculo del tórax que participa en la respiración?", "back": "El diafragma." },
    { "front": "¿Qué músculo es conocido como el músculo del bíceps?", "back": "El bíceps braquial." },
    { "front": "¿Cuál es el músculo principal de la masticación?", "back": "El masetero." },
    { "front": "¿Qué músculo es responsable de la abducción del brazo?", "back": "El deltoides." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior del muslo y es responsable de la flexión de la pierna?", "back": "El bíceps femoral." },
    { "front": "¿Qué músculo se encuentra en el abdomen y es responsable de la flexión del tronco?", "back": "El recto del abdomen." },
    { "front": "¿Cuál es el nombre del músculo que cubre el cuello y ayuda en la rotación de la cabeza?", "back": "El esternocleidomastoideo." },
    { "front": "¿Qué músculo se encuentra en la parte anterior del muslo y es responsable de la extensión de la pierna?", "back": "El cuádriceps femoral." },
    { "front": "¿Cuál es el músculo que permite la apertura de la boca y la masticación?", "back": "El masetero." },
    { "front": "¿Qué músculo se encuentra en la parte posterior del tronco y es responsable de la extensión de la columna vertebral?", "back": "El erector de la columna." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte superior del brazo y permite la flexión del codo?", "back": "El bíceps braquial." },
    { "front": "¿Qué músculo del abdomen se encuentra a los lados del recto del abdomen y es responsable de la rotación del tronco?", "back": "El oblicuo externo." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior del muslo y ayuda a la flexión de la pierna?", "back": "El semitendinoso." },
    { "front": "¿Qué músculo es responsable de la flexión y la aducción del muslo?", "back": "El psoas mayor." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte inferior del abdomen y es responsable de la compresión abdominal?", "back": "El transverso del abdomen." },
    { "front": "¿Qué músculo se encuentra en la parte interna del muslo y es responsable de la aducción de la pierna?", "back": "El aductor mayor." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior del cuello y ayuda a elevar el omóplato?", "back": "El trapecio." },
    { "front": "¿Qué músculo es responsable de la flexión y rotación del cuello?", "back": "El esternocleidomastoideo." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte anterior del abdomen y es responsable de la flexión del tronco?", "back": "El recto del abdomen." },
    { "front": "¿Qué músculo está involucrado en la extensión del brazo en la articulación del hombro?", "back": "El tríceps braquial." },
    { "front": "¿Cuál es el músculo que permite la flexión de la rodilla y la extensión de la cadera?", "back": "El bíceps femoral." },
    { "front": "¿Qué músculo es responsable de la elevación de la escápula?", "back": "El trapecio." },
    { "front": "¿Cuál es el músculo principal que se encuentra en la parte anterior del muslo y ayuda en la extensión de la pierna?", "back": "El cuádriceps femoral." },
    { "front": "¿Qué músculo se encuentra en la parte posterior del muslo y ayuda en la flexión de la pierna?", "back": "El semimembranoso." },
    { "front": "¿Cuál es el músculo que está involucrado en la aducción del brazo y la rotación interna del hombro?", "back": "El pectoral mayor." },
    { "front": "¿Qué músculo es responsable de la rotación externa del brazo?", "back": "El infraespinoso." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte superior del abdomen y es responsable de la flexión y rotación del tronco?", "back": "El oblicuo externo." },
    { "front": "¿Qué músculo ayuda en la extensión de la rodilla y se encuentra en la parte anterior del muslo?", "back": "El cuádriceps femoral." },
    { "front": "¿Cuál es el músculo que está involucrado en la elevación del pie y la dorsiflexión del tobillo?", "back": "El tibial anterior." },
    { "front": "¿Qué músculo del cuello es responsable de la flexión y rotación del cuello hacia un lado?", "back": "El esternocleidomastoideo." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior de la espalda y ayuda a mantener la postura erguida?", "back": "El erector de la columna." },
    { "front": "¿Qué músculo se encuentra en la parte posterior de la pierna y es responsable de la flexión del pie?", "back": "El gastrocnemio." },
    { "front": "¿Cuál es el músculo que está involucrado en la flexión de la cadera y la flexión de la rodilla?", "back": "El sartorius." },
    { "front": "¿Qué músculo del abdomen es responsable de la compresión del abdomen y la estabilización del tronco?", "back": "El transverso del abdomen." },
    { "front": "¿Cuál es el músculo que permite la rotación interna del muslo y se encuentra en la parte medial del muslo?", "back": "El aductor mayor." },
    { "front": "¿Qué músculo se encuentra en la parte posterior del muslo y ayuda a la flexión de la rodilla y extensión de la cadera?", "back": "El bíceps femoral." },
    { "front": "¿Cuál es el nombre del músculo que se encuentra en la parte anterior del brazo y permite la flexión del codo?", "back": "El bíceps braquial." },
    { "front": "¿Qué músculo se encuentra en la parte superior de la espalda y ayuda en la elevación de los omóplatos?", "back": "El trapecio." },
    { "front": "¿Cuál es el músculo que está involucrado en la extensión y abducción del brazo?", "back": "El deltoides." },
    { "front": "¿Qué músculo está involucrado en la elevación del talón durante la marcha?", "back": "El gastrocnemio." },
    { "front": "¿Cuál es el músculo que permite la apertura de la mandíbula?", "back": "El digástrico." },
    { "front": "¿Qué músculo es responsable de la flexión de la columna vertebral y la compresión abdominal?", "back": "El recto del abdomen." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior del abdomen y ayuda en la extensión y rotación del tronco?", "back": "El erector de la columna." },
    { "front": "¿Qué músculo es responsable de la aducción de la pierna?", "back": "El aductor mayor." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte anterior del muslo y es conocido por ser el más potente de la pierna?", "back": "El cuádriceps femoral." },
    { "front": "¿Qué músculo se encuentra en la parte interna del brazo y es responsable de la flexión del codo?", "back": "El bíceps braquial." },
    { "front": "¿Cuál es el músculo que está involucrado en la extensión del dedo gordo del pie?", "back": "El extensor largo del dedo gordo." },
    { "front": "¿Qué músculo está en la parte medial del muslo y ayuda a la aducción de la pierna?", "back": "El aductor largo." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior de la pierna y es responsable de la flexión plantar del tobillo?", "back": "El soleo." },
    { "front": "¿Qué músculo está involucrado en la rotación externa del brazo?", "back": "El redondo menor." },
    { "front": "¿Cuál es el músculo que está en la parte superior de la espalda y ayuda a la extensión del cuello?", "back": "El trapecio." },
    { "front": "¿Qué músculo se encuentra en la parte posterior del muslo y es conocido por ser uno de los flexores de la rodilla?", "back": "El semitendinoso." },
    { "front": "¿Cuál es el músculo que permite la abducción del muslo y se encuentra en la región glútea?", "back": "El glúteo medio." },
    { "front": "¿Qué músculo se encuentra en la parte anterior del abdomen y es importante para la compresión abdominal?", "back": "El transverso del abdomen." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte inferior del abdomen y ayuda en la flexión de la cadera?", "back": "El psoas mayor." },
    { "front": "¿Qué músculo se encuentra en la parte posterior del tobillo y ayuda a mantener el arco del pie?", "back": "El tibial posterior." },
    { "front": "¿Cuál es el músculo que permite la elevación de la mandíbula y es importante para la masticación?", "back": "El masetero." },
    { "front": "¿Qué músculo está involucrado en la flexión de la columna vertebral y la compresión abdominal?", "back": "El recto del abdomen." }
],

siscardio:[
    { "front": "¿Cuál es la principal función del sistema cardiovascular?", "back": "Transportar sangre, nutrientes, gases y desechos a través del cuerpo." },
    { "front": "¿Qué órgano principal compone el sistema cardiovascular?", "back": "El corazón." },
    { "front": "¿Cómo se llaman los vasos sanguíneos que llevan la sangre del corazón al resto del cuerpo?", "back": "Arterias." },
    { "front": "¿Cuál es la función de las venas en el sistema cardiovascular?", "back": "Transportar sangre de vuelta al corazón." },
    { "front": "¿Qué tipo de sangre transporta el ventrículo izquierdo del corazón?", "back": "Sangre oxigenada." },
    { "front": "¿Qué válvula separa la aurícula derecha del ventrículo derecho?", "back": "La válvula tricúspide." },
    { "front": "¿Cómo se llama el proceso de contracción del corazón?", "back": "Sístole." },
    { "front": "¿Cuál es el nombre del proceso de relajación del corazón?", "back": "Diástole." },
    { "front": "¿Qué estructura en el corazón evita el flujo retrógrado de sangre?", "back": "Las válvulas cardíacas." },
    { "front": "¿Qué arteria suministra sangre al músculo cardíaco?", "back": "La arteria coronaria." },
    { "front": "¿Qué cavidad del corazón recibe sangre desoxigenada de todo el cuerpo?", "back": "La aurícula derecha." },
    { "front": "¿Qué cavidad del corazón envía sangre oxigenada a la aorta?", "back": "El ventrículo izquierdo." },
    { "front": "¿Cuál es la principal función de los capilares?", "back": "Intercambiar nutrientes, gases y desechos entre la sangre y los tejidos." },
    { "front": "¿Qué tipo de sangre transportan las arterias pulmonares?", "back": "Sangre desoxigenada." },
    { "front": "¿Qué válvula está situada entre el ventrículo izquierdo y la aorta?", "back": "La válvula aórtica." },
    { "front": "¿Cómo se llama la válvula que controla el flujo de sangre desde el ventrículo derecho hacia la arteria pulmonar?", "back": "La válvula pulmonar." },
    { "front": "¿Qué tipo de sangre llevan las venas pulmonares hacia el corazón?", "back": "Sangre oxigenada." },
    { "front": "¿Cuál es la función del sistema de conducción del corazón?", "back": "Regular el ritmo y la frecuencia de los latidos cardíacos." },
    { "front": "¿Qué estructura en el corazón inicia el impulso eléctrico que causa la contracción?", "back": "El nodo sinoauricular (SA)." },
    { "front": "¿Cuál es la función del nodo auriculoventricular (AV)?", "back": "Retrasar el impulso eléctrico para permitir la contracción de las aurículas antes de los ventrículos." },
    { "front": "¿Cómo se llama la parte del sistema cardiovascular que se encarga de la circulación sistémica?", "back": "La circulación arterial que lleva sangre oxigenada al cuerpo." },
    { "front": "¿Qué tipo de circulación lleva sangre desde el corazón hacia los pulmones?", "back": "Circulación pulmonar." },
    { "front": "¿Qué estructura conecta el corazón con los pulmones en la circulación pulmonar?", "back": "Las arterias pulmonares." },
    { "front": "¿Qué estructura permite el intercambio de gases en los pulmones?", "back": "Los alvéolos." },
    { "front": "¿Cuál es el nombre de la principal vena que transporta sangre desoxigenada desde el cuerpo hacia el corazón?", "back": "La vena cava." },
    { "front": "¿Qué es la presión arterial?", "back": "La fuerza que ejerce la sangre contra las paredes de las arterias." },
    { "front": "¿Qué término describe el diámetro de los vasos sanguíneos y su efecto sobre la presión arterial?", "back": "La resistencia periférica." },
    { "front": "¿Cómo se llama la técnica que utiliza ondas sonoras para visualizar el corazón y sus válvulas?", "back": "Ecocardiografía." },
    { "front": "¿Qué es un electrocardiograma (ECG)?", "back": "Una prueba que registra la actividad eléctrica del corazón." },
    { "front": "¿Cuál es la función de los eritrocitos en la sangre?", "back": "Transportar oxígeno desde los pulmones hacia los tejidos del cuerpo." },
    { "front": "¿Qué son los leucocitos y cuál es su función?", "back": "Son células blancas de la sangre que combaten infecciones y participan en la respuesta inmune." },
    { "front": "¿Qué componente de la sangre es esencial para la coagulación?", "back": "Las plaquetas." },
    { "front": "¿Qué estructura en el corazón impide el flujo retrógrado de sangre hacia las aurículas?", "back": "Las válvulas auriculoventriculares." },
    { "front": "¿Qué es el ciclo cardíaco?", "back": "La serie de eventos que ocurren durante un latido del corazón, incluyendo sístole y diástole." },
    { "front": "¿Qué es la frecuencia cardíaca?", "back": "El número de latidos del corazón por minuto." },
    { "front": "¿Qué arteria es la principal fuente de suministro de sangre al brazo?", "back": "La arteria braquial." },
    { "front": "¿Cómo se llama el sistema de vasos que transportan sangre a las paredes del corazón?", "back": "El sistema de vasos coronarios." },
    { "front": "¿Qué tipo de vasos sanguíneos tienen paredes muy delgadas para permitir el intercambio de sustancias?", "back": "Los capilares." },
    { "front": "¿Qué es la presión venosa central?", "back": "La presión de la sangre en la aurícula derecha del corazón." },
    { "front": "¿Qué hormona, producida por los riñones, regula la presión arterial?", "back": "La renina." },
    { "front": "¿Qué tipo de sangre transportan las venas pulmonares hacia el corazón?", "back": "Sangre oxigenada." },
    { "front": "¿Qué componente de la sangre transporta nutrientes y hormonas a los tejidos?", "back": "El plasma." },
    { "front": "¿Cómo se llama la alteración del ritmo cardíaco que puede causar problemas en la circulación sanguínea?", "back": "Arritmia." },
    { "front": "¿Cuál es la principal arteria que transporta sangre oxigenada desde el corazón al cuerpo?", "back": "La aorta." },
    { "front": "¿Qué es una arteria?", "back": "Un vaso sanguíneo que transporta sangre desde el corazón a los tejidos del cuerpo." },
    { "front": "¿Qué es una vena?", "back": "Un vaso sanguíneo que transporta sangre desde los tejidos del cuerpo de vuelta al corazón." },
    { "front": "¿Qué es la circulación coronaria?", "back": "La circulación de la sangre a través de las arterias coronarias que suministran el músculo cardíaco." },
    { "front": "¿Cómo se llama el sonido característico del latido del corazón?", "back": "El soplo cardíaco o el ruido de los latidos." },
    { "front": "¿Qué tipo de sangre transporta el ventrículo derecho del corazón?", "back": "Sangre desoxigenada." },
    { "front": "¿Cuál es la función de las válvulas cardíacas en el sistema cardiovascular?", "back": "Prevenir el flujo retrógrado de sangre en el corazón." },
    { "front": "¿Qué estructura del corazón se encarga de bombear sangre hacia los pulmones?", "back": "El ventrículo derecho." },
    { "front": "¿Qué estructura del corazón se encarga de bombear sangre al resto del cuerpo?", "back": "El ventrículo izquierdo." },
    { "front": "¿Cuál es el nombre del sistema de vasos sanguíneos que lleva sangre desde el corazón hacia los pulmones y viceversa?", "back": "El sistema de circulación pulmonar." },
    { "front": "¿Qué tipo de circulación es responsable de suministrar sangre rica en oxígeno a los tejidos del cuerpo?", "back": "La circulación sistémica." }
] ,

sisnervio:[
    { "front": "¿Cuál es la principal función del sistema nervioso?", "back": "Coordinar y controlar las funciones corporales y responder a estímulos del entorno." },
    { "front": "¿Qué partes componen el sistema nervioso central?", "back": "El cerebro y la médula espinal." },
    { "front": "¿Cómo se llama la unidad funcional del sistema nervioso?", "back": "La neurona." },
    { "front": "¿Qué tipo de neuronas transmiten impulsos desde los receptores hacia el sistema nervioso central?", "back": "Neuronas sensoriales o aferentes." },
    { "front": "¿Qué tipo de neuronas transmiten impulsos desde el sistema nervioso central hacia los músculos o glándulas?", "back": "Neuronas motoras o eferentes." },
    { "front": "¿Qué parte del sistema nervioso está encargada de la integración y procesamiento de información?", "back": "El cerebro." },
    { "front": "¿Cuál es la función principal del sistema nervioso periférico?", "back": "Conectar el sistema nervioso central con los órganos, músculos y glándulas." },
    { "front": "¿Qué parte del cerebro está involucrada en el control de los movimientos voluntarios?", "back": "El cerebro motor o lóbulo frontal." },
    { "front": "¿Qué parte del cerebro está encargada de la percepción sensorial?", "back": "El lóbulo parietal." },
    { "front": "¿Qué estructura conecta el cerebro con la médula espinal?", "back": "El tronco encefálico." },
    { "front": "¿Cómo se llama el líquido que protege y nutre el sistema nervioso central?", "back": "El líquido cefalorraquídeo." },
    { "front": "¿Qué es la mielina y cuál es su función?", "back": "La mielina es una sustancia que recubre las fibras nerviosas y acelera la transmisión de los impulsos eléctricos." },
    { "front": "¿Qué son los ganglios en el sistema nervioso periférico?", "back": "Agrupaciones de cuerpos celulares de neuronas fuera del sistema nervioso central." },
    { "front": "¿Qué parte del sistema nervioso controla las funciones involuntarias, como el ritmo cardíaco y la respiración?", "back": "El sistema nervioso autónomo." },
    { "front": "¿Qué división del sistema nervioso autónomo prepara al cuerpo para la acción en situaciones de estrés?", "back": "El sistema nervioso simpático." },
    { "front": "¿Qué división del sistema nervioso autónomo ayuda a mantener las funciones corporales en estado de reposo?", "back": "El sistema nervioso parasimpático." },
    { "front": "¿Cuál es el principal neurotransmisor asociado con la estimulación y el estado de alerta?", "back": "La noradrenalina." },
    { "front": "¿Qué neurotransmisor está involucrado en la regulación del estado de ánimo y el sueño?", "back": "La serotonina." },
    { "front": "¿Cómo se llama la capa externa del cerebro que está involucrada en funciones cognitivas y motoras?", "back": "La corteza cerebral." },
    { "front": "¿Qué estructura del cerebro está involucrada en la coordinación y el equilibrio?", "back": "El cerebelo." },
    { "front": "¿Cuál es el nombre de los nervios que emergen directamente del cerebro?", "back": "Nervios craneales." },
    { "front": "¿Qué nervios se originan en la médula espinal y se extienden hacia las extremidades y el torso?", "back": "Nervios raquídeos o espinales." },
    { "front": "¿Qué parte del sistema nervioso central está involucrada en la memoria y el aprendizaje?", "back": "El hipocampo." },
    { "front": "¿Cómo se llama el proceso de transmisión de un impulso nervioso a lo largo de una neurona?", "back": "La conducción nerviosa." },
    { "front": "¿Qué es una sinapsis?", "back": "La conexión entre dos neuronas donde se transmite un impulso nervioso mediante neurotransmisores." },
    { "front": "¿Qué estructura en la neurona recibe los impulsos nerviosos de otras neuronas?", "back": "Las dendritas." },
    { "front": "¿Qué parte de la neurona transmite el impulso nervioso hacia otras neuronas o células efectores?", "back": "El axón." },
    { "front": "¿Qué es el potencial de acción en una neurona?", "back": "Un cambio rápido en el potencial eléctrico a lo largo de la membrana de la neurona que transmite el impulso nervioso." },
    { "front": "¿Qué parte del sistema nervioso está involucrada en la regulación de las funciones automáticas como la digestión?", "back": "El sistema nervioso autónomo." },
    { "front": "¿Cómo se llama el proceso mediante el cual se producen nuevas conexiones neuronales en el cerebro?", "back": "La neuroplasticidad." },
    { "front": "¿Qué estructura del cerebro está involucrada en la regulación emocional y la respuesta al estrés?", "back": "La amígdala." },
    { "front": "¿Cuál es la principal función de los nervios motores?", "back": "Transmitir señales desde el sistema nervioso central a los músculos y glándulas." },
    { "front": "¿Qué es el sistema nervioso somático?", "back": "La parte del sistema nervioso periférico que controla los movimientos voluntarios del cuerpo." },
    { "front": "¿Qué es un reflejo y cómo se produce?", "back": "Una respuesta rápida e involuntaria a un estímulo que se produce a través de un arco reflejo en el sistema nervioso." },
    { "front": "¿Qué estructura del cerebro está involucrada en la regulación de la homeostasis del cuerpo?", "back": "El hipotálamo." },
    { "front": "¿Qué parte del sistema nervioso es responsable de las respuestas rápidas a estímulos ambientales?", "back": "El sistema nervioso periférico." },
    { "front": "¿Cómo se llaman las células gliales que proporcionan soporte y protección a las neuronas en el sistema nervioso central?", "back": "Astrocitos, oligodendrocitos y microglía." },
    { "front": "¿Qué estructura en la médula espinal permite la comunicación entre diferentes niveles del sistema nervioso?", "back": "Los tractos ascendentes y descendentes." },
    { "front": "¿Cómo se llama el fenómeno cuando una neurona es estimulada repetidamente y su respuesta se vuelve más fuerte?", "back": "La potenciación a largo plazo." },
    { "front": "¿Qué neurotransmisor está asociado con el control motor y la recompensa?", "back": "La dopamina." },
    { "front": "¿Cuál es el papel de los neurotransmisores en la comunicación neuronal?", "back": "Transmitir señales entre las neuronas a través de las sinapsis." },
    { "front": "¿Qué es la barrera hematoencefálica y cuál es su función?", "back": "Una barrera que protege al cerebro de sustancias potencialmente dañinas en la sangre." },
    { "front": "¿Qué parte del sistema nervioso está involucrada en la percepción consciente y la toma de decisiones?", "back": "La corteza cerebral." },
    { "front": "¿Qué es la sustancia blanca en el sistema nervioso central?", "back": "Las áreas del cerebro y la médula espinal que contienen fibras nerviosas mielinizadas." },
    { "front": "¿Qué es la sustancia gris en el sistema nervioso central?", "back": "Las áreas del cerebro y la médula espinal que contienen cuerpos celulares de neuronas y dendritas." },
    { "front": "¿Cómo se llama el proceso por el cual las neuronas eliminan neurotransmisores después de la transmisión sináptica?", "back": "La recaptación." },
    { "front": "¿Qué parte del sistema nervioso controla el equilibrio y la coordinación motora?", "back": "El cerebelo." },
    { "front": "¿Qué tipo de receptor sensorial responde a estímulos de luz?", "back": "Los fotorreceptores." },
    { "front": "¿Qué tipo de receptor sensorial responde a estímulos de presión y vibración?", "back": "Los mecanorreceptores." },
    { "front": "¿Qué parte del sistema nervioso está involucrada en la regulación del sueño y la vigilia?", "back": "El tronco encefálico y el sistema reticular activador." },
    { "front": "¿Cómo se llama el proceso por el cual se forman nuevas neuronas en el cerebro adulto?", "back": "La neurogénesis." },
    { "front": "¿Qué estructura del cerebro está involucrada en la regulación de la memoria y el aprendizaje?", "back": "El hipocampo." }
] ,

columnavert:[
    { "front": "¿Cuál es la principal función de la columna vertebral?", "back": "Soportar el peso del cuerpo, proteger la médula espinal y permitir el movimiento." },
    { "front": "¿Cuánt vértebras componen la columna vertebral en el adulto?", "back": "33 vértebras." },
    { "front": "¿Cómo se dividen las vértebras de la columna vertebral?", "back": "Cervicales, torácicas, lumbares, sacras y coccígeas." },
    { "front": "¿Cuánt vértebras cervicales hay en la columna vertebral?", "back": "7 vértebras cervicales." },
    { "front": "¿Cuánt vértebras torácicas hay en la columna vertebral?", "back": "12 vértebras torácicas." },
    { "front": "¿Cuánt vértebras lumbares hay en la columna vertebral?", "back": "5 vértebras lumbares." },
    { "front": "¿Cuánt vértebras sacras hay en la columna vertebral?", "back": "5 vértebras sacras fusionadas." },
    { "front": "¿Cuánt vértebras coccígeas hay en la columna vertebral?", "back": "4 vértebras coccígeas fusionadas." },
    { "front": "¿Cuál es la curva normal de la columna vertebral en la región cervical?", "back": "Curva cervical o lordosis cervical." },
    { "front": "¿Cuál es la curva normal de la columna vertebral en la región torácica?", "back": "Curva torácica o cifosis torácica." },
    { "front": "¿Cuál es la curva normal de la columna vertebral en la región lumbar?", "back": "Curva lumbar o lordosis lumbar." },
    { "front": "¿Qué estructura de la vértebra se articula con las costillas?", "back": "Los procesos transversos y las carillas costales." },
    { "front": "¿Cómo se llama el espacio central a través del cual pasa la médula espinal?", "back": "El canal vertebral." },
    { "front": "¿Qué es el disco intervertebral y cuál es su función?", "back": "Un cartílago que actúa como amortiguador entre las vértebras y permite el movimiento de la columna." },
    { "front": "¿Qué estructura de la vértebra se encuentra en la parte posterior y sirve como punto de unión para los músculos?", "back": "El proceso espinoso." },
    { "front": "¿Cómo se llama la estructura que conecta las vértebras entre sí y proporciona estabilidad?", "back": "Los ligamentos." },
    { "front": "¿Qué tipo de articulación se encuentra entre las vértebras adyacentes?", "back": "Articulaciones facetarias o sinoviales." },
    { "front": "¿Qué vértebra cervical es conocida como el atlas?", "back": "La primera vértebra cervical." },
    { "front": "¿Qué vértebra cervical es conocida como el axis?", "back": "La segunda vértebra cervical." },
    { "front": "¿Qué estructura en el atlas permite la rotación de la cabeza?", "back": "El odontoides o diente del axis." },
    { "front": "¿Qué es una hernia de disco y dónde ocurre comúnmente?", "back": "Una protrusión del núcleo pulposo del disco intervertebral que comprime las raíces nerviosas, comúnmente en la región lumbar." },
    { "front": "¿Qué tipo de vértebras tienen procesos espinosos largos y puntiagudos?", "back": "Las vértebras torácicas." },
    { "front": "¿Qué estructura permite la flexión y extensión de la columna vertebral?", "back": "Los discos intervertebrales y las articulaciones facetarias." },
    { "front": "¿Qué vértebras tienen cuerpos más grandes para soportar el peso del cuerpo?", "back": "Las vértebras lumbares." },
    { "front": "¿Qué parte de la vértebra se articula con el disco intervertebral?", "back": "El cuerpo vertebral." },
    { "front": "¿Cómo se llama la condición en la que la curva normal de la columna se aumenta excesivamente?", "back": "Cifosis." },
    { "front": "¿Cómo se llama la condición en la que la curva normal de la columna lumbar se aumenta excesivamente?", "back": "Lordosis lumbar." },
    { "front": "¿Qué estructura conecta la vértebra al sacro en la pelvis?", "back": "El ligamento sacroilíaco." },
    { "front": "¿Cuál es la función principal del ligamento longitudinal anterior?", "back": "Prevenir la flexión excesiva de la columna vertebral." },
    { "front": "¿Qué estructura del disco intervertebral proporciona la mayor parte del amortiguamiento?", "back": "El núcleo pulposo." },
    { "front": "¿Qué estructura externa del disco intervertebral proporciona soporte y resistencia?", "back": "El anillo fibroso." },
    { "front": "¿Qué tipo de movimiento permite la columna cervical?", "back": "Flexión, extensión, inclinación lateral y rotación." },
    { "front": "¿Qué tipo de movimiento permite la columna lumbar?", "back": "Flexión y extensión principalmente." },
    { "front": "¿Cómo se llama la fractura por compresión de una vértebra?", "back": "Fractura por compresión vertebral." },
    { "front": "¿Qué vértebra torácica se identifica como T7 y T8?", "back": "Vértebras torácicas que se encuentran entre la región de las costillas." },
    { "front": "¿Qué es la escoliosis?", "back": "Una curvatura anormal de la columna vertebral en el plano coronal." },
    { "front": "¿Cómo se llama la vértebra en la región lumbar que se encuentra entre las vértebras L4 y L5?", "back": "L5." },
    { "front": "¿Cuál es el propósito de las curvas naturales de la columna vertebral?", "back": "Mejorar la distribución del peso y la flexibilidad de la columna." },
    { "front": "¿Qué estructura en la columna vertebral proporciona protección adicional a la médula espinal en la región lumbar?", "back": "Las vértebras lumbares y los ligamentos." },
    { "front": "¿Qué tipo de movimientos realiza la columna torácica?", "back": "Principalmente rotación y flexión lateral." },
    { "front": "¿Qué tipo de articulación es la articulación atlanto-occipital?", "back": "Una articulación de tipo condílea que permite la flexión y extensión de la cabeza." },
    { "front": "¿Qué es la sindesmología en el contexto de la columna vertebral?", "back": "El estudio de las articulaciones entre las vértebras." },
    { "front": "¿Qué vértebra se conoce como el 'diente' y es clave para la rotación de la cabeza?", "back": "El axis (C2)."},
    { "front": "¿Qué estructura proporciona soporte y anclaje para los músculos del cuello?", "back": "Las apófisis transversas y espinosas de las vértebras cervicales." },
    { "front": "¿Qué son las articulaciones uncovertebrales y dónde se encuentran?", "back": "Son articulaciones pequeñas entre los cuerpos de las vértebras cervicales." },
    { "front": "¿Qué tipo de vértebra es la más móvil en la columna vertebral?", "back": "Las vértebras cervicales." },
    { "front": "¿Cómo se llaman las protuberancias óseas en las vértebras torácicas donde se articulan las costillas?", "back": "Carillas costales." },
    { "front": "¿Qué tipo de vértebras tienen cuerpos grandes y procesos espinosos cortos y fuertes?", "back": "Las vértebras lumbares." },
    { "front": "¿Qué parte de la columna vertebral es más propensa a desarrollar hernias discales?", "back": "La región lumbar." },
    { "front": "¿Cuál es la principal función del ligamento amarillo?", "back": "Unir las láminas de las vértebras y permitir la flexión y extensión de la columna vertebral." },
    { "front": "¿Qué es el síndrome de cauda equina?", "back": "Una condición grave causada por la compresión de la cola de caballo en la región lumbar." }
] ,

dorso:[
    { "front": "¿Cuál es la función principal del músculo trapecio?", "back": "Elevar, retraer y rotar la escápula; también ayuda en la extensión del cuello." },
    { "front": "¿Dónde se inserta el músculo trapecio?", "back": "En la espina de la escápula, el acromion y el borde superior de la clavícula." },
    { "front": "¿Cuál es el origen del músculo dorsal ancho?", "back": "En la fascia toracolumbar, las vértebras torácicas y lumbares, y la cresta ilíaca." },
    { "front": "¿Qué acción realiza el músculo dorsal ancho?", "back": "Extiende, aduce y rota medialmente el brazo." },
    { "front": "¿Qué músculos componen el grupo de los músculos erector de la columna?", "back": "El iliocostalis, el longissimus y el espinoso." },
    { "front": "¿Qué función tienen los músculos erector de la columna?", "back": "Mantener la postura erecta y permitir la extensión y lateralización de la columna vertebral." },
    { "front": "¿Cuál es la función del músculo romboides mayor?", "back": "Retrae y rota la escápula, y ayuda a mantenerla adosada a la pared torácica." },
    { "front": "¿Dónde se inserta el músculo romboides mayor?", "back": "En el borde medial de la escápula." },
    { "front": "¿Qué músculo se encuentra inmediatamente por encima del romboides mayor y tiene una función similar?", "back": "El romboides menor." },
    { "front": "¿Cuál es la función del músculo elevador de la escápula?", "back": "Elevar la escápula y ayudar en la inclinación lateral del cuello." },
    { "front": "¿Dónde se origina el músculo elevador de la escápula?", "back": "En las apófisis transversas de las vértebras cervicales." },
    { "front": "¿Cuál es el origen del músculo serrato posterior superior?", "back": "En la parte inferior del ligamento nucal y en las apófisis espinosas de las vértebras cervicales y torácicas superiores." },
    { "front": "¿Cuál es la función del músculo serrato posterior superior?", "back": "Elevar las costillas y asistir en la inspiración." },
    { "front": "¿Dónde se inserta el músculo serrato posterior inferior?", "back": "En las apófisis espinosas de las vértebras torácicas y lumbares inferiores y en los bordes inferiores de las últimas costillas." },
    { "front": "¿Qué acción realiza el músculo serrato posterior inferior?", "back": "Deprimir las costillas y ayudar en la expiración." },
    { "front": "¿Cuál es la función principal del músculo latísimo del dorso?", "back": "Extensión, aducción y rotación medial del brazo." },
    { "front": "¿Qué músculo del dorso tiene una forma triangular y se encuentra en la región superior de la espalda?", "back": "El trapecio." },
    { "front": "¿Qué músculo se encuentra debajo del trapecio y contribuye a la movilidad de la escápula?", "back": "El dorsal ancho." },
    { "front": "¿Cuál es la principal función del músculo infraespinoso?", "back": "Rotar lateralmente el brazo y estabilizar la articulación del hombro." },
    { "front": "¿Dónde se origina el músculo infraespinoso?", "back": "En la fosa infraespinosa de la escápula." },
    { "front": "¿Qué músculos forman el manguito rotador?", "back": "El supraespinoso, infraespinoso, redondo menor y subescapular." },
    { "front": "¿Cuál es la función del músculo subescapular?", "back": "Rotar medialmente el brazo y estabilizar la articulación del hombro." },
    { "front": "¿Dónde se inserta el músculo supraespinoso?", "back": "En el tubérculo mayor del húmero y en la fosa supraespinosa de la escápula." },
    { "front": "¿Qué músculo del dorso ayuda en la rotación lateral del brazo y está ubicado debajo del trapecio?", "back": "El redondo menor." },
    { "front": "¿Qué estructura conecta el dorsal ancho con el húmero?", "back": "El tendón del dorsal ancho." },
    { "front": "¿Cómo se llama el músculo que se encuentra entre el trapecio y el dorsal ancho y contribuye a la estabilidad de la escápula?", "back": "El romboides menor." },
    { "front": "¿Qué músculo se origina en las apófisis transversas de las vértebras cervicales y está involucrado en la elevación de la escápula?", "back": "El elevador de la escápula." },
    { "front": "¿Qué músculo del dorso se encuentra en la parte inferior de la espalda y está involucrado en la extensión y aducción del brazo?", "back": "El dorsal ancho." },
    { "front": "¿Cuál es la función del músculo redondo mayor?", "back": "Aducir y rotar medialmente el brazo." },
    { "front": "¿Dónde se origina el músculo redondo mayor?", "back": "En el ángulo inferior de la escápula." },
    { "front": "¿Qué músculo está ubicado en la región superior del dorso y se extiende desde la base del cráneo hasta la región torácica?", "back": "El trapecio." },
    { "front": "¿Qué función realiza el músculo serrato posterior superior en la respiración?", "back": "Asiste en la elevación de las costillas durante la inspiración." },
    { "front": "¿Qué músculo se encuentra en la región inferior del dorso y contribuye a la deglución y respiración?", "back": "El serrato posterior inferior." },
    { "front": "¿Cuál es la función del músculo erector de la columna en la postura corporal?", "back": "Mantener la postura erecta y permitir el movimiento de la columna vertebral." },
    { "front": "¿Qué músculo del dorso se localiza debajo del trapecio y se origina en la parte inferior de la columna torácica?", "back": "El dorsal ancho." },
    { "front": "¿Cuál es el principal músculo de la extensión de la columna vertebral?", "back": "El erector de la columna." },
    { "front": "¿Cómo se llama el músculo que se encuentra debajo del dorsal ancho y ayuda a estabilizar el hombro?", "back": "El romboides menor." },
    { "front": "¿Qué músculo del dorso tiene una forma triangular y ayuda en la rotación y aducción del brazo?", "back": "El redondo mayor." },
    { "front": "¿Cuál es la función principal del músculo infraespinoso?", "back": "Rotar lateralmente el brazo y ayudar a estabilizar el hombro." },
    { "front": "¿Dónde se inserta el músculo subescapular?", "back": "En el tubérculo menor del húmero." },
    { "front": "¿Qué músculo del dorso está implicado en la extensión y la rotación medial del brazo?", "back": "El dorsal ancho." },
    { "front": "¿Qué músculo del dorso tiene un papel en la estabilización de la escápula durante el movimiento del hombro?", "back": "El serrato anterior." },
    { "front": "¿Cuál es la función del músculo redondo menor en la articulación del hombro?", "back": "Rotar lateralmente el brazo y ayudar a estabilizar la articulación del hombro." },
    { "front": "¿Qué músculo del dorso se encuentra justo encima del redondo mayor y tiene una función similar en el movimiento del brazo?", "back": "El dorsal ancho." },
    { "front": "¿Cómo se llama el músculo que se encuentra en la región posterior del dorso y que se inserta en el borde medial de la escápula?", "back": "El romboides mayor." },
    { "front": "¿Qué estructura del músculo trapecio está involucrada en la elevación del hombro?", "back": "El haz superior del trapecio." },
    { "front": "¿Cuál es el músculo que se encuentra en la parte posterior del tronco y contribuye a la rotación y extensión de la columna vertebral?", "back": "El erector de la columna." },
    { "front": "¿Qué músculo del dorso se origina en la parte inferior del cuello y la parte superior del torácico y tiene un papel en la  elevación de las costillas?", "back": "El serrato posterior superior." },
    { "front": "¿Cómo se llama el músculo que se encuentra en la región posterior del tronco y tiene una función principal en la aducción y extensión del brazo?", "back": "El dorsal ancho." },
    { "front": "¿Qué músculo está involucrado en la rotación lateral del brazo y está ubicado en la parte posterior del tórax?", "back": "El infraespinoso." },
    { "front": "¿Cuál es el principal músculo que contribuye a la rotación medial del brazo en el dorso?", "back": "El subescapular." },
    { "front": "¿Qué músculo se encuentra en la región posterior y medial del tronco y ayuda a mantener la postura erguida?", "back": "El erector de la columna." },
    { "front": "¿Cuál es la función del músculo trapecio en la extensión del cuello?", "back": "Ayuda en la extensión del cuello cuando actúa unilateralmente o bilateralmente." }
] ,

craneo: [
    {
        "front": "¿Cuál es el hueso que forma la parte superior del cráneo?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso se encuentra en la parte posterior del cráneo?",
        "back": "El hueso occipital."
    },
    {
        "front": "¿Qué hueso forma la base de la nariz y parte del paladar?",
        "back": "El hueso maxilar."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte inferior de la mandíbula?",
        "back": "El hueso mandibular."
    },
    {
        "front": "¿Qué hueso está situado en la región temporal del cráneo?",
        "back": "El hueso temporal."
    },
    {
        "front": "¿Qué hueso forma el techo de la órbita ocular?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso forma la parte inferior de la cavidad nasal?",
        "back": "El hueso palatino."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte medial de la órbita ocular?",
        "back": "El hueso lagrimal."
    },
    {
        "front": "¿Qué hueso forma el lateral de la cabeza y la parte superior de la cavidad nasal?",
        "back": "El hueso cigomático."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte posterior del techo de la cavidad nasal?",
        "back": "El hueso etmoides."
    },
    {
        "front": "¿Qué hueso se encuentra en la región occipital y tiene el foramen magnum?",
        "back": "El hueso occipital."
    },
    {
        "front": "¿Qué hueso está situado en la región lateral del cráneo y contiene la apófisis mastoides?",
        "back": "El hueso temporal."
    },
    {
        "front": "¿Cuál es el hueso que forma el arco de la ceja?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso se encuentra en la base del cráneo y se articula con el hueso occipital?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Qué hueso forma el paladar duro junto con el hueso maxilar?",
        "back": "El hueso palatino."
    },
    {
        "front": "¿Cuál es el hueso que forma el puente de la nariz?",
        "back": "El hueso nasal."
    },
    {
        "front": "¿Qué hueso se encuentra en la región central del cráneo y tiene la silla turca?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Cuál es el hueso que forma la región inferior del cráneo y sostiene los dientes superiores?",
        "back": "El hueso maxilar."
    },
    {
        "front": "¿Qué hueso forma la parte posterior de la mandíbula?",
        "back": "El hueso mandibular."
    },
    {
        "front": "¿Qué hueso forma el borde de la órbita ocular?",
        "back": "El hueso cigomático."
    },
    {
        "front": "¿Qué hueso se encuentra en la parte superior del hueso temporal y forma parte del oído medio?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte superior y posterior del cráneo?",
        "back": "El hueso parietal."
    },
    {
        "front": "¿Qué hueso se articula con el hueso frontal y forma parte del techo nasal?",
        "back": "El hueso etmoides."
    },
    {
        "front": "¿Qué hueso forma el borde inferior de la órbita ocular?",
        "back": "El hueso maxilar."
    },
    {
        "front": "¿Cuál es el hueso que contiene la apófisis cigomática?",
        "back": "El hueso temporal."
    },
    {
        "front": "¿Qué hueso tiene la apófisis coronoides en la mandíbula?",
        "back": "El hueso mandibular."
    },
    {
        "front": "¿Qué hueso forma la parte superior de las mejillas?",
        "back": "El hueso cigomático."
    },
    {
        "front": "¿Cuál es el hueso que forma el tabique nasal?",
        "back": "El hueso etmoides."
    },
    {
        "front": "¿Qué hueso tiene la espina nasal anterior?",
        "back": "El hueso maxilar."
    },
    {
        "front": "¿Qué hueso se encuentra en la base del cráneo y forma parte del clivus?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Cuál es el hueso que forma la región anterior del cráneo y tiene la apófisis frontal?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso se articula con el hueso parietal en la sutura coronal?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso tiene el foramen oval en su base?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte inferior de la cavidad ocular y el paladar?",
        "back": "El hueso palatino."
    },
    {
        "front": "¿Qué hueso tiene la apófisis mastoides en su estructura?",
        "back": "El hueso temporal."
    },
    {
        "front": "¿Qué hueso forma el techo de la boca?",
        "back": "El hueso palatino."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte central y inferior del cráneo?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Qué hueso está situado en la parte posterior de la órbita ocular?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Qué hueso se articula con el hueso occipital en la sutura lambdoidea?",
        "back": "El hueso parietal."
    },
    {
        "front": "¿Qué hueso tiene el foramen infraorbitario?",
        "back": "El hueso maxilar."
    },
    {
        "front": "¿Cuál es el hueso que forma el puente de la nariz?",
        "back": "El hueso nasal."
    },
    {
        "front": "¿Qué hueso forma la parte superior del hueso palatino?",
        "back": "El hueso esfenoides."
    },
    {
        "front": "¿Qué hueso forma la parte inferior del cráneo y sostiene los dientes inferiores?",
        "back": "El hueso mandibular."
    },
    {
        "front": "¿Qué hueso forma la región medial de la cavidad nasal?",
        "back": "El hueso etmoides."
    },
    {
        "front": "¿Cuál es el hueso que contiene el seno frontal?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso está situado en la parte superior de la mandíbula y sostiene los dientes superiores?",
        "back": "El hueso maxilar."
    },
    {
        "front": "¿Qué hueso forma la parte superior de la cavidad ocular y del puente nasal?",
        "back": "El hueso frontal."
    },
    {
        "front": "¿Qué hueso se encuentra en la parte inferior del cráneo y tiene la apófisis condílea?",
        "back": "El hueso mandibular."
    },
    {
        "front": "¿Qué hueso tiene el foramen jugular en su estructura?",
        "back": "El hueso temporal."
    },
    {
        "front": "¿Cuál es el hueso que forma la parte medial del arco cigomático?",
        "back": "El hueso cigomático."
    },
    {
        "front": "¿Qué hueso forma el techo del paladar?",
        "back": "El hueso palatino."
    }
]

 ,


        // Agrega datos para otros temas aquí...
    };

    const FLASHCARDS_PER_PAGE = 6;
    let currentData = [];
    let currentPage = 1;

    function showFlashcards(cards, page) {
        flashcardsContainer.innerHTML = '';

        const start = (page - 1) * FLASHCARDS_PER_PAGE;
        const end = Math.min(start + FLASHCARDS_PER_PAGE, cards.length);
        const visibleCards = cards.slice(start, end);

        visibleCards.forEach(card => {
            const flashcard = document.createElement('div');
            flashcard.className = 'flashcard';

            const front = document.createElement('div');
            front.className = 'card front';
            front.innerText = card.front;

            const back = document.createElement('div');
            back.className = 'card back';
            back.innerText = card.back;

            flashcard.appendChild(front);
            flashcard.appendChild(back);

            flashcard.addEventListener('click', () => {
                flashcard.classList.toggle('flipped');
            });

            flashcardsContainer.appendChild(flashcard);
        });

        pageInfo.innerText = `Página ${page} de ${Math.ceil(cards.length / FLASHCARDS_PER_PAGE)}`;
        prevPageButton.disabled = page === 1;
        nextPageButton.disabled = page === Math.ceil(cards.length / FLASHCARDS_PER_PAGE);
    }

    function updateFlashcards() {
        const selectedTheme = themeSelector.value;
        currentData = flashcardsData[selectedTheme] || [];
        showFlashcards(currentData, currentPage);
    }

    themeSelector.addEventListener('change', () => {
        currentPage = 1;
        updateFlashcards();
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showFlashcards(currentData, currentPage);
        }
    });

    nextPageButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(currentData.length / FLASHCARDS_PER_PAGE)) {
            currentPage++;
            showFlashcards(currentData, currentPage);
        }
    });

    // Cargar el tema por defecto al inicio
    themeSelector.value = 'artrologia';
    updateFlashcards();
});
