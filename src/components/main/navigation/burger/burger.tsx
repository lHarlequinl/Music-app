import { ShowHideMenu } from '../../../../types';
import * as Styled from './burger.style';

const BurgerLines = ({ menuActive }: ShowHideMenu) => {
    return <Styled.BurgerLine active={menuActive}></Styled.BurgerLine>;
};

export default BurgerLines;
