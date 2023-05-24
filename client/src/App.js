import './App.css';
import {React} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/view/header';
import Footer from './components/view/footer';
import Home from './components/view/home';
import Events from './components/view/events';
import Benefits from './components/view/benefits';
import NewVip from './components/view/new-vip';
import VipTnC from './components/view/vipTnC';
import CurrentGiveaways from './components/view/current-giveaways'
import GiveawayDetail from './components/view/giveawayDetail';
import Winners from './components/view/winners';
import Shop from './components/view/shop';
import FAQ from './components/view/faq';
import Contact from './components/view/contact';
import About from './components/view/about';
import Cart from './components/view/cart';
import MyAccount from './components/view/my-account';
import Partners from './components/view/partners';
import PartnerTnC from './components/view/partnerTnC';
import TnC from './components/view/TnC';
import PrivacyPolicy from './components/view/privacy-policy';
import RefundPolicy from './components/view/refund-policy';
import ToS from './components/view/ToS';
import Checkout from './components/view/checkout';
import CheckoutEntry from './components/view/checkoutEntry';
import Category from './components/view/category';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Header />
          <Route exact path="/terms-of-service" component={ToS} />
          <Route exact path="/refund-policy" component={RefundPolicy} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-and-conditions" component={TnC} />
          <Route exact path="/my-account" component={MyAccount} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/partner-terms-and-conditions" component={PartnerTnC} />
          <Route exact path="/checkout/:giveaway/:item" component={CheckoutEntry} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/shop/:category" component={Category} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/winners" component={Winners} />
          <Route exact path="/current-giveaways/:name" component={GiveawayDetail} />
          <Route exact path='/current-giveaways' component={CurrentGiveaways} />
          <Route exact path='/vip-terms-and-conditions.pdf' component={VipTnC} />
          <Route exact path='/new-vip' component={NewVip} />
          <Route exact path='/benefits' component={Benefits} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/' component={Home} />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
