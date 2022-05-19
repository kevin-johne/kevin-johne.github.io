export const breakpointsMap = {
  default: 0,
  small: 580, // mobile landscape
  medium: 750, // tablet portrait
  large: 980, // tablet landscape / desktop
  xlarge: 1280,
}

export const breakpoint = (
  size = 0,
  inheritBreakpoint = 0,
  selector = 'min-width',
  map = breakpointsMap,
  additionalQuery = '',
) => {
  let query = "";

  if(size !== 0) {
    query = `(${selector}: ${size}px)`;
  }

  if(inheritBreakpoint > 0) {

    let breakpoints = Object.values(map);
    let nextBreakpointKey = breakpoints.indexOf(inheritBreakpoint) +1;
    let nextBreakpoint = breakpoints[nextBreakpointKey];

    if(nextBreakpoint) {
      if( query !== "") {
        query += " and ";
      }

      query += `(max-width: ${nextBreakpoint - 1}px)`;
    }
  }

  if (additionalQuery !== "") {
    if (query !== "") {
      additionalQuery = ` and ${additionalQuery}`;
    }

    query += additionalQuery;
  }

  if (query === "" || (size === 0 && inheritBreakpoint === 0 && additionalQuery === "")) {
    return;
  }

  return query;
}
