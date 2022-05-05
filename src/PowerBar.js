import React from 'react'

function PowerBar({ power }) {
    return (
        <div className='ratingCompBarContainer'>
            <div className="ratingCompBarContainer2">
                <div className='ratingCompBar' style={{ 'background': `linear-gradient(90deg, rgba(0,176,255,1) 0%, rgba(9,85,119,1) ${power}%, rgba(2,30,42,1) 100%)` }}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default PowerBar