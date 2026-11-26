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
            24h Architecture &amp; Estimate Response
          </Badge>
          <DialogTitle className="text-2xl pt-1">
            Start a Project with Veloce Digital
          </DialogTitle>
          <DialogDescription>
            Share your goals and preferred timeline. We will respond with an
            engineering roadmap, squad recommendation, and ballpark estimate.
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
