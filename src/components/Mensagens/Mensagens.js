import styled from 'styled-components'
import React from 'react'

const DivMsg = styled.div`
    display: flex;
    flex-direction: ${props => props.usuario === 'eu' ? 'row-reverse' : 'rowss'};
    justify-content: space-between; 
    margin: 2px 0px;
    background-color: white; //cor da mensagem
`

const BotaoDeletar = styled.button`
    background-color: #ff4646;
    width: 10%;
    height: 30px;
`


export default class Footer extends React.Component {

    state = {

    }

    render() {
        return (
            <div>
                <DivMsg>
                    <p>{this.props.usuario}: {this.props.mensagem}</p>
                <BotaoDeletar onClick={this.props.DeletarMensagem}>Deletar mensagem</BotaoDeletar>
                </DivMsg>
            </div>
        )
    }

}