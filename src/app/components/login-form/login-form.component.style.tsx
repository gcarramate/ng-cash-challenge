import styled from 'styled-components';
import { Color, FontFamily, FontSize, Border, Spacing } from 'atomic/obj.constants';

export const LoginButtonStyled = styled.button`
  color: ${Color.White};
  background-color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  border-radius: ${Border.RadiusSmall};
  margin-top: ${Spacing.Medium};
  padding: ${Spacing.XSmall};
  cursor: pointer;
`;

export const FieldWrapperStyled = styled.div`
  display: block;
  padding-top: ${Spacing.Normal};
`;

export const FormWrapperStyled = styled.div`
  display: inline-table;
`;
