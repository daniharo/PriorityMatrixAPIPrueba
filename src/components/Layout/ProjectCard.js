import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import ProjectDialog from "./ProjectDialog";
import { useState } from "react";
import Auth from "../../Auth";

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [projectItems, setProjectItems] = useState(undefined);
  const classes = useStyles();

  const projectTags = [...new Set(project.tags.map((tag) => tag.name))]
    .sort()
    .join(", ");

  const fetchProjectItems = async () => {
    const response = await fetch(`/api/v1/project/${project.idd}/items`, {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${Auth.bearerToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setProjectItems(data);
  };

  const handleOpenDialog = () => {
    if (!projectItems) {
      fetchProjectItems();
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <>
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
          <Button size="small" color="primary" onClick={handleOpenDialog}>
            Details
          </Button>
        </CardActions>
      </Card>
      {
        <ProjectDialog
          open={dialogOpen}
          project={project}
          items={projectItems}
          onClose={handleCloseDialog}
        />
      }
    </>
  );
}
