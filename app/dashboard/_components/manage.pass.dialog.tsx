"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaRegCopy } from "react-icons/fa";

function ManagePassDialoge({ openOutputDialog, closeOutputDialog }: any) {
  const { toast } = useToast();

  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">
            <div className="text-center text-xl md:text-2xl">
              Save Your Password Here 📝
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div>
          <div
            className="text-center
            text-lg
            font-semibold
            text-gray-600
            mt-4
            mb-2
          "
          >
            Your Password is:
          </div>
        </div>
        <Button onClick={() => closeOutputDialog(false)}>Close</Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ManagePassDialoge;
