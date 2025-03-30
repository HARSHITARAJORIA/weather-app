import React from "react";

const Current = ({ weatherData }) => {
    if (!weatherData) {
        return <p className="text-center text-gray-700">Loading weather data...</p>;
    }

    let imageURL = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

    return (
        <div className="fixed right-4 left-70 top-25 h-[70vh] w-[70%] bg-white/20 border text-zinc-900 border-white/20 shadow-lg p-2 rounded-md flex flex-col justify-center items-center">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-6xl font-bold ">{weatherData.location}</p>
                    <p className=" text-3xl text-zinc-900">{weatherData.condition}</p>
                </div>
                <img alt="weather" className="w-50" src={imageURL} />
            </div>

            <div className="flex justify-between items-center mt-6 text-zinc-900 gap-10">
                <p className="text-5xl font-extrabold  text-zinc-900">{weatherData.temp}°C</p>
                <div className="space-y-2 ">
                    <div className="flex justify-between w-48 text-zinc-900">
                        <span className="font-bold">Feels like</span>
                        <span className="font-bold ">{weatherData.feelslike}°C</span>
                    </div>
                    <div className="flex justify-between w-48">
                        <span className="font-bold">Wind</span>
                        <span className="font-bold">{weatherData.wind} km/h</span>
                    </div>
                    <div className="flex justify-between w-48">
                        <span className="font-bold">Humidity</span>
                        <span className="font-semibold">{weatherData.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current;
