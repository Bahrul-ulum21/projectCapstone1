import React from 'react';
import RukoList from './RukoList';
import {getData} from '../utils/dataRuko'

function RukoApp() {
    const rukoku = getData();

    return (
        <div className="ruko-app">
            <h1>Daftar Ruko</h1>
            <RukoList rukoku={rukoku}/>
        </div>
    )
}

export default RukoApp;