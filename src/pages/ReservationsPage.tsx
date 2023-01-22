import * as React from "react";
import { Button, Center, createStyles } from "@mantine/core";
import { ReservationsBottom, ReservationsTop } from "src/components";
import { colors } from "src/theme";
import { BookingFormValues, useBookingForm } from "src/hooks";
import { bookingFormValidation } from "src/validations";
import {
  initializeTimes,
  SENDING_DATA,
  SWITCH_CONFIRM,
  reducer,
} from "src/reducer";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: colors.secondary,
    "&:hover": {
      backgroundColor: theme.colors.yellow[6],
    },
  },
}));

const images = [
  "restaurant.jpg",
  "restaurant-chef.jpg",
  "salad.jpg",
  "grill.jpg",
  "grilled-fish.jpg",
  "pasta.jpg",
];

const ReservationsPage = () => {
  const { classes } = useStyles();
  const [state, dispatch] = React.useReducer(reducer, {
    confirm: false,
    availableTimes: initializeTimes(),
    sending: false,
  });

  const { FormProvider, useForm } = useBookingForm();

  const initialValues: BookingFormValues = {
    seating: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    requests: "",
    accept: "",
  };

  const form = useForm({
    initialValues,
    validate: bookingFormValidation,
  });

  const submitForm = () => {
    if (form.validate().hasErrors) {
      dispatch({ type: SENDING_DATA });
      showNotification({
        title: "Incomplete info!",
        message: "Make sure to fill all the required fields.",
        color: "red",
        icon: <IconX />,
      });
    } else {
      showNotification({
        title: "Thank you!",
        message: "Your reservation has been confirmed. Check you email.",
        color: "green",
        icon: <IconCheck />,
      });
    }
  };

  return (
    <>
      <FormProvider form={form}>
        <ReservationsTop
          confirm={state.confirm}
          availableTimes={state.availableTimes}
          sending={state.sending}
          dispatch={dispatch}
        />
        <Center my="xl">
          <Button
            size="md"
            radius="lg"
            c="dark"
            fw="bolder"
            w={300}
            className={classes.button}
            type="submit"
            onClick={
              !state.confirm
                ? () => {
                    dispatch({ type: SWITCH_CONFIRM });
                  }
                : submitForm
            }
          >
            {!state.confirm ? "Reserve a Table" : "Confirm Rservation"}
          </Button>
        </Center>
      </FormProvider>

      <ReservationsBottom
        images={!state.confirm ? images.slice(0, 3) : images.slice(3, 6)}
      />
    </>
  );
};

export default ReservationsPage;
