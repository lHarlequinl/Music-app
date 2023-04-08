import styled from 'styled-components';

export const BurgerLine = styled.span<{
    active: boolean;
    isDarkTheme: boolean;
}>`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${(props) =>
        props.isDarkTheme
            ? '#d3d3d3'
            : '#000000'};

    transition: transform 0.5s;

        &:nth-child(1) {
            transform: ${(props) => (props.active ? 'rotate(45deg)' : '')};
            transform-origin: ${(props) => (props.active ? '8px 3px' : '')};
			transition: transform 0.5s;
        }

        &:nth-child(2) {
            transform: ${(props) => (props.active ? 'scale(0)' : '')};
			transition: transform 0.5s;
        }

        &:nth-child(3) {
            transform: ${(props) => (props.active ? 'rotate(-45deg)' : '')};
            transform-origin: ${(props) => (props.active ? '2px -4px' : '')};
			transition: transform 0.5s;
        }
    }
`;
