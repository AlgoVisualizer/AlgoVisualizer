import styled from "styled-components";

const ItemText = styled.div`
    color: ${(props) => props.theme.sidebar.foreground};
    font-size: 16px;
    text-align:center;
    padding-top:10px;
`;

export default ItemText;