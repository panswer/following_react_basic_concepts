import React from "react";

function WarningsBanner(props={
    warn:false
}) {
    if(!props.warn){
        return null;
    }else{
        return (
            <div className="warning">
                Warning!
            </div>
        );
    }
}

export default WarningsBanner;