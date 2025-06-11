const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "image 1 men.avif"
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    image: "image 2 men.jpg"
  },
  {
    name: "Clara Reyes",
    email: "clara@example.com",
    image: "imagesimage 3.jpg"
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    image: "image 4.webp"
  }
];

const container = document.getElementById('user-container');

users.forEach(user => {
  const card = document.createElement('div');
  card.className = 'user-card';
  card.innerHTML = `
    <img src="${user.image}" alt="${user.name}">
    <h3>${user.name}</h3>
    <p>${user.email}</p>
  `;
  container.appendChild(card);
});