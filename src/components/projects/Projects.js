import { Grid, makeStyles, Container } from "@material-ui/core";
import ProjectCard from "../Layout/ProjectCard";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1)
  },
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexGrow: 1
  },
}));

export default function Projects({ projects }) {
  const classes = useStyles();
  const projectsCards = projects.map((project) => (
    <Grid item xs={4} key={project.idd}>
      <ProjectCard project={project}/>
    </Grid>
  ));
  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={1}>
        {projectsCards}
      </Grid>
    </Container>
  );
}
