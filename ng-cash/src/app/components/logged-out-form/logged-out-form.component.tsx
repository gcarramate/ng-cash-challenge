import * as React from 'react';
import { useState } from 'react';
import {
  LoginButtonStyled,
  FieldWrapperStyled,
  FormWrapperStyled,
} from 'app/components/logged-out-form/logged-out-form.component.style';
import { LoggedOutStrings } from 'app/components/logged-out-page/logged-out.strings';
import { Body, InputLabel } from 'atomic/atm.typography';
import { Hbox } from 'atomic/obj.box';

interface LoggedOutFormInput {
  email?: string;
  password?: string;
}

export enum PageVariants {
  login,
  createAccount,
}

interface LoggedOutFormProps {
  variant: PageVariants;
}

export const LoggedOutForm: React.FC<LoggedOutFormProps> = (props) => {
  const [inputs, setInputs] = useState<LoggedOutFormInput>({});

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const strings = LoggedOutStrings.form;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <FormWrapperStyled>
      <FieldWrapperStyled>
        <Hbox>
          <Hbox.Item hAlign="flex-start">
            <InputLabel>{strings.username}</InputLabel>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item hAlign="flex-end">
            <input type="text" name="email" value={inputs.email || ''} onChange={handleChange} />
          </Hbox.Item>
        </Hbox>
      </FieldWrapperStyled>
      <FieldWrapperStyled>
        <Hbox>
          <Hbox.Item hAlign="flex-start">
            <InputLabel>{strings.password}</InputLabel>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item hAlign="flex-end">
            <input type="password" name="password" value={inputs.password || ''} onChange={handleChange} />
          </Hbox.Item>
        </Hbox>
      </FieldWrapperStyled>
      <LoginButtonStyled onClick={handleSubmit}>
        <Body variant="white">
          {props.variant === PageVariants.login ? strings.loginButton : strings.registerButton}
        </Body>
      </LoginButtonStyled>
    </FormWrapperStyled>
  );
};
