import styled from 'styled-components'
import React from 'react'

const DivContainer = styled.div`
    display:  flex;
    width: 80vw;
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
        mensagem: ''
    }

    nomeUsuario = (e) =>{
        this.setState(
            {
                nomeUsuario: e.target.value
            }
        )
        console.log(this.state.nomeUsuario)
    }

    Mensagem = (e) =>{
        this.setState(
            {
                mensagem: e.target.value
            }
        )
        console.log(this.state.mensagem)
    }
    

    render() {
        return (
            <DivContainer>
                <UserName onChange={this.nomeUsuario} placeholder="Usuario" /> 
                <Message onChange={this.Mensagem} placeholder="Digite a mensagem" />
                <ButtonSend onClick={this.props.enviar}>Enviar</ButtonSend>
            </DivContainer>
        )
    }
}