// Define interfaces
export type SidebarContextType = {
  expandSidebar: boolean;
};

export type DropdownItem = {
  url: string;
  active: boolean;
  icon?: React.ReactNode;
  text: string;
};

export type SideBarItemProps = {
  icon: React.ReactNode;
  text: string;
  active: string;
  alert?: string;
  url: string;
  dropdownItems?: DropdownItem[];
};
