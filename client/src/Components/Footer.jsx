import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsX, BsGithub } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-green-700">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link to="/" className="flex">
            <img
              src="/shopping-cart.png"
              className="mr-3 h-10 sm:h-12"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-green-800 text-4xl font-bold dark:text-white">
              Shopcart
            </span>
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  100 Js Projects
                </Footer.Link>
                <Footer.Link as={"div"}>
                  <Link to="/about">Shopcart's blog</Link>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/PremRaj99"
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  Git Hub
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Leagal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; condition</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="">
            <Footer.Copyright
              href="/"
              by="Shopcart"
              year={new Date().getFullYear()}
            />
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/premraj.prajapati.737/"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/prem_raj_0009"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://github.com/PremRaj99"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsX} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
