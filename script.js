// Kreira kartice za narudžbu (samo ako ta stranica postoji)
document.addEventListener('DOMContentLoaded', () => {
    const pageOptionsContainer = document.getElementById('pageOptions');
    
    if (pageOptionsContainer) {
        const pageOptions = [
            'Uvodna poruka',
            'Kalendar s datumom',
            'Ko je ona / Who\'s that girl',
            'Samo slike',
            'Citat/i',
            'What\'s in her bag',
            'Rituali',
            'Playlist',
            'Outfits',
            'Hobiji',
            'Putopis',
            'Wishlist',
            'Filmovi',
            'Knjige',
            'Njena opsesija',
            'Horoskop',
            'Zajedničke uspomene',
            'Životinje',
            'Gdje želi putovati',
            'Modni kutak',
            'Poruke od prijatelja',
            'Omiljena hrana / restorani',
            'Anegdote',
            'Plus nešto drugo, po želji :)'
        ];

        pageOptions.forEach((option, index) => {
            const card = document.createElement('div');
            card.className = 'page-card';
            card.innerHTML = `
                <div>
                    <input type="checkbox" id="page${index}" name="pages" value="${option}">
                    <label for="page${index}">${option}</label>
                </div>
                <div class="page-details" id="details${index}">
                    <textarea placeholder="Detalji za ovu stranicu..." rows="3"></textarea>
                    <input type="file" multiple accept="image/*" style="margin-top: 0.5rem;">
                </div>
            `;
            pageOptionsContainer.appendChild(card);

            document.getElementById(`page${index}`).addEventListener('change', function() {
                const details = document.getElementById(`details${index}`);
                details.classList.toggle('active', this.checked);
            });
        });
    }

    // Forma – prikaz poruke uspjeha
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.querySelector('.form-container form').style.display = 'none';
            document.getElementById('successMessage').classList.add('active');
        });
    }
});

// FAQ toggle
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('span');

    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('span').textContent = '+';
        }
    });

    answer.classList.toggle('active');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
}
