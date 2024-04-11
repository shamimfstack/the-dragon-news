import { Image } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import headingImg from "@/assets/web.png"
import Typography from '@mui/material/Typography';
import { getCurrentDate } from "@/utils/getCurrentDate";

export default function Header() {
    const currentDate = getCurrentDate();
    return (
        <Box className="w-full text-center my-5">
            <Container>
                <Image src={headingImg} width={100} height={100} alt="logo"/>
                <Typography className="my-2" variant="body2" color="gray" textAlign="center"> Journalism Without Fear or Favour </Typography>
                <Typography variant="body2" textAlign="center">{currentDate}</Typography>
            </Container>
        </Box>
        );
}