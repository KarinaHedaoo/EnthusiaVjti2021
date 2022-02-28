import React, { Fragment } from "react";
// import { Route, Link, BrowserRouter as Router} from "react-router-dom"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from "../enthu-logo.png";
import styles from "./Navbar.module.css";

const navigation = [
    { name: 'About', href: '/about', current: true },
    { name: 'Events', href: '/events', current: false },
    { name: 'Team', href: '/team', current: false }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar() {
    return(<Disclosure as="nav" className="box-content nav-bg pt-1">
        
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-grey-purple hover:text-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="text-dark-grey block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
              <img src={logo} className={styles.logo} alt="logo" />
                <h1
                  className="block lg:hidden h-8 w-auto font-bold text-lg"                  
                >ENTHUSIA</h1>
                <h1
                  className="hidden lg:block w-64 font-bold text-2xl"
                >ENTHUSIA, VJTI</h1>
              </div>
              <div className="hidden md:block md:ml-6">
            
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-white' : 'text-gray-500 hover:text-fuchsia-600',
                        'px-3 py-2 rounded-md text-xl font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    > {item.name}
                    </a>
                    
                  ))}
                  
                    
                </div>
              
            </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <Menu as="div" className="ml-3 relative">
                {/* <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src=""
                      alt="my-picture"
                    />
                  </Menu.Button>
                </div> */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">

                </Transition>
              </Menu>
            </div>
          </div>
          
        </div>

       
        <Disclosure.Panel className="lg:hidden">
       
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-white' : 'text-gray-500 hover:text-fuchsia-600',
                  'block px-3 py-2 rounded-md text-base font-medium border-2 border-gray-500'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <Link to="/about">{item.name}</Link>
                {item.name}
              </a>
            ))}
         
                    
                </div>
               
        </Disclosure.Panel>
            
      </>
    )}
 
  </Disclosure>)
}

export default Navbar;