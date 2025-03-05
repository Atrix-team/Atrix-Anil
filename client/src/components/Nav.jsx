import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import site_logo from '../assets/apatrix-white.svg'
import CsButton from './CsButton'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'




const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Portfolio', href: '/portfolio', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Contant us', href: '/Contact-us', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Nav = () => {


    return (
        <Disclosure as="nav" className=" absolute z-10 w-full py-6">
            <div className="mx-auto  max-w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            {/* <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            /> */}
                            <img src={site_logo} alt="" className=' w-auto h-14' />
                        </div>

                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4 items-center align-middle">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-[#505052]  text-white' : 'text-gray-300 hover:bg-[#505052] hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-10 inset-y-0  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gray-700">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>

                        <div className='hidden lg:block text-white ' > <CsButton mybtn={"Let's Talk"} ></CsButton> </div>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-12 pt-12 mt-8 bg-cs_theme_black z-50 relative">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-400 text-white' : 'text-gray-300 hover:bg-gray-400 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}


export default Nav