import React from 'react';
import Input from '../../components/Form/Input';

function Home() {

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Home</h1>
            <Input />
        </div>
    );
}

export default Home;