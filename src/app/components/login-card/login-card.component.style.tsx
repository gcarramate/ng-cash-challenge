import styled from 'styled-components';
import { Color, Border, Spacing } from 'atomic/obj.constants';

export const LoginCardStyled = styled.div`
  display: flex;
  background-color: ${Color.GrayXLight};
  border-radius: ${Border.RadiusLarge};
  align-items: center;
  text-align: center;
  width: max-content;
  margin: auto;
  padding: ${Spacing.Medium};
`;

export const RedirectButtonWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: max-content;
  margin: auto;
  margin-top: ${Spacing.Medium};
`;
