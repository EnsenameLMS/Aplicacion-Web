import { useState } from "react";
import logotipo from "./assets/logo.jpeg"
import "./estilos/acceso.css";
import { useNavigate } from "react-router-dom";

const Acceso = () => { 

    const nav = useNavigate();

    const [correo, setCorreo] = useState ("");
    const [password,setPassword] = useState("");

    const onIngresar = async () => { 
        const url = "http://localhost:4000/usuarios/inicio-sesion";
        const response = await fetch(url, {
            method: "POST",
            
            headers: { 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify ({ 
                Correo: correo,
                Password: password
            })
        });
        if (response.ok){
            nav("/categorias");
        }
        else{
            const error = await response.text();
            alert(error);
        }
    }

return( 
    <div className="contenedor">

    <div className="titulo">Enseña.Me LSM</div>

    <div>
    <img src= {logotipo} className= "logo"/>
    </div>

    <div className="agrupador-correo">
        <div>Correo Electrónico</div>
        <div>
            <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="caja-correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}/>
        </div>
        </div>
        
        <div className="agrupador-password">
            <div>Contraseña</div>
            <div>
                <input
                type = "password"
                placeholder= "Password"
                className = "caja-password"
                value= {password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                </div>
                </div>
                
            <div className="agrupador-boton" >
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Ingresar</button>
                </div>

                <div className="otros-botones">
                    <a href="/registro" className="link-registro">Registrarse</a>
                    <a href="/recuperar-password" className="link-password">0lvidé mi contraseña</a>
                </div>

            </div>
)
}
export default Acceso