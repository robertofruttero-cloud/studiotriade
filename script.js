document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('booking-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        feedback.hidden = false;
        feedback.className = 'form-feedback';

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const formato = form.formato.value;
        const domanda = form.domanda.value.trim();
        const privacy = document.getElementById('privacy').checked;

        if (!nome || !email || !formato || !domanda || !privacy) {
            feedback.textContent = 'Per favore, compila tutti i campi obbligatori e accetta l\'informativa privacy.';
            feedback.classList.add('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = 'Inserisci un indirizzo email valido.';
            feedback.classList.add('error');
            return;
        }

        if (formato === 'natale') {
            const datanascita = form.datanascita.value;
            if (!datanascita) {
                feedback.textContent = 'Per il tema natale è necessario indicare la data di nascita.';
                feedback.classList.add('error');
                return;
            }
        }

        feedback.textContent = 'Richiesta inviata con successo! Riceverai una conferma entro 24 ore.';
        feedback.classList.add('success');
        form.reset();
    });
});
