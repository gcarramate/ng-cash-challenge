import * as React from 'react';
import { LoggedOutPage, PageVariants } from 'app/components/logged-out-page';

export const CreateAccountPage: React.FC = () => {
  return <LoggedOutPage variant={PageVariants.createAccount} />;
};
