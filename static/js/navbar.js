// Get references to HTML DOM elements
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar-open');
const body = document.querySelector('#body');

// Add event listeners
burger.addEventListener('click', openNavbar);
window.addEventListener('resize', media);

// Initialise global variables
var counter = 0;

// Function declarations

// Handles the opening and closing of the navbar when the burger is pressed
function openNavbar()
{
    // To open the navbar
    if (counter % 2 === 0)
    {
        // Animate the navbar
        navbar.style.transform = 'translateY(0%)';
        if (body !== null)
        {
            body.style.transform = 'translateY(0px)';
        }
    }
    // To close the navbar
    else
    {
        navbar.style.transform = 'translateY(-100%)';
        if (body !== null)
        {
            body.style.transform = 'translateY(-150px)';
        }
    }

    counter++ ;
}

// Handles changes when the window size changes
function media()
{
    let mqShrink = window.matchMedia('(max-width: 678px)');
    if (body != null)
    {
        // If the screen size is small
        if (mqShrink.matches)
        {
            body.style.transform = 'translateY(-150px)';
        }
        else
        {
            body.style.transform = 'translate(0px)';
        }
    }
}
