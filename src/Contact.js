import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import "./contact.css"

function Contact() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async (e) => {
        
        e.preventDefault();
        axios.post("/api/enviarContacto", 
        {
            name:name,
            message:message
        });

        console.log(name+" // "+ message);
        setName("");
        setMessage("");
    }


    


    return (
        <div className="contact">
            <div className="contact__title"><h1>Contacto</h1></div>

            <div className="contact__form">
                <form >
                    <input value={name} onChange={(e) => setName(e.target.value)} name="nombre" placeholder="Nombre"/>
                    <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Escribe aquí tu mensaje..."></textarea>
                    <button onClick={sendMessage}>Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
