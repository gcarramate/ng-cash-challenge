import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight, Spacing, LineHeight } from '../obj.constants/constants';

export type BodyVariant = 'success' | 'alert' | 'black' | 'regular' | 'white';

const BodyVariantColors: Record<BodyVariant, string> = {
  success: Color.Success,
  alert: Color.Alert,
  black: Color.Black,
  regular: Color.GrayDark,
  white: Color.White,
};

export interface BodyProps {
  variant?: BodyVariant;
}

interface InputLabelProps {
  hasError?: boolean;
  noMargin?: boolean;
}

export const H1 = styled.h1`
  color: ${Color.Black};
  font-size: ${FontSize.XLarge};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  line-height: ${LineHeight.XLarge};
  margin-bottom: ${Spacing.XLarge};
  margin-top: ${Spacing.XLarge};
`;

export const H2 = styled.h2`
  color: ${Color.GrayXDark};
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  line-height: ${LineHeight.Large};
  margin-bottom: ${Spacing.Large};
  margin-top: ${Spacing.Large};
`;

export const H3 = styled.h3`
  color: ${Color.GrayDark};
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.SemiBold};
  line-height: ${LineHeight.Medium};
  margin-bottom: ${Spacing.Medium};
  margin-top: ${Spacing.Medium};
`;

export const Body = styled.p<BodyProps>`
  color: ${(props) => (props.variant ? BodyVariantColors[props.variant] : Color.GrayDark)};
  margin: 0;
  font-size: ${FontSize.Normal};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  line-height: ${LineHeight.Normal};
`;

export const Label = styled(Body)`
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  line-height: ${LineHeight.Small};
`;

export const InputLabel = styled.label<InputLabelProps>`
  color: ${(props) => (props.hasError ? Color.Alert : Color.GrayXDark)};
  display: block;
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  line-height: ${LineHeight.Small};
  margin-bottom: ${(props) => (props.noMargin ? 0 : Spacing.XSmall)};
`;
