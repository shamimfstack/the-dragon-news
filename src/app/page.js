import Image from "next/image";
import Grid from "@mui/material/Grid";
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/Sidebar/SideBar";

export default function HomePage() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}
