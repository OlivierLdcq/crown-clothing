import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainers,
} from "./navigation.style.js";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cartOpen, setCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  const cartToogleHandler = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainers>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <span onClick={signOutHandler}> SIGNOUT</span>
          ) : (
            <NavLink to="/signin">SIGNIN</NavLink>
          )}
          <CartIcon cartToogleHandler={cartToogleHandler} />
        </NavLinksContainers>
        {cartOpen && <CartDropdown />}
      </NavigationContainer>{" "}
      <Outlet />{" "}
    </>
  );
};

export default Navigation;
