import { ChangeEvent, FC, useState } from 'react';
import { Button, Switch, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeToggler: FC = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [s, setV] = useState(false);

  const onToggle = (v: ChangeEvent) => {
    console.log(v);
    setV(!s);
  };


  return (
    <>
    {/* Toggle {colorMode === 'light' ? 'Dark' : 'Light'} */}
    <Switch value='false' isChecked={s} onChange={onToggle}/>
    
    </>
    // <Button onClick={toggleColorMode}>
      
    // </Button>
  );
};

export default ColorModeToggler;
