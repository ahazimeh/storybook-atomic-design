import React from "react";
import { arrayOf, shape, string } from "prop-types";

import StyledNavigation from "./navigation.styles";

import { ReactComponent as IconBag } from "../../../../.storybook/assets/images/icons/shopping-bag.svg";
import { ReactComponent as IconCart } from "../../../../.storybook/assets/images/icons/shopping-cart.svg";
import { ReactComponent as IconPlus } from "../../../../.storybook/assets/images/icons/plus.svg";
import { ReactComponent as IconUser } from "../../../../.storybook/assets/images/icons/user.svg";
import { ReactComponent as IconX } from "../../../../.storybook/assets/images/icons/x.svg";

const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const Navigation = ({ direction, items }) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map((item) => (
        <a href={item.url}>
          {item.icon ? (
            <NavigationIcon name={item.icon} title={item.title} />
          ) : (
            item.title
          )}
        </a>
      ))}
    </StyledNavigation>
  );
};

// Expected prop values
Navigation.propTypes = {
  direction: string.isRequired,
  items: arrayOf(
    shape({
      icon: string,
      title: string.isRequired,
      url: string.isRequired,
    })
  ),
};

// Default prop values
Navigation.defaultProps = {
  direction: "horizontal",
  items: [],
};

const NavigationIcon = ({ name, title }) => {
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[name] === undefined) return null;
  // If icon found, return the icon in a span element
  const Icon = Icons[name];
  return (
    <span className="navigation__icon">
      {title && <span className="hidden">{title}</span>}
      <Icon />
    </span>
  );
};

// Navigation Icon component always expects on prop value for icon name
NavigationIcon.propTypes = {
  name: string.isRequired,
};

export default Navigation;
