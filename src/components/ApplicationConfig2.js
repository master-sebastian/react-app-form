import React, {useState , useEffect } from 'react'
import { CONFIG_DATA } from '../config/components/ApplicationConfig'
import '../styles/ApplicationConfig.css'

function ApplicationConfig2 (){

    const data = CONFIG_DATA
    
    const [nameCompany, setNameCompany] = useState("")
    const [typeCompany, setTypeCompany] = useState((data.length > 0)?data[0]._id.toString():"")
    const [listTypeCompany, setListTypeCompany] = useState(CONFIG_DATA)
    const [flow, setFlow] = useState("")
    const [listFlow, setListFlow] = useState(null)
    const [autoResponse, setAutoResponse] = useState("")
    const [listAutoResponse, setListAutoResponse] = useState(null)

    useEffect( () => {
        setListFlowFunctionality(typeCompany, listTypeCompany)
    }, []);

    const setListFlowFunctionality = (typeCompany, listTypeCompany) => {
        let tempFlow =  getFlow(typeCompany, listTypeCompany)
        setListFlow(tempFlow)
        setFlowFunctionality(tempFlow)
    }

    const setFlowFunctionality = (listFlow) => {
        let tempFlow = (listFlow !== null && listFlow.length > 0)? listFlow[0]._id.toString():"" 
        setFlow(tempFlow)
        setListAutoResponseFunctionality(tempFlow, listFlow)
    }

    const setListAutoResponseFunctionality = (flow, listFlow) => {
        let tempListAutoResponse = getAutoResponse(flow, listFlow) 
        setListAutoResponse(tempListAutoResponse)
        setAutoResponse((tempListAutoResponse !== null && tempListAutoResponse.length > 0)?tempListAutoResponse[0]._id.toString():"")
    }

    const getFlow  = (idTypeCompany, listTypeCompany) => {
        if(idTypeCompany === ""){
            return null;
        }
        idTypeCompany = parseInt(idTypeCompany)
        let result = listTypeCompany.filter(item => item._id === idTypeCompany)
        if(result.length === 0){
            return null;
        }
        return result[0].flow;
    }

    const getAutoResponse = (idFlow, listFlow) => {
        if(idFlow === "" || listFlow === null || listFlow === undefined){
            return null;
        }
        idFlow = parseInt(idFlow)
        let result = listFlow.filter(item => item._id === idFlow)
        return result[0].autoResponse
    }

    const handlerNameCompany = (event) => {
        setNameCompany(event.target.value);
    }

    const handlerTypeCompany = (event) => {
        let tempTypeCompany = event.target.value
        
        setTypeCompany(tempTypeCompany);
        setListFlowFunctionality(tempTypeCompany, listTypeCompany)
    }

    const handlerFlow = (event) => {
        let tempFlow = event.target.value
        setFlow(tempFlow)
        setListAutoResponseFunctionality(tempFlow, listFlow)
    }

    const handlerAutoResponse = (event)=>{
        setAutoResponse(event.target.value)
    }

    let selectListFlow;
    let selectListAutoResponse;
    if(listFlow !== null && listFlow !== undefined){
        selectListFlow = <>
                            <div className="ApplicationConfig__row">
                                <label>Flujo: </label>
                                <select value={flow} onChange={handlerFlow}>
                                    {
                                        listFlow.map((item)=> {
                                            return (<option key={item._id} value={item._id}>{item.text}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </>
    }

    if(listAutoResponse !== null && listAutoResponse !== undefined){
        selectListAutoResponse = <>
                                    <div className="ApplicationConfig__row">
                                        <label>Auto Respuesta: </label>
                                        <select value={autoResponse} onChange={handlerAutoResponse}>
                                            {
                                                listAutoResponse.map((item)=>{
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
                <label>Nombre de la empresa: </label>
                <input type="text" value={nameCompany} onChange={handlerNameCompany}/>
            </div>
            <div className="ApplicationConfig__row">
                <label>Tipo de empresa: </label>
                <select value={typeCompany} onChange={handlerTypeCompany}>
                    {
                        listTypeCompany.map((value)=> {
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


export default ApplicationConfig2;