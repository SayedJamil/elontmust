
import { Box, Slider } from '@mui/material';
import { useState } from 'react';
import './app.css'
import PowerBar from './PowerBar';
import PriceCard from './PriceCard';
import { styled } from '@mui/material/styles';
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}°C`;
}
// rgb(77, 255, 255)
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#4DFFFF' : '#4DFFFF',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    width: 0,
    height: 0,
    paddingBottom: '1rem',
    borderStyle: 'solid',
    borderWidth: '10px 10px 0 10px',
    borderColor: '#4DFFFF transparent transparent transparent',
    backgroundColor: 'transparent',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: '100',
    fontFamily: 'Roboto',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 1,
    backgroundColor: '#757575',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#757575',
    height: 8,
    width: 1,
    opacity: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));


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
      <div className='slider'>
        <Box sx={{ width: 300 }} className="sliderBox">
          <IOSSlider
            id='IOSSliderComponent'
            aria-label="Custom marks"
            defaultValue={4}
            getAriaValueText={valuetext}
            step={1}
            min={0}
            max={10}
            valueLabelDisplay="off"
            marks={marks}
            className='sliderComponent'
          />
        </Box>
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
