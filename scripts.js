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
]
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
