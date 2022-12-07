import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface NavValues {
  slug: string;
  name: string;
}

const ThemedIcon: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="36px"
      height="36px"
      style={{ cursor: "pointer" }}
    >
      <style type="text/css">
        {`.st0{fill:none;stroke:var(--theme-color);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        `}
      </style>
      <circle className="st0" cx="21" cy="16" r="8" />
      <line className="st0" x1="14" y1="5" x2="14" y2="6" />
      <line className="st0" x1="4.81" y1="6.81" x2="6.93" y2="8.93" />
      <line className="st0" x1="3" y1="16" x2="4" y2="16" />
      <line className="st0" x1="4.81" y1="25.19" x2="6.93" y2="23.07" />
      <line className="st0" x1="14" y1="27" x2="14" y2="26" />
      <path
        className="st0"
        d="M16.43,22.57C15.67,22.85,14.85,23,14,23c-3.87,0-7-3.13-7-7s3.13-7,7-7c0.85,0,1.67,0.15,2.43,0.43"
      />
    </svg>
  );
};

const Navigation: FC<{ links: NavValues[] }> = ({ links }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Nav>
      {links.map((link, k) => (
        <LinkNav
          key={k}
          to={link.slug}
          active={location.pathname === link.slug ? "true" : undefined}
        >
          {link.name}
        </LinkNav>
      ))}
      <ThemedIcon onClick={handleTheme} />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--spacing-16);
  margin-bottom: 0;
  padding-bottom: var(--spacing-16);
  border-bottom: 1px solid var(--color-dark-60);
`;

const LinkNav = styled(Link)<{ active?: string }>`
  color: var(--theme-color);
  text-decoration: none;
  ${({ active }) => `
    font-weight: ${active ? 800 : 500};
    font-size: ${active ? 18 : 14}px;
  `}
`;

export default Navigation;
