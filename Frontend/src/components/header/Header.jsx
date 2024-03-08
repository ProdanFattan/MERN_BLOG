import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-white py-1 px-2 hidden lg:inline">
            Knowledge-Share
          </span>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search.."
            rightIcon={HiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="h-10 w-12 lg:hidden" color="gray" pill>
          <HiOutlineSearch />
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
