import styled from "styled-components";

export const ContainerStyle = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-betwen;
    flex-direction: column;
    
`;

export const HeaderStyle = styled.header`
    width: 100%;
    height: auto;

`;

export const SectionStyle = styled.section`
    width: 100%;
    height: auto;
    min-height: 60vh;

    background-color: var(--background-color-defautl);

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const FooterStyle = styled.footer`
    width: 100%;
    height: auto;

`;

export const H1 = styled.h1`
    display: flex;
    
    color: var(--text-color-h1);

`;

export const H2 = styled.h2`
    display: flex;
    
    color: var(--text-color-h2);

`;

export const H3 = styled.h3`
    display: block;
    
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
    font-size: var(--size-h3);
    font-weight: bold;
    
    unicode-bidi: isolate;

    color: var(--text-color-h3);

`;

export const TextStyle = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-style: normal;
`;

export const Span = styled.span`
    padding: 1% 0%;

    flex:1;
    
`;

export const Link = styled.a`
    text-decoration: none;

    margin: 0;
    padding: 0;

    font-family: "Trebuchet MS", "arial", "helvetica", "Open Sans", sans-serif;
    font-size: 1rem;

    color: var(--text-color-a);

    box-sizing: border-box;

    display: flex;
    align-items: flex-start;
    justify-content: center;

`;

export const Img = styled.img`
`;

export const Nav = styled.nav`
    width: 100%;
    height: auto;
`;

export const Icone = styled.div`
    padding: 1% 0%;

    width: 16px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Input = styled.input`
    padding: 0.3125rem 0.9375rem;

    width: 95.8%;
    height: auto;

    display: block;

    outline: none;

    line-height: 1.9rem;

    background-color: var(--background-color-search);

    color: var(--text-color-cinza-escuro);

    border: 1px solid var(--text-color-cinza-escuro);
    border-radius: 5px;

    box-shadow: none;

    font-weight: 600;

`;

export const Select = styled.select`
    padding: 0.3125rem 0.9375rem;  

    width: 100%;
    height: auto;

    display: block;

    outline: none;

    line-height: 1.9rem;

    background-color: var(--background-color-search);

    color: var(--text-color-cinza-escuro);

    border: 1px solid var(--text-color-cinza-escuro);
    border-radius: 5px;

    box-shadow: none;

    font-weight: 600;

    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

`;