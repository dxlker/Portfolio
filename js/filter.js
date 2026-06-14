"use strict";
/**
 * Project Filter Systeem voor Retro Portfolio
 * * BRONVERMELDINGEN & DOCUMENTATIE GEBRUIKT VOOR DEZE CODE:
 * - TypeScript Element Casting: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
 * - HTML5 Dataset API: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
 * - Input Event Handling: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 */

const searchInput = document.getElementById('project-search');
const counterElement = document.getElementById('project-counter');
// Bron voor NodeListOf: MDN - Document.querySelectorAll()
const projects = document.querySelectorAll('.project');
/**
 * Functie die de projecten filtert op basis van de zoekterm
 * @param searchTerm De tekst die de gebruiker intypt
 */
function filterProjects(searchTerm) {
    let visibleCount = 0;
    
    const cleanSearch = searchTerm.toLowerCase().trim();
    
    projects.forEach((project) => {
        
        const title = project.dataset.title || "";
        const tags = project.dataset.tags || "";
        
        if (title.includes(cleanSearch) || tags.includes(cleanSearch)) {
            project.style.display = 'block'; 
            visibleCount++;
        
            const nextHr = project.nextElementSibling;
            if (nextHr && nextHr.tagName === 'HR') {
                nextHr.style.display = 'block';
            }
        }
        else {
            project.style.display = 'none';
            
            const nextHr = project.nextElementSibling;
            if (nextHr && nextHr.tagName === 'HR') {
                nextHr.style.display = 'none';
            }
        }
    });

    if (counterElement) {
        counterElement.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projecten'} gevonden`;
    }
}

if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const target = event.target;
        filterProjects(target.value);
    });
}
