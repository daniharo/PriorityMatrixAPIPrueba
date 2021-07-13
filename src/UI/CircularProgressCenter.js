import { Box, CircularProgress } from "@material-ui/core";

export default function CircularProgressCenter(props) {
  return (
    <Box
      display="flex"
      width="100%"
      height="300px"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress {...props} />
    </Box>
  );
}
