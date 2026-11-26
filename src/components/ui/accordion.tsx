import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  className,
  ...props
}: Omit<AccordionPrimitive.Root.Props, "className"> & { className?: string }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: Omit<AccordionPrimitive.Item.Props, "className"> & { className?: string }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-border/75 transition-colors duration-200 motion-reduce:transition-none last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  iconVariant = "chevron",
  ...props
}: Omit<AccordionPrimitive.Trigger.Props, "className"> & {
  className?: string;
  iconVariant?: "chevron" | "plus";
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-5 text-left text-sm font-semibold text-foreground transition-colors duration-200 motion-reduce:transition-none",
          "hover:text-brand-blue data-[panel-open]:text-brand-blue dark:hover:text-blue-400 dark:data-[panel-open]:text-blue-400",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
          className
        )}
        {...props}
      >
        <span className="min-w-0 flex-1">{children}</span>

        {iconVariant === "plus" ? (
          <span
            aria-hidden="true"
            className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-border/80 bg-surface-subtle/80 text-muted-foreground transition-colors duration-200 motion-reduce:transition-none group-hover:border-brand-blue/35 group-hover:text-brand-blue group-data-[panel-open]:border-brand-blue/35 group-data-[panel-open]:bg-brand-blue/8 group-data-[panel-open]:text-brand-blue dark:bg-brand-navy-elevated dark:group-data-[panel-open]:border-blue-400/35 dark:group-data-[panel-open]:bg-blue-400/12 dark:group-data-[panel-open]:text-blue-300"
          >
            <span className="h-[1.5px] w-3 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none" />
            <span className="absolute h-3 w-[1.5px] rounded-full bg-current transition-all duration-200 motion-reduce:transition-none group-data-[panel-open]:rotate-90 group-data-[panel-open]:scale-y-0 group-data-[panel-open]:opacity-0" />
          </span>
        ) : (
          <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none group-data-[panel-open]:rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: Omit<AccordionPrimitive.Panel.Props, "className"> & {
  className?: string;
}) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "h-[var(--accordion-panel-height)] overflow-hidden text-sm text-muted-foreground transition-[height,opacity] duration-200 ease-out motion-reduce:transition-none data-[starting-style]:h-0 data-[starting-style]:opacity-0 data-[ending-style]:h-0 data-[ending-style]:opacity-0",
        className
      )}
      {...props}
    >
      <div className="pb-5 leading-relaxed">{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
