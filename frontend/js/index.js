const url = "http://localhost:3000/api/getPosts";

// Récupération des posts à partir de l'API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const postsList = document.getElementById("posts-list");
    for (let post of data.data) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${post.title}</strong><br>${post.content}<br>Posté par utilisateur ${post.user_id} le ${new Date(post.created_at).toLocaleString()}<br><br>`;
      postsList.appendChild(listItem);
    }
  })
  .catch(error => console.error(error));