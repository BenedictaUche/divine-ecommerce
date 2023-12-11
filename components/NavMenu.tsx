import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Nutrition & Supplements",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Diabetes",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Healthcare Devices",
    href: "/docs/primitives/menu",
    description:
      "A list of choices that appears when the user interacts with a button, action, or other control.",
  },
  {
    title: "Personal Care",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Beauty Care",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Mother & Baby Care",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Groceries",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];



const ListItem =  React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <Link href="/" legacyBehavior passHref>
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
    <NavigationMenu >
      <NavigationMenuList className="flex flex-row gap-4">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>Shop By Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-4 w-96">
              {components.map((item, i) => (
                <li key={i}>
                  <ListItem title={item.title}>{item.title}</ListItem>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/categories/nutrition' legacyBehavior passHref>
            <NavigationMenuLink>
              Nutrition & Supplements
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categories/diabetes" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Diabetes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categories/healthcaredevices" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Healthcare Devices
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categories/personalcare" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Personal Care
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categories/beautycare" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Beauty Care
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categories/motherbabycare" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Mother & Baby Care
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categories/groceries" legacyBehavior passHref>
            <NavigationMenuLink className=''>
              Groceries
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
};

export default NavMenu;
