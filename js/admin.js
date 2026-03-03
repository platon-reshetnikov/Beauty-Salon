document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('You are not authorised!');
        window.location.href = 'login.html';
    } else {
        displayBookings();
    }

    const servicesButton = document.getElementById('servicesButton');
    servicesButton.addEventListener('click', function() {
        window.location.href = 'services.html';
    });
});

function displayBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';

    bookings.forEach((booking, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Client: ${booking.clientName}, Phone: ${booking.clientPhone}, Master: ${booking.master}, Service: ${booking.service}, Date: ${booking.date}, Time: ${booking.time}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editBooking(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteBooking(index));

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        bookingList.appendChild(listItem);
    });
}

function editBooking(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings[index];

    document.getElementById('editIndex').value = index;
    document.getElementById('editClientName').value = booking.clientName;
    document.getElementById('editClientPhone').value = booking.clientPhone;
    document.getElementById('editMaster').value = booking.master;
    document.getElementById('editService').value = booking.service;
    document.getElementById('editDate').value = booking.date;
    document.getElementById('editTime').value = booking.time;

    document.getElementById('editForm').style.display = 'block';
}

document.getElementById('updateButton').addEventListener('click', updateBooking);
document.getElementById('cancelButton').addEventListener('click', () => {
    document.getElementById('editForm').style.display = 'none';
});

function updateBooking() {
    const index = document.getElementById('editIndex').value;
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const newDate = document.getElementById('editDate').value;
    const newTime = document.getElementById('editTime').value;
    const newMaster = document.getElementById('editMaster').value;
    const newService = document.getElementById('editService').value;

    const conflictingBooking = bookings.find(booking => booking.date === newDate && booking.time === newTime && booking.master === newMaster);

    if (conflictingBooking && conflictingBooking !== bookings[index]) {
        alert('This time slot is already booked. Please choose a different time.');
        return;
    }

    bookings[index] = {
        clientName: document.getElementById('editClientName').value,
        clientPhone: document.getElementById('editClientPhone').value,
        master: newMaster,
        service: newService,
        price: newService.split(' - ')[1],
        date: newDate,
        time: newTime
    };

    localStorage.setItem('bookings', JSON.stringify(bookings));
    document.getElementById('editForm').style.display = 'none';
    displayBookings();
}

function deleteBooking(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    displayBookings();
}