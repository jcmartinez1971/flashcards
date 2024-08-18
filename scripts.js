document.addEventListener('DOMContentLoaded', () => {
    const flashcardsContainer = document.getElementById('flashcards-container');
    const themeSelector = document.getElementById('theme-selector');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    const flashcardsData = {
        osteologia: [
            { front: "¿Qué es la osteología?", back: "El estudio de los huesos." },
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
    { "front": "¿Qué hueso se articula con el atlas y forma el eje de rotación de la cabeza?", "back": "El axis." }
            // Agrega más flashcards aquí...
        ],
        artrologia: [
            { front: "¿Qué es una articulación?", back: "Es una unión entre dos o más huesos que permite el movimiento." },
            // Agrega más flashcards aquí...
        ],
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
