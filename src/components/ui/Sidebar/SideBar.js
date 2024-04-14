import { Image } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import figmaImg from "@/assets/figma.jpg";
import { getCurrentDate } from "@/utils/getCurrentDate";

export default function SideBar() {

    const currentDate = getCurrentDate();

  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image src={figmaImg} width={800} alt="top news" />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] bg-red-500 text-white p-1 rounded my-5">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>

          <Typography className="my-3" gutterBottom>
            By Shamim Ahammad - Apr 14, 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Box>
        <Grid className="flex items-center border-b-2 p-2" container spacing={2}>
          <Grid item xs={4}>
            <CardMedia>
              <Image src={figmaImg} width={800} alt="top news" />
            </CardMedia>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>

              <Typography className="my-3 text-sm text-gray-600" gutterBottom>
                {currentDate}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <Grid className="flex items-center border-b-2 p-2" container spacing={2}>
          <Grid item xs={4}>
            <CardMedia>
              <Image src={figmaImg} width={800} alt="top news" />
            </CardMedia>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>

              <Typography className="my-3 text-sm text-gray-600" gutterBottom>
                {currentDate}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <Grid className="flex items-center border-b-2 p-2" container spacing={2}>
          <Grid item xs={4}>
            <CardMedia>
              <Image src={figmaImg} width={800} alt="top news" />
            </CardMedia>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>

              <Typography className="my-3 text-sm text-gray-600" gutterBottom>
                {currentDate}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <Grid className="flex items-center border-b-2 p-2" container spacing={2}>
          <Grid item xs={4}>
            <CardMedia>
              <Image src={figmaImg} width={800} alt="top news" />
            </CardMedia>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom >
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>

              <Typography className="my-3 text-sm text-gray-600" gutterBottom>
                {currentDate}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
