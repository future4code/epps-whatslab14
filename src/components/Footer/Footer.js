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
`

const UserName = styled.input`
    width: 30%;
`

const Message = styled.input`
    width: 50%;
`

const ButtonSend = styled.button`
    width: 20%;
`


export default class Footer extends React.Component {

    state = {
        nomeUsuario: '',
        novaMensagem: '',
        arrayMensagens: [
            { usuario: 'Carol', mensagem: 'Oie' },
            { usuario: 'Yuri', mensagem: 'Fala cmg' },
            { usuario: 'Caio', mensagem: 'Eu sou professor' }
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

    render() {
        const mensagensEnviadas = this.state.arrayMensagens.map(p => {
            return (<Mensagem usuario={p.usuario} mensagem={p.mensagem}/>)
        })

        return (
            <div>
                <DivMain>
                    {mensagensEnviadas}
                </DivMain>
                <DivContainer>
                    <UserName onChange={this.nomeUsuario} placeholder="Usuario" value={this.state.nomeUsuario} />
                    <Message onChange={this.Mensagem} placeholder="Digite a mensagem" value={this.state.novaMensagem} />
                    <ButtonSend onClick={this.enviarMensagem}>Enviar</ButtonSend>
                </DivContainer>
            </div >
        )
    }
}