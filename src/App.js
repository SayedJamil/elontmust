
import { useState } from 'react';
import './app.css'
import PowerBar from './PowerBar';
import PriceCard from './PriceCard';
function App() {
  const rate1 = '30'
  const rate2 = '30'
  return (
    <div className="app">
      <div>
        <PowerBar power={'10'} />
        <PowerBar power={'50'} />
        <PowerBar power={'90'} />
      </div>
      <div style={{ display: 'flex' }}>
        <PriceCard title={'ENTRY PACK'} price={'200 USD'} cryptoprice={'0.02 ETH'} content={['3D MODEL REDEEMABLE', '3D MODEL REDEEMABLE']} bgColor={'rgba(251, 255, 255, 0.75)'} shadowColor={'rgba(251, 255, 255, 0.75)'} innerCardColor={'black'} />
        <PriceCard title={'ENTRY PACK'} price={'200 USD'} cryptoprice={'0.02 ETH'} content={['3D MODEL REDEEMABLE', '3D MODEL REDEEMABLE']} bgColor={'rgba(0, 255, 255, 0.75)'} shadowColor={'rgba(0, 255, 255, 0.75)'} innerCardColor={'black'} />
        <PriceCard title={'ENTRY PACK'} price={'200 USD'} cryptoprice={'0.02 ETH'} content={['3D MODEL REDEEMABLE', '3D MODEL REDEEMABLE']} bgColor={'black'} textColor={'black'} shadowColor={'black'} innerCardColor={'rgb(244,202,22)'} />

      </div>

    </div>
  );
}
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      <div className='gradientComponent'></div>
      {[...Array(20)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <div className={index <= (hover || rating) ? "ratingCompRecton" : "ratingCompRectoff"}></div>
          </button>
        );
      })}

    </div>
  );
};
export default App;
