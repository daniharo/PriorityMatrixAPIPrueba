import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
});

export default function ProjectCard({ project }) {
  const classes = useStyles();

  const projectTags = [...new Set(project.tags.map((tag) => tag.name))]
    .sort()
    .join(", ");

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {project.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {projectTags}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {project.notes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
