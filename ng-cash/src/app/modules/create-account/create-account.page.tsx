import * as React from 'react';
import { PageVariants } from 'app/components/logged-out-page/logged-out-form';
import { LoggedOutPage } from 'app/components/logged-out-page/logged-out-page.component';

export const CreateAccountPage: React.FC = () => {
  return <LoggedOutPage variant={PageVariants.createAccount} />;
};
