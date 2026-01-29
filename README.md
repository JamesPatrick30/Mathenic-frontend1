<!-- README.md -->

<div align="center">
  <h1>🪟 Window Card</h1>
  <p><strong>A simple real-time card display system built to learn WebSockets.</strong></p>
  <p>My first project exploring frontend–backend communication using live connections.</p>
</div>

<hr/>
Backend: https://github.com/JamesPatrick30/Mathenic-final-deployment
<hr/>

<style>
  .badge { display:inline-block; padding:4px 10px; border-radius:999px; background:#f1f5f9; margin:2px; font-size:12px }
  .note { background:#f8fafc; border-left:4px solid #334155; padding:12px; margin:16px 0 }
  code { background:#f1f5f9; padding:2px 6px; border-radius:4px }
</style>

<div align="center">
  <span class="badge">Python</span>
  <span class="badge">WebSocket</span>
  <span class="badge">Vue</span>
  <span class="badge">Real-Time</span>
</div>

---

## 📘 Overview

**Window Card** is a lightweight real-time application that displays card-style content and updates instantly using WebSockets.

This project was built as a **learning-focused system** to understand:

* how WebSocket connections work
* how frontend and backend stay in sync
* how real-time updates differ from REST-based polling

It intentionally keeps the logic simple to highlight the communication model.

---

## 🎯 Project Purpose

This project exists to answer one core question:

> How do frontend and backend communicate continuously without reloading the page?

Window Card demonstrates this by pushing updates from a Python backend directly to a Vue frontend over a persistent WebSocket connection.

---

## ✨ Key Features

* Real-time card updates (no refresh required)
* Persistent WebSocket connection
* Simple, readable codebase
* Clear separation between UI and server logic

---

## 🗂️ Repository Layout

This project is split into **two separate repositories**:

### Backend Repository (Python)

```
window-card-backend/
├─ server.py        # WebSocket server
└─ requirements.txt
```

### Frontend Repository (Vue)

```
window-card-frontend/
├─ src/
│  ├─ components/
│  └─ views/
├─ index.html
└─ vite.config.js
```

<div class="note">
<strong>Why separate repositories?</strong><br/>
Keeping frontend and backend in separate repositories reinforces clean boundaries and mirrors how real-world systems are often organized.
</div>

---

## 🧰 Tech Stack

**Backend**

* Python
* WebSocket (real-time server)

**Frontend**

* Vue.js

**Communication**

* Native WebSocket protocol

---

## 🚀 Getting Started

### Prerequisites

* Python 3.9+
* Node.js 18+

---

### Backend Setup

```bash
cd window-card-backend
pip install -r requirements.txt
python server.py
```

---

### Frontend Setup

```bash
cd window-card-frontend
npm install
npm run dev
```

The frontend connects to the WebSocket server once loaded and listens for live updates.

---

## 🔄 Real-Time Flow

1. Client opens the Vue application
2. Vue establishes a WebSocket connection to the Python server
3. Server sends card updates over the open connection
4. UI updates instantly without page reloads

This flow demonstrates the core benefit of WebSockets: **low-latency, push-based updates**.

---

## 🧠 Design Principles

* **Simplicity first** — fewer abstractions, clearer learning
* **Explicit data flow** — messages are easy to trace
* **Separation of concerns** — UI never handles server logic

---

## 📈 What This Project Taught Me

* How persistent connections differ from HTTP requests
* How to manage real-time state on the client
* How to structure small systems cleanly

This project became the foundation for later real-time systems using Socket.IO and scalable backends.

---

## 📄 License

MIT License

---

<div align="center">
  <p><strong>Window Card</strong> — small system, big lesson.</p>
</div>
