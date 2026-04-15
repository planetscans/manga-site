const mangaList = [
  {
    title: "Solo Leveling",
    image: "https://via.placeholder.com/150",
    chapters: ["Chapter 1", "Chapter 2"]
  },
  {
    title: "Attack on Titan",
    image: "https://via.placeholder.com/150",
    chapters: ["Chapter 1", "Chapter 2"]
  }
];

const container = document.getElementById("manga-list");

function displayManga(list) {
  container.innerHTML = "";
  list.forEach(manga => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${manga.image}">
      <h3>${manga.title}</h3>
    `;
    div.onclick = () => openManga(manga);
    container.appendChild(div);
  });
}

function openManga(manga) {
  alert("الفصول:\n" + manga.chapters.join("\n"));
}

document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = mangaList.filter(m => m.title.toLowerCase().includes(value));
  displayManga(filtered);
});

displayManga(mangaList);