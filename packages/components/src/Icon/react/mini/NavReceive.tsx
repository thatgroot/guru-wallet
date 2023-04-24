import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgNavReceive = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="currentColor"
    accessibilityRole="image"
    {...props}
  >
    <Path d="M11.23 7.29V3.283c0-.427.34-.782.77-.782.385 0 .711.298.763.677l.007.104v4.01h4.78c2.38 0 4.335 1.949 4.445 4.38l.005.215v5.04c0 2.447-1.887 4.456-4.232 4.569l-.208.005H6.44c-2.38 0-4.326-1.94-4.435-4.379L2 16.905v-5.03c0-2.447 1.878-4.466 4.222-4.58l.208-.004h4.8v6.402l-1.6-1.652a.755.755 0 0 0-1.09 0 .81.81 0 0 0-.22.568c0 .157.045.32.14.459l.08.099 2.91 3.015c.14.155.34.237.55.237a.735.735 0 0 0 .465-.166l.075-.071 2.91-3.015c.3-.31.3-.816 0-1.126a.755.755 0 0 0-1.004-.077l-.086.077-1.59 1.652V7.291h-1.54Z" />
  </Svg>
);

export default SvgNavReceive;
