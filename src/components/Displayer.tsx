import * as React from "react";
import { Box, Center, Group, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons";
import { colors } from "src/theme";
import { SWITCH_CONFIRM } from "src/reducer";

interface DisplayerProps {
  error?: boolean;
  value: string | null | undefined;
  extraValue?: string;
  icon?: React.ReactNode;
  dispatch: React.Dispatch<any>;
}

const Displayer: React.FC<DisplayerProps> = ({
  error,
  value,
  extraValue,
  icon,
  dispatch,
}) => {
  return (
    <Box
      sx={{ cursor: error ? "pointer" : "text" }}
      onClick={
        error
          ? () => {
              dispatch({ type: SWITCH_CONFIRM });
            }
          : () => {}
      }
    >
      <Center>
        <IconAlertTriangle
          size={20}
          color={error ? colors.pink : colors.primary}
        />
      </Center>
      <Group noWrap>
        {icon}
        <Text size="lg" fw={500} c={error ? colors.pink : colors.light}>
          {value ? value : extraValue}
        </Text>
      </Group>
    </Box>
  );
};

export default Displayer;
