import styled from 'styled-components';

const StyledButton = styled.button`
    background-color:#6D7CE4;
    border: none;
    border-right: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    width: 220px;
    height: 55px;
    color: #ffffff;
    font-weight: 700;
    font-size: 21px;
    :active {
        border: none;
        border-top: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
`;
const StyledLinkButton = styled.div`
    margin-top: 7px;
    text-align: center;
    line-height: 21px;
    width: 220px;
    .swapLink {
        color: #ffffff;
        font-weight: 700;
        font-size: 17px;
    }
`;
export { StyledButton, StyledLinkButton };
