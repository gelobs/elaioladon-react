import React, { Component } from 'react';
import Title from '../components/Title';
import ProductSection from './ProductSection';
import AboutSection from './AboutSection';
import NavbarMain from '../components/NavbarMain';
import BackgroundVideo from '../components/BackgroundVideo';

export default class MainSection extends Component {
    render() {
        return (
            <React.Fragment>
            <NavbarMain />
            <div className="main-section" id="main">
                <Title text="Olive oil from the region of Paramythia"/>
                <BackgroundVideo />
            </div>
                <ProductSection />
                <AboutSection />
            </React.Fragment>
        )
    }
}
