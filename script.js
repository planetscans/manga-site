const mangaList = [
  {
    title: "Solo Leveling",
    image: "https://via.placeholder.com/150",
    chapters: [
      { name: "Chapter 1", images: ["https://via.placeholder.com/800x1200"] },
      { name: "Chapter 2", images: ["https://via.placeholder.com/800x1200"] }
    ]
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
    div.onclick = () => showChapters(manga);
    container.appendChild(div);
  });
}

function showChapters(manga) {
  container.innerHTML = `<h2>${manga.title}</h2>`;
  manga.chapters.forEach(ch => {
    const btn = document.createElement("button");
    btn.innerText = ch.name;
    btn.onclick = () => readChapter(ch);
    container.appendChild(btn);
  });
}

function readChapter(chapter) {
  container.innerHTML = "";
  chapter.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.style.width = "100%";
    container.appendChild(image);
  });
}

displayManga(mangaList);