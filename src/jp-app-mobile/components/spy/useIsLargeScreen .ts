import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

const WIDTH = 640;

const useIsLargeScreen = (): boolean => {
  const { width } = useWindowDimensions();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(width > WIDTH);

  useEffect(() => {
    setIsLargeScreen(width > WIDTH);
  }, [width]);

  return isLargeScreen;
};

export default useIsLargeScreen;