/* ========== 1) Countdown-Ziel einfach ändern ========== */
// Format: new Date(Jahr, Monat-1, Tag, Stunde, Minute)
const targetDate = new Date(2025, 8, 17, 17, 0); // 17. September 2025 17:00

/* ========== 2) Wunsch-Links einfach ändern ========== */
const wishes = [
  {
    img: "https://cdn.sanity.io/images/gtd4w1cq/production/becdad013a788bc6f8d8fbdc8a6314c3349409bb-1316x1645.jpg?auto=format",
    url: "https://de.nothing.tech/products/phone-3a?Farbe=Wei%C3%9F&Fassungsverm%C3%B6gen=12%2B256GB"
  },
  {
    img: "https://github.com/Qsenja/wishlist/blob/main/wishlist1.jpg?raw=true",
    url: "https://shorturl.at/1GSKw"
  },
  {
    img: "https://github.com/Qsenja/wishlist/blob/main/wishlist2.jpg?raw=true",
    url: "https://shorturl.at/64VE0"
  },
  {
    img: "https://github.com/Qsenja/wishlist/blob/main/wishlist3.jpg?raw=true",
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
