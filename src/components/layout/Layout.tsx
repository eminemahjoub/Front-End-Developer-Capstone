import * as React from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer } from "src/components";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      styles={{ main: { paddingLeft: 0, paddingRight: 0 } }}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
