import React from 'react'
import { useParams } from "react-router-dom";

export const Searchresults = () => {
  let params = useParams();
  return (
    <div>Searchresults search: {params.Searchresults}</div>
  )
}

export default Searchresults