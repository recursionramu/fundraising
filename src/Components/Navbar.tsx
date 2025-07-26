"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Add this for optimized images

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Improve type safety with proper interface
interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: MenuItemProps) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray-800 hover:text-black font-medium text-lg tracking-wide"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed top-0 w-full z-50">
      <nav
        onMouseLeave={() => setActive(null)}
        className="max-w-7xl mx-auto my-4 relative rounded-full border border-transparent 
        bg-gradient-to-b from-white via-white/90 to-white/75
        backdrop-blur-md shadow-sm flex justify-between items-center px-8 py-4"
      >
        {/* Left side items */}
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl">Logo</div>
          <div className="flex space-x-6">
            {React.Children.toArray(children).slice(0, 3)}
          </div>
        </div>
        
        {/* Right side items */}
        <div className="flex items-center space-x-6">
          {React.Children.toArray(children).slice(3)}
        </div>
      </nav>
    </div>
  );
};

// Add proper interface for ProductItem
interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: ProductItemProps) => {
  return (
    <a href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

// Fix HoveredLink props type
interface HoveredLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </a>
  );
}

const Navbar = () => {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
        {/* Home dropdown content */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Donate">
        {/* Donate dropdown content */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Campaign">
        {/* Campaign dropdown content */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Login">
        {/* Login dropdown content */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Sign Up">
        {/* Sign Up dropdown content */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Admin">
       <div style={{ cursor: 'pointer' }}>Super Admin</div>
       <div style={{ cursor: 'pointer' }}>General Admin</div>
       <div style={{ cursor: 'pointer' }}>Donation and Tax Management</div>

       </MenuItem>
      
    </Menu>
  );
};

export default Navbar;
