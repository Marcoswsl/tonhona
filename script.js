// Calcular o tempo juntos
const startDate = new Date('2024-07-21T21:00:00');
setInterval(() => {
    const now = new Date();
    const elapsed = now - startDate;
    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    document.getElementById('timer').innerText = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}, 1000);

// Lista de frases românticas
const quotes = [
    "trocar dps"
];

// Atualizar a frase romântica
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

updateQuote();
setInterval(updateQuote, 10000);
