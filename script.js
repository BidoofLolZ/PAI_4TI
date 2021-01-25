var open = document.getElementById('open');

open.addEventListener('click',myFunction);

function myFunction() 
{
    var nav = document.getElementById("navbar");
    if (nav.className === "navbar") 
    {
            nav.className += " responsive";
            nav.className += " animation";
    } 
    else 
    {

    }
}


var navbar = document.getElementById('navbar');

document.addEventListener('click',
function(event) 
    {
        var isClickInside = navbar.contains(event.target);

        if (!isClickInside) 
        {
            if(navbar.className != "navbar responsive")
            {
                
            }
            else
            {
                setTimeout(function () 
                    {
                        navbar.className = "navbar";
                    },
                        1000);
                navbar.className = "navbar responsive animation";
            }
            
        }
        else
        {
            navbar.className = "navbar responsive";
        }
    }
);