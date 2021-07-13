import { Box, CircularProgress } from "@material-ui/core";

export default function CircularProgressCenter({color = "primary", height}) {
  return (
    <Box
      display="flex"
      width="100%"
      height={height ?? "auto"}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color={color} />
    </Box>
  );
}
