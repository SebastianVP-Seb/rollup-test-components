import styled, { css } from "styled-components";
import { IButtonStyleCore } from "../../types/__internal__";

//El tema será a través del provider, se define desde él
export const ButtonStyleCore = styled.button<IButtonStyleCore>`

    border-radius: 50px;

    ${({theme, color='primary', variant})=>{

        switch (variant) {
            case variant?.fill:
                return css`
                    border: 1px solid ${theme.color[color]};
                    background-color: ${theme.color[color]};
                    color: ${theme.color.default.white};
                `;
            case variant?.outline:
                return css`
                    border: 1px solid ${theme.color[color]};
                    background-color: ${theme.color.default.white};
                    color: ${theme.color[color]};
                `;
            case variant?.linkUnderline:
                return css`
                    border: none;
                    background-color: unset;
                    color: ${theme.color[color]};
                    text-decoration: underline;
                `;
        }
        return css``
    }}

    ${({theme, size})=>{

        const sizeTheme=theme?.components.button?.size;

        switch (size) {
            case size?.xs:
                return css`
                    width: ${sizeTheme? sizeTheme : '1rem'};
                `;
            case size?.sm:
                return css`
                    width: ${sizeTheme? sizeTheme : '7rem'};
                `;
            case size?.md:
                return css`
                    width: ${sizeTheme? sizeTheme : '14rem'};
                `;
            case size?.lg:
                return css`
                    width: ${sizeTheme? sizeTheme : '18rem'};
                `;
            case size?.xl:
                return css`
                    width: ${sizeTheme? sizeTheme : '100%'};
                `;
            default:
                break;
        }
        return css``;
    }}
`;