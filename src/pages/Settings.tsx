import { Button, buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeProvider";
import { logOut, deleteAccount } from "@/utils/ManageAuth";
import { useAuthContext } from "../contexts/AuthProvider";
import { SettingsSkeleton } from "@/components/skeletons/SettingsSkeleton";

export default function Settings() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { setTheme } = useTheme();
  const { user, loading, isInstructor } = useAuthContext();

  async function handleSignOut() {
    try {
      setIsSubmitting(true);
      await logOut();
      toast.success("Sign out successful");
    } catch (error) {
      console.log(error);
      toast.error("An error happened while logging out.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleAccountDeletion() {
    try {
      setIsSubmitting(true);
      await deleteAccount(user);
      toast.success("Account deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("An error happened while deleting account.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) {
    return <SettingsSkeleton />;
  } else {
    return (
      <div className="p-4 md:px-6 xl:px-8 py-6 sm:py-8 md:pt-12 md:pb-0 flex flex-col items-center">
        <div className="w-full md:max-w-2xl xl:mr-[248px] space-y-4">
          {user ? (
            <div className="flex gap-3 items-center bg-background p-4 rounded-lg">
              <div>
                <Avatar className="w-16 h-16">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">
                    {user?.displayName?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h1 className="text-lg">{user?.displayName}</h1>
                <p className="text-tertiary-foreground">{user?.email}</p>
              </div>
            </div>
          ) : (
            <Link to="/auth" className={buttonVariants({ variant: "default" })}>
              Log In
            </Link>
          )}

          {user && (
            <div>
              <p className="mb-2 text-sm md:text-base font-medium text-primary">
                Account
              </p>
              <div className="p-4 rounded-lg bg-background text-sm md:text-base lg:text-base+ space-y-3">
                <div className="flex flex-col gap-3">
                  <Link to="/change-password">
                    <div className="w-full flex items-center justify-between">
                      <p>Change Password</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Separator />
                  <div className="w-full flex flex-col gap-2">
                    <p>Sign out of current device</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Sign Out</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Sign Out</DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            type="submit"
                            variant="secondary"
                            onClick={handleSignOut}
                          >
                            {isSubmitting && (
                              <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Confirm
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Separator />
                  <div className="w-full flex flex-col gap-2">
                    <p>Delete Account</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Delete Account</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Are you sure absolutely sure?
                          </DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. Are you sure you want
                            to permanently delete your account?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            type="submit"
                            variant="secondary"
                            onClick={handleAccountDeletion}
                          >
                            {isSubmitting && (
                              <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <p className="mb-2 text-sm md:text-base font-medium text-primary">
              Appearance
            </p>
            <div className="p-4 rounded-lg bg-background text-sm md:text-base lg:text-base+">
              <div className="flex items-center justify-between">
                <Label className="text-base">Theme</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-primary text-sm">
                    Change Theme
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {user && (
            <div>
              <p className="mb-2 text-sm md:text-base font-medium text-primary">
                Notifications
              </p>
              <div className="p-4 rounded-lg bg-background text-sm md:text-base lg:text-base+">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="notifications-preferences"
                    className="text-base"
                  >
                    Turn of Notifications
                  </Label>
                  <Switch
                    id="notifications-preferences"
                    onCheckedChange={() => {
                      toast.success("Notifications prefrence updated");
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {user && !isInstructor && (
            <div>
              <p className="mb-2 text-sm md:text-base font-medium text-primary">
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
                  <Select
                    onValueChange={() => toast.success("Learning reminders ON")}
                  >
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
          )}

          <div>
            <p className="mb-2 text-sm md:text-base font-medium text-primary">
              Help
            </p>
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

          <Button
            variant="outline"
            onClick={() =>
              toast("Link copied successfully!", {
                icon: "🔗",
              })
            }
          >
            Share App
          </Button>
        </div>
      </div>
    );
  }
}
