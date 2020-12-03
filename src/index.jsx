import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));