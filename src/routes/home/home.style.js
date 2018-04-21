import styled from 'styled-components';
import {colors} from "../../utils/styles/color.style";

export const Container = styled.div`
    text-align: center;
    `;

export  const Description = styled.div`
        padding-bottom: 15px;
        
    `;

export  const UserLoginBox = styled.div`
        border: 1px solid ${colors.light};
        margin: 50px auto;
        text-align: center;
        width: 500px;
        padding: 10px 0 20px 0;
        color: ${colors.medium}
        
    `;

export const UserInput = styled.input`
        height: 20px;
        padding: 0 10px;
    `;

export const UserButton = styled.button`
        border: none
        background: ${colors.blue};
        color: ${colors.white}
        padding: 5px 10px;
        font-size; 10px;
        margin-left: 10px;
        cursor: pointer;
        
        &:hover {
            background: ${colors.medium};
        }
    `;