import React from 'react'
import { useParams } from "react-router-dom";
import ArticleCard from '../Components/Card/ArticleCard';

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
  },
  {
    "id": "0065d70c-6cb4-473f-96c3-64f1d32622c1",
    "sourceName": "The Colorado Sun",
    "author": null,
    "description": "Colorado's cases are among dozens nationwide of unknown cause, but so far no children in the state have died from the mystery illness.",
    "title": "Colorado has identified five cases of a mystery hepatitis in children - The Colorado Sun",
    "url": "https://coloradosun.com/2022/05/16/colorado-hepatitis-children-unknown-cause/",
    "urlToImage": "https://lede-admin.coloradosun.com/wp-content/uploads/sites/15/2021/08/Co-dept-public-health-OS-5.jpg?resize=1080,719",
    "publishedAt": "2022-05-16T10:23:00Z",
    "categories": [
      "health",
      "general"
    ]
  },
  {
    "id": "19c70c11-c8b3-4ad7-970b-0ae0c874b184",
    "sourceName": "Reuters",
    "author": null,
    "description": "A white teenager who killed 10 people in a racist attack at a western New York grocery store in a Black neighborhood had been taken into custody last year and given a mental health evaluation after making a threat at his high school, authorities said.",
    "title": "Buffalo racist-shooting suspect was questioned after threat last year - Reuters",
    "url": "https://www.reuters.com/world/us/gunman-who-killed-10-ny-supermarket-attack-was-authorities-radar-2022-05-15/",
    "urlToImage": "https://www.reuters.com/resizer/4Yhn52JjyPE77VKytXx9AGC9ukI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EF7FC4MLOZKE3LX2MCYEJ2XZHM.jpg",
    "publishedAt": "2022-05-16T09:55:00Z",
    "categories": [
      "general"
    ]
  },
  {
    "id": "1b7cef45-f3e7-4997-bec8-83dbf8554d60",
    "sourceName": "CNBC",
    "author": "Silvia Amaro",
    "description": "G-7 foreign ministers warned over the weekend that the war in Ukraine is increasing the risk of a global hunger crisis.",
    "title": "U.S., Europe race to improve food supply chains after India bans wheat exports - CNBC",
    "url": "https://www.cnbc.com/2022/05/16/us-europe-to-improve-food-chains-after-india-bans-wheat-exports.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107060612-1652412971208-gettyimages-1395949871-6930copy.jpeg?v=1652412683&w=1920&h=1080",
    "publishedAt": "2022-05-16T05:40:22Z",
    "categories": [
      "general"
    ]
  }
]

export const Searchresults = () => {
  let params = useParams();
  return (
    <div>
    <div>Searchresults search: {params.Searchresults}</div>
    <ArticleCard articleData={Datapackage}/>
    </div>
  )
}

export default Searchresults