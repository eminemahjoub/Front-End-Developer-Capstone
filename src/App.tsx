import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import RootRoute from "src/routes";
import { Layout } from "src/components";
import { NotificationsProvider } from "@mantine/notifications";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <Router>
          <Layout>
            <RootRoute />
          </Layout>
        </Router>
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default App;
