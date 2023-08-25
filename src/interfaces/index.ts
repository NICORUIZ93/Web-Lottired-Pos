export interface IconsMenu {
  title:     string;
  icon:      string;
  expanded?: boolean;
  children:  Child[];
}

export interface Child {
  title: string;
  link?: string;
}
