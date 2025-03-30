# Weather App

A simple and responsive weather application built with React.js, integrating OpenWeatherMap API and GeoDB Cities API for real-time weather updates.

## 🌟 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **APIs:** OpenWeatherMap API
- **State Management:** React Hooks
- **Package Manager:** npm

## 🚀 Setup Instructions
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add your API keys:
```plaintext
VITE_API_KEY=your_openweathermap_api_key
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```
The app will run on `http://localhost:5173/`.

## 🔗 API Integration Details
### OpenWeatherMap API
- **Base URL:** `https://api.openweathermap.org/data/2.5/weather`
- **Authentication:** Requires `appid` (API key) as a query parameter
- **Rate Limits:** Free plan allows 60 requests per minute
- **Example Request:**
  ```bash
  https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
  ```

## 📌 Features
- Search for any city worldwide 🌎
- Real-time weather updates ⛅
- Displays temperature, humidity, wind speed, and more 🌡️
- Beautiful UI with Tailwind CSS 🎨

## 🎯 To-Do List
- 🌍 Add support for additional languages
- 📌 Save favorite cities
- 📊 Display hourly and weekly forecasts

## 📜 License
This project is licensed under the MIT License.

---
