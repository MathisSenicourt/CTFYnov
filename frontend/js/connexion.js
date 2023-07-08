const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	let data = {
		email: email,
		password: password
	};

	fetch('http://localhost:3000/api/getUser', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(data => {
		if (data.data.length > 0) {
			sessionStorage.setItem('nom', data.data[0].name);
			window.location.href = 'index.html';
		} else {
			alert('Email ou mot de passe incorrect');
		}
	})
	.catch(error => console.error(error));
});