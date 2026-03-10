"use client"

import * as React from "react"
import { 
  BellRinging, House, Compass, User, MagnifyingGlass, Gear, 
  Calendar, Check, CaretRight, Phone, EnvelopeSimple, FileText, CheckCircle 
} from "@phosphor-icons/react"

// Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"

// Custom advanced components existing in project
import { FeatureBlock } from "@/components/ui/feature-block"
import { Spinner } from "@/components/ui/spinner"
import { SearchBar } from "@/components/ui/search-bar"
import { QuantitySelector } from "@/components/ui/quantity-selector"
import { ProjectCard } from "@/components/ui/project-card"
import { StatCard } from "@/components/ui/stat-card"
// Sonner is typically rendered globally, but we'll import if available or trigger via toast
import { toast } from "sonner"

export default function UITestPage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-sans">
      <header className="border-b bg-card text-card-foreground shadow-xs sticky top-0 z-40">
        <Container className="py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Equimas Modern UI</h1>
            <p className="text-sm text-muted-foreground">Component System Source of Truth</p>
          </div>
          <Badge variant="outline" className="hidden sm:inline-flex">v2 Professional Sophisticated</Badge>
        </Container>
      </header>

      <Container className="pt-12 block space-y-24 max-w-5xl">
        <section className="space-y-4">
          <div className="pb-4 border-b border-border">
            <h2 className="text-3xl font-semibold tracking-tight">1. Actions & Buttons</h2>
            <p className="text-muted-foreground">Tactile active states and premium hover effects.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Default</span>
              <Button className="w-full">Primary Action</Button>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Secondary</span>
              <Button variant="secondary" className="w-full">Secondary Action</Button>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Outline</span>
              <Button variant="outline" className="w-full">Outline Action</Button>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Ghost</span>
              <Button variant="ghost" className="w-full">Ghost Action</Button>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Destructive</span>
              <Button variant="destructive" className="w-full">Delete Item</Button>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Link</span>
              <Button variant="link" className="w-full">Learn More</Button>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground block">Disabled</span>
              <Button disabled className="w-full">Processing...</Button>
            </div>
            <div className="space-y-2 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon"><House weight="bold" className="size-4" /></Button>
              <Button variant="default" size="icon"><Gear weight="bold" className="size-4" /></Button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="pb-4 border-b border-border">
            <h2 className="text-3xl font-semibold tracking-tight">2. Inputs & Forms</h2>
            <p className="text-muted-foreground">Smooth focus rings and transition borders.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="error-input">Invalid State</Label>
                <Input id="error-input" aria-invalid="true" placeholder="Error field..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
              </div>
              
              <div className="space-y-2">
                <Label>Search Bar</Label>
                <SearchBar placeholder="Search globally..." />
              </div>
              
              <div className="space-y-2">
                <Label>Quantity Selector</Label>
                <QuantitySelector max={10} min={1} value={1} onChange={() => {}} />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <Label>Select (Framer Motion entrace)</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal">Accept terms and conditions</Label>
              </div>

              <div className="flex items-center justify-between border-y border-border py-4">
                <Label htmlFor="airplane-mode" className="flex flex-col space-y-1">
                  <span>Airplane Mode</span>
                  <span className="font-normal text-xs text-muted-foreground">Disable all network connectivity</span>
                </Label>
                <Switch id="airplane-mode" />
              </div>

              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1" className="font-normal">Default padding</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2" className="font-normal">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3" className="font-normal">Compact</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="pb-4 border-b border-border">
            <h2 className="text-3xl font-semibold tracking-tight">3. Feedback & Overlays</h2>
            <p className="text-muted-foreground">Alerts, dialogs, drawers, and popovers with spring dynamics.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Alert>
                <BellRinging weight="bold" className="size-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components and dependencies to your app using the cli.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <CheckCircle weight="fill" className="size-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
              
              <div className="flex gap-4 pt-4">
                <Button onClick={() => toast("Event has been created", {
                  description: "Sunday, December 03, 2026 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })}>
                  Show Toast (Sonner)
                </Button>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <User weight="bold" className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Profile options</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 place-items-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter showCloseButton>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework - created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <Calendar weight="bold" className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="pb-4 border-b border-border">
            <h2 className="text-3xl font-semibold tracking-tight">4. Layout & Cards</h2>
            <p className="text-muted-foreground">Structured content with cohesive borders.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Component</CardTitle>
                <CardDescription>A flexible container for content.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The quick brown fox jumps over the lazy dog. It's fully functional out of the box.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>

            <ProjectCard 
              title="Equimas Branding" 
              client="Internal" 
              imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              tags={["Design", "Brand"]} 
            />
            
            <StatCard 
              title="Total Revenue" 
              value="$45,231.89" 
              trend={{ value: 20.1, label: "from last month", isPositive: true }} 
              icon={<Calendar weight="bold" />} 
            />
            
            <FeatureBlock 
              title="High-end Physics" 
              description="All components are built using native browser features mixed with custom physics implementations." 
              icon={<Gear weight="bold" />} 
            />
          </div>
        </section>

        <section className="space-y-4">
          <div className="pb-4 border-b border-border">
            <h2 className="text-3xl font-semibold tracking-tight">5. Navigation</h2>
            <p className="text-muted-foreground">Accurate hierarchies and clear routing components.</p>
          </div>

          <div className="space-y-10">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarItem>New File</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>Make changes to your account here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name-tab">Name</Label>
                      <Input id="name-tab" defaultValue="Pedro Duarte" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <Accordion type="single" collapsible className="w-full max-w-2xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>

        <section className="space-y-4">
          <div className="pb-4 border-b border-border">
            <h2 className="text-3xl font-semibold tracking-tight">6. Data Display & Misc</h2>
            <p className="text-muted-foreground">Badges, avatars, progress bars, and structural elements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Badge>Default Badge</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>

              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>

              <div className="space-y-2">
                <Label>Progress</Label>
                <Progress value={progress} className="w-[60%]" />
              </div>

              <div className="space-y-2">
                <Label>Skeleton</Label>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Label>Spinner</Label>
                <Spinner size="default" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <Label>Scroll Area</Label>
                <ScrollArea className="h-48 w-full rounded-md border">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <React.Fragment key={i}>
                        <div className="text-sm">v1.2.0-beta.{i}</div>
                        <Separator className="my-2" />
                      </React.Fragment>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              
              <div className="space-y-2">
                <Label>Carousel</Label>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
