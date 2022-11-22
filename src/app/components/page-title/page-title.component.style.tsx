import styled from 'styled-components';
import { H1 } from 'atomic/atm.typography';
import { Color } from 'atomic/obj.constants';

export const PageTitleH1 = styled(H1)`
  color: ${Color.White};
`;

export const PageTitleDiv = styled.div`
  display: absolute;
  margin-top: 0;
  margin-bottom: 0;
  align-items: center;
  text-align: center;
`;
