import React from 'react'
import { useSelector } from 'react-redux'
import loadingGif from '../../../assets/img/Loading-200px.gif'

function Loading() {
    const { loading } = useSelector(state => state.loading);
    return (
        <div className="loading" style={{display: loading ? "block" : "none"}}>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}

export default Loading
