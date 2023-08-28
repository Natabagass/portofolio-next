import styled from "styled-components";

export const HoverUnderline = styled.span`
position: relative;
display: inline-block;
&:hover::after {
    content: "";
    display: block;
    height: 3.5px;
    width: 100%;
    background-color: #BFA181;
    position: absolute;
    border-radius: 20px;
    animation: slide 0.3s ease-in-out forwards;
}
@keyframes slide {
    from {
    transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}
`;