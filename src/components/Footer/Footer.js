import styled from 'styled-components'
import React from 'react'
import Mensagem from '../Mensagens/Mensagens'

const DivContainer = styled.div`
    display:  flex;
    width: 80vw;
    margin: auto;
`
const DivMain = styled.div`
  width: 80vw;
  height: 90vh;
  border: 1px solid black;
  margin: auto;
  margin-top: 50px;
  background-color: #0f2027; //background
`

const UserName = styled.input`
    width: 30%;
    height: 30px;
`

const Message = styled.input`
    width: 50%;
`

const ButtonSend = styled.button`
    width: 20%;
    background-color: white;

`

export default class Footer extends React.Component {

    state = {
        nomeUsuario: 'eu',
        novaMensagem: '',
        arrayMensagens: [
            { usuario: <strong>Carol</strong>, mensagem: 'Oie' },
            { usuario: <strong>Yuri</strong>, mensagem: 'Oi, tudo bem?' },
            { usuario: <strong>Caio</strong>, mensagem: 'Bom dia pessoal' }
        ]
    }

    nomeUsuario = (e) => {
        this.setState(
            {
                nomeUsuario: e.target.value
            }
        )
        console.log(this.state.nomeUsuario)
    }

    Mensagem = (e) => {
        this.setState(
            {
                novaMensagem: e.target.value
            }
        )
        console.log(this.state.novaMensagem)
    }

    enviarMensagem = () => {
        console.log(this.state.novaMensagem);
        const mensagem = { usuario: this.state.nomeUsuario, mensagem: this.state.novaMensagem };
        this.setState({
            arrayMensagens: [...this.state.arrayMensagens, mensagem]
        })
    }

    pressionaEnter = (e) =>{
        if(e.key === 'Enter'){
            this.enviarMensagem();
        }
    }

    DeletarMensagem = () =>{
        console.log('Excluindo todas as mensagens!');
        this.setState({arrayMensagens: []})
    }

    render() {
        const mensagensEnviadas = this.state.arrayMensagens.map(p => {
            return (<Mensagem usuario={p.usuario} mensagem={p.mensagem} onCLick={this.DeletarMensagem}/>)
        })

        return (
            <div>
                <DivMain>
                    {mensagensEnviadas }
                </DivMain>
                <DivContainer>
                    <UserName onChange={this.nomeUsuario} placeholder="Usuario" value={this.state.nomeUsuario} />
                    <Message onChange={this.Mensagem} placeholder="Digite a mensagem" value={this.state.novaMensagem} 
                    onKeyDown={this.pressionaEnter}/>
                    <ButtonSend onClick={this.enviarMensagem}>Enviar</ButtonSend>
                </DivContainer>
            </div >
        )
    }
}