# 🚚 Logistics Management System

A web-based admin panel for logistics companies. It brings orders, customers, employees, warehouse stock, vehicles, drivers and routes together in one place, with live GPS tracking, reports and an audit log on top.

The interface is in Azerbaijani.

> ⚠️ This is a **frontend prototype**. Data is stored in `localStorage` and served by a mock API (`json-server`).

## Tech Stack

React 19 · Vite 8 · Tailwind CSS 4 · React Router 7 · Axios · React Toastify · json-server

## Features

- **Authentication**: login with role selection, "remember me", and password reset with SMS code verification
- **Dashboard**: daily order stats, warehouse capacity and recent notifications at a glance
- **Orders**: create, edit and track orders through each status, from preparation to delivery
- **Customers & Employees**: manage records with search, filters, pagination and delete confirmation
- **Warehouse**: receive new or existing products, record outgoing stock and search by barcode, name or category
- **Vehicles & Drivers**: manage the fleet, assign drivers and keep track of license expiry dates
- **Route Planning**: set start and end points, add stops, then assign a vehicle, a driver and orders
- **GPS Tracking**: see vehicles on a map with speed, direction and stop time, refreshed every 5 seconds
- **Reports**: seven reports covering orders, delayed deliveries, drivers, routes, customers, finances and the warehouse
- **Audit Log**: review system activity, filtered by person, role, action or date

## User Roles

Each role only sees the sections it has access to. If a user opens a page they aren't allowed to see, they're redirected to their own home page.

| Role | Access |
|---|---|
| Administrator | Everything |
| Logistics Manager | Orders, Routes |
| Warehouse Worker | Warehouse |
| Driver | Routes |
| Customer | Orders |

All roles can view notifications.

## Getting Started

You'll need Node.js 20 or newer.

```bash
git clone https://github.com/rrovshanamammadova/logistics-management.git
cd logistics-management
npm install
npm run dev
```

Then open http://localhost:5173.

The GPS page reads from a mock API, so start it in a separate terminal:

```bash
npx json-server --watch db.json --port 5000
```

In demo mode, any username and password will log you in. Just pick a role on the login screen.

## Project Structure

```
src/
├── components/   # Sidebar, Header, ProtectedRoute, Pagination, modals
├── layouts/      # Dashboard layout
├── data/         # Demo data
└── pages/
    ├── auth/     # Login and password reset
    └── admin/    # Management pages and reports
```

## Roadmap

- [ ] Real backend and database
- [ ] JWT authentication with server-side roles
- [ ] Interactive map (Leaflet / Google Maps) and route optimization
- [ ] Driver mobile app with proof of delivery
- [ ] Customer portal with order tracking
- [ ] PDF and Excel export for reports
- [ ] Charts, real-time notifications and mobile-friendly layout
- [ ] Multi-language support (AZ / EN / RU)
