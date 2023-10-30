// api que usei: https://openweathermap.org/current
import './Clima.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';

function WeatherApp() {
    // Definindo estados para a cidade e os dados do clima
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const apiKey = 'aa0d8c5c2d16bcb3df5e4b2b3f49bc3c'; // chave de API do OpenWeatherMap

    // Função que é chamada quando o botão "Pesquisar" é clicado
    const searchClick = () => {
        if (city) {
            // Faz uma solicitação para a API do OpenWeatherMap com a cidade inserida
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then((response) => {
                    // Atualiza o estado com os dados do clima recebidos da API
                    setWeatherData(response.data);
                })
                .catch((error) => {
                    // Exibe um erro no console em caso de falha na solicitação
                    console.error(error);
                });
        }
    };

    return (
        <div className="Clima">
            <h1>Previsão do Tempo</h1>
            <div>
                {/* Input para digitar o nome da cidade */}
                <input
                    className="input_clima"
                    type="text"
                    placeholder="Digite o nome de uma cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                {/* Botão para acionar a pesquisa */}
                <button className="button_clima"onClick={searchClick}>Pesquisar</button>
            </div>
            {weatherData.main && (
                <div className="text_clima">
                    {/* Exibe o nome da cidade e o país */}
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    {/* Exibe a temperatura em graus Celsius */}
                    <p>Temperatura: {weatherData.main.temp}°C</p>
                    {/* Exibe a descrição da condição do tempo fornecida pela API */}
                    <p>Condição: {weatherData.weather[0].description}</p>
                    {/* Exibe a umidade da cidade */}
                    <p>Umidade: {weatherData.main.humidity}%</p>
                    {/* Exibe a nebulosidade da cidade */}
                    <p>Nebulosidade: {weatherData.clouds.all}%</p>
                    {/* Exibe a visibilidade da cidade */}
                    <p>Visibilidade: {weatherData.visibility}m</p>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
