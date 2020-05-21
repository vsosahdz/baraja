import React,{Component} from 'react';

class FormularioCarta extends Component{
    constructor(){
        super();
        this.state={
            mazo:'Corazones',
            numero:'',
            valor:''
        };
        //this.handleInput=this.handleInput.bind(this);
    }
    
    /*handleInput(e){
        const {value,name}=e.target;
        this.setState({
            [name]:value
        });
    }*/
    handleInput=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        });
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onAgregarCarta(this.state);
        console.log(this.state);
    }
    
    render(){
        console.log(this.state)
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <select onChange={this.handleInput} name="mazo" className="form-control">
                            <option>Corazones</option>
                            <option>Diamantes</option>
                            <option>Treboles</option>
                            <option>Espadas</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="numero" placeholder="Número" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="valor" placeholder="Valor" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary"> 
                        Agregar carta
                    </button>
                    
                </form>
            </div>
        );
    }
}

export default FormularioCarta