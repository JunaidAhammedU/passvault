"use client";
import { useToast } from "@/lib/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

function ManagePassDialoge({
  openOutputDialog,
  closeOutputDialog,
  password,
  userEmail,
}: any) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tags, setTags] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // form submit.
  const onSubmit = async (data: any) => {
    try {
      data.email = userEmail;
      const res = await axios.post("/api/create-password", data);
      setLoading(true);
      if (res.status === 201) {
        toast({
          title: "Success",
          description: "Your password has been saved successfully.",
        });
        setLoading(false);
        closeOutputDialog(false);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "An error occurred.",
        variant: "destructive",
      });
    }
  };

  // fetch tags.
  const handleFetchTags = async () => {
    try {
      const res = await axios.get("/api/get-tags");
      setTags(res.data);
    } catch (error: any) {
      console.log(error.response?.data?.error || "An error occurred.");
    }
  };

  useEffect(() => {
    handleFetchTags();
  }, []);

  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">
            <div className="text-center text-xl md:text-2xl">
              Save Your Password Securely
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid grid-cols-1 gap-2 p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Label</label>
              <Input
                placeholder="Google"
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
                placeholder="google@gmail.com"
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
                value={password}
                type="text"
                {...register("password", { required: true })}
                className="mt-1 block w-full"
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Tag</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a tag" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map((tag: any) => (
                    <SelectItem key={tag._id} value={tag.label}>
                      {tag.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <Button
                type="submit"
                className={`${loading ? `cursor-not-allowed w-1/3` : `w-1/3`}`}
              >
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
