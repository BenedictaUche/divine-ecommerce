import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { cn } from "@/lib/utils";

const components = [
  {
    title: "Nutrition & Supplements",
    href: "/categories/nutrition",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Diabetes",
    href: "/dcategories/iabetes",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Healthcare Devices",
    href: "/categories/healthcaredevices",
    description:
      "A list of choices that appears when the user interacts with a button, action, or other control.",
  },
  {
    title: "Personal Care",
    href: "/categories/personalcare",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Beauty Care",
    href: "/categories/beautycare",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Mother & Baby Care",
    href: "/categories/motherbabycare",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Groceries",
    href: "/categories/groceries",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <Link href="/" passHref>
      <a ref={ref} className={cn("flex items-center gap-4", className)} {...props}>
        <span className="text-primary">{title}</span>
        <MdKeyboardArrowRight className="text-primary" />
      </a>
    </Link>
  );
});

const NavMenu = () => {
  return (
    <div className="bg-primary py-4 text-white mt-4">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-4">
          <NavigationMenuItem className="lg:relative">
            <NavigationMenuTrigger>Shop By Category</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-4 w-full lg:w-96">
                {components.map((item, i) => (
                  <li key={i}>
                    <ListItem title={item.title}>{item.title}</ListItem>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {components.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link href={item.href} passHref>
                <NavigationMenuLink>{item.title}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;
