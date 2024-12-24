import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export function ViewDrawer({
  openOutputDrawer,
  closeOutputDrawer,
  name,
  url,
}: any) {
  return (
    <Drawer open={openOutputDrawer} onOpenChange={closeOutputDrawer}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{name}</DrawerTitle>
          <DrawerDescription>{url}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex justify-center items-center">
            <Button variant="outline">Edit</Button>
          </div>
          {/* <Button onClick={closeOutputDrawer} variant="outline">
            Close
          </Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
