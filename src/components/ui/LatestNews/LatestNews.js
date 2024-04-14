import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import figmaImg from "@/assets/figma.jpg";
import { Image } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

export default function LatestNews() {
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

      {/* four cards */}
      <Grid className="my-5" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card className="">
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
