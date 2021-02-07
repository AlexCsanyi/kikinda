import React, { useEffect } from 'react';
import Header from "./components/header";
import WebFont from 'webfontloader';
import './default.scss';

function App() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: [
                    'Crimson Text:100,400,700',
                    'Work Sans:200,400', 
                    'serif',
                ]
            }
        });
    }, []);


    return (
        <div>
            <Header />
            <p>
                Kikinda
            </p>
        </div>
    );
}

export default App;
