import * as React from 'react';
import { useHistory } from 'react-router';
import { LoggedOutCardStyled, LinkButtonWrapperStyled, LinkButtonStyled } from 'app/components/logged-out-card';
import { LoggedOutForm, PageVariants } from 'app/components/logged-out-form';
import { LoggedOutStrings } from 'app/components/logged-out-page/logged-out.strings';
import { PageTitle } from 'app/components/page-title/page-title.component';
import { PageWrapper } from 'app/components/page-wrapper/page-wrapper.component.style';
import { AppPath } from 'app/route-constants';
import { Label } from 'atomic/atm.typography';
import { Hbox } from 'atomic/obj.box';
import { LOGO_SIZE } from 'atomic/obj.constants';

interface LoggedOutPageProps {
  variant: PageVariants;
}

export const LoggedOutPage: React.FC<LoggedOutPageProps> = (props) => {
  const history = useHistory();

  const redirect = () => {
    if (props.variant === PageVariants.login) history.push(AppPath.CreateAccount);
    else history.push(AppPath.Login);
  };

  const strings = props.variant === PageVariants.login ? LoggedOutStrings.login : LoggedOutStrings.createAccount;

  return (
    <PageWrapper>
      <img src={require('../../../assets/images/logo_ng_cash.gif')} alt="my-gif" width={LOGO_SIZE} />
      <PageTitle text={strings.title} />
      <LoggedOutCardStyled>
        <LoggedOutForm variant={props.variant} />
      </LoggedOutCardStyled>
      <LinkButtonWrapperStyled>
        <Hbox>
          <Hbox.Item noGrow>
            <Label>{strings.message}</Label>
          </Hbox.Item>
          <Hbox.Separator size="xSmall" />
          <Hbox.Item noGrow>
            <LinkButtonStyled onClick={redirect}>
              <Label variant="white">{strings.redirectButton}</Label>
            </LinkButtonStyled>
          </Hbox.Item>
        </Hbox>
      </LinkButtonWrapperStyled>
    </PageWrapper>
  );
};
