import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput =(props)=>{
    console.log("Demooo Output")
return <MyParagraph>{props.show ? 'This is me!' : ''} </MyParagraph> ;
};

export default React.memo(DemoOutput);   