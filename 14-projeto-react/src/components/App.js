import React from "react";
import AreaTexto from "./AreaTexto";
import Botao from "./Botao";
import "../App.css"

export default class App extends React.Component{

    constructor(){
        super();
        this.state={
            nomeBotao:"Esconder",
            classTexto:"show"
        }
    }
    alterarEstado(){
        var Estado;
        var NomeBotao;
        if(this.state.classTexto === 'show'){
            Estado="hide";
            NomeBotao="Esconder"
        }else{
            Estado="show";
            NomeBotao="Mostrar";
        }
        this.setState({
            nomeBotao:NomeBotao,
            classTexto:Estado
        })
    }


    render(){
        return (
            <div>
                <AreaTexto ClassSecundaria={this.state.classTexto} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisl in arcu tristique euismod. Maecenas et sem ullamcorper, laoreet dolor sit amet, facilisis quam. Ut tincidunt rutrum enim, ut malesuada magna vulputate eget. Ut urna quam, ullamcorper vel consectetur vitae, pellentesque sed ipsum. In quis nunc eget ipsum"/>
                <Botao funcao={this.alterarEstado.bind(this)} valor={this.state.nomeBotao}/>
            </div>
        );
    }
}