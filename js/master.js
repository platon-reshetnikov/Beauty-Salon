document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('You are not authorised!');
        window.location.href = 'login.html';
    } else {
        displayBookings();
    }
});

function displayBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingList = document.getElementById('bookingList');

    bookings.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.textContent = `Client: ${booking.clientName}, Phone: ${booking.clientPhone}, Master: ${booking.master}, Service: ${booking.service}, Date: ${booking.date}, Time: ${booking.time}`;
        bookingList.appendChild(listItem);
    });
}