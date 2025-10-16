"use client";

import { useEffect, useState } from "react";
import { navData } from "./navData";

// ── Types
interface Composition {
  children?: React.ReactNode;
}

interface NavItemProps extends Composition {
  authOnly?: boolean;
  content?: string;
}

type NavItemType = "logo" | "item" | "avatar" | "themeToggle" | "create";

export interface NavItemConfig {
  id: number;
  type: NavItemType;
  content?: string;
  authOnly?: boolean;
}

export interface NavGroupConfig {
  id: number;
  items: NavItemConfig[];
}

// ── Container
const NavContainer = ({ children }: Composition) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setOpen(isDesktop);
  }, [isDesktop]);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 z-10 text-white">
      {!isDesktop && (
        <button
          className="ml-auto mr-3 my-3 p-2 border rounded bg-gray-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      )}
      {open && children}
    </div>
  );
};

// ── Layout
const NavRenderer = ({ children }: Composition) => (
  <div className="h-screen sm:h-[60px] flex flex-col sm:flex-row sm:justify-between items-center border-b border-gray-700">
    {children}
  </div>
);

const NavGroup = ({ children }: Composition) => (
  <div className="flex flex-col sm:flex-row items-center">{children}</div>
);

// ── Atoms
const NavLogo = ({ children }: Composition) => (
  <div className="font-bold text-lg sm:ml-3">{children}</div>
);

const NavItem = ({ children, authOnly = false }: NavItemProps) => {
  const [isLoggedIn] = useState(true);
  if (authOnly && !isLoggedIn) return null;
  return (
    <div className="sm:mr-3 px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
      {children}
    </div>
  );
};

const NavAvatar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <button
        onClick={() => setIsLoggedIn(true)}
        className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-700"
      >
        Login
      </button>
    );
  }

  return (
    <div className="relative sm:mr-3">
      <img
        src="https://via.placeholder.com/40"
        alt="avatar"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <button
          onClick={() => setIsLoggedIn(false)}
          className="absolute right-0 mt-2 px-3 py-2 bg-red-600 rounded"
        >
          Logout
        </button>
      )}
    </div>
  );
};

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="sm:mr-3 px-3 py-2 rounded bg-gray-700 hover:bg-gray-600"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

const NavCreate = () => (
  <button className="px-3 py-2 rounded bg-green-600 hover:bg-green-700">
    + Create
  </button>
);

// ── Renderer from config
export const Navbar = () => {
  const navItemMap: Record<NavItemType, React.FC<any>> = {
    logo: NavLogo,
    item: NavItem,
    avatar: NavAvatar,
    themeToggle: ThemeToggle,
    create: NavCreate,
  };

  return (
    <NavContainer>
      <NavRenderer>
        {navData.map((group: NavGroupConfig) => (
          <NavGroup key={group.id}>
            {group.items.map((item) => {
              const Item = navItemMap[item.type];
              return (
                <Item key={item.id} authOnly={item.authOnly}>
                  {item.content}
                </Item>
              );
            })}
          </NavGroup>
        ))}
      </NavRenderer>
    </NavContainer>
  );
};
