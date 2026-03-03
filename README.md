# 💇 Beauty Salon — Web Application for a Beauty Salon

> A fully functional client-side web application for the **"Beauty"** salon (Pochayna metro station, Kyiv).  
> Built with pure HTML, CSS, and JavaScript — no backend required. All data is stored in `localStorage`.

---

## 📋 Table of Contents

- [Project Description](#project-description)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [User Roles](#user-roles)
- [Features](#features)
- [Pages](#pages)
- [How to Run](#how-to-run)
- [Login Credentials](#login-credentials)
- [Notes](#notes)

---

## 📌 Project Description

This web application allows clients to book appointments with salon masters online, browse the list of services, and view the team of specialists. Administrators can manage all bookings (edit, delete), while masters can view their own schedule.

The project is built as an educational assignment: no server, no database — all logic and data live in the browser via `localStorage`.

---

## 🛠 Technologies

| Technology | Purpose |
|---|---|
| **HTML5** | Page markup |
| **CSS3** | Styling, responsive design |
| **Vanilla JavaScript** | Logic, validation, routing |
| **localStorage** | Storing users and bookings |

---

## 📁 Project Structure

```
web-/
├── index.html          # Home page (salon landing page)
├── login.html          # Login page
├── registration.html   # New user registration
├── services.html       # List of services and prices
├── employees.html      # Team of masters
├── client.html         # Appointment booking (for clients)
├── master.html         # Master's personal dashboard
├── admin.html          # Administrator panel
│
├── css/
│   ├── style.css           # Home page styles
│   ├── Login.css           # Login page styles
│   ├── Registration.css    # Registration page styles
│   ├── services.css        # Services page styles
│   ├── employees.css       # Team page styles
│   ├── Client.css          # Client dashboard styles
│   ├── Master.css          # Master dashboard styles
│   └── Admin.css           # Admin panel styles
│
├── js/
│   ├── login.js            # Login and authentication logic
│   ├── registration.js     # Registration logic with validation
│   ├── client.js           # Booking logic (time selection, conflict check)
│   ├── master.js           # Display bookings for master
│   ├── admin.js            # CRUD operations on bookings
│   └── services.js         # Dynamic rendering of services list
│
└── img/
    ├── logo.png            # Salon logo
    ├── model1-3.jpg        # Photos for the home page
    └── employees1-4.png    # Photos of the masters
```

---

## 👥 User Roles

The system supports **three roles**, selected during registration:

| Role | Redirect after login |
|---|---|
| 🔑 **Administrator** | `admin.html` — view, edit and delete any booking |
| ✂️ **Master** | `master.html` — view all client bookings |
| 👤 **Client** | `client.html` — book an appointment with a chosen master |

---

## ⚙️ Features

### 🔐 Registration & Login
- Registration with full details: last name, first name, middle name, address, phone, date of birth, role, username, password
- Field validation: letters only in name fields, exactly 10 digits for phone, minimum 4 characters for username, 6 for password
- Data stored in `localStorage` as JSON
- Login with automatic redirect based on user role

### 📅 Client Booking
- Select a master from the list (5 masters: Oleksandr, Denys, Viktoriia, Alisa, Krys)
- Select a service with price
- Select a date and **available time slot** (already booked slots are automatically removed)
- Conflict check: the same master cannot have two bookings at the same time
- Confirmation and saving to `localStorage`

### 🛠 Admin Panel
- View all bookings
- **Edit** a booking: change master, service, date, time (with conflict check)
- **Delete** a booking
- Protected: unauthorized users are redirected to `login.html`

### 👨‍🔧 Master Dashboard
- View all client bookings (name, phone, service, date, time)
- Protected: unauthorized users are redirected to `login.html`

### 💈 Services & Team
- Dynamic services list with prices (rendered via JS)
- Team page with photo and description of each master

---

## 📄 Pages

### `index.html` — Home
Salon landing page: logo, phone number, social links (Instagram, Google Maps), navigation, gallery, salon description, email subscription form.

### `login.html` — Login
Login form (username + password). After a successful login — redirect based on role.

### `registration.html` — Registration
Full registration form with field validation.

### `services.html` — Services
A dynamically rendered list of 12 services with prices.

### `employees.html` — Team
Cards for 4 masters with photos and descriptions: Oleksandr (massage), Kristyna (hairdresser), Andrii (barber), Alla (manicure).

### `client.html` — Appointment Booking
Booking form: master → service → date → available time → name → phone.

### `master.html` — Master Dashboard
Read-only list of all client bookings.

### `admin.html` — Admin Panel
Full list of bookings with edit and delete functionality.

---

## 🚀 How to Run

The project **requires no server** and **no dependencies** to install.

1. Clone the repository:
   ```bash
   git clone https://github.com/platon-reshetnikov/web-.git
   cd web-
   ```

2. Open `index.html` in your browser:
   - Double-click the `index.html` file, **or**
   - Use the **Live Server** extension in VS Code / WebStorm

> ⚠️ Note: some features (especially `localStorage`) may not work when opening the file via `file://` in certain browsers. Using Live Server is recommended.

---

## 🔑 Login Credentials

Since registration is done manually, you need to **register first** on the `registration.html` page.

**Example test data:**

| Field | Value |
|---|---|
| Last Name | Ivanov |
| First Name | Ivan |
| Middle Name | Ivanovich |
| Address | Kyiv |
| Phone | 0997241212 |
| Date of Birth | 2000-01-01 |
| Role | Administrator / Master / Client |
| Username | admin |
| Password | admin123 |

---

## 📌 Notes

- All data is stored **only in the browser** (localStorage). Clearing browser cache will delete all bookings and users.
- The same master **cannot have two bookings** at the same time — the system checks for conflicts automatically.
- Access to `admin.html` and `master.html` is **protected**: without logging in, the user is automatically redirected to `login.html`.

---

## 👨‍💻 Authors

Project developed by a student team.

---

*Beauty Salon — Pochayna metro station, Kyiv | Working hours: 10:00–20:00, every day*

