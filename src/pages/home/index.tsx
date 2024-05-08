import React from "react";
import { ContainerStyle, FooterStyle, HeaderStyle, SectionStyle } from "../../components/styles/style";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Section from "../../components/section";

const Home = () => {
    return (
        <ContainerStyle>
            <HeaderStyle>
                <Header />
            </HeaderStyle>
            <SectionStyle>
                <Section />
            </SectionStyle>
            <FooterStyle>
                <Footer />
            </FooterStyle>
        </ContainerStyle>
    );
}

export default Home;