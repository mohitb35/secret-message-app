const { hash } = window.location;

if(hash === ''){
	const form = document.querySelector('form');

	form.addEventListener('submit', event => {
		event.preventDefault();
	
		// Get value from message input
		const messageInput = document.querySelector('#message-input');
		const encodedInput = btoa(messageInput.value);
	
		if(encodedInput !== ''){
			// Hide message card
			const messageCard = document.querySelector('#message-card');
			messageCard.classList.add('hide');
	
			// Show link card
			const linkCard = document.querySelector('#link-card');
			linkCard.classList.remove('hide');
	
			// Set link input value
			const linkInput = document.querySelector('#link-input');
			linkInput.value = `${window.location.href}#${encodedInput}`;
			linkInput.select();
		}
	})
} else {
	// Hide message card
	const messageCard = document.querySelector('#message-card');
	messageCard.classList.add('hide');

	// Show link card
	const messageShow = document.querySelector('#message-show');
	messageShow.classList.remove('hide');

	const h2 = messageShow.querySelector('h2');
	h2.innerText = atob(hash.replace('#', ''));
}


