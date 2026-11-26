import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;

function DrawerContent({
  className,
  children,
  ...props
}: Omit<DrawerPrimitive.Popup.Props, "className"> & { className?: string }) {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Backdrop
        data-slot="drawer-backdrop"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-200 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0"
      />
      <DrawerPrimitive.Viewport className="fixed inset-0 z-50 flex justify-end">
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          className={cn(
            "relative flex h-full w-[min(88vw,340px)] flex-col overflow-y-auto border-l border-border bg-background p-5 sm:p-6 text-foreground shadow-2xl transition-transform duration-250 ease-out data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full",
            className
          )}
          {...props}
        >
          <DrawerPrimitive.Close
            aria-label="Close navigation menu"
            className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
          >
            <X className="size-4" />
          </DrawerPrimitive.Close>
          <DrawerPrimitive.Content className="flex min-h-full flex-col">
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
}

function DrawerTitle({
  className,
  ...props
}: Omit<DrawerPrimitive.Title.Props, "className"> & { className?: string }) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-lg font-bold tracking-tight", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: Omit<DrawerPrimitive.Description.Props, "className"> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
};
