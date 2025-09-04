document.getElementById('closeDialog').addEventListener('click', () => document.getElementById('inviteDialog').close());
document.getElementById('inviteDialog').showModal();

const targetDate = new Date(2025, 8, 17, 17, 0);

const wishes = [
  {
    img: "https://cdn.sanity.io/images/gtd4w1cq/production/becdad013a788bc6f8d8fbdc8a6314c3349409bb-1316x1645.jpg?auto=format",
    url: "https://de.nothing.tech/products/phone-3a?Farbe=Wei%C3%9F&Fassungsverm%C3%B6gen=12%2B256GB",
    title: "Nothing Phone 3a"
  },
  {
    img: "https://github.com/Qsenja/wishlist/blob/main/wishlist1.jpg?raw=true",
    url: "https://shorturl.at/1GSKw",
    title: "Schutzhülle"
  },
  {
    img: "https://github.com/Qsenja/wishlist/blob/main/wishlist2.jpg?raw=true",
    url: "https://shorturl.at/64VE0",
    title: "Panzerglas"
  },
  {
    img: "https://github.com/Qsenja/wishlist/blob/main/wishlist3.jpg?raw=true",
    url: "https://shorturl.at/QKU3I",
    title: "Kameraschutz"
  }
];

const wishlist = document.querySelector('.wishlist');
wishes.forEach(w => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${w.img}" alt="${w.title}">
        <div class="title">${w.title}</div>
        <button onclick="openWish('${w.url}')">Click mich</button>
    `;
    card.addEventListener('click', () => openWish(w.url));
    wishlist.appendChild(card);
});

function openWish(url) { window.open(url, '_blank'); }

function updateCountdown() {
    const diff = targetDate - new Date();
    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<div class="unit">🎉</div>';
        return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById('cd-days').textContent = d;
    document.getElementById('cd-hours').textContent = h.toString().padStart(2,'0');
    document.getElementById('cd-mins').textContent = m.toString().padStart(2,'0');
    document.getElementById('cd-secs').textContent = s.toString().padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1);
