const url = "http://localhost:3000/api/getPosts";

// Récupération des posts à partir de l'API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const postsList = document.getElementById("posts-list");
    for (let post of data.data) {
      const listItem = document.createElement("div");
      listItem.innerHTML = `<div class="card blue"><strong>${post.title}</strong><br>${post.content}<br>Posté par ${post.user_id}<br><br></div>`;
      postsList.appendChild(listItem);
    }
  })
  .catch(error => console.error(error));