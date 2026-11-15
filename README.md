# SignalScope

![Status](https://img.shields.io/badge/status-in%20development-f59e0b)
![Expo](https://img.shields.io/badge/Expo-React%20Native-000020?logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)

A cross-platform (Android and iOS) mobile app for analysing **Bluetooth and Wi-Fi hotspot signals** around you, backed by a Python API.

> **Status: early stage.** The mobile app and API are set up and talking to each other. Signal scanning is the next milestone (see the roadmap).

## Architecture

```
┌──────────────────────────┐   HTTP (JSON)   ┌──────────────────────────┐
│  app/  Expo React Native │ ──────────────▶ │  backend/  FastAPI       │
│  TypeScript, Android+iOS │                 │  Python                  │
└──────────────────────────┘                 └──────────────────────────┘
```

| Folder | What it is |
|---|---|
| `app/` | Expo + React Native mobile app written in TypeScript |
| `backend/` | FastAPI service (currently a `/health` endpoint) |

## Run it

**1. Backend**

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate    macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

Open http://localhost:8000/health to check it, or http://localhost:8000/docs for the auto-generated API docs.

**2. Mobile app**

```bash
cd app
cp .env.example .env     # then set your computer's LAN IP address
npm install
npx expo start
```

Scan the QR code with the **Expo Go** app on your phone (phone and computer on the same Wi-Fi), then tap **Check backend**.

## Roadmap

- [x] Expo app and FastAPI backend connected
- [ ] Scan nearby Bluetooth devices and show signal strength (RSSI)
- [ ] Scan Wi-Fi networks / hotspots (Android)
- [ ] Send scan results to the API and store them
- [ ] Signal history charts

## Author

Built by [Mighty Samson Akor](https://github.com/mightysamsonakor-glitch), ICT student at VILNIUS TECH. Also see [GlobalRate](https://www.globalrate.space) and [Naira Ledger](https://github.com/mightysamsonakor-glitch/naira-ledger).

## License

MIT
