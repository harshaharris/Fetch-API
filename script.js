const userList = document.getElementById("userList");
const errorMsg = document.getElementById("errorMsg");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
  userList.innerHTML = "";
  errorMsg.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(card);
      });
    })
    .catch((error) => {
      errorMsg.textContent = "Failed to load user data. Please check your internet connection.";
      console.error("Error fetching users:", error);
    });
}

fetchUsers();


reloadBtn.addEventListener("click", fetchUsers);
