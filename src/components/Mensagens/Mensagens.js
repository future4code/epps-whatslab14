import styled from 'styled-components'
import React from 'react'

const DivMsg = styled.div`
    display: flex;
    background-color: lightgrey;

`

export default class Footer extends React.Component {

    state = {

    }

    render() {
        return (
           <DivMsg>
               <p>{this.props.usuario}: {this.props.mensagem}</p>
           </DivMsg>
        )
    }

}