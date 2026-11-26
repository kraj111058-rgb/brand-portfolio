import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  ...props
}: Omit<NavigationMenuPrimitive.Root.Props, "className"> & {
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative flex items-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Portal>
        <NavigationMenuPrimitive.Positioner
          sideOffset={12}
          collisionPadding={{ top: 16, bottom: 16, left: 16, right: 16 }}
          className="z-50 transition-[top,left,right,bottom] duration-200 ease-out data-[instant]:transition-none"
        >
          <NavigationMenuPrimitive.Popup className="relative origin-[var(--transform-origin)] rounded-2xl border border-border/90 bg-popover text-popover-foreground shadow-2xl shadow-black/12 dark:shadow-black/50 transition-[opacity,transform] duration-200 ease-out data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0">
            <NavigationMenuPrimitive.Arrow className="flex transition-[left] duration-200 ease-out data-[side=bottom]:-top-2 data-[side=top]:-bottom-2">
              <div className="size-3.5 rotate-45 border-t border-l border-border/90 bg-popover" />
            </NavigationMenuPrimitive.Arrow>
            <NavigationMenuPrimitive.Viewport className="relative overflow-hidden rounded-2xl" />
          </NavigationMenuPrimitive.Popup>
        </NavigationMenuPrimitive.Positioner>
      </NavigationMenuPrimitive.Portal>
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: Omit<NavigationMenuPrimitive.List.Props, "className"> & {
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("flex items-center gap-1 list-none m-0 p-0", className)}
      {...props}
    />
  );
}

const NavigationMenuItem = NavigationMenuPrimitive.Item;

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: Omit<NavigationMenuPrimitive.Trigger.Props, "className"> & {
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground data-[popup-open]:bg-muted data-[popup-open]:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer whitespace-nowrap",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <NavigationMenuPrimitive.Icon className="transition-transform duration-200 group-data-[popup-open]:rotate-180">
        <ChevronDown className="size-3.5" />
      </NavigationMenuPrimitive.Icon>
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: Omit<NavigationMenuPrimitive.Content.Props, "className"> & {
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn("w-max max-w-[calc(100vw-2rem)] p-4", className)}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: Omit<NavigationMenuPrimitive.Link.Props, "className"> & {
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
};
