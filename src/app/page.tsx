"use client";

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
import { createVote, voteFormSchema } from "./actions";

const options = [
  {
    id: "performanceOption1",
    title: "Cirque Kalabanté",
    content: (
      <>
        <p>
          Afrique en Cirque is a show by Yamoussa Bangoura, inspired by daily
          life in Guinea. This performance shares the beauty, youth and artistry
          of African culture. A colorful show beyond its scenery, costumes and
          staging, it makes any theater vibrate with energy and represents the
          strength, agility and life’s joys of young Africans.
        </p>

        <p>
          The audience will see acrobats execute gravity-defying moves and human
          pyramids, accompanied by the contemporary sounds of live Afro-Jazz,
          percussion and kora. Welcome to the universe of Kalabanté Productions
          and prepare for an unforgettable journey.
        </p>
      </>
    ),
    embedVideoUrl: "https://www.youtube.com/embed/QdQK6SxR53A",
  },
  {
    id: "performanceOption2",
    title: "The Sounds of Zamar",
    content: (
      <>
        <p>
          Trey McLaughlin & The Sounds of Zamar have carved a unique place for
          themselves in the music industry through soul-stirring arrangements of
          contemporary gospel, musical theater, and rich original compositions.
          The ensemble, organized in 2009, has performed with gospel greats such
          as William McDowell, Kierra “Kiki” Sheard, Richard Smallwood, VaShawn
          Mitchell, Earnest Pugh, and James Fortune.
        </p>

        <p>
          Hailing from Augusta, GA, McLaughlin & The Sounds of Zamar are known
          for their opulent harmonies and beautiful blends, which are showcased
          throughout their 2012 album Limitless. The 14-track compilation is
          sprinkled with ballads and anthems of original songs giving glory to
          God that will bring inspiration and joy to the hearts of those who
          listen.
        </p>
      </>
    ),
    embedVideoUrl: "https://player.vimeo.com/video/252960325",
  },
  {
    id: "performanceOption3performanceOption1",
    title: "The Forgotten Kingdom",
    content: (
      <>
        <p>
          This video show honors often-unheard female voices, exploring familial
          love, ethnic tensions and the ways ordinary people navigate
          cataclysmic change in a multicultural society. Drawing on the story of
          the unraveling Ottoman Empire, the show takes us on an intensely
          emotional journey into a child’s memories of her parent’ vibrant and
          multiethnic Mediterranean world, brought to life with a riveting
          musical score, radio-theater stories, and the breathtakingly dreamlike
          sand animation of world renowned Ukrainian artist (and America’s Got
          Talent favorite) Kseniya Simonova.
        </p>
      </>
    ),
    embedVideoUrl: "https://player.vimeo.com/video/663150148",
  },
  {
    id: "performanceOption4",
    title: "Actors from the London Stage & Residency: Hamlet",
    content: (
      <>
        <p>
          Founded in 1975, Actors From The London Stage (AFTLS) is one of the
          oldest touring Shakespeare theatre companies in the world. Housed and
          workshopped in the UK and based in the United States at Shakespeare at
          Notre Dame, this intensive residency program is truly one of a kind.
        </p>
      </>
    ),
    embedVideoUrl:
      "https://www.youtube.com/embed/21V1wYs07K0?si=aU1_rQ7JnVIkAuix",
  },
];

const Page = () => {
  const [selected, setSelected] = useState<string>("none");
  const [openOption, setOpenOption] = useState<string>("none");
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof voteFormSchema>>({
    resolver: zodResolver(voteFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof voteFormSchema>) => {
    setIsLoading(true);

    const data = await createVote(values);

    if (!data) {
      toast.error(
        "An error occurred while submitting your vote. Please try again later."
      );
      return;
    }

    console.log(data);

    toast(
      <div className="space-y-1">
        <h1 className="font-bold">Thank You! Vote Submitted! 🎉</h1>
        <p>
          Thank you for voting! You can view your submission below. If you
          entered the raffle, you will be contacted via email if you win!
        </p>

        <pre className="bg-background text-white rounded-md p-2">
          <code>{JSON.stringify(values, null, 2)}</code>
        </pre>
      </div>
    );

    setSelected("none");
    setOpenOption("none");
    setIsStudent(false);
    setDrawerOpen(false);
    form.reset();
    setIsLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:max-w-2xl container mx-auto space-y-8">
      <div className="text-center space-y-1 [&_*]:transition-all [&_*]:duration-1000">
        <h1 className="sm:text-4xl text-2xl font-bold">
          Select your favorite!
        </h1>

        <p className="sm:text-[16px] text-[12px] font-medium text-muted-foreground p-0">
          Select your favorite performance below. <br />
          Click the titles to learn more.
        </p>
      </div>

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
                        {option.title}
                      </CardTitle>
                    </AccordionTrigger>
                  </div>

                  <AccordionContent className="[&>div]:!p-0">
                    <div className="md:text-sm text-xs font-medium flex flex-col space-y-4 py-4 items-center">
                      {option.content}

                      {option.embedVideoUrl && (
                        <iframe
                          className="aspect-video md:w-1/2"
                          src={option.embedVideoUrl}
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

      <Drawer.Root
        shouldScaleBackground
        open={drawerOpen}
        onOpenChange={(e) => setDrawerOpen(e)}
      >
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

            <div className="p-2 border-t border-muted mt-auto">
              <div className="flex items-center justify-center max-w-lg mx-auto text-muted">
                <p className="text-xs font-extralight">
                  Lenfest Student Selection Committee Polling System by Gabriel
                  Hogan
                </p>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <div className="fixed bottom-5 right-5">
        <ThemeSwitcher className="scale-150" />
      </div>
    </main>
  );
};

export default Page;
