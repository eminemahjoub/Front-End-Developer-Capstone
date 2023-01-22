import * as React from "react";
import {
  Center,
  createStyles,
  Grid,
  Radio,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { colors } from "src/theme";
import { Displayer, ErrorMessage, RadioField } from "src/components";
import {
  DateIcon,
  DinersIcon,
  OccasionIcon,
  TimeIcon,
} from "src/components/icons";
import { useBookingForm } from "src/hooks";
import { dateFormatter } from "src/utils";
import { Action, SWITCH_CONFIRM } from "src/reducer";

const labelProps = {
  c: colors.light,
};

const useStyles = createStyles((theme) => ({
  input: {
    border: `solid 3px ${colors.pink}`,
    fontWeight: 500,
    "&:focus": {
      border: `solid 3px ${colors.pink}`,
    },
  },
}));

const SubmitForm: React.FC<{
  sending?: boolean;
  dispatch: React.Dispatch<Action>;
}> = ({ sending, dispatch }) => {
  const { classes, cx } = useStyles();
  const { useFormContext } = useBookingForm();
  const form = useFormContext();

  return (
    <Grid>
      <Grid.Col md={6}>
        <TextInput
          {...form.getInputProps("firstName")}
          placeholder="First Name"
          label="* First Name"
          variant="filled"
          radius="md"
          labelProps={labelProps}
          error={false}
          classNames={{
            input: cx({
              [classes.input]: !form.isValid("firstName") && sending,
            }),
          }}
        />
        <ErrorMessage
          condition={!form.isValid("firstName") && sending}
          message="First Name Required"
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <TextInput
          {...form.getInputProps("lastName")}
          placeholder="Last Name"
          label="* Last Name"
          variant="filled"
          radius="md"
          labelProps={labelProps}
          error={false}
          classNames={{
            input: cx({
              [classes.input]: !form.isValid("lastName") && sending,
            }),
          }}
        />
        <ErrorMessage
          condition={!form.isValid("lastName") && sending}
          message="Last Name Required"
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <TextInput
          {...form.getInputProps("email")}
          placeholder="you@company.com"
          label="* Email"
          variant="filled"
          radius="md"
          labelProps={labelProps}
          error={false}
          classNames={{
            input: cx({
              [classes.input]: !form.isValid("email") && sending,
            }),
          }}
        />
        <ErrorMessage
          condition={!form.isValid("email") && sending}
          message="Email Required"
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <TextInput
          {...form.getInputProps("phoneNumber")}
          placeholder="###-###-####"
          label="* Phone Number"
          variant="filled"
          radius="md"
          labelProps={labelProps}
          error={false}
          classNames={{
            input: cx({
              [classes.input]: !form.isValid("phoneNumber") && sending,
            }),
          }}
        />
        <ErrorMessage
          condition={!form.isValid("phoneNumber") && sending}
          message="Phone Number Required"
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <Grid>
          <Grid.Col md={6}>
            <Displayer
              value={dateFormatter(form.values.date)}
              extraValue="Select Date"
              error={!form.values.date}
              dispatch={dispatch}
              icon={
                <DateIcon
                  value={!form.values.date}
                  primary={colors.light}
                  secondary={colors.pink}
                />
              }
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Displayer
              value={form.values.guests}
              extraValue="Select Diners"
              error={!form.values.guests}
              dispatch={dispatch}
              icon={
                <DinersIcon
                  value={!form.values.guests}
                  primary={colors.light}
                  secondary={colors.pink}
                />
              }
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Displayer
              value={form.values.time}
              extraValue="Select Time"
              error={!form.values.time}
              dispatch={dispatch}
              icon={
                <TimeIcon
                  value={!form.values.time}
                  primary={colors.light}
                  secondary={colors.pink}
                />
              }
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Displayer
              value={form.values.occasion}
              extraValue="Select Occasion"
              error={!form.values.occasion}
              dispatch={dispatch}
              icon={
                <OccasionIcon
                  value={!form.values.occasion}
                  primary={colors.light}
                  secondary={colors.pink}
                />
              }
            />
          </Grid.Col>
          <Grid.Col md={12}>
            <Center>
              <Text
                size="xl"
                fw={500}
                c={form.values.seating ? colors.light : colors.pink}
                sx={{ cursor: !form.values.seating ? "pointer" : "text" }}
                onClick={
                  !form.values.seating
                    ? () => {
                        dispatch({ type: SWITCH_CONFIRM });
                      }
                    : () => {}
                }
              >
                {form.values.seating
                  ? `${form.values.seating} seating`
                  : "Select Seating"}
              </Text>
            </Center>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col md={6}>
        <Textarea
          placeholder="Comment"
          label="Special Requests"
          variant="filled"
          radius="md"
          minRows={5}
          labelProps={labelProps}
          {...form.getInputProps("requests")}
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <Radio.Group {...form.getInputProps("accept")} error={false}>
          <RadioField value="ok" invalid={!form.isValid("accept") && sending} />
          <Text c={colors.light}>
            You agree to our friendly{" "}
            <Text span td="underline">
              privacy policy
            </Text>
          </Text>
        </Radio.Group>
      </Grid.Col>
    </Grid>
  );
};

export default SubmitForm;
