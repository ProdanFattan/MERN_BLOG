import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2">
        <Link
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
          <Link to="/Signin">
            <Button gradientDuoTone="purpleToPink" pill>
              Sign In
            </Button>
          </Link>
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
