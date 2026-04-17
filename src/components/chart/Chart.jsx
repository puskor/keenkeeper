import React, { useContext } from 'react';
import { FriendContext } from '../../context/Provider';

import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// #region Sample data

const Chart = () => {
    const { record } = useContext(FriendContext)
    // console.log(record)
    const Call = record.filter(item => item.item === "Call")
    const Text = record.filter(item => item.item === "Text")
    const Meeting = record.filter(item => item.item === "Meetup")

        

    const data = [
        { name: 'Call', value: Call.length, fill: '#0088FE' },
        { name: 'Text', value: Text.length, fill: '#00C49F' },
        { name: 'Meeting', value: Meeting.length, fill: '#FFBB28' },
    ];

    return (

        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
        </PieChart>
    );
};

export default Chart;