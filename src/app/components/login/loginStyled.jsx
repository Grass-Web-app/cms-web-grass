import styled from "styled-components";

export const DivAllpage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const DivImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 0;
`;
export const ImgGrass = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const DivContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const DivLogin = styled.div`
  width: 95%;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  @media (min-width: 1020px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const Plogin = styled.p`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 32px;
`;

export const DivContainerInput = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  overflow: hidden;
  padding-left: 8px;
  margin-bottom: 32px;
`;
export const InputLogin = styled.input`
  border-style: none;
  width: 100%;
  height: 60px;
  outline: none;
  font-size: 1rem;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) =>
    props.dissabled === "true" ? "#E5E7EB" : "#286579"};
  color: ${(props) => (props.dissabled === "true" ? "#9CA3AF" : "white")};
  font-size: 1rem;
`;

export const PRegister = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  display: none;
`;

export const DivInputRelative = styled.div`
  position: relative;
`;

export const Pverifica = styled.p`
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  text-align: right;
  color: red;
  display: ${(props) => props.show === "false" && "none"};
`;
