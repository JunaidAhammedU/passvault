"use client";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ManagePassDialoge({
  openOutputDialog,
  closeOutputDialog,
  password,
}: any) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("/api/create-password", data);

      if (res.status === 201) {
        toast({
          title: "Success",
          description: "Your password has been saved successfully.",
        });
        // closeOutputDialog(false);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "An error occurred.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    closeOutputDialog(false);
  };

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
              <Controller
                name="tag"
                render={({ field }) => (
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tag" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">#office</SelectItem>
                      <SelectItem value="personal">#personal</SelectItem>
                      <SelectItem value="important">#important</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <Button type="submit" className="w-1/3">
                Save
              </Button>
              <Button className="w-1/3" onClick={handleClose}>
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
