"use client";

import { FC, useEffect } from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { cn } from "@/lib/utils";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { Drawer } from "vaul";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { toast } from "sonner";

import Footer from "@/components/Footer";
import { createVote } from "@/app/actions";
import { Option } from "@/db/schema";

const voteFormSchema = z.object({
  email: z.string().email(),
  grade: z
    .enum(["First Year", "Sophomore", "Junior", "Senior", "1L", "2L", "3L"])
    .optional(),
  raffleEntry: z.boolean().optional(),
  option: z.string(),
});

export type voteFormValues = z.infer<typeof voteFormSchema>;

interface VoteFormProps {
  options: Option[];
  pollId: string;
}

const VoteForm: FC<VoteFormProps> = ({ options, pollId }) => {
  const [selected, setSelected] = useState<string>("none");
  const [openOption, setOpenOption] = useState<string>("none");
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<voteFormValues>({
    resolver: zodResolver(voteFormSchema),
  });

  const onSubmit = async (values: voteFormValues) => {
    setIsLoading(true);

    const { data, error } = await createVote(values, pollId);

    if (error) {
      toast.error(error);

      setSelected("none");
      setOpenOption("none");
      setIsStudent(false);
      setDrawerOpen(false);
      form.reset();
      setIsLoading(false);

      return;
    }

    if (!data) {
      toast.error(
        "An error occurred while submitting your vote. Please try again later."
      );

      setSelected("none");
      setOpenOption("none");
      setIsStudent(false);
      setDrawerOpen(false);
      form.reset();
      setIsLoading(false);

      return;
    }

    console.log(data);

    toast.success("Thank You! Vote Submitted! 🎉", {
      description:
        "Thank you for voting! If you entered the raffle, you will be contacted via email if you win!",
    });

    setSelected("none");
    setOpenOption("none");
    setIsStudent(false);
    setDrawerOpen(false);
    form.reset();
    setIsLoading(false);
  };

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="space-y-8"
        value={openOption}
        onValueChange={(e) => setOpenOption(e)}
      >
        {options.map((option) => {
          return (
            <AccordionItem
              key={option.id}
              value={option.id}
              className="border-none"
            >
              <Card
                className={cn(
                  { "scale-110 md:scale-105": selected == option.id },
                  "transition-all duration-1000 md:w-[42rem]"
                )}
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex flex-row items-center">
                    <Checkbox
                      checked={selected == option.id}
                      onCheckedChange={(e) => {
                        if (e.valueOf()) {
                          setSelected(option.id);
                          setOpenOption("none");
                          form.setValue("option", option.id);
                        } else {
                          setSelected("none");
                          form.setValue("option", "none");
                        }
                      }}
                      className={cn(
                        "md:h-8 md:w-8 h-6 w-6 mr-6 !transition-none",
                        {
                          "animate-pulse border-blue-500": selected == "none",
                        }
                      )}
                    />

                    <AccordionTrigger className="!p-0 [&>svg]:w-8 [&>svg]:h-8">
                      <CardTitle className="text-md md:text-xl">
                        {option.name}
                      </CardTitle>
                    </AccordionTrigger>
                  </div>

                  <AccordionContent className="[&>div]:!p-0">
                    <div className="md:text-sm text-xs font-medium flex flex-col space-y-4 py-4 items-center">
                      {option.description}

                      {option.video && (
                        <iframe
                          className="aspect-video md:w-1/2"
                          src={option.video}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </AccordionContent>
                </CardHeader>
              </Card>
            </AccordionItem>
          );
        })}
      </Accordion>

      <Drawer.Root open={drawerOpen} onOpenChange={(e) => setDrawerOpen(e)}>
        <Drawer.Trigger asChild>
          <Button
            size="lg"
            className={cn(
              {
                "scale-0": selected == "none",
                "scale-100": selected != "none",
              },
              "transition-all duration-1000"
            )}
          >
            <CheckCircle className="h-6 w-6 mr-2" />
            Continue
          </Button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-foreground/5" />
          <Drawer.Content className="flex bg-background flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 z-10">
            <div className="p-4 rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />

              <div className="max-w-md mx-auto space-y-8">
                <Drawer.Title className="font-medium mb-4">
                  You&apos;re almost there! 🎉
                </Drawer.Title>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      defaultValue=""
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Start typing your email..."
                              {...field}
                            />
                          </FormControl>

                          <FormDescription>
                            If you are a student, please enter your W&L email.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="student"
                        onCheckedChange={(e) => setIsStudent(e)}
                        checked={isStudent}
                      />
                      <Label htmlFor="student">Are you a W&L student?</Label>
                    </div>

                    {isStudent && (
                      <>
                        <FormField
                          control={form.control}
                          name="grade"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Class Year</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your class year." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="First Year">
                                    First Year
                                  </SelectItem>
                                  <SelectItem value="Sophomore">
                                    Sophomore
                                  </SelectItem>
                                  <SelectItem value="Junior">Junior</SelectItem>
                                  <SelectItem value="Senior">Senior</SelectItem>

                                  <SelectSeparator />

                                  <SelectItem value="1L">1L</SelectItem>
                                  <SelectItem value="2L">2L</SelectItem>
                                  <SelectItem value="3L">3L</SelectItem>
                                </SelectContent>
                              </Select>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="raffleEntry"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex items-center space-x-2">
                                <Switch
                                  id="raffle-entry"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                                <Label htmlFor="raffle-entry">
                                  Enter me into the raffle!
                                </Label>
                              </div>
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="h-6 w-6 mr-2 animate-spin" />
                      ) : (
                        <CheckCircle className="h-6 w-6 mr-2" />
                      )}
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <Footer />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

export default VoteForm;
