/**
 * Project Filter Systeem voor Retro Portfolio
 * * BRONVERMELDINGEN & DOCUMENTATIE GEBRUIKT VOOR DEZE CODE:
 * - TypeScript Element Casting: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
 * - HTML5 Dataset API: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
 * - Input Event Handling: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 */

// 1. Selecteer de DOM-elementen met strikte TypeScript Types (Type Assertion)
// Bron voor 'as HTMLInputElement': TypeScript Handbook - Type Assertions
const searchInput = document.getElementById('project-search') as HTMLInputElement | null;
const counterElement = document.getElementById('project-counter') as HTMLSpanElement | null;

// Bron voor NodeListOf: MDN - Document.querySelectorAll()
const projects: NodeListOf<HTMLElement> = document.querySelectorAll('.project');

/**
 * Functie die de projecten filtert op basis van de zoekterm
 * @param searchTerm De tekst die de gebruiker intypt
 */
function filterProjects(searchTerm: string): void {
    let visibleCount: number = 0;
    // Zet de zoekterm om naar kleine letters voor een case-insensitive vergelijking
    const cleanSearch: string = searchTerm.toLowerCase().trim();

    // Loop door alle projecten heen
    // Bron voor forEach op NodeList: MDN - NodeList.prototype.forEach()
    projects.forEach((project: HTMLElement) => {
        // Haal de data uit de HTML-attributen via de Dataset API
        // Bron voor dataset: MDN - HTMLElement.dataset
        const title: string = project.dataset.title || "";
        const tags: string = project.dataset.tags || "";

        // Controleer of de zoekterm voorkomt in de titel OF in de tags
        // Bron voor string.includes(): MDN - String.prototype.includes()
        if (title.includes(cleanSearch) || tags.includes(cleanSearch)) {
            project.style.display = 'block'; // Toon project
            visibleCount++;
            
            // Als het project getoond wordt, moet de <hr> daarna ook zichtbaar zijn
            const nextHr = project.nextElementSibling as HTMLElement | null;
            if (nextHr && nextHr.tagName === 'HR') {
                nextHr.style.display = 'block';
            }
        } else {
            project.style.display = 'none'; // Verberg project
            
            // Verberg ook de <hr> als het project verborgen is
            const nextHr = project.nextElementSibling as HTMLElement | null;
            if (nextHr && nextHr.tagName === 'HR') {
                nextHr.style.display = 'none';
            }
        }
    });

    // Pas de teller live aan op het scherm
    if (counterElement) {
        counterElement.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projecten'} gevonden`;
    }
}

// 2. Voeg de Event Listener toe aan de zoekbalk
// Bron voor 'input' event: MDN - HTMLElement: input event
if (searchInput) {
    searchInput.addEventListener('input', (event: Event) => {
        // Haal de actuele waarde op uit het input veld
        const target = event.target as HTMLInputElement;
        filterProjects(target.value);
    });
}