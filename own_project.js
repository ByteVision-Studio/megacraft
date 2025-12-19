function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const activeButtons = document.querySelectorAll('.filter-buttons button');
  
    activeButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-buttons button[data-category="${category}"]`).classList.add('active');
  
    cards.forEach(card => {
      const matchesCategory = category === 'all' || card.classList.contains(category);
      card.style.display = matchesCategory ? 'flex' : 'none';
    });
  
    liveSearch();
  }
  
  function liveSearch() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.project-card');
  
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const currentlyVisible = card.style.display !== 'none';
      const matchesSearch = title.includes(input);
  
      if (matchesSearch && currentlyVisible) {
        card.style.display = 'flex';
      } else if (!input && currentlyVisible) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  function addProject() {
    const title = prompt("Projekttitel:");
    const imageUrl = prompt("Bild-URL:");
    const category = prompt("Kategorie (z.B. redstone, bauwerke, fantasy):");
    const link = prompt("Link zur Projektseite (z. B. projekt6.html):");
  
    if (!title || !imageUrl || !category || !link) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }
  
    const newCard = document.createElement('div');
    newCard.className = `project-card ${category}`;
    newCard.onclick = () => location.href = link;
    newCard.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <div class="project-info">
        <h2>${title}</h2>
      </div>
    `;
  
    document.querySelector('.project-list').appendChild(newCard);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    filterProjects('all');
  });
  