import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles CSS d'AOS
import bgImg from "../assets/images/descit.jpg";

function Descrit() {
  useEffect(() => {
    // Initialisation de AOS
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Grid
        container
        m={5}
        boxShadow={5}
        p={3}
        borderRadius={3}
        data-aos="fade-up" // Animation lors du défilement
      >
        <Grid container justifyContent={"center"} data-aos="fade-up">
          <Typography variant="h3" fontWeight={"bold"}>
            Foton-kevitra
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={6}
          justifyContent={"center"}
          alignContent={"center"}
          p={8}
          data-aos="fade-up"
        >
          <Typography variant="h6">
            Ny teknolojia dizitaly dia manana anjara toerana lehibe amin`ny
            fampiroboroboana ny fiainana, ny fiaraha-monina ary ny tontolo
            iainana amin`ny alàlan`ny fanolorana vahaolana vaovao hiatrehana
            ireo fanamby ankehitriny. Amin`ny alalan`ny fanangonana sy
            famakafakana angon-drakitra goavana, ny teknolojia nomerika dia
            ahafahan`ny fitantanana tsara kokoa ny loharanon-karena voajanahary,
            mampitombo ny fanaraha-maso ny zavamananaina ary mamaly haingana
            kokoa ny krizy ara-tontolo iainana. Ny fitaovana nomerika ihany koa
            dia mampiroborobo ny fandraisan`anjaran`ny vondrom-piarahamonina
            amin`ny alàlan`ny fanamorana ny fifandraisana sy ny fiaraha-miasa eo
            amin`ny olom-pirenena, fikambanana ary mpanapa-kevitra. Amin`ny
            fampidirana vahaolana nomerika amin`ny hetsika maharitra, dia afaka
            mamorona fiaraha-miasa mahasoa izay manohana tsy ny fiarovana ny
            planetantsika ihany fa ny fahasambaran`ny vondron`olombelona sy ny
            tontolo iainana.
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={6}
          overflow={"hidden"}
          justifyContent={"center"}
          data-aos="fade-left"
        >
          <Grid container justifyContent={"center"} alignContent={"center"}>
            <img src={bgImg} alt="" style={{ width: "80%", height: "80%" }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Descrit;
