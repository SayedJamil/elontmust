
import './app.css'
import PriceCard from './PriceCard';
function App() {
  return (
    <div className="app">
      <PriceCard title={'ENTRY PACK'} price={'200 USD'} cryptoprice={'0.02 ETH'} content={['3D MODEL REDEEMABLE', '3D MODEL REDEEMABLE']} bgColor={'rgba(251, 255, 255, 0.75)'} shadowColor={'rgba(251, 255, 255, 0.75)'} innerCardColor={'black'} />
      <PriceCard title={'ENTRY PACK'} price={'200 USD'} cryptoprice={'0.02 ETH'} content={['3D MODEL REDEEMABLE', '3D MODEL REDEEMABLE']} bgColor={'rgba(0, 255, 255, 0.75)'} shadowColor={'rgba(0, 255, 255, 0.75)'} innerCardColor={'black'} />
      <PriceCard title={'ENTRY PACK'} price={'200 USD'} cryptoprice={'0.02 ETH'} content={['3D MODEL REDEEMABLE', '3D MODEL REDEEMABLE']} bgColor={'black'} textColor={'black'} shadowColor={'black'} innerCardColor={'rgb(244,202,22)'} />
    </div>
  );
}

export default App;
