import React, {useState} from 'react';
import Input from '../../components/Form/Input';

function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault()
        const data = {
            name,
            email,
            password
        }
        console.log("valor:>> ", data);
    }

    const handleSubmitTeste = (valor) =>{
        console.log("Valor calculado: ", valor);
    }

    return (
        <div>
            <h1>Home</h1>
            <form onSubmit={handleSubmit}>
                <Input label = "Nome" id="name" value={name} setValue={setName}/>
                <Input type= "email" label = "Email" id="email" value={email} setValue={setEmail} required/>
                <Input label = "Senha" id="password" value={password} setValue={setPassword}/>
                <button onClick={()=> handleSubmitTeste(3*3)}>Enviar</button>
            </form>
        </div>
    );
}

export default Home;