import React from 'react'
import ArticleCard from '../Components/Card/ArticleCard'
import CustomHeader from '../Components/Headers/CustomHeader'

const Genre =[
  {name: "tech"},
  {name: "sport"},
  {name: "buissness"},
  {name: "clothes"},
  {name: "scince"},
  {name: "tech"},
  {name: "tech"},

]

const Datapackage = [
  {
    "id": "011f63d9-a1a9-48a9-9f32-61545009712a",
    "sourceName": "Greatandhra.com",
    "author": "Venkat",
    "description": "As expected, Mahesh Babu's Sarkaru Vaari Paata has reached $2M gross from USA and counting.",
    "title": "Sarkaru Vaari Paata Reaches $2M In USA - Greatandhra",
    "url": "https://www.greatandhra.com/movies/news/sarkaru-vaari-paata-reaches-2m-in-usa-121048",
    "urlToImage": "https://www.greatandhra.com/newphotos10/Sarkaru-Vaari-Paata31652674416.jpg",
    "publishedAt": "2022-05-16T04:13:36Z",
    "categories": [
      "entertainment"
    ]
  },
  {
    "id": "0557041a-e81f-409d-ac13-d496debcae12",
    "sourceName": "PINKVILLA",
    "author": "Pinkvilla Desk",
    "description": "Check your horoscope for today for Leo, Virgo, Libra, Scorpio, Pisces, Gemini, Sagittarius, and other zodiac signs.",
    "title": "Horoscope Today, May 16, 2022 - PINKVILLA",
    "url": "https://www.pinkvilla.com/lifestyle/people/horoscope-today-may-16-2022-1094608",
    "urlToImage": "https://www.pinkvilla.com/files/styles/fbimagesection/public/daily_horoscope_social_86.jpg?itok=xi8n7OXQ",
    "publishedAt": "2022-05-16T01:51:51Z",
    "categories": [
      "entertainment"
    ]
  },
  {
    "id": "11725a7a-4139-4bd5-bcae-ce7db2ac1616",
    "sourceName": "Variety",
    "author": "Emily Longeretta",
    "description": "Popular on Variety Netflix’s “Bridgerton” is skipping ahead. Season 3 of the period drama based on Julia Quinn’s books will follow the Colin Bridgerton (Luke Newton) and Penelope Featherington (Nicola Coughlan) love story, Coughlan revealed during Sunday’s FY…",
    "title": "‘Bridgerton’ Season 3 Will Focus on Penelope and Colin’s Love Story, Stray From Book Order - Variety",
    "url": "https://variety.com/2022/tv/news/bridgerton-season-3-penelope-colin-1235266868/",
    "urlToImage": "https://variety.com/wp-content/uploads/2022/05/Bridgerton-Season-3-Penelope-Colin.jpg?w=999",
    "publishedAt": "2022-05-16T04:06:00Z",
    "categories": [
      "entertainment"
    ]
  }
]



function Landingpage() {
  return (
    <div>
      <h1>LandingPage</h1>
      <ArticleCard articleData={Datapackage}/>
    </div>
  )
}

export default Landingpage