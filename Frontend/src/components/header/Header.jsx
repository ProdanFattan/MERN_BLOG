import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2">
        {/* <Link
          to="/"
          className="self-center whitespace-nowrap text-xl font-semibold"
        >
          <Button
            className="text-white py-1 px-2 hidden lg:inline"
            gradientDuoTone="purpleToPink"
          >
            Knowledge-Share
          </Button>
        </Link>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-xl font-semibold"
        >
          <Button
            className="text-white py-1 px-2 lg:hidden"
            gradientDuoTone="purpleToPink"
          >
            K-S
          </Button>
        </Link> */}
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            READ
          </span>
          BLOGS
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search.."
            rightIcon={HiOutlineSearch}
            className="hidden md:inline"
          />
        </form>
        <Button className="h-10 w-12 md:hidden" color="gray" pill>
          <HiOutlineSearch />
        </Button>
        <div className="flex gap-3 md:order-2">
          <Button className="h-10 w-12 hidden md:inline" color="gray" pill>
            <FaMoon />
          </Button>
          {currentUser ? (
            <Dropdown
              className=""
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser?.username}</span>
                <span className="block text-sm font-semibold truncate">
                  {currentUser?.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/Signin">
              <Button gradientDuoTone="purpleToPink" pill outline>
                Sign In
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        {/* here i used as ={'div'} because Navbar.Link and Link both gives <a> tag which is not allowed */}
        <Navbar.Collapse>
          <Navbar.Link active={location === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={location === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={location === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
