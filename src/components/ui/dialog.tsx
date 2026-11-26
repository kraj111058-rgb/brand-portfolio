import type * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: Omit<DialogPrimitive.Popup.Props, "className"> & {
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop
        data-slot="dialog-backdrop"
        className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm transition-opacity duration-200 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0"
      />
      <DialogPrimitive.Viewport className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-6">
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className={cn(
            "relative max-h-[92svh] w-full max-w-2xl overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-border bg-card p-5 sm:p-7 text-card-foreground shadow-2xl transition-all duration-200 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 focus-visible:outline-none",
            className
          )}
          {...props}
        >
          {showCloseButton && (
            <DialogPrimitive.Close
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 inline-flex size-9 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            >
              <X className="size-4" />
            </DialogPrimitive.Close>
          )}
          {children}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPrimitive.Portal>
  );
}

function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1.5 pr-9 text-left", className)}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: Omit<DialogPrimitive.Title.Props, "className"> & { className?: string }) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-lg sm:text-xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: Omit<DialogPrimitive.Description.Props, "className"> & {
  className?: string;
}) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
};
