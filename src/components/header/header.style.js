import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
    
    `;

export const Head = styled.div`
    height: 100px;
    line-height: 100px;
    background: ${colors.light};
  
      a {
      text-decoration: none;
      color: ${colors.blue};
      font-weight: bold;
          &:hover {
            color: ${colors.white}
          }
      
      }
    `;