import { useCallback, useEffect } from "react";

export enum KeyPress {
  ESCAPE = "Escape",
}

export const useKeyControllers = (
  pressedKey: KeyPress,
  onPress: () => void
) => {
  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      if (key === pressedKey) onPress();
    },
    [pressedKey, onPress]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
};
