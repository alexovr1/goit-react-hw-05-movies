import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapBox = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const BarWrapper = styled.nav`
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.4);
  font-weight: 700;
  font-size: 24px;
  display: flex;
  gap: 20px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
    :hover {
        background-color: blue;
        color: white;
      /* text-decoration: underline; */
    }
  }
  :hover:not(.active),
  :focus:not(.active) {
    background-color: blue;
        color: white;
  }
`;
