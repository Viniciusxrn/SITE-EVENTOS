import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// USENAVIGATE É UM FUNÇÃO DO REACT Q PERMITE AGENTE CRIAR ROTAS DE NAVEGAÇÃO ENTRE PÁGINAS NO MEU SITE

function App() {
  

  const Imagem = 'EventosFT.png';
  const mensagem = 'ESCREVA O EVENTO';


  const navigate = useNavigate();
  
  const[nome,setNome] = useState();
  const[count, setCount] = useState(0);
  const[eventos,setEventos] = useState([]); // ESTOU INICIANDO MINHA VARIÁVEL DE ESTADO CHAMADA DE EVENTOS, COMO UM VETOR VAZIO. VOU USAR A FUNÇÃO SETEVENTOS, PARA ATUALIZAR O VALOR DESTA VARIÁVEL DE ESTADO 
 


  // PARA USAR A FUNÇÃO DE USENAVIGATE, PRIMEIRO EU PRECISO SALVAR ESTÁ FUNÇÃO IMPORTADA, PARA DENTRO DE UMA VARIÁVEL.

  // SEMPRE QUE EU QUISER CRIAR UMA NAVEGAÇÃO, EM DE CHAMAR MINHA FUNÇÃO useNavigate(), EU CHAMO APENAS navigate. POIS AGORA DENTRO DE navigate, EU TENHO MINHA FUNÇÃO SALVA DENTRO DELA.



  const handleClik = () =>
  {
    navigate('/Form');
  }
  

  


  const handleChange = (event) => // ESTOU CRIANDO UM EVENTO PARA RECEBER CADA LETRA Q ESTÁ SENDO ESCRITA NO INPUT
  {
    setNome(event.target.value);
  }

  const handleClick = () =>
  {
    let id = count; // ESTOU ENVIANDO O VALOR DE COUNT, PARA ID.
    let nomeEvento = nome;
    const objeto = {
      id : id,
      nome : nomeEvento
    }
    console.log(objeto.id);
    console.log(objeto.nome);
    setEventos([...eventos, objeto]);

     // PRECISO CRIAR UM OBJETO COM DOIS CAMPOS : ID E NOME DO EVENTO;


    setCount(count + 1); // ESTOU FAZENDO UMA SOMA , ESTOU SOMANDO O VALOR ATUAL DE COUNT COM + 1, E RETORNANDO ESSA RESPOSTA PARA A MINHA VARIÁVEL DE ESTADO CHAMADA COUNT.
    
  }

  // INICIANDO MINHA VARIÁVEL DE ESTADO, COM UM VETOR VAZIO. VOU USAR MINHA FUNÇÃO SETDISCIPLINA, PARA IR ATUALIZANDO O VALOR DESTA MINHA VARIÁVEL DE ESTADO.

  // NO INPUT, EU VOU USAR UM EVENTO CHAMADO ONCHANGE, PARA CAPTURAR CADA LETRA QUE ESTÁ SENDO DIGITADA DENTRO DO CAMPO DE INSERÇÃO, E SALVAR ISTO DENTRO DA MINHA VARIÁVEL DE ESTADO.

  
  
  
  return (
    <div className='container' >
       <img src={ Imagem } className='Imagem'  />
       <br />
       <div className='content' >
        <input placeholder={ mensagem } type='text' required onChange={ handleChange } />
        <br />
        <button onClick={ handleClick }> NOVO EVENTO  </button>   
       </div> 
       <br />
       <ul>
        {eventos.map( (objeto) => (
          <li key={objeto.id}> {objeto.nome} --- <button className='buttonAdd' onClick={ handleClik } >ADD PARTICIPANTE </button>  </li> 
        ))}
      </ul>    
    </div>
  )
}

export default App
