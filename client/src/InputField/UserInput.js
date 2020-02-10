import React from "react";
import { Input } from "antd";
const UserInput = pros => {
    return (
        <div className="example-input">
            <Input
                onChange={pros.onChange}
                type="number"
                size="large"
                placeholder="large size"
                value={pros.price}
            />
        </div>
    );
};
export default UserInput;
