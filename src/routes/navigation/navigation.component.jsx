import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useState } from "react";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  const [cartOpen, setCartOpen] = useState(false);
  const cartToogleHandler = () => {
    setCartOpen(!cartOpen);
  };

  console.log(cartOpen);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              SIGNOUT
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              SIGNIN
            </Link>
          )}
          <CartIcon cartToogleHandler={cartToogleHandler} />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
      <Outlet />{" "}
    </>
  );
};

export default Navigation;
