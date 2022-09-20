import React from "react";
import styled from "styled-components";

const ContainerEl = styled.div`
   max-width: 1300px;
   margin: 0 auto;
`;

const Container = ({ children }) => {
   return <ContainerEl>{children}</ContainerEl>;
};

export default Container;
