import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, differenceInDays } from "date-fns";
import { CalendarIcon, Users, CheckCircle2, Bed } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface Room {
  title: string;
  price: string;
}

interface RoomBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  room: Room;
}

const bookingSchema = z.object({
  checkIn: z.date({
    required_error: "Please select check-in date",
  }),
  checkOut: z.date({
    required_error: "Please select check-out date",
  }),
  guests: z.string({
    required_error: "Please select number of guests",
  }),
  rooms: z.string({
    required_error: "Please select number of rooms",
  }),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  specialRequests: z.string().max(500, "Special requests are too long").optional(),
}).refine((data) => data.checkOut > data.checkIn, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"],
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const RoomBookingDialog = ({ open, onOpenChange, room }: RoomBookingDialogProps) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingFormData | null>(null);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const checkInDate = form.watch("checkIn");
  const checkOutDate = form.watch("checkOut");

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      return differenceInDays(checkOutDate, checkInDate);
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const roomsCount = parseInt(form.watch("rooms") || "1");
    const pricePerNight = parseInt(room.price.replace(/[^0-9]/g, ""));
    return nights * roomsCount * pricePerNight;
  };

  const guestOptions = Array.from({ length: 8 }, (_, i) => (i + 1).toString());
  const roomOptions = Array.from({ length: 5 }, (_, i) => (i + 1).toString());

  const onSubmit = (data: BookingFormData) => {
    setBookingDetails(data);
    setIsConfirmed(true);
    toast({
      title: "Booking Confirmed!",
      description: `Your reservation for ${room.title} has been confirmed.`,
    });
  };

  const handleClose = () => {
    setIsConfirmed(false);
    setBookingDetails(null);
    form.reset();
    onOpenChange(false);
  };

  const handleNewBooking = () => {
    setIsConfirmed(false);
    setBookingDetails(null);
    form.reset();
  };

  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            {isConfirmed ? "Booking Confirmed!" : `Book ${room.title}`}
          </DialogTitle>
        </DialogHeader>

        {isConfirmed && bookingDetails ? (
          <div className="space-y-6 py-4">
            <div className="flex justify-center">
              <CheckCircle2 size={64} className="text-accent animate-scale-in" />
            </div>
            
            <div className="space-y-3 text-center">
              <p className="text-lg font-semibold">Thank you, {bookingDetails.name}!</p>
              <p className="text-muted-foreground">
                Your booking has been confirmed. We've sent a confirmation email to {bookingDetails.email}.
              </p>
            </div>

            <div className="space-y-4 bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">Reservation Details:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Room Type:</span>
                  <span className="font-medium">{room.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in:</span>
                  <span className="font-medium">{format(bookingDetails.checkIn, "PPP")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out:</span>
                  <span className="font-medium">{format(bookingDetails.checkOut, "PPP")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nights:</span>
                  <span className="font-medium">{differenceInDays(bookingDetails.checkOut, bookingDetails.checkIn)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rooms:</span>
                  <span className="font-medium">{bookingDetails.rooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Guests:</span>
                  <span className="font-medium">{bookingDetails.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">{bookingDetails.phone}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-base">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="font-bold text-accent text-lg">
                    ${calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleNewBooking} variant="outline" className="flex-1">
                New Booking
              </Button>
              <Button onClick={handleClose} className="flex-1 gradient-hero">
                Close
              </Button>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 py-4">
              {/* Check-in Date */}
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-in Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : "Select check-in date"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-background z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Check-out Date */}
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-out Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : "Select check-out date"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-background z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date <= (checkInDate || new Date())}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Display nights */}
              {nights > 0 && (
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold">{nights}</span> {nights === 1 ? 'night' : 'nights'} stay
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {/* Number of Rooms */}
                <FormField
                  control={form.control}
                  name="rooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rooms</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <Bed className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select rooms" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background z-50">
                          {roomOptions.map((num) => (
                            <SelectItem key={num} value={num}>
                              {num} {num === "1" ? "Room" : "Rooms"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Number of Guests */}
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guests</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <Users className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background z-50">
                          {guestOptions.map((num) => (
                            <SelectItem key={num} value={num}>
                              {num} {num === "1" ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Guest Information */}
              <div className="space-y-4 pt-2 border-t">
                <h3 className="font-semibold">Guest Information</h3>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Early check-in, extra pillows, etc." {...field} />
                      </FormControl>
                      <FormDescription>Any special requirements for your stay</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Price Summary */}
              {total > 0 && (
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {room.price}/night × {nights} {nights === 1 ? 'night' : 'nights'} × {form.watch("rooms") || 1} {form.watch("rooms") === "1" ? 'room' : 'rooms'}
                      </p>
                      <p className="text-2xl font-bold text-accent mt-1">
                        ${total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <Button type="submit" className="w-full gradient-hero text-lg py-6">
                  Confirm Booking
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};
