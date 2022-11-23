import styled from 'styled-components';
import { Color, Border, Spacing } from 'atomic/obj.constants';

export const LoggedOutCardStyled = styled.div`
  display: flex;
  background-color: ${Color.GrayXLight};
  border-radius: ${Border.RadiusLarge};
  align-items: center;
  text-align: center;
  width: max-content;
  margin: auto;
  padding: ${Spacing.Medium};
`;

export const LinkButtonWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: max-content;
  margin: auto;
  margin-top: ${Spacing.Medium};
`;

export const LinkButtonStyled = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
