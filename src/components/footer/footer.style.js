import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
    background: ${colors.white};
    color: ${colors.medium};
    height: 30px
    line-height: 20px;
    
        &>div {
        margin-top: 20px;
        border-top: 1px solid ${colors.light}
        color: ${colors.medium}
        font-size: 12px;
        }
    `;

