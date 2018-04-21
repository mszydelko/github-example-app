import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
    
    `;

export const Head = styled.div`
    height: 80px;
    line-height: 80px;
    background: ${colors.medium};
  
      a {
      text-decoration: none;
      color: ${colors.white};
      font-weight: bold;
          &:hover {
            color: ${colors.blue}
          }
      
      }
    `;