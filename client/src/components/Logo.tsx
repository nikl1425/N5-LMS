import { Image, Box } from "@chakra-ui/react";
import { FC } from "react";
import logo from '../assets/logo.png';


interface LogoProps {
  size: string,
  src?: string
}

const Logo: FC<LogoProps> = (props) => {
  let { size, src } = props;

  if(src === undefined) src = logo 

  return <Box boxSize={size}>
    <Image src={src} />
  </Box>;
};


export default Logo;