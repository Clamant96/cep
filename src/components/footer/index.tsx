import { 
    H3, 
    Icone,
    Link, 
    Nav, 
    Span } from '../styles/style';
import './style.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Nav>
                <div className="rodape-links">
                    <H3 className="title_footer">Fale Conosco</H3>    
                    <Link href="https://faleconosco.correios.com.br/faleconosco/app/index.php" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Registro de manifestações</Span>
                    </Link>
                    <Link href="https://www.correios.com.br/falecomoscorreios/central-de-atendimento" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Central de atendimento</Span>&nbsp; 
                    </Link>
                    <Link href="https://faleconosco.correios.com.br/faleconosco/app/cadastro/contrate/index.php" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Soluções para o seu negócio</Span>&nbsp; 
                    </Link>
                    <Link href="https://faleconosco.correios.com.br/faleconosco/app/cadastro/suporte/index.php" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Suporte ao cliente com contrato</Span>&nbsp; 
                    </Link>      
                    <Link href="https://www.correios.com.br/falecomoscorreios/ouvidoria" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Ouvidoria</Span>&nbsp; 
                    </Link> 
                    <Link href="https://www.correios.com.br/falecomoscorreios/canais-de-denuncia" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Denúncia</Span>&nbsp; 
                    </Link>
                </div>

                <div className="rodape-links">
                    <H3 className="title_footer">Sobre os Correios</H3>
                    <Link href="https://www.correios.com.br/acesso-a-informacao/institucional/identidade-corporativa" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Identidade corporativa</Span>&nbsp; 
                    </Link>
                    <Link href="https://www.correios.com.br/educacao-e-cultura" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Educação e cultura</Span>&nbsp; 
                    </Link>  
                    <Link href="https://www.correios.com.br/acesso-a-informacao/servidores/arquivos/codigo-de-conduta-etica-integridade" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Código de Conduta Ética e Integridade</Span>&nbsp; 
                    </Link>
                    <Link href="https://www.correios.com.br/acesso-a-informacao/transparencia-e-governanca/transparencia-e-prestacao-de-contas/transparencia-e-prestacao-de-contas" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Transparência e prestação de contas</Span>&nbsp; 
                    </Link>   
                    <Link href="https://www.correios.com.br/falecomoscorreios/politica-de-privacidade-e-cookies" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Política de privacidade e cookies</Span>&nbsp; 
                    </Link>
                </div> 

                <div className="rodape-links">
                    <H3 className="title_footer">Outros Sites</H3>                                    
                    <Link href="http://shopping.correios.com.br/wbm/store/script/store.aspx?cd_company=ErZW8Dm9i54=" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Loja online dos Correios</Span>&nbsp; 
                    </Link>
                    
                    <Link href="https://www.gov.br/mcom/pt-br" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Ministério das Comunicações</Span>&nbsp; 
                    </Link>                
                    
                    <Link href="https://www.postalis.org.br/" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Postalis</Span>&nbsp; 
                    </Link>
                    <Link href="https://www.postalsaude.com.br/" className="link_rodape">
                        <Icone className="proporcao-link-rodape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </Icone>&nbsp; 
                        <Span>Postal Saúde</Span>
                    </Link>
                </div>
            </Nav>

            <Nav>
                <div className="row-copyright">
                    <div className="copyright">
                        <Span>© Copyright 2022 Correios</Span>			
                    </div>
                </div>
            </Nav>
        </div>
    );
}

export default Footer;