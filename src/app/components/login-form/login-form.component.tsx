import * as React from 'react';
import { useState } from 'react';
import {
  LoginButtonStyled,
  FieldWrapperStyled,
  FormWrapperStyled,
} from 'app/components/login-form/login-form.component.style';
import { LoginStrings } from 'app/modules/login/login.strings';
import { Body, InputLabel } from 'atomic/atm.typography';
import { Hbox } from 'atomic/obj.box';

interface LoginFormInput {
  email?: string;
  password?: string;
}

const strings = LoginStrings.form;

export const LoginForm: React.FC = () => {
  const [inputs, setInputs] = useState<LoginFormInput>({});

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

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
        <Body variant="white">{strings.submitButton}</Body>
      </LoginButtonStyled>
    </FormWrapperStyled>
  );
};
