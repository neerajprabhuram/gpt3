import React from 'react';

import {Footer, Blog, Possibility, Features, GPT3, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

const App = () => {
    return (
        <div >
            <div >
                <Navbar />
                <Header />
            </div>
            <Brand/>
            <GPT3/>
            <Features/>
            <Possibility/>
            <CTA/>    
            <Blog/>    
            <Footer/>    
        </div>
    )
}

export default App
