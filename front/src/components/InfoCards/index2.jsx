import React from 'react'
import Navegabilidade from '../../img/navegabilidadeDoSite.png'
import './InfoCards.css'


export default () => {
    return(
        <div class="about">
            <h3>Navegabilidade do site</h3>
            <img src={Navegabilidade} alt="navegabilidade Do Site"/>
            <p>Nosso site possui um sistema de contratacao integrado ao ERP, que por sua vez trara vagas disponiveis de eutras redes sociais</p>
        </div>
    )
}