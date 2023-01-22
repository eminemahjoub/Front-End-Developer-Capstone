import * as React from "react";
import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  Image,
  createStyles,
} from "@mantine/core";
import { colors } from "src/theme";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Reservations",
    link: "/reservations",
  },
  {
    title: "Order Online",
    link: "/order-online",
  },
  {
    title: "Login",
    link: "/login",
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: 0,
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: colors.primary,
      color: theme.white,
    },
  },
}));

const _Header = () => {
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();
  const [opened, setOpened] = React.useState(false);

  const links = React.useMemo(
    () =>
      navLinks.map((link) => (
        <NavLink key={link.title} to={link.link}>
          <Button
            className={cx(classes.button, {
              [classes.linkActive]: link.link === pathname,
            })}
            variant="white"
            radius="md"
            fw="bold"
            c="dark"
          >
            {link.title}
          </Button>
        </NavLink>
      )),
    [pathname]
  );

  return (
    <Header height={80} py="lg" className={classes.header}>
      <Container className={classes.inner}>
        <Box>
          <Image src="/logo.svg" alt="Little Lemon" />
        </Box>
        <Group spacing="xs" noWrap>
          {links}
        </Group>
        <Burger
          opened={opened}
          className={classes.burger}
          onClick={() => setOpened((o) => !o)}
        />
      </Container>
    </Header>
  );
};

export default _Header;
