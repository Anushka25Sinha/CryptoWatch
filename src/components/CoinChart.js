import { useState ,useEffect} from "react"
import React from 'react'
import { OriginalUrl } from "./OriginalUrl"
import axios from "axios"
import { useParams } from "react-router-dom"
const CoinChart = () => {
    const CoinChartData=()=>{
        const {id}=useParams()
        const{data}=axios.get(`{OriginalUrl}/${id}/market_chart?vs_currency=inr&days=365`)
        console/log(data)
    }
  return (
    <div>
      
    </div>
  )
}

export default CoinChart
