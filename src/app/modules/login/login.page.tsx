import * as React from 'react';
import { useHistory } from 'react-router';
import { LoginCardStyled, RedirectButtonWrapperStyled } from 'app/components/login-card';
import { LoginForm } from 'app/components/login-form';
import { PageTitle } from 'app/components/page-title/page-title.component';
import { LoginPageWrapper } from 'app/components/page-wrapper/login-page-wrapper.component.style';
import { LoginStrings } from 'app/modules/login/login.strings';
import { AppPath } from 'app/route-constants';
import { Label } from 'atomic/atm.typography';
import { Hbox } from 'atomic/obj.box';

const strings = LoginStrings;

export const LoginPage: React.FC = () => {
  const history = useHistory();

  const redirectToCreateAccount = () => {
    history.push(AppPath.CreateAccount);
  };

  return (
    <LoginPageWrapper>
      <PageTitle text={strings.title} />
      <LoginCardStyled>
        <LoginForm />
      </LoginCardStyled>
      <RedirectButtonWrapperStyled>
        <Hbox>
          <Hbox.Item noGrow>
            <Label>{strings.noAccount}</Label>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item noGrow>
            <button onClick={redirectToCreateAccount}>{strings.createAccount}</button>
          </Hbox.Item>
        </Hbox>
      </RedirectButtonWrapperStyled>
    </LoginPageWrapper>
  );
};
