export class Color {
  public static readonly Black = '#333333';
  public static readonly White = '#FFFFFF';

  public static readonly GrayXLight = '#F5F5F5';
  public static readonly GrayLight = '#E2E2E2';
  public static readonly Gray = '#A3A3A3';
  public static readonly GrayDark = '#757575';
  public static readonly GrayXDark = '#525252';

  public static readonly Alert = '#B83A41';
  public static readonly Warning = '#FFB81C';
  public static readonly Success = '#147E42';
}

export enum FontFamily {
  Primary = 'Gotham',
}

export enum FontWeight {
  Medium = 500,
  Bold = 700,
  Normal = 400,
  Light = 300,
  SemiBold = 600,
}

export enum FontSize {
  XSmall = '12px',
  Small = '14px',
  Normal = '16px',
  Medium = '18px',
  Large = '20px',
  XLarge = '24px',
}

export enum LineHeight {
  XSmall = '16px',
  Small = '20px',
  Normal = '24px',
  Medium = '28px',
  Large = '32px',
  XLarge = '36px',
}

export enum Spacing {
  XSmall = '4px',
  Small = '8px',
  Normal = '12px',
  Medium = '16px',
  Large = '24px',
  XLarge = '32px',
}

export enum ZIndex {
  Ground = 0,
  AboveGround,
}

export const Shadow = {
  Small: '0px 2px 2px 0px rgba(0,0,0,0.2)',
};
