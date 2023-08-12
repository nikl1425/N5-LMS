import { Image, Box } from '@chakra-ui/react';
import { FC } from 'react';
import logo from '../assets/logo.png';


interface LogoProps {
  size: string,
  src?: string
}

const Logo: FC<LogoProps> = (props) => {
  return <Box boxSize={props.size}>
    <Image src={props.src ? props.src : logo} />
  </Box>;
};


export default Logo;