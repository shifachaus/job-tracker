"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

interface CreateJobApplicationDialogProps {
  columnId: string;
  boardId: string;
}

const CreateJobApplicationDialog = ({
  columnId,
  boardId,
}: CreateJobApplicationDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          variant="outline"
          className=" mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50 transition"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Job
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className="p-6 pb-4">
          <DialogHeader>
            <DialogTitle className="text-xl">Add Job Application</DialogTitle>
            <DialogDescription>
              Track a new job opportunity in this column.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="max-h-[70vh] overflow-y-auto px-6 pb-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">
                  Company <span className="text-destructive">*</span>
                </Label>
                <Input id="company" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">
                  Position <span className="text-destructive">*</span>
                </Label>
                <Input id="position" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input id="salary" placeholder="e.g. $100k - $150k" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobUrl">Job URL</Label>
              <Input
                id="jobUrl"
                type="url"
                placeholder="https://company.com/job"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="React, Remote, High Pay" />
              <p className="text-xs text-muted-foreground">
                Separate tags with commas.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={3}
                placeholder="Brief overview of the role..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Personal Notes</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Interview prep, referral info, etc."
              />
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add Application</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobApplicationDialog;
