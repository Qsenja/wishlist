/* ========== 1) Countdown-Ziel einfach ändern ========== */
// Format: new Date(Jahr, Monat-1, Tag, Stunde, Minute)
const targetDate = new Date(2025, 8, 17, 17, 0); // 17. September 2025 17:00

/* ========== 2) Wunsch-Links einfach ändern ========== */
const wishes = [
  {
    img: "https://m.media-amazon.com/images/I/61lN7lxvAFL._AC_SL1100_.jpg",
    url: "https://shorturl.at/Rk94M"
  },
  {
    img: "https://m.media-amazon.com/images/I/61NhR5GGBJL._AC_SL1500_.jpg",
    url: "https://shorturl.at/1GSKw"
  },
  {
    img: "https://m.media-amazon.com/images/I/71wUQul9bFL._AC_SL1500_.jpg",
    url: "https://shorturl.at/64VE0"
  },
  {
    img: "https://m.media-amazon.com/images/I/61vU+x+b0VL._AC_SL1500_.jpg",
    url: "https://shorturl.at/QKU3I"
  }
];

/* ========== 3) Dynamische Karten ========== */
const wishlist = document.querySelector('.wishlist');
wishes.forEach(w => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${w.img}" alt="Wunsch">
        <button onclick="openWish('${w.url}')">Zum Wunsch</button>
    `;
    wishlist.appendChild(card);
});

/* ========== 4) Countdown-Logik ========== */
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "🎉 Es ist soweit!";
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

function openWish(url) {
    window.open(url, '_blank');
}

/* Initial starten */
updateCountdown();
setInterval(updateCountdown, 1000);
