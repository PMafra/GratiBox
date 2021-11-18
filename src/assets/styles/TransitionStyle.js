import { createGlobalStyle } from 'styled-components';

const TransitionStyle = createGlobalStyle`
    .fade-drop-enter {
        transform: translateX(-1000px);
        opacity: 0;
        z-index: 1;
    }
    .fade-drop-enter.fade-drop-enter-active {
        transform: translateX(100px);
        opacity: 0.6;
        transition: all 300ms ease-out;
    }
    .fade-drop-enter-done {
        transform: translateX(0px);
        opacity: 1;
        transition: all 300ms ease-in;
    }
    .fade-drop-exit {
        transform: translateX(10000px);
    }
`;
export default TransitionStyle;
