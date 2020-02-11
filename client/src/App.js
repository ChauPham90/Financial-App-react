import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Input } from "antd";
import { List, Typography } from 'antd';
import axios from 'axios';
import "./styles.css";
import "./demo.css";
import UserInput from "./components/InputField/UserInput";
import Score from "./components/circle/Score";
import { setInputSelection } from "rc-mentions/lib/util";

export default function App() {
    const [data, setData] = useState({ hits: [] });
    const [score, setScore] = useState({ value: 0 });
    const [inputName, setInputName] = useState('')
    const [inputPrice, setInputPrice] = useState('')

    useEffect(() => {
        const fetchData = async (err) => {
            try {
                const result = await axios('http://localhost:5000/');
                setData({ hits: result.data });
            }
            catch (error) { console.log(Object.keys(error), error.message); }
        }
        fetchData();
    }, []);

    const getScore = () => {
        Array.prototype.sum = function (prop) {
            var total = 0
            for (var i = 0, _len = this.length; i < _len; i++) {
                total += this[i][prop]
            }
            return total / this.length
        }
        setScore({ value: `${Math.floor(data.hits.sum('price'))}` })
        console.log('check git')

    };




    return (
        <div className="App">
            {/* {data.hits.map((item, i) => (
                <div>
                    <p>{item.name}: $ {item.price}</p>
                </div>

            ))} */}
            <div>
                <List
                    size="large"
                    bordered
                    dataSource={data.hits}
                    renderItem={item => <List.Item>{item.name} : {item.price} SEK </List.Item>}
                />
            </div>
            <UserInput
                valueName={inputName}
                onChangeName={(e) => setInputName(e.target.value)}
                valuePrice={inputPrice}
                onChangePrice={(e) => setInputPrice(e.target.value)}
            />
            <Score number={score.value} />
            <button onClick={getScore}>cacultate</button>
        </div>

    );

}
