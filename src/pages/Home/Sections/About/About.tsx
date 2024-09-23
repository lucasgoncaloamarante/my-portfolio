import { Container, Grid, styled, Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const About = () => {

    const StyledAbout = styled("div")(({})=> ({
        backgroundColor: "#E6EAE1",
        height: "100vh"

    }))

    const StyledBox = styled(Grid)(({theme }) => ({
        width: '100%',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        padding: '10px',
        marginBottom: '20px',
        transition: 'background-color 0.3s ease',
        [theme.breakpoints.up('md')]: {
            width: '350px',
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: 'scale(1.05) rotate(-3deg)',
            transition: 'ease 0.5s',
          },
    }));

    const StyledBox2 = styled(Grid)(({theme }) => ({
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        padding: '10px',
        marginBottom: '20px',
        transition: 'background-color 0.3s ease',
        [theme.breakpoints.up('md')]: {
            width: '350px',
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: 'scale(1.10)',
            transition: 'ease 0.5s',
          },
    }));

    return (

        <StyledAbout>
            <Grid textAlign="center" paddingTop="50px">
                <Typography variant="h1">
                    <ReactTyped strings={["Sobre mim"]} typeSpeed={40} />
                </Typography>
            </Grid>

            <Container>
                <Grid container display="flex" justifyContent={{ xs: 'flex-start', md: 'center', lg: 'center' }} spacing={2} paddingTop="50px">
                        <Grid item xs={12} sm={10} md={5} lg={4}>
                            <StyledBox item sx={{ height: '300px', width: '100%px' }}> {/* Ajuste a altura aqui */}
                                <MilitaryTechIcon />
                                <Typography fontWeight="bold" color="primary" variant="h4" align="center">Experiências</Typography>
                                <Typography variant="h6" paddingTop="40px" align="center">1.5 + - Backend developer</Typography>
                                <Typography variant="h6" paddingTop="10px" align="center">2 anos - No/Low Code Developer</Typography>
                            </StyledBox>
                        </Grid>

                        <Grid item xs={12} sm={10} md={6} lg={4}>
                            <StyledBox item sx={{ height: '300px', width: '100%' }}> {/* Ajuste a altura aqui */}
                                <SchoolIcon />
                                <Typography fontWeight="bold" color="primary" variant="h4" align="center">Graduação</Typography>
                                <Typography variant="h6" paddingTop="40px" align="center">Bacharelado de Ciências e Tecnologia</Typography>
                                <Typography variant="h6" align="center">(UFABC)</Typography>
                            </StyledBox>
                        </Grid>
                    </Grid>

            </Container>

            <Grid paddingTop="100px">
                    <Grid item xs={12}>

                            <Grid container justifyContent="center" alignItems="center" paddingBottom="30px">
                                <Grid item>
                                    <Typography fontWeight="bold" textAlign="center" variant="h3">
                                        Olá, eu sou o Lucas!
                                    </Typography>
                                </Grid>
                            </Grid>

                        <Typography variant="h5" sx={{ paddingLeft: '100px', paddingRight: '100px' }}>
                            Atualmente, sou analista de engenharia de processos em transição para analista de engenharia de TI. 
                            Estou em constante capacitação em high code e, alinhado ao meu plano de desenvolvimento individual (PDI), 
                            estou preparado para dar o próximo passo e me tornar um analista pleno.
                        </Typography>

                        <Typography variant="h5" sx={{ paddingLeft: '100px', paddingRight: '100px', marginTop: '20px' }}>
                            Minha experiência inclui mais de um ano como engenheiro de TI, onde adquiri um profundo conhecimento sobre 
                            o cotidiano da área. Além disso, tenho um sólido entendimento dos processos e produtos que impulsionam 
                            o sucesso dos projetos, o que me diferencia na implementação de soluções em projetos novos.
                        </Typography>

                        <Typography variant="h5" sx={{ paddingLeft: '100px', paddingRight: '100px', marginTop: '20px' }}>
                            Estou sempre em busca de novos desafios e oportunidades para aplicar meu conhecimento e contribuir para 
                            o sucesso de projetos inovadores. Vamos nos conectar!
                        </Typography>
                    </Grid>
                </Grid>

            <Grid paddingTop="100px">
                    <hr style={{ width: '90%', border: '1px solid black' }} />
                </Grid>

                <Container>
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography variant="h3" fontWeight="bold">Skills</Typography>
                    </Grid>
                    <Grid    item
                            xs={12}
                            sm={10}
                            md={6}
                            lg={4}
                            display={{ xs: 'block', md: 'flex-start', lg: 'flex' }} // Define como 'block' em telas pequenas e 'flex' em md
                            flexDirection={{ xs: 'column', md: 'row' }} // Alinha os itens em coluna em xs e em linha em md
                            gap={3}
                            paddingTop="30px"
                            justifyContent={{ md: 'flex-start', lg: 'flex'}}>
                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">Python</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">AWS</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">Java</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">HTML</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">CSS</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">React</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">Tailwind</Typography>
                        </StyledBox2>

                        <StyledBox2 item sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
                            <Typography fontWeight="bold" color="primary" variant="h4">JavaScript</Typography>
                        </StyledBox2>
                    </Grid>
                </Container>



        </StyledAbout>

    );
};

export default About;
