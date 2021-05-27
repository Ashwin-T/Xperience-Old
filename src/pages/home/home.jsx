import React from 'react';
import MainText from './MainText';
import AboutText from './AboutText';
import HomeButtons from './HomeButtons';

export default function Home(){
    return(
        <div>
            <MainText/>
            <AboutText/>
            <HomeButtons/> 
        </div>
    )
}