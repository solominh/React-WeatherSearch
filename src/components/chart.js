import React,{Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default function Chart(props) {
    return (
        <Sparklines width={200}
                    height={100}
                    data={props.data}>
            <SparklinesLine color={props.color}/>
        </Sparklines>
    )
}