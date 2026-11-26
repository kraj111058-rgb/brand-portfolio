import { useState } from "react";
import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  INQUIRY_BUDGET_OPTIONS,
  INQUIRY_SERVICE_OPTIONS,
} from "@/data/agencyData";

interface InquiryFormProps {
  defaultService?: string;
  compact?: boolean;
  onSuccessDone?: () => void;
}

type FormErrors = Record<string, string>;

export function InquiryForm({
  defaultService = INQUIRY_SERVICE_OPTIONS[0],
  compact = false,
  onSuccessDone,
}: InquiryFormProps) {
  const initialService = INQUIRY_SERVICE_OPTIONS.includes(defaultService)
    ? defaultService
    : INQUIRY_SERVICE_OPTIONS[0];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState<string>(initialService);
  const [budget, setBudget] = useState<string>(INQUIRY_BUDGET_OPTIONS[1]);
  const [brief, setBrief] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const clearError = (field: string) => {
    if (!errors[field]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleFormSubmit = () => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid work email.";
    }
    if (brief.trim().length < 12) {
      nextErrors.brief =
        "Share at least a short sentence about your product or timeline.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-left">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-6" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-lg font-bold text-foreground">
            Discovery request received
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thanks, <span className="font-semibold text-foreground">{name}</span>
            . Our solution architect will review your{" "}
            <span className="font-semibold text-foreground">{service}</span>{" "}
            scope and respond to{" "}
            <span className="font-semibold text-foreground">{email}</span>{" "}
            within 24 business hours.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setBrief("");
              onSuccessDone?.();
            }}
          >
            {onSuccessDone ? "Close" : "Send Another Brief"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form
      errors={errors}
      onFormSubmit={handleFormSubmit}
      className="flex flex-col gap-4 text-left"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field.Root name="name" className="flex flex-col gap-1.5">
          <Field.Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Full Name *
          </Field.Label>
          <Field.Control
            render={
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearError("name");
                }}
                placeholder="Raj Sharma"
              />
            }
          />
          <Field.Error className="text-xs font-medium text-destructive" />
        </Field.Root>

        <Field.Root name="email" className="flex flex-col gap-1.5">
          <Field.Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Work Email *
          </Field.Label>
          <Field.Control
            render={
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError("email");
                }}
                placeholder="you@company.com"
              />
            }
          />
          <Field.Error className="text-xs font-medium text-destructive" />
        </Field.Root>
      </div>

      {!compact && (
        <Field.Root name="company" className="flex flex-col gap-1.5">
          <Field.Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Company / Brand Name
          </Field.Label>
          <Field.Control
            render={
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Labs (Optional)"
              />
            }
          />
        </Field.Root>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field.Root name="service" className="flex flex-col gap-1.5">
          <Field.Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            What are you building?
          </Field.Label>
          <Select
            value={service}
            onValueChange={(val) => {
              if (val) setService(val);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_SERVICE_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field.Root>

        <Field.Root name="budget" className="flex flex-col gap-1.5">
          <Field.Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Estimated Budget
          </Field.Label>
          <Select
            value={budget}
            onValueChange={(val) => {
              if (val) setBudget(val);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_BUDGET_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field.Root>
      </div>

      <Field.Root name="brief" className="flex flex-col gap-1.5">
        <Field.Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Project Scope &amp; Timeline *
        </Field.Label>
        <Field.Control
          render={
            <Textarea
              value={brief}
              onChange={(e) => {
                setBrief(e.target.value);
                clearError("brief");
              }}
              className={compact ? "min-h-24" : "min-h-28"}
              placeholder="Tell us about your target launch window, key features, or team needs..."
            />
          }
        />
        <Field.Error className="text-xs font-medium text-destructive" />
      </Field.Root>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span>Protected by mutual NDA on request</span>
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-11 rounded-xl bg-indigo-600 px-6 font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 cursor-pointer"
        >
          <span>Request Technical Proposal</span>
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Form>
  );
}
