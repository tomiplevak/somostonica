export interface NavItem {
  label: string;
  href: string;
}

export interface MorphingNavProps {
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface UseNavScrollReturn {
  isScrolled: boolean;
  activeSection: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}
