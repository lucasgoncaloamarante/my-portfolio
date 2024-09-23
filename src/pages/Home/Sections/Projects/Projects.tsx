import { Grid, styled, Typography } from "@mui/material";
import Cardapio from "../../../../assets/images/Cardapio.png";
import Senha from "../../../../assets/images/Senha.png";

const Projects = () => {

    const StyledProjects = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,

    }))

    const StyledBox3 = styled(Grid)(({theme }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        padding: '10px',
        [theme.breakpoints.up('xs')]: {
          width: '100%', // Para xs, a box ocupará 100% do espaço do grid (12 colunas)
        },
        [theme.breakpoints.up('sm')]: {
          width: '100%', // Para sm, ajusta para o tamanho do grid (6 colunas)
        },
        [theme.breakpoints.up('md')]: {
          width: '100%', // Para md, ajusta para o tamanho do grid (3 colunas)
        },
        [theme.breakpoints.up('lg')]: {
          width: '100%', // Para lg, ajusta para o tamanho do grid (5 colunas)
          maxWidth: '500px', // Limita a largura máxima para lg
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
      }));
      

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%", // Largura padrão como 100% do container
        height: "auto", // Mantém a proporção correta
        [theme.breakpoints.up('xs')]: {
          width: '100%', // Para xs, a imagem ocupará 100% do espaço do grid (12 colunas)
        },
        [theme.breakpoints.up('sm')]: {
          width: '100%', // Para sm, ajusta para o tamanho do grid (6 colunas)
        },
        [theme.breakpoints.up('md')]: {
          width: '100%', // Para md, ajusta para o tamanho do grid (3 colunas)
        },
        [theme.breakpoints.up('lg')]: {
          width: '100%', // Para lg, ajusta para o tamanho do grid (5 colunas)
          maxWidth: '500px', // Limita a largura máxima da imagem para lg
        },
      }));

    const StyledButton = styled("button")(({theme})=> ({
        position: "relative",
        zIndex: 1,
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "150%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: { // Para telas pequenas, se necessário
          cursor: "pointer",
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
        }, 

    }))

    return (
      <>
        <StyledProjects>
        <section id="projects">
            <Grid>
                <Typography variant="h1" color="primary.contrastText" textAlign="center" paddingTop="50px">Projects</Typography>
            </Grid>

            <Grid container justifyContent="center" alignItems="center" paddingTop="150px"  gap="100px">

                <StyledBox3 item xs={12} sm={8} md={6} lg={7}> 
                    <Typography color="primary.contrastText" variant="h4" marginBottom="10px" textAlign="left" sx={{ width: '100%', paddingLeft: '10px' }}>Cardápio digital</Typography>
                    <Typography color="primary.contrastText" variant="h6" marginBottom="10px" textAlign="left" sx={{ width: '100%', paddingLeft: '10px' }}>Agosto - 2024</Typography>
                    <StyledImg src={Cardapio}/>
                    <Grid display="flex" gap="100px" paddingTop="30px">
                    <a href="https://cardapio-livid-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <StyledButton>View Project</StyledButton>
                    </a>
                    <a href="https://github.com/lucasgoncaloamarante/cardapio" target="_blank" rel="noopener noreferrer">
                        <StyledButton>Open code</StyledButton>
                    </a>
                    </Grid>
                </StyledBox3>

                <StyledBox3 item xs={12} sm={8} md={6} lg={7}>
                <Typography color="primary.contrastText" variant="h4" marginBottom="10px" textAlign="left" sx={{ width: '100%', paddingLeft: '10px' }}>Gerador de senhas</Typography>
                <Typography color="primary.contrastText" variant="h6" marginBottom="10px" textAlign="left" sx={{ width: '100%', paddingLeft: '10px' }}>Setembro - 2024</Typography>
                    <StyledImg src={Senha}/>
                    <Grid display="flex" gap="100px" paddingTop="30px">
                    <a href="https://gerador-de-senhas-ruby-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <StyledButton>View Project</StyledButton>
                    </a>
                    <a href="https://github.com/lucasgoncaloamarante/GeradorDeSenhas" target="_blank" rel="noopener noreferrer">
                        <StyledButton>Open code</StyledButton>
                    </a>
                    </Grid>
                </StyledBox3>

            </Grid>

            <Grid paddingTop="300px">
                <Typography variant="h6" fontWeight="bold">2024 © Lucas Amarante © Todos os direitos reservados.</Typography>
            </Grid>
            </section>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects;