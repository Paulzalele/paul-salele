import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import "../styles/global.css"
import { Link } from "gatsby"
import LottieLogo from "./lottielogo"

import {
  CogIcon,
  MailOpenIcon,
  BookOpenIcon,
  HomeIcon,
  GiftIcon,
  MenuAlt2Icon,
  AnnotationIcon,
  XIcon,
  FireIcon,
} from "@heroicons/react/outline"

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  { name: "Blogs", href: "/blogs", icon: AnnotationIcon, current: false },
  { name: "White Papers", href: "/white-papers", icon: BookOpenIcon, current: false },
  { name: "Services", href: "/services", icon: CogIcon, current: false },
  { name: "Support", href: "/support", icon: GiftIcon, current: false },
  { name: "Contact", href: "/contact", icon: MailOpenIcon, current: false },
  { name: "About", href: "/about", icon: FireIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function TopNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)



  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-purple-900 shadow">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="group ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-purple-600"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-yellow-300 group-hover:text-white "
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="object-contain content-center h-14">
                <LottieLogo />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map(item => (
                    <span className="group">
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-white text-white items-center px-2 pt-2 border-b-2 text-sm font-medium"
                            : "text-yellow-300 hover:bg-purple-600 group-hover:text-white",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-sm transition-all duration-200 ease-linear"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-yellow-300 group-hover:text-white",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </span>
                  ))}
                </nav>
                <div className="italic flex font-medium items-center text-yellow-300 px-2 py-2 mt-10">
                  <p>
                    “It seems to me that we are long overdue for some kind of
                    Biblical-style Jubilee: one that would affect both
                    international debt and consumer debt. It would be salutary
                    not just because it would relieve so much genuine human
                    suffering, but also because it would be our way of reminding
                    ourselves that money is not ineffable, that paying one’s
                    debts is not the essence of morality, that all these things
                    are human arrangements and that if democracy is to mean
                    anything, it is the ability to all agree to arrange things
                    in a different way.” - Graeber, David. Debt (p. 390)
                  </p>
                </div>
              </div>

              {/* <div>
                    Find out more about my content
                </div> */}
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="sticky top-0 z-10 flex h-16 md:justify-center bg-purple-900 shadow">
        <button
          type="button"
          className="group px-4 text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden hover:bg-purple-600"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon
            className="h-6 w-6 group-hover:text-white "
            aria-hidden="true"
          />
        </button>
        <LottieLogo className="w-5" />

        {navigation.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "border-white text-white inline-flex items-center px-2 pt-2 border-b-2 text-sm font-medium"
                : "text-yellow-300 hover:bg-purple-600 hover:text-white rounded-sm",
              "hidden md:flex group items-center px-2 py-2 text-base font-medium transition-all duration-200 ease-linear"
            )}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-white"
                  : "text-yellow-300 group-hover:text-white",
                "mr-4 flex-shrink-0 h-6 w-6 "
              )}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
