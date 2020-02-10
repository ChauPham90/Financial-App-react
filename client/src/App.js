import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./styles.css";
import "./demo.css";
import { Input } from "antd";
import UserInput from "./InputField/UserInput";
// import courseSeri from "./node/node"

import Score from "./circle/Score";
export default function App() {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        const fetchData = async (err) => {
            try {
                const result = await axios(
                    'http://localhost:5000/',
                );
                setData({ hits: result.data });
                console.log(result.data)
            } catch (error) {
                console.log(Object.keys(error), error.message);
            }
        }
        fetchData();
    }, []);

    const [stateWeighCO2, setStateC02] = useState({
        stateValue: 0
    });
    const getScore = () => {
        Array.prototype.sum = function (prop) {
            var total = 0
            for (var i = 0, _len = this.length; i < _len; i++) {
                total += this[i][prop]
            }
            return total / this.length
        }

        setStateC02({
            stateValue: `${Math.floor(data.hits.sum('price'))}`
        })

    };

    return (
        <div className="App">
            {data.hits.map((item, i) => (
                <div>
                    <p>{item.name}: $ {item.price}</p>
                    <UserInput price={item.price} />
                    <b>{item.price}</b>
                </div>

            ))}
            <Score number={stateWeighCO2.stateValue} />
            <button onClick={getScore}>cacultate</button>
        </div>
    );

}
