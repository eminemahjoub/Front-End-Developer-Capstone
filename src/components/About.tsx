import { Box, Container, createStyles, Grid, Text, Title } from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  imageContainer: {
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  frontPic: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "auto",
    width: "auto",
    maxHeight: 300,
    maxWidth: 300,
    objectFit: "contain",
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.xl,
    zIndex: 2,
  },
  backPic: {
    position: "absolute",
    right: 150,
    top: 100,
    height: "auto",
    width: "auto",
    maxHeight: 300,
    maxWidth: 300,
    objectFit: "contain",
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.xl,
    zIndex: 1,
  },
}));

const About = () => {
  const { classes } = useStyles();

  return (
    <Box pt={50}>
      <Container>
        <Grid>
          <Grid.Col md={6}>
            <Title c={colors.primary}>Little Lemon</Title>
            <Title order={3}>Chicago</Title>
            <Text my="lg" c={colors.dark}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              nemo necessitatibus porro officia ad impedit vero exercitationem
              illo, esse vel vitae error, culpa obcaecati dolorum quis aut unde
              veritatis.
            </Text>
          </Grid.Col>
          <Grid.Col md={6} className={classes.imageContainer}>
            <img src="/mario-and-adrian-a.jpg" className={classes.frontPic} />
            <img src="/mario-and-adrian-b.jpg" className={classes.backPic} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
