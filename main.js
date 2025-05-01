document.body.innerHTML = "<h1>Oyun başlıyor!</h1>";
// Kartlar
const cards = [
  { id: 1, name: "Fireball", type: "attack", power: 50, energy: 3 },
  { id: 2, name: "Shield", type: "defense", power: 40, energy: 2 },
  { id: 3, name: "Healing", type: "magic", power: 30, energy: 4 },
];

// Oyuncular
const player = {
  name: "Player 1",
  health: 100,
  deck: cards,  // Oyuncunun kartları
};

const opponent = {
  name: "Player 2",
  health: 100,
  deck: cards,  // Rakibin kartları
};

// Kartları ekrana yükleme
function loadCards() {
  const playerHand = document.querySelector(".player-hand");
  player.deck.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerText = card.name;
    cardElement.onclick = () => playCard(card, player, opponent);
    playerHand.appendChild(cardElement);
  });
}

// Kart oynama
function playCard(card, player, opponent) {
  if (card.type === "attack") {
    opponent.health -= card.power;  // Rakip canını azalt
  } else if (card.type === "defense") {
    player.health += card.power;  // Oyuncu canını arttır
  } else if (card.type === "magic") {
    player.health += card.power;  // Örneğin büyü kartı ile iyileşme
  }

  updateHealth(player, opponent);
}

// Can durumu güncelleme
function updateHealth(player, opponent) {
  document.getElementById("player-health").innerText = player.health;
  document.getElementById("opponent-health").innerText = opponent.health;
}

// Başlangıçta kartları yükle
loadCards();
// İstemci tarafı kart oyunu kodları buraya gelecek
