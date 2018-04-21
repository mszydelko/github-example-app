import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
    background: ${colors.white};
    color: ${colors.medium};
    height: 40px;
    line-height: 40px;

    
        &>div {
        border-top: 1px solid ${colors.blue}
        color: ${colors.white}
        background-color: ${colors.medium}
        vertical-align: middle;
        font-size: 12px;
        }
    `;

