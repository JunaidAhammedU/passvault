import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ViewDialoge({ openOutputDialog, closeOutputDialog, name, url }: any) {
  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">
            {" "}
            Here is your result.
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Username
            </label>
            <Input id="name" value={name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Password
            </label>
            <Input id="username" value={url} className="col-span-3" />
          </div>
        </div>
        <Button onClick={() => closeOutputDialog(false)}>Close</Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewDialoge;
