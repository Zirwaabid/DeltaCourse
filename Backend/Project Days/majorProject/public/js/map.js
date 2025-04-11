

document.addEventListener("DOMContentLoaded", function () {

    var map = L.map('map').setView([30.1575, 71.5249], 12);  // Center on Multan

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    

    // Add city or area marker with larger popup text
    var marker = L.marker([30.1950, 71.4750]).addTo(map);

    marker.bindPopup("<b style='font-size: 20px;'>Multan, Pakistan</b>").openPopup(); // Larger text size in popup
});

