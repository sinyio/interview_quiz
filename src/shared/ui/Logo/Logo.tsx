import logo from '@/shared/assets/icons/logo.svg';
import logoWithoutImage from '@/shared/assets/icons/logoWithoutImage.svg';
import { HTMLAttributes } from 'react';

interface LogoProps {
  image?: boolean;
}

export const Logo = ({ image, ...props }: LogoProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <img src={image ? logo : logoWithoutImage} alt="YeaHub" />
    </div>
  );
};
