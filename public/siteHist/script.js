document.getElementById('command').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {//Key to enter the CMD
        const commandInput = this.value.toLowerCase();//Ensures that the command is not case sensitive
        const parts = commandInput.split(' ');  //Splits the command and the arguments
        const command = parts[0]; //Fitst part of the command is the command itself
        const output = document.getElementById('cli-output');
        
		//Switch statement to handle the commands
        switch (command) {
			case 'help'://Help command, shows the available commands
                output.innerHTML += `<p class="blue-text">Available commands: <br> 1. 'contact' - shows you my contact info. <br> 2. 'portfolio' - View more portfolio.<br> 3. 'about' - Learn more about me.<br> 4. 'cv' - Link to my cv. <br> 5. 'socials' - List of socials.<br> 6. 'fox' - Prints an image of an random fox. <br> 7. 'setbg' - Sets the background colour. <br> 8. 'speak' - CLI will speak your truth. <br> 9. 'open' - open a website. <br> 10. 'fact' - A random fact.<br> 11. 'joke' - A random programming joke.<br> 12. 'old' - Load my original portfolio. <br> 13. 'clear' - Clear the terminal.</p>`;
                break;
			case 'contact'://Contact command, shows the contact info
                output.innerHTML += `<p class="blue-text">You can contact me via the listed socials or send me an email directly at jacobvillard@gmail.com look forward to hearing from you!</p>`;
                break;
            case 'portfolio'://Portfolio command, shows the portfolio
                output.innerHTML += `<p class="blue-text">
				    <p class="blue-text">
                     You are currently viewing my portfolio. Click <a href="https://www.artstation.com/jacobvillard" target="_blank">here</a> to view more of my work.
        			</p>
				 <p>`;
                break;
            case 'about'://about command, shows the about me
                output.innerHTML += `<p class="blue-text">This is my portfolio website. I'm a passionate game designer. Click <a href="Persona.pdf" target="_blank">here</a> to view more detail about me.</p>`;
                break; 
            case 'hello':
            case 'hi':
                output.innerHTML += `<p class="blue-text">Hello World!</p>`;
                break;	
            case 'fact'://Fact command, shows a random fact
		    	fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        			.then(response => response.json())
        			.then(data => {
            				output.innerHTML += `<p class="blue-text">${data.text}</p>`;
        	   		});
				break;
            case 'joke'://Joke command, shows a random joke
                fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
 		       .then(response => response.json())
     		   .then(data => {
     		       output.innerHTML += `<p class="blue-text">${data.joke}</p>`;
                    });
                break;	
   	    	case 'setbg'://Setbg command, sets the background color
    			const color = commandInput.split(' ')[1]; // Get the color from the command
    			if (color) {
        			document.body.style.backgroundColor = color; // Set the background color
        			output.innerHTML += `<p class="blue-text">Background color changed to ${color}.</p>`;
    			} else {
        			output.innerHTML += `<p class="red-text">Please specify a color (e.g., 'setbg red').</p>`;
    			}
    			break;
				
			case 'old'://Load the old portfolio
				window.open("oldSite/index.html", "_blank");
				break;
		    case 'speak'://Speaks the message
    			const message = commandInput.substring(6); // Remove the 'speak ' part of the command
	    		if (message) {
    	    		let msg = new SpeechSynthesisUtterance(message);
        			window.speechSynthesis.speak(msg);
        			output.innerHTML += `<p class="blue-text">Speaking: "${message}"</p>`;
    			} else {
   		     		output.innerHTML += `<p class="red-text">Please provide a message to speak (e.g., 'speak Hello!').</p>`;
    			}
    			break;
		    case 'open'://Open command, opens a URL
	    		const urlInput = commandInput.substring(5).trim(); // Get the rest of the command as URL
    			    if (urlInput) {
   	     		let url = urlInput;
    	    		if (!urlInput.startsWith('http://') && !urlInput.startsWith('https://')) {
    	            	    url = 'https://' + urlInput; // Prepend 'https://' if missing
     		   		}
    	    		window.open(url, '_blank'); // Open the URL in a new tab
    	    		output.innerHTML += `<p class="blue-text">Opening <a href="${url}" target="_blank">${url}</a></p>`;
    			    } else {
    	    		output.innerHTML += `<p class="red-text">Please provide a URL to open (e.g., 'open youtube.com').</p>`;
    			    }
    			break;
	    	case 'fox'://Fox command, shows a random fox image
    			fetch('https://randomfox.ca/floof/')
        		    .then(response => response.json())
        		    .then(data => {
            			output.innerHTML += `<img src="${data.image}" alt="Random Fox" style="max-width:100%;">`;
        		    })
    			break;
            case 'socials'://Socials command, shows the social media links
                output.innerHTML += `
        	    <p class="blue-text">
            	    Connect with me on social media:<br>
            	        <a href="https://www.artstation.com/jacobvillard" target="_blank">Artstation</a><br>
            	        <a href="https://www.linkedin.com/in/jacobvillard/" target="_blank">LinkedIn</a><br>
                        <a href="https://x.com/jacobvillard" target="_blank">Twitter</a><br>
                        <a href="https://linktr.ee/jacobvillard" target="_blank">Linktree</a><br>
                        <a href="https://jacobvillard.wordpress.com/" target="_blank">Blog</a><br>
                        <a href="https://github.com/Darknerior" target="_blank">Github</a><br>
                        <a href="https://darknerior.itch.io/" target="_blank">Itch</a><br>
        		</p>`;
                break;
            case 'cv'://cv command, shows the cv
                output.innerHTML += `<p class="blue-text"> Click <a href="CV.pdf" target="_blank">here</a> to view my cirriculum vitae.</p>`;
                break;
			case 'pong'://Pong command, starts the pong game
				output.innerHTML += `<p class="blue-text">Starting Reverse Pong...</p>`;
				startPongGame();
				this.value = ''; // Clear the input
				break
            case 'clear'://clear command, clears the terminal
                output.innerHTML = '';
                break;
            default://Default case, shows an error message
                output.innerHTML += `<p class="red-text">Error: Unknown command. Type 'help' for a list of available commands.</p>`;
        }

        this.value = ''; // Clear input after processing
        output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom of the terminal
    }
});

// Display the welcome message with purple text on page load
window.onload = function() {
    const output = document.getElementById('cli-output');
    output.innerHTML += `<p class="purple-text">Welcome to My Portfolio! Type "help" for a list of available commands</p>`;
};

// Function to set the active section and display corresponding content
function setActiveSection(selectedButton, sectionId) {
	// Set the active button
	const buttons = document.querySelectorAll('.section-buttons button');
	buttons.forEach(button => button.classList.remove('active'));
	selectedButton.classList.add('active');

	// Hide all sections and show the selected one
	const sections = document.querySelectorAll('.content-section');
	sections.forEach(section => section.classList.remove('active'));

	document.getElementById(sectionId).classList.add('active');

	// Special handling for the Career section
	if (sectionId === "career") {
		document.querySelector(".career-tabs").style.display = "flex"; // Show career category buttons
		document.querySelectorAll(".career-card").forEach(card => {
			card.style.display = "block"; // Show all career cards
		});
	} else {
		document.querySelector(".career-tabs").style.display = "none"; // Hide category buttons
		document.querySelectorAll(".career-card").forEach(card => {
			card.style.display = "none"; // Hide all career cards
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Set "Projects" as the active section on load
	const projectsButton = document.querySelector('.section-buttons button:nth-child(1)');
	setActiveSection(projectsButton, 'projects');

	// Function to filter career categories
	window.filterCategory = function (category) {
		const allCards = document.querySelectorAll(".career-card");
		const buttons = document.querySelectorAll(".career-tabs button");

		// Remove active class from all buttons and add to clicked one
		buttons.forEach(btn => btn.classList.remove("active"));
		event.target.classList.add("active");

		// Show or hide cards based on category
		allCards.forEach(card => {
			if (category === "All" || card.dataset.category === category) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}
		});
	};
});
