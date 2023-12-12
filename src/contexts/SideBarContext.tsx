import { ReactNode, createContext, useState } from "react";

export const SidebarContext = createContext({
  isOpen: false,
  toggleSideBar: () => {},
});

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(isOpenSideBar => !isOpenSideBar);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};
