import * as React from "react";
import { Container, createStyles, Grid } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
    objectFit: "cover",
    borderRadius: theme.radius.xl,
  },
}));

const ReservationsBottom: React.FC<{ images: string[] }> = ({ images }) => {
  const { classes } = useStyles();

  const pictures = React.useMemo(
    () =>
      images.map((image) => (
        <Grid.Col key={image} md={4}>
          <img src={image} className={classes.image} />
        </Grid.Col>
      )),
    [images]
  );

  return (
    <Container>
      <Grid my="xl">{pictures}</Grid>
    </Container>
  );
};

export default ReservationsBottom;
