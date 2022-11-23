import * as React from 'react';
import { PageTitleH1, PageTitleDiv } from 'app/components/page-title';

export interface PageTitleProps {
  text: string;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleDiv>
      <PageTitleH1>{props.text}</PageTitleH1>
    </PageTitleDiv>
  );
};
