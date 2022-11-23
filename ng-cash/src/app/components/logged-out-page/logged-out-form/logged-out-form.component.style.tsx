import styled from 'styled-components';
import { Color, Border, Spacing } from 'atomic/obj.constants';

export const LoginButtonStyled = styled.button`
  color: ${Color.White};
  background-color: ${Color.TrueBlack};
  border-radius: ${Border.RadiusSmall};
  margin-top: ${Spacing.Large};
  padding: 0 ${Spacing.XSmall};
  width: 100%;
  cursor: pointer;
`;

export const FieldWrapperStyled = styled.div`
  display: block;
  padding-top: ${Spacing.Normal};
`;

export const FormWrapperStyled = styled.div`
  display: block;
`;
