const form = document.getElementById('contactForm');
const status = document.getElementById('status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      status.textContent = 'Danke — wir melden uns bald!';
      form.reset();
    } else {
      status.textContent = 'Fehler beim Senden.';
    }
  } catch (err) {
    status.textContent = 'Netzwerkfehler.';
  }
});
