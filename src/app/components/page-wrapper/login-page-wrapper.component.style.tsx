import styled from 'styled-components';
import { Color, Spacing } from 'atomic/obj.constants';

export const LoginPageWrapper = styled.div`
  display: absolute;
  background-color: ${Color.TrueBlack};
  align-items: center;
  align-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin: ${`-${parseInt(Spacing.XLarge)}px -${parseInt(Spacing.Small)}px`};
  padding: 0;
`;
