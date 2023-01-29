/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  Logo,
  Menu,
  MenuItem,
  MobileMenu,
  NavIcon,
  NavIconItem,
  NavIcons,
  NavWrapper,
  NvigationContainer,
  Title,
  TitleWrapper,
  HeaderWrapper,
  Badge,
  SideBar,
  SideBarContent,
  SideBarTop,
} from "./Header.style";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import {  NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { Dropdown } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase.config";
import { toast } from "react-toastify";

const nav_links = [
  {
    path: "home",
  },
  {
    path: "shop",
  },
  {
    path: "cart",
  },
];
const Header = () => {
  const [isTopOfThePage, setIsTopOfThePage] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  const { totalQuantity } = useSelector((state: any) => state.cart);
  const { currentUser } = useAuth();
  // const { user } = useSelector((state: any) => state.user);

  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    const scrollHandling = () => {
      window.scrollY === 0
        ? setIsTopOfThePage("")
        : setIsTopOfThePage("sticky_header");
    };
    window.addEventListener("scroll", scrollHandling);
    return () => window.removeEventListener("scroll", scrollHandling);
  }, []);

  return (
    <HeaderWrapper className={`${isTopOfThePage}`}>
      <Container>
        <Row>
          <NavWrapper>
            <Logo>
              <img src={logo} alt="Logo" />
              <TitleWrapper>
                <Title>Multimart</Title>
              </TitleWrapper>
            </Logo>
            {isAboveSmallScreen ? (
              <>
                <NvigationContainer>
                  <Menu>
                    {nav_links.map((link, index) => (
                      <MenuItem key={index}>
                        <NavLink
                          to={`/${link.path}`}
                          className={(navClass) =>
                            navClass.isActive ? "nav_active" : ""
                          }
                        >
                          {link.path.toLocaleUpperCase()}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </Menu>
                </NvigationContainer>
                <NavIcons>
                  <NavIcon style={{ position: "relative" }}>
                    <NavIconItem className="ri-heart-line"></NavIconItem>
                    <Badge>1</Badge>
                  </NavIcon>
                  <NavIcon
                    style={{ position: "relative" }}
                    onClick={navigateToCart}
                  >
                    <NavIconItem className="ri-shopping-basket-line"></NavIconItem>
                    <Badge>{totalQuantity}</Badge>
                  </NavIcon>
                  <NavIcon>
                    <Dropdown>
                      <Dropdown.Toggle>
                        <motion.img
                          whileTap={{ scale: 1.1 }}
                          src={currentUser ? currentUser.photoURL : userIcon}
                          alt={currentUser ? currentUser.displayName : ""}
                        />
                        {currentUser && (
                          <span>
                            {" "}
                            Hi,{" "}
                            <span className="fw-bold">
                              {currentUser.displayName}
                            </span>
                          </span>
                        )}
                      </Dropdown.Toggle>

                      {currentUser ? (
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      ) : (
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate('login')}>Login </Dropdown.Item>
                          <Dropdown.Item onClick={() => navigate('signup')}>Signup </Dropdown.Item>
                        </Dropdown.Menu>
                      )}
                    </Dropdown>
                  </NavIcon>
                </NavIcons>
              </>
            ) : (
              <>
                <MobileMenu>
                  <NavIcon
                    style={{ position: "relative" }}
                    onClick={navigateToCart}
                  >
                    <NavIconItem className="ri-shopping-basket-line"></NavIconItem>
                    <Badge>{totalQuantity}</Badge>
                  </NavIcon>
                  <NavIcon style={{ position: "relative" }}>
                    <NavIconItem className="ri-heart-line"></NavIconItem>
                    <Badge>1</Badge>
                  </NavIcon>
                  <NavIcon>
                    <NavIconItem
                      onClick={() => setShowSideBar(true)}
                      className="ri-menu-line"
                    ></NavIconItem>
                  </NavIcon>
                </MobileMenu>
                {showSideBar && (
                  <SideBar>
                    <SideBarTop>
                      <NavIcon>
                        <NavIconItem
                          onClick={() => setShowSideBar(false)}
                          className="ri-close-line"
                        ></NavIconItem>
                      </NavIcon>
                      <NavIcon>
                        <Dropdown>
                          <Dropdown.Toggle>
                            <motion.img
                              whileTap={{ scale: 1.1 }}
                              src={
                                currentUser ? currentUser.photoURL : userIcon
                              }
                              alt={currentUser ? currentUser.displayName : ""}
                            />
                            {currentUser && (
                              <span>
                                {" "}
                                Hi,{" "}
                                <span className="fw-bold">
                                  {currentUser.displayName}
                                </span>
                              </span>
                            )}
                          </Dropdown.Toggle>

                          {currentUser ? (
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={logout}>
                                Logout
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          ) : (
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => navigate('login')}>Login</Dropdown.Item>
                              <Dropdown.Item onClick={() => navigate('signup')}>Signup </Dropdown.Item>
                            </Dropdown.Menu>
                          )}
                        </Dropdown>
                      </NavIcon>
                    </SideBarTop>
                    <SideBarContent>
                      {nav_links.map((link, index) => (
                        <MenuItem key={index}>
                          <NavLink
                            to={`/${link.path}`}
                            className={(navClass) =>
                              navClass.isActive
                                ? "nav_active text-white"
                                : "text-white"
                            }
                          >
                            {link.path.toLocaleUpperCase()}
                          </NavLink>
                        </MenuItem>
                      ))}
                    </SideBarContent>
                  </SideBar>
                )}
              </>
            )}
          </NavWrapper>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
