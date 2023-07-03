import { useMediaQuery, useTheme } from "@mui/material";

export const useIsSmallScreen = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return !matches;
};
export const useIsMediumScreen = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return !matches;
};
export const useIsLargeScreen = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return !matches;
};
export const useIsExtraLargeScreen = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  return !matches;
};
