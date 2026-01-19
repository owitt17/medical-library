// Search functionality
document.getElementById('search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const text = item.querySelector('.description').textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});


