const form1 = document.getElementById('flag-form-1');
if (form1){
	form1.addEventListener('submit', (event) => {
		event.preventDefault();
		checkAnswer("input-field-flag-1")
	});
}
const form2 = document.getElementById('flag-form-2');
if (form2){
	form2.addEventListener('submit', (event) => {
		event.preventDefault();
		checkAnswer("input-field-flag-2")
	});
}
const form3 = document.getElementById('flag-form-3');
if (form3){
	form3.addEventListener('submit', (event) => {
		event.preventDefault();
		checkAnswer("input-field-flag-3")
	});
}



function checkAnswer(form){
	let title = document.getElementById(form).title;
	let flag = document.getElementById(form).value;

	let data = {
		title: title,
		flag: flag
	};

	fetch('http://localhost:3000/api/getFlag', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => response.json())
		.then(data => {
			if (data.data.length > 0) {
				alert('Bonne réponse, bien joué');
			} else {
				alert('Réponse incorrect');
			}
		})
		.catch(error => console.error(error));
}