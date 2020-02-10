import React from "react";
import { Input, Button } from "antd";
const UserInput = ({ onChangeName, onChangePrice, valueName, valuePrice }) => {
    return (
        <form className="example-input">
            <label>Name</label>
            <Input
                onChange={onChangeName}
                value={valueName}
            />
            <label>Price</label>
            <Input
                onChange={onChangePrice}
                value={valuePrice}
            />
            <Button type="primary" shape="circle">
                A
    </Button>
        </form>
    );
};
export default UserInput;
