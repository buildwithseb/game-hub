import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (text: string) => void;
}


const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={(text)=>onSearch(text)}/>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
