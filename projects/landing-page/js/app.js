/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const sectionList = document.getElementsByTagName('section');
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
* @description adds HTML for the navigation bar for each section
* @param sectionID
* @param sectionName, stored in its data-nav attribute
* @returns HTML formatting for navbar
*/
function navHTML(id, name){
    return `<a class ="menu__link" anchor-id="${id}">${name}</a>`;
}

/**
* @description checks if a section is in the viewport
* @param section element
* @returns True if section fits within the rectangle parameters, false otherwise
* code adopted from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-     visible-in-the-current-viewport/7557433#7557433
*/
function inViewport(section){
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left  >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//@description: builds the navigation bar and adds each section link 
function buildNav(){
    for(let i = 0; i < sectionList.length; i++){
        const navBarElement = document.createElement('li'); //create new li element for navbar
        const sectionName = sectionList[i].getAttribute('data-nav') //get the name of section
        const sectionId = sectionList[i].getAttribute('id') //and get its id
        navBarElement.innerHTML = navHTML(sectionId, sectionName)
        fragment.appendChild(navBarElement); //append to document fragment
    }
    navBar.appendChild(fragment); //add the navbarhtml to the navbar to format
};

// Add class 'active' to section when near top of viewport
function addActive(){
    for (let i = 0; i < sectionList.length; i++){
        if (inViewport(sectionList[i])){ //if inViewport returns True, set active class
            sectionList[i].classList.add("your-active-class");
            console.log("active class added");
        } else {
            sectionList[i].classList.remove("your-active-class"); //remove class for non active sections
        }
    }
};

// Scroll to anchor ID using scrollTO event
function scrollToSection(event){
    const id = event.target.getAttribute('anchor-id'); //get the ID of the section that was clicked in nav
    const sect = document.getElementById(id); //find that section's unique ID
    sect.scrollIntoView({behavior: "smooth"}); //scroll smoothly to the section
};

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
buildNav();

// Scroll to section on link click
navBar.addEventListener('click', function(event) {
    scrollToSection(event);
})

// Set sections as active. Updated, changed to set active class on scroll instead of calling method outright
document.addEventListener('scroll', addActive); 