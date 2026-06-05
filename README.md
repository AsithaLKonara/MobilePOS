# MobilePOS: Offline-First Tablet Application

Welcome to the **MobilePOS** module of our Micro-SaaS platform. This application is a tablet-optimized Point of Sale (POS) system built specifically to maintain high availability and reliability for cashiers, even during internet outages.

Built using **React Native**, **Expo (v56)**, and **WatermelonDB**, this application guarantees an offline-first transactional experience that synchronizes perfectly with the central cloud infrastructure when online.

---

## 🚀 Features

- **Offline-First Architecture**: Built on top of WatermelonDB and SQLite to ensure you can ring up sales seamlessly without an active internet connection.
- **Tablet Optimized**: A clean, 2-column layout tailored for iPad and Android tablet dimensions featuring a dynamic Product Grid and a real-time Cart Panel.
- **Background Synchronization**: Robust push/pull synchronization engine that reconciles local transactions (`orders`, `order_items`) with the Next.js cloud backend.
- **Type-Safe Models**: Fully typed database models leveraging TypeScript decorators for absolute structural integrity.

---

## 🛠️ Technology Stack

- **Framework**: React Native with [Expo v56](https://expo.dev/)
- **Routing**: Expo Router (File-based navigation)
- **Local Database**: [WatermelonDB](https://watermelondb.dev/) (SQLite Adapter)
- **Language**: TypeScript
- **Testing**: Jest (`jest-expo`)

---

## 📦 Project Structure

```
MobilePOS/
├── app/
│   ├── _layout.tsx         # Main Expo Router Context
│   └── index.tsx           # Tablet POS Interface (Products & Cart)
├── components/
│   ├── ProductGrid.tsx     # Tap-to-add product catalog
│   ├── CartPanel.tsx       # Real-time subtotal and ticket view
│   └── CheckoutModal.tsx   # Transaction capture (Cash / Card)
├── src/
│   └── database/
│       ├── index.ts        # WatermelonDB SQLite configuration
│       ├── schema.ts       # Offline schema for Products, Orders, Items
│       ├── sync.ts         # Push/Pull backend synchronization engine
│       └── models/         # TypeScript ORM class models
└── tests/                  # Jest validation suites
```

---

## ⚙️ Local Development

### Prerequisites

- Node.js (v18+)
- iOS Simulator or Android Studio Emulator
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Metro bundler:
   ```bash
   npm start
   ```

3. Press `i` to launch on the iOS Simulator or `a` to launch on the Android Emulator.

---

## 💾 Database Architecture

We use **WatermelonDB** to handle our high-performance SQLite data layer.

### Schema Overview

- `products`: Catalog definitions syncing from the backend.
- `orders`: Transactions created on the POS. Tracks total, status, and synchronization state.
- `order_items`: Line items linked to a specific order (`order_id`) and product (`product_id`).

### Synchronization Flow

The sync engine (`src/database/sync.ts`) is designed to pull delta updates from the cloud (e.g., product pricing changes) and push local changes (completed offline sales) to the remote `/api/v1/sync` REST endpoints.

---

## 🧪 Testing

We use Jest to guarantee the integrity of our offline schemas and UI components.

To run the unit and integration tests:

```bash
npm test
```

*Note: WatermelonDB uses experimental decorators which are fully covered in our `tsconfig.json`.*

---

## 📝 License

Proprietary Software. All rights reserved.
