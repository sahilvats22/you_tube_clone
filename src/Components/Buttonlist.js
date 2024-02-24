import React from "react";
import Button from "./Button";

const Buttonlist = () => {
    const list=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Cricket","Ind v Eng"];
    
    // Map over the list array to create buttons
    const buttons = list.map((item, index) => (
        <Button key={index} name={item} />
    ));

    return (
        <div className="flex">
            {buttons}
        </div>
    );
};

export default Buttonlist;
