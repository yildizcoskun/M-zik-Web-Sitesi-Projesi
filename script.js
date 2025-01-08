// JavaScript for interactive features

document.addEventListener("DOMContentLoaded", () => {
  // Add Bar Functionality
  const addBar = document.querySelector(".add-bar");
  addBar.addEventListener("submit", (event) => {
      event.preventDefault();
      const addInput = addBar.querySelector("input").value;
  });

  // Playlist Card Interaction
  const playlistCards = document.querySelectorAll(".playlist-card");
  playlistCards.forEach((card) => {
      card.addEventListener("click", () => {
          alert(`Opening playlist: ${card.textContent}`);
      });
  });

  // Navigation Smooth Scroll
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50, // Offset for sticky header
                  behavior: "smooth"
              });
          }
      });
  });
});
function createPlaylist(event) {
    event.preventDefault();
    const playlistNameInput = document.getElementById('playlistName');
    const playlistName = playlistNameInput.value;

    const playlistContainer = document.querySelector('.playlist-container');
    const newPlaylist = document.createElement('div');
    newPlaylist.className = 'playlist-card';
    newPlaylist.textContent = playlistName || 'New Playlist';

    playlistContainer.appendChild(newPlaylist);
    playlistNameInput.value = ''; // input'u temizle
}
function createPlaylist(event) {
    event.preventDefault();
    const playlistNameInput = document.getElementById('playlistName');
    const playlistName = playlistNameInput.value;

    const playlistContainer = document.querySelector('.playlist-container');
    const newPlaylist = document.createElement('div');
    newPlaylist.className = 'playlist-card';
    newPlaylist.innerHTML = `
        ${playlistName || 'New Playlist'}
        <button class="remove-playlist" onclick="this.parentElement.remove()">×</button>
    `;

    playlistContainer.appendChild(newPlaylist);
    playlistNameInput.value = '';
}
