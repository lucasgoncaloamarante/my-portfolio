import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar 4.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "20px"
        },

        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0"
        }
    }))

    const StyledImg = styled("img")(()=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
           <StyledHero>

            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>

                    <Box position="relative">
                        <Box position="absolute" width={"150%"} top={-100} right={0}>
                            <AnimatedBackground/>
                        </Box>
                    <Box position="relative" textAlign="center">
                        <StyledImg src={Avatar} />
                    </Box>
                    </Box>

                
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Lucas Amarante</Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center">Futuro Analista Pleno</Typography>

                    <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">


                            <StyledButton onClick={()=> console.log("dowload")}>
                                <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                            </StyledButton>
                        </Grid>

                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton onClick={()=> console.log("contact")}>
                                <MailIcon/>
                                <Typography>
                                    Contact me
                                </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                    <Grid display="flex" gap={3} justifyContent="center" alignItems="center" paddingTop="80px">
                        <Box position="relative">
                            <a href="https://www.linkedin.com/in/amarante-lucas/" target="_blank" rel="noopener noreferrer">
                            <img 
                            src="\src\assets\images\linkedin.png" 
                            alt="Linkedin"
                            width="40"
                            height="40" />
                            </a>
                        </Box>

                        <Box position="relative">
                        <a href="https://github.com/lucasgoncaloamarante" target="_blank" rel="noopener noreferrer">
                            <img 
                            src="\src\assets\images\github.png" 
                            alt="Linkedin"
                            width="40"
                            height="40" />
                        </a>
                        </Box>
                    </Grid>
                </Grid>
                </Grid>
            </Container>

           </StyledHero>
      </>
    )
  }
  
  export default Hero
  