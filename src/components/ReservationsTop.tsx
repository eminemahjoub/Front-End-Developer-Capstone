import * as React from "react";
import { Box, Container, Title } from "@mantine/core";
import { BookingForm, SubmitForm } from "src/components";
import { colors } from "src/theme";
import { Action } from "src/reducer";

interface ReservationsTopProps {
  confirm?: boolean;
  sending?: boolean;
  availableTimes: string[];
  dispatch: React.Dispatch<Action>;
}

const ReservationsTop: React.FC<ReservationsTopProps> = ({
  confirm,
  sending,
  availableTimes,
  dispatch,
}) => {
  return (
    <Box py="md" sx={{ backgroundColor: colors.primary }}>
      <Container>
        {confirm ? (
          <SubmitForm sending={sending} dispatch={dispatch} />
        ) : (
          <>
            <Title my="sm" c={colors.secondary}>
              Reservations
            </Title>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          </>
        )}
      </Container>
    </Box>
  );
};

export default ReservationsTop;
