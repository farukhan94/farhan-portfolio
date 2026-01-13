<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1_zMzgeyt_cKefjdSFWWCOg_2g5uyiO7l

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

## Run with Docker (Recommended)

**Prerequisites:** Docker and Docker Compose

1. Create a `.env` file (or use your existing `.env.local`) and ensure `GEMINI_API_KEY` is set.
2. Build and start the container:
   ```powershell
   docker-compose up --build
   ```
3. Open `http://localhost:8080` in your browser.

To stop the app:
```powershell
docker-compose down
```

