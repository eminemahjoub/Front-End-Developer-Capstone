import * as React from "react";
import { Grid, Radio } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import { colors } from "src/theme";
import { DateField, SelectField, RadioField } from "src/components";
import {
  DateIcon,
  DinersIcon,
  OccasionIcon,
  TimeIcon,
} from "src/components/icons";
import { useBookingForm } from "src/hooks";
import { Action, CHANGE_DATE } from "src/reducer";
import data from "src/data/form-data.json";

const labelProps = {
  c: colors.light,
  size: "md",
  pb: "xs",
};

const Chevron: React.FC<{ value: Date | string | null | undefined }> = ({
  value,
}) => {
  return value ? (
    <IconChevronUp size={28} stroke={1.5} color={colors.light} />
  ) : (
    <IconChevronDown size={28} stroke={1.5} color={colors.primary} />
  );
};

interface BookingFormProps {
  availableTimes: string[];
  dispatch: React.Dispatch<Action>;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  dispatch,
}) => {
  const { useFormContext } = useBookingForm();
  const form = useFormContext();

  const radios = React.useMemo(
    () =>
      data.seats.map((seat) => (
        <RadioField
          key={seat.value}
          value={seat.value}
          label={seat.label}
          labelPosition="left"
        />
      )),
    []
  );

  React.useEffect(() => {
    dispatch({ type: CHANGE_DATE, payload: form.values.date });
  }, [form.values.date]);

  return (
    <>
      <Radio.Group
        {...form.getInputProps("seating")}
        size="sm"
        my="md"
        spacing={240}
        sx={{ width: "100%" }}
        error={false}
      >
        {radios}
      </Radio.Group>
      <Grid my="md">
        <Grid.Col md={6}>
          <DateField
            {...form.getInputProps("date")}
            label="Date"
            placeholder="Select Date"
            labelProps={labelProps}
            error={false}
            icon={
              <DateIcon
                value={form.values.date}
                primary={colors.primary}
                secondary={colors.light}
              />
            }
            rightSection={<Chevron value={form.values.date} />}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <SelectField
            {...form.getInputProps("guests")}
            label="Number of Diners"
            placeholder="No. of Diners"
            grid
            labelProps={labelProps}
            data={data.diners}
            error={false}
            icon={
              <DinersIcon
                value={form.values.guests}
                primary={colors.primary}
                secondary={colors.light}
              />
            }
            rightSection={<Chevron value={form.values.guests} />}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <SelectField
            {...form.getInputProps("occasion")}
            label="Occasion"
            placeholder="Occasion"
            labelProps={labelProps}
            data={data.occasions}
            error={false}
            icon={
              <OccasionIcon
                value={form.values.occasion}
                primary={colors.primary}
                secondary={colors.light}
              />
            }
            rightSection={<Chevron value={form.values.occasion} />}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <SelectField
            {...form.getInputProps("time")}
            label="Time"
            placeholder="Select Time"
            grid
            labelProps={labelProps}
            data={availableTimes}
            error={false}
            icon={
              <TimeIcon
                value={form.values.time}
                primary={colors.primary}
                secondary={colors.light}
              />
            }
            rightSection={<Chevron value={form.values.time} />}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default BookingForm;
