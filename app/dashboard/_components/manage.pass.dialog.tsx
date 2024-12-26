"use client";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function ManagePassDialoge({ openOutputDialog, closeOutputDialog }: any) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Password Saved",
      description: "Your password has been saved successfully.",
    });
    closeOutputDialog(false);
  };

  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">
            <div className="text-center text-xl md:text-2xl">
              Save Your Password Securly
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid grid-cols-1 gap-2 p-4">
          {/* <div>
            <Image
              src={"/passanimation.gif"}
              className="object-cover"
              width={150}
              height={150}
              alt="loading"
            />
          </div> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Label</label>
              <Input
                {...register("label", { required: true })}
                className="mt-1 block w-full"
              />
              {errors.label && (
                <span className="text-red-500">Label is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username</label>
              <Input
                {...register("username", { required: true })}
                className="mt-1 block w-full"
              />
              {errors.username && (
                <span className="text-red-500">Username is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <Input
                type="password"
                {...register("password", { required: true })}
                className="mt-1 block w-full"
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Tag</label>
              <Input {...register("tag")} className="mt-1 block w-full" />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <Button type="submit" className="w-1/3">
                Save
              </Button>
              <Button
                className="w-1/3"
                onClick={() => closeOutputDialog(false)}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ManagePassDialoge;
