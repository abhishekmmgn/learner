import { Button, buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function Settings() {
  return (
    <div className="p-4 md:px-6 xl:px-8 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center">
      <div className="w-full md:max-w-3xl md:mr-[210px] lg:mr-[232px] xl:mr-[248px] space-y-4 ">
        <div className="flex gap-3 items-center bg-background p-4 rounded-lg">
          <div>
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-lg">John Doe</h1>
            <p className="text-tertiary-foreground">asdf@x.com</p>
          </div>
        </div>

        <div>
          <p className="mb-3 md:text-lg font-medium text-primary">Account</p>
          <div className="p-4 rounded-lg bg-background text-sm md:text-base lg:text-base+">
            <div className="flex flex-col gap-2">
              <Link
                to="/reset-password"
                className={buttonVariants({ variant: "secondary" })}
              >
                Change Password
              </Link>

              <Separator />
              <Button variant="secondary">Sign Out</Button>
              <Separator />
              <Button variant="secondary">Delete Account</Button>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 md:text-lg font-medium text-primary">
            Notifications
          </p>
          <div className="p-4 rounded-lg bg-background text-sm md:text-base lg:text-base+">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications-preferences" className="text-base">
                Turn of Notifications
              </Label>
              <Switch id="notifications-preferences" />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 md:text-lg font-medium text-primary">
            Learning Reminders
          </p>
          <div className="p-4 rounded-lg bg-background text-sm flex flex-col gap-3 md:text-base lg:text-base+">
            <div className="flex items-center justify-between">
              <Label htmlFor="reminders" className="text-base">
                Reminders
              </Label>
              <Switch id="reminders" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="reminders" className="text-base">
                Time
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Time</SelectLabel>
                    <SelectItem value="morning">06:00</SelectItem>
                    <SelectItem value="mid-morning">09:00</SelectItem>
                    <SelectItem value="noon">12:00</SelectItem>
                    <SelectItem value="afternoon">15:00</SelectItem>
                    <SelectItem value="evening">18:00</SelectItem>
                    <SelectItem value="night">21:00</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 md:text-lg font-medium text-primary">Help</p>
          <div className="p-4 rounded-lg bg-background text-sm md:text-base lg:text-base+">
            <div className="flex flex-col gap-2">
              <Link
                to="/help"
                className="hover:underline underline-offset-4 hover:text-primary"
              >
                Help Center
              </Link>
              <Separator />
              <Link
                to="/contact-us"
                className="hover:underline underline-offset-4 hover:text-primary"
              >
                Contact Us
              </Link>
              <Separator />
              <Link
                to="/terms"
                className="hover:underline underline-offset-4 hover:text-primary"
              >
                Terms and Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <Button variant="outline">Share App</Button>
      </div>
    </div>
  );
}
