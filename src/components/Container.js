import React from 'react'
import '../style/Style.css'



function Container() {
    const data = [
        {
            pic: "Rectangle74.png",
            city: 'JAPAN',
            title: 'Mount Fuji',
            time: '12 Jan, 2021 - 24 Jan, 2021',
            contain: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
        },
        {
            pic: "Rectangle77.png",
            city: 'AUSTRALIA',
            title: 'Sydney Opera House',
            time: '27 May, 2021 - 8 Jun, 2021',
            contain: 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings.'
        },
        {
            pic: "Rectangle84.png",
            city: 'NORWAY',
            title: 'Geirangerfjord',
            time: '01 Oct, 2021 - 18 Nov, 2021',
            contain: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
        }
    ]
    return (
        <div className='contain'>
            {
                data.map((item) => {
                    return (
                        <div className='mainContainer'>
                            <div className='imageContainer'>
                                <img src={`images/${item.pic}`}/>
                            </div>
                            <div className='contentContainer'>
                                <div className='titleContainer'>
                                    <i class="fa-solid fa-location-dot" />
                                    <p>{item.city}</p>
                                    <span>View on Google Maps</span>
                                </div>
                                <div className='middleContainer'>
                                    <h1>{item.title}</h1>
                                </div>
                                <div className='timeContainer'>
                                    <p>{item.time}</p>
                                </div>
                                <div className='wordContainer'>
                                    <p>{item.contain}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }    
        </div>    
    )
}

export default Container;
