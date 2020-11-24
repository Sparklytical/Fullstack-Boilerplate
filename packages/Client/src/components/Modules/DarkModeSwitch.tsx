import { IconButton, useColorMode } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";

export function DarkModeSwitch(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const Click = () => {
    toggleColorMode();
  };
  return (
    <div>
      <IconButton
        icon={colorMode === "dark" ? <BiSun /> : <BiMoon />}
        onClick={Click}
        aria-label="Theme Button"
      />
    </div>
  );
}
