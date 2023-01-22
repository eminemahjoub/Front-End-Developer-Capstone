import { createFormContext } from "@mantine/form";

export interface BookingFormValues {
  seating: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  requests?: string;
  accept: string;
}

const [FormProvider, useFormContext, useForm] =
  createFormContext<BookingFormValues>();

export const useBookingForm = () => {
  return { FormProvider, useFormContext, useForm } as const;
};
