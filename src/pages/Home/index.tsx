import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content={`Redirect with OG discovery web app`}
        />
        <meta
          property="og:title"
          content={`Redirect with OG discovery web app`}
        />
        <meta
          property="og:description"
          content={`Redirect with OG discovery web app`}
        />
      </Helmet>
    </Box>
  );
};

export default HomePage;
