import React from 'react'
import './app.css'
import PropTypes from 'prop-types';
function PriceCard({ title, price, cryptoprice, content, bgColor, textColor, shadowColor, innerCardColor }) {
    return (
        <div className="priceCard" style={{ 'background': `${bgColor}`, 'color': `${textColor ? textColor : null} !important` }} >
            <div className="priceCard2" style={{ 'boxShadow': `0px 0px 50px 10px ${shadowColor} inset`, 'background': `${innerCardColor} ` }} >
                <div className='priceCardBox'>
                    <div className='priceCardContent'>
                        <h3 style={{ color: textColor ? textColor : 'white' }}>{title}</h3>
                        <h2 style={{ color: textColor ? textColor : 'aqua' }}>{price}</h2>
                        <p className='priceCardCrpPrice' style={{ color: textColor ? textColor : 'aqua' }}>{cryptoprice}</p>
                        <div className='priceCardContentBox'>
                            {content.map(item => {
                                return (
                                    <p style={{ color: textColor ? textColor : 'white' }}>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='priceCardImageContainer'>
                        <img src={`./images/Component 10.svg`} alt="" className='priceCardButton' />
                    </div>
                </div>

            </div>
        </div>
    )
}
PriceCard.propTypes = {
    title: PropTypes.string.isRequired,
}
export default PriceCard