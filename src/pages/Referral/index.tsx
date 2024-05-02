import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import KV from "../../../public/KV Referee.png";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const ReferralPage: React.FC = () => {
  const query = useQuery();
  const refCode = query.get("refCode");
  return (
    <Box>
      <Helmet>
        <title>Referral</title>
        <meta
          name="description"
          content={`Ayo daftar dengan referral code ${refCode}`}
        />
        <meta
          property="og:title"
          content={`Ayo daftar dengan referral code ${refCode}`}
        />
        <meta
          property="og:description"
          content={`Daftar disini banyak hadiah menanti. Gunakan referral code ${refCode} untuk mendapatkan hadiah utama saat pertama kali mendaftar`}
        />
        <meta property="og:image" content={KV} />
      </Helmet>
    </Box>
  );
};

export default ReferralPage;
