import styled from 'styled-components';

import { Spacing } from 'atomic/obj.constants';

interface BoxProps {
  // src: https://www.w3schools.com/cssref/css3_pr_align-items.asp
  hAlign?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  // src: https://www.w3schools.com/cssref/css3_pr_justify-content.asp
  vAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
}

interface SeparatorProps {
  size?: 'xSmall' | 'small' | 'normal' | 'large';
}

export interface HboxProps extends BoxProps {
  noGrow?: boolean;
  overflowHidden?: boolean;
}

const HboxStyled = styled.div<HboxProps>`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: ${(props) => (props.hAlign ? props.hAlign : 'flex-start')};
  align-items: ${(props) => (props.vAlign ? props.vAlign : 'stretch')};
`;

export const Hbox: any = HboxStyled;
Hbox.displayName = 'Hbox';

Hbox.Item = styled.div<HboxProps>`
  flex-direction: column;
  display: flex;
  ${(props) => (!props.noGrow ? 'flex: 1;' : null)}
  ${(props) => (props.overflowHidden ? 'overflow: hidden;' : null)}
  justify-content: ${(props) => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${(props) => (props.hAlign ? props.hAlign : 'stretch')};
`;
Hbox.Item.displayName = 'Hbox.Item';

Hbox.Separator = styled.div<SeparatorProps>`
  padding-right: ${(props) => (props.size ? separatorSizes[props.size].spacing : Spacing.Small)};
`;
Hbox.Separator.displayName = 'Hbox.Separator';

const separatorSizes = {
  xSmall: { spacing: Spacing.XSmall },
  small: { spacing: Spacing.Small },
  normal: { spacing: Spacing.Medium },
  large: { spacing: Spacing.XLarge },
};

export const Separator = styled.div<SeparatorProps>`
  padding-bottom: ${(props) => (props.size ? separatorSizes[props.size].spacing : Spacing.Medium)};
`;
