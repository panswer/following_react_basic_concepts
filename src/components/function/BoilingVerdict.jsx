import React from "react";

function BoilingVerdict(props={
    celsius:0
}) {
    if(props.celsius>=100){
        return <p>The water would boil.</p>
    }else{
        return <p>The water would not boild.</p>
    }
}

export default BoilingVerdict;