import { useState } from 'react';
import { H2, Input, Select } from '../styles/style';
import './style.css';
import useCepService from '../../api/service/cepService';
import Load from '../util/load';

const Section = () => {

    const [cep, setCep] = useState<string>('');

    const { address, loading, error } = useCepService(cep);

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
    };

    return (
        <div className='section'>
            <div className="form" id="formulario">    
                <div className="campos">  
                    <div className="campo">
                        <div id="titulo_tela">
                            <H2>Busca CEP</H2>
                        </div>                        
                    </div>    
                </div>
                <section id="inicioConteudo">
                    <div className="campos">
                        <div className="campo col-7 required">

                            <div className="rotulo">
                                <label form="endereco">Digite um CEP ou um Endereço:</label>
                            </div>
                            <div className="controle">
                                <Input name="endereco" id="endereco" type="text" value={cep} required={true} placeholder="Não utilize nº de casa/apto/lote/prédio ou abreviação." className="invalid" onChange={handleCepChange} />                              
                            </div>
                            <div className="mensagem" title="mensagem" hidden={true}>Preencha este campo.</div>
                        </div>
                    </div>
                    <div className="campos">    
                        <div className="campo col-1">
                            <div className="botoes">
                                <button name="btn_pesquisar" id="btn_pesquisar" className="primario">Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div className='endereco'>
                        {loading && (
                            <Load />
                        )}
                        {error && <p>{error}</p>}
                        {address && (
                            <div>
                            <p>CEP: {address.cep}</p>
                            <p>Logradouro: {address.logradouro}</p>
                            <p>Bairro: {address.bairro}</p>
                            <p>Cidade: {address.localidade}</p>
                            <p>Estado: {address.uf}</p>
                            </div>
                        )}
                    </div>
              </section>
            </div>
        </div>
    );
}

export default Section;