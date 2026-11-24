import './Form.css'
import { useState } from 'react'


function Form() 
{

    const[count,setCount]= useState(0);
    const[email, setEmail] = useState();
    const[telefone,setTelefone] = useState()
    const[pagamento, setPagamento] = useState();
    const[usuarios,setUsuarios]= useState([]); // ESTOU INICIANDO MINHA VARIÁVEL DE ESTADO USUARIOS, COM UM VETOR VAZIO. E VOU USAR A FUNÇÃO SETUSUARIOS, PRA IR ATUALIZANDO O VALOR DESTA VARIÁVEL DE ESTADO.



    const handleChange = (event) =>
    {
        setEmail(event.target.value);
    }

    const handleChang = (event) =>
    {
        setPagamento(event.target.value);
    }

    const handleChan = (event) =>
    {
        setTelefone(event.target.value);
    }

    const handleClick = () =>
    {
        let id = count;
        let usuarioEmail = email;
        let pay = pagamento;
        pay = pay.toUpperCase();
        let number = telefone;
        let qtdNumber = number.length;
        console.log(`QUANTIDADE DE NÚMERO ESCRITO NO CAMPO DE INSERÇÃO DO TELEFONE : ${qtdNumber}`);
        let valor = usuarioEmail.indexOf('@');
        if(valor >= 0 && qtdNumber == '11')
        {
            let ddd = number.slice(0,2);
            let newDdd = "("+ddd+")";
            let restante = number.slice(2);
            let partOne = restante.slice(0,5);
            let partTwo = restante.slice(5);
            let juntando = partOne+"-"+partTwo;
            let newTelefone = newDdd+juntando;
            const objeto = {
                id : id,
                email : usuarioEmail,
                formaPagamento : pay,
                userTelefone : newTelefone
                
            }
            setUsuarios([...usuarios, objeto]);
            setCount(count + 1);
            console.log(`ID : ${objeto.id}`)
            console.log(`EMAIL : ${objeto.email}`)
            console.log(`FORMA DE PAGAMENTO : ${objeto.formaPagamento}`);
            console.log(`TELEFONE DO USUÁRIO : ${objeto.userTelefone}`);
        }
        
        
    }

    /*const handleClik = () =>
    {
        console.log(telefone);
        let ddd = telefone.slice(0,2);
        console.log(ddd);
    }*/
    

    return(
        <div className='container2' >
            <div className='caixa' >
                <input type='email' placeholder='EMAIL' onChange={ handleChange } required />
                <br />
                <input type='text' placeholder='FORMA DE PAGAMENTO' onChange={ handleChang }  required />
                <br />
                <input type='text' placeholder='ESCREVA SEU TELEFONE' onChange={ handleChan } required />
                <br />
                <button type='submit' onClick={ handleClick } > NOVO PARTICIPANTE </button>
            </div>
            <br />
            <ul>
                {usuarios.map( (objeto) =>
                (
                    <li key={objeto.id}> EMAIL : {objeto.email} + TEL : {objeto.userTelefone} </li>
                ))}
            </ul>

        </div>
    )
}

export default Form;