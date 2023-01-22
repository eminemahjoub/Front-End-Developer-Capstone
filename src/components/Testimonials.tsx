import * as React from "react";
import { Box, Center, Container, Grid, Title } from "@mantine/core";
import { Testimonial } from "src/components";
import { colors } from "src/theme";
import reviews from "src/data/reviews.json";

const Testimonials = () => {
  const testimonials = React.useMemo(
    () =>
      reviews.map((review) => (
        <Grid.Col key={review.name} md={3}>
          <Testimonial review={review} />
        </Grid.Col>
      )),
    []
  );

  return (
    <Box mt={50} py={100} sx={{ backgroundColor: colors.light }}>
      <Container>
        <Center mb={100}>
          <Title>Testimonials</Title>
        </Center>
        <Grid>{testimonials}</Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
