import styled from 'styled-components';

export const BurgerLine = styled.span<{ active: boolean }>`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;

    transition: transform 0.5s;

        &:nth-child(1) {
            transform: ${props => props.active ? 'rotate(45deg)' :'translate(6px, -2px)'};
            transform-origin: ${props => props.active ? 'left top' : 'none'};

			transition: transform 0.5s;
        }

        &:nth-child(2) {
            transform: ${props => props.active ? 'none' :'scale(0)'};

			transition: transform 0.5s;
        }

        &:nth-child(3) {
            transform: ${props => props.active ? 'rotate(-45deg)' :'translate(0px, -11px)'};
            transform-origin: ${props => props.active ? 'right bottom' : 'none'};

			transition: transform 0.5s;
        }
    }
`;
