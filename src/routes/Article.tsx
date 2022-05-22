import React from 'react'
import { useParams } from "react-router-dom";

export const Article = () => {
  let params = useParams();
  return (
    <div>Article id {params.Article}</div>
  )
}


export default Article