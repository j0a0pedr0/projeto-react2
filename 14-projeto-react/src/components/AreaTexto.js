import React from "react";
import "../App.css"

export default class AreaTexto extends React.Component{

    render(){
        return (
            <div className={"AreaTexto " + this.props.ClassSecundaria}>{this.props.texto}</div>
        );
    }
}