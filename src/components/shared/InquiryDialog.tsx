import { InquiryForm } from "@/components/shared/InquiryForm";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppShell } from "@/context/useAppShell";

export function InquiryDialog() {
  const { inquiryOpen, setInquiryOpen, selectedServiceInterest } = useAppShell();

  return (
    <Dialog open={inquiryOpen} onOpenChange={setInquiryOpen}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
            24-Hour Proposal &amp; Estimate
          </Badge>
          <DialogTitle className="pt-1 text-2xl">
            Start Your Project
          </DialogTitle>
          <DialogDescription>
            Share your goals and target timeline. We will follow up with a clear
            roadmap, team recommendation, and project estimate.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5">
          <InquiryForm
            key={selectedServiceInterest}
            defaultService={selectedServiceInterest}
            compact
            onSuccessDone={() => setInquiryOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
