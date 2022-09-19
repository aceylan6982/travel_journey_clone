import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import './App.css';

function App() {
  const data = [
    {
        img: "Rectangle74.png",
        city: "JAPAN",
        title: "Mount Fuji",
        time: "12 Jan, 2021 - 24 Jan, 2021",
        contain: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

    },
    {
        img: "Rectangle77.png",
        city: "AUSTRALIA",
        title: "Mount Fuji",
        time: "27 May, 2021 - 8 Jun, 2021",
        contain: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."

    },
    {
        img: "Rectangle84.png",
        city: "NORWAY",
        title: "Geirangerfjord",
        time: "01 Oct, 2021 - 18 Nov, 2021",
        contain: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."

    }
]
  return (
    <div>
      <Navbar />
      <Container />
    </div>
  )
}

export default App;
