/* 
    Styled Components가 아직 Theme에 대한 정확한 Type을 제공하지 않아서 JS로 처리함.
    추후 업데이트 필요.
*/
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }
`;