import React from 'react';
import About from './About';
import Title from './Title';

function MainPage() {
    return (
        <div>
            <Title text="Hello world" />
            <About info={{ title: "Some Title", body: "Some body" }} />
        </div>
    );
}

export default MainPage;
