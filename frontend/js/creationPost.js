function handleEvent(event) {
    event.preventDefault()

    const currentDate = new Date()

    const post = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        currentDate : currentDate,
        user_id: sessionStorage.getItem('nom')
    }
    fetch('http://localhost:3000/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Post created successfully') {
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 3000); // délai de 3 secondes
        } else {
          alert('Erreur lors de la création du post');
        }
      })
      .catch(error => console.error(error));

}