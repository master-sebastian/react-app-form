import React from 'react'
import { CONFIG_DATA } from '../config/components/ApplicationConfig'
import '../styles/ApplicationConfig.css'

class ApplicationConfig extends React.Component{

    constructor(props){
        super(props);
        
        let data = CONFIG_DATA

        this.state = {
            nameCompany: "",
            typeCompany: (data.length > 0)?data[0]._id.toString():"",
            listTypeCompany: data,
            flow: "",
            listFlow: null,
            autoResponse: "",
            listAutoResponse: null
        }

        this.handlerNameCompany = this.handlerNameCompany.bind(this);
        this.handlerTypeCompany = this.handlerTypeCompany.bind(this);
        this.handlerFlow = this.handlerFlow.bind(this);
        this.handlerAutoResponse = this.handlerAutoResponse.bind(this);
        this.getFlow = this.getFlow.bind(this);
        this.getAutoResponse = this.getAutoResponse.bind(this);
    }
    
    componentDidMount(){
        this.setListFlow()
    }

    setListFlow(){
        this.setState(
            { listFlow : this.getFlow(this.state.typeCompany) },
            () => {
                this.setFlow()
            }
        )
    }

    setFlow(){
        this.setState({ flow : (this.state.listFlow !== null && this.state.listFlow.length > 0)? this.state.listFlow[0]._id.toString():"" } , 
            ()=>{
                console.log(this.state)
                this.setListAutoResponse()
            }
        )
    }

    setListAutoResponse(){
        this.setState({ listAutoResponse : this.getAutoResponse(this.state.flow) }, ()=>{
            this.setAutoResponse()
        })
    }

    setAutoResponse(){
        this.setState({ autoResponse: (this.state.listAutoResponse !== null && this.state.listAutoResponse.length > 0)?this.state.listAutoResponse[0]._id.toString():""})
    }

    getFlow(idTypeCompany){
        if(idTypeCompany === ""){
            return null;
        }
        idTypeCompany = parseInt(idTypeCompany)
        let result = this.state.listTypeCompany.filter(item => item._id === idTypeCompany)
        if(result.length === 0){
            return null;
        }
        return result[0].flow;
    }

    getAutoResponse(idFlow){
        
        if(idFlow === "" || this.state.listFlow === null || this.state.listFlow === undefined){
            return null;
        }
        idFlow = parseInt(idFlow)
        let result = this.state.listFlow.filter(item => item._id === idFlow)
        return result[0].autoResponse
    }

    handlerNameCompany(event){
        this.setState({nameCompany: event.target.value});
    }

    handlerTypeCompany(event){
        this.setState({typeCompany: event.target.value});
        this.setState({
            flow: "",
            listFlow: null,
            autoResponse: "",
            listAutoResponse: null
        }, ()=>{
            this.setListFlow()
        })
    }

    handlerFlow(event){
        this.setState({flow: event.target.value});
        this.setState({
            autoResponse:  "",
            listAutoResponse: null
        }, ()=>{
            this.setListAutoResponse()
        })
        
    }

    handlerAutoResponse(event){
        this.setState({autoResponse: event.target.value});
    }

    render(){

        let selectListFlow;
        let selectListAutoResponse;
        if(this.state.listFlow !== null && this.state.listFlow !== undefined){
            selectListFlow = <>
                                <div className="ApplicationConfig__row">
                                    <label>Flujo</label>
                                    <select value={this.state.flow} onChange={this.handlerFlow}>
                                        {
                                            this.state.listFlow.map((item)=> {
                                                return (<option key={item._id} value={item._id}>{item.text}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </>
        }

        if(this.state.listAutoResponse !== null && this.state.listAutoResponse !== undefined){
            selectListAutoResponse = <>
                                        <div className="ApplicationConfig__row">
                                            <label>Auto Respuesta</label>
                                            <select value={this.state.autoResponse} onChange={this.handlerAutoResponse}>
                                                {
                                                    this.state.listAutoResponse.map((item)=>{
                                                        return (<option key={item._id} value={item._id}>{item.text}</option>)
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </>
        }

        return (<>
            <section className="ApplicationConfig__container">
                <h2 className="ApplicationConfig__text-center ApplicationConfig__header-title">Panel para administrar configuraciones</h2>
                <hr></hr>   
                <div className="ApplicationConfig__row">
                    <label>Nombre de la empresa</label>
                    <input type="text" value={this.state.nameCompany} onChange={this.handlerNameCompany}/>
                </div>
                <div className="ApplicationConfig__row">
                    <label>Tipo de empresa</label>
                    <select value={this.state.typeCompany} onChange={this.handlerTypeCompany}>
                        {
                            this.state.listTypeCompany.map((value)=> {
                                return (<option key={value._id} value={value._id}>{value.text}</option>)
                            })
                        }
                    </select>
                </div>
                { selectListFlow }
                { selectListAutoResponse }
            </section>
        </>)        
    }
}


export default ApplicationConfig;