from fastapi import FastAPI

app = FastAPI(title="SignalScope API", version="0.1.0")

@app.get("/health")
def health():
    return {"status": "ok", "service": "signalscope-api", "version": "0.1.0"}