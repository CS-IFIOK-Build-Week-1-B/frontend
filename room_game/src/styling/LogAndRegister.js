import styled from "styled-components";
import img from "../utils/images/finalfantasy.jpg";
import { NavLink } from "react-router-dom";

export const LoginDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
`;

export const FormDiv = styled.div`
  height: 250px;
  width: 250px;
  /* border: 5px solid blue; */
  padding: 30px;
  background: white;
  opacity: 0.4;
  border-radius: 5px;
  :hover& {
    opacity: 0.6;
  }
`;

export const RegisterForm = styled(FormDiv)`
  height: 310px;
`;

export const NaviLink = styled(NavLink)`
  font-size: 17px;
  text-decoration: none;
  color: black;

  :hover& {
    color: red;
  }
`;
