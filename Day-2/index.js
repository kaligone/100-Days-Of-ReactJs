import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Card from './Card';
import data from './data'

const pdata = (val) => {
    return (
        <Card
        imgsrc = {val.imgsrc}
        title = {val.title}
        name = {val.name}
        link = {val.link}
    />
    );
}

ReactDOM.render(
    <>
        <Heading/>
        <div className='flex flex-row flex-wrap justify-evenly bg-gray-200'>

            {data.map(pdata)}
        </div>
    </>, document.getElementById('root')
)