// import Link from "../Link";
import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { onMobile, onTablet } from '../../styles/responsive';

const logoStyle = (theme) => css`
  padding: 0 0;
  display: flex;
  align-items: center;
  ${onMobile} {
    min-height: 40px;
  }
  img {
    width: 40px;
    margin-right: 16px;
    display: inline-block;
    ${onTablet} {
      width: 50px;
    }
    ${onMobile} {
      margin-right: 8px;
      width: 45px;
    }
  }

  span {
    font-family: 'Caveat', cursive;
    letter-spacing: 3px;
    height: auto;
    font-size: 26px;
    line-height: 1.5;
    color: ${theme.header.font.base};
    ${onTablet} {
      font-size: 20px;
    }
    ${onMobile} {
      font-size: 18px;
      letter-spacing: 1px;
      flex: initial;
      padding: 0 15px 0 0;
    }
    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }
`;

const LogoWrapper = styled.div`
  margin-left: ${(props) => props.theme.layout.leftMargin};
  ${onMobile} {
    margin-left: 10px;
  }
`;

const Logo = styled(({ className, link, img, title }) => {
  const theme = useTheme();
  // let split = title.split(' ');
  // split[0] = '<strong>' + split[0];
  // const last = split.length < 3 ? 0 : split.length - 2;
  // split[last] = split[last] + '</strong>';
  // const title2 = split.join(' ');
  // <img css={{ display: 'inline-block' }} src={img} alt={'logo'} loading={'lazy'} />
  return (
    <div className={className}>
      <LogoWrapper>
        <Link to={link} css={logoStyle(theme)}>
          <span css={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      </LogoWrapper>
    </div>
  );
})`
  min-width: ${(props) => props.theme.layout.leftWidth};
  display: flex;
  align-items: center;

  ${onMobile} {
    border-right: none;
    min-width: auto;
    padding-right: 0;
  }
`;
// border-right: 1px solid ${(props) => props.theme.header.border};
export default Logo;
