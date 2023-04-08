import styled from 'styled-components';

export const TrackTime = styled.div`
    position: relative;
    width: 61px;
    overflow: hidden;
`;

export const TrackTimeWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const TrackTimeSVGWRapper = styled.div<{
    isDarkTheme: boolean;
}>`
    --color: ${(props) => (props.isDarkTheme ? '#696969' : '#B1B1B1')};
    --color-hover: ${(props) => (props.isDarkTheme ? '#ACACAC' : '#707070')};
    --color-active: ${(props) => (props.isDarkTheme ? '#FFFFFF' : 'transparent')};
    --color-active-fill: ${(props) => (props.isDarkTheme ? '#696969' : '#AD61FF')};

    width: 14px;
    height: 12px;
    margin-right: 17px;
    color: var(--color);
    fill: transparent;
    cursor: pointer;

    :hover {
        color: var(--color-hover);
    }

    :active {
        fill: var(--color-active-fill);
        color: var(--color);
    }
`;

export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;
