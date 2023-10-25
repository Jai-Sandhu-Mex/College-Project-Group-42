import React from 'react'

const test = () => {
  return (
    <div><div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

    {/* add login and signIg in here */}

    {isLoading && (
        <div className="flex space-x-2 ">
            <div className="invisible sm:visible text-gray-300 hover:bg-gray-700 hover:text-white
                        px-3 py-2 rounded-md text-sm font-medium  ">
                ...
            </div>
        </div>
    )}

    {!isLoading && (
        <div>
            {!isAuthenticated && (
                <div className="flex space-x-2 ">
                    <div className="invisible sm:visible text-gray-300 hover:bg-gray-700 hover:text-white
       px-3 py-2 rounded-md text-sm font-medium  ">
                        <SignupButton />
                    </div>

                    <div className=" text-gray-300 hover:bg-gray-700 hover:text-white
       px-3 py-2 rounded-md text-sm font-medium
       ">
                        <LoginButton />
                    </div>
                </div>
            )}

            {/* Profile dropdown */}
            {isAuthenticated && (

                <Menu as="div" className="ml-3 relative">

                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Open user menu</span>
                                    <NavbarUserProfilePictureComponent />
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/profile"
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (

                                            <a
                                                href="/#"
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                <LogoutButton />

                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>

            )}
        </div>
    )}


</div></div>
  )
}

export default test