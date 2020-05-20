import React from 'react';
import logo from './logo.svg';
import './App.css';
//import axios from "axios";
import {cartas} from './cartas.json'
import FormularioCarta from './components/FormularioCarta';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      cartas:[],
      info:false
    }
    
  }
  tirarCarta(id){
    this.setState({
      cartas:this.state.cartas.filter((e,i)=>{
        return i!==id
      })
    });
  }
  
  componentDidMount(){
    fetch("http://52.15.123.162:8081/cartas")
    .then(res=>res.json())
    .then(resData=>{
      this.setState(resData);
    })
    .catch(err=>console.log(err));
    /*axios
      .get("http://52.15.123.162:8081/cartas")
      .then(result=>{
        console.log(result.data.cartas);
      })*/
    /*let result=await fetch("http://52.15.123.162:8081/cartas");
    result=result.json();
    console.log(result)*/
  }
  
  render(){
    console.log(this.state);
    
    const cartasActuales=this.state.cartas.map((carta,i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3> Carta {i+1}</h3>
            </div>
            <div className="card-body">
              <h3>Mazo: {carta.mazo}  </h3>
              <h4>Numero: {carta.numero} </h4>
              <h5>Valor: {carta.valor}</h5>
            </div>
            <div className="card-footer">
              <button type="button" onClick={this.tirarCarta.bind(this,i)} className="btn btn-danger">Tirar Carta</button>
            </div>
          </div>
        </div>
      );
    })
    return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Número de Cartas <span className="badge badge-pill badge-light">
                              {this.state.cartas.length}
                              </span>
        </a>
        
      </nav>
      <FormularioCarta/>
    
      
      <div>
        {cartasActuales}
      </div>
    </div>
    );
  }
}



export default App;
