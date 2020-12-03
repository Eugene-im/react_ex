import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.modules.scss';
import Script from 'react-load-script';

function Footer() {
    return (

        <footer>Footer
            <Script defer async='false' url="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"/>
            <Script defer async='false' url="//app.jazz.co/widgets/basic/create/novatechc1"/>
        </footer>
    )
}

export default Footer;