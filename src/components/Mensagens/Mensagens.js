import styled from 'styled-components'
import React from 'react'

const DivMsg = styled.div`
    display: flex;
    flex-direction: ${props => props.usuario === 'eu' ? 'row-reverse' : 'rowss'};
    justify-content: space-between; 
    background-color: lightgrey;
    margin: 2px 0px;
`

const BotaoDeletar = styled.button`
background-color: #ff4646;
`



export default class Footer extends React.Component {

    state = {

    }

    render() {
        return (
            <div>
                <DivMsg>
                    <p>{this.props.usuario}: {this.props.mensagem}</p>
                <BotaoDeletar onClick={this.props.DeletarMensagem}>X</BotaoDeletar>
                </DivMsg>
            </div>
        )
    }

}