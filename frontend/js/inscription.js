function handleSubmit(event) {
	event.preventDefault();
	const user = {
	  name: document.getElementById('name').value,
	  email: document.getElementById('email').value,
	  password: document.getElementById('password').value
	};
	fetch('http://localhost:3000/api/createUser', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(user)
	})
	.then(response => response.json())
	.then(data => {
	  if (data.message === 'User created successfully') {
		setTimeout(() => {
		  window.location.href = 'index.html';
		}, 3000); // délai de 3 secondes
	  } else {
		alert('Erreur lors de la création de l\'utilisateur');
	  }
	})
	.catch(error => console.error(error));
  }
  