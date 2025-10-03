interface ILinkData {
  id: string;
  url: string;
  platform: string;
  img: string;
}

interface ILinkItem {
  id: string;
  url: string;
  platform: string;
  img: string;
}

interface ILinkForm {
  links: ILinkItem[];
}

interface LinkInputProps {
  id: string;
  index: number;
  register: UseFormRegisterReturn;
  error?: string;
  onPlatformChange: (platfrom: string, img: string) => void;
}

interface IPlatformDropDownProps {
  chosenPlatform: {
    name: string;
    img: string;
    placeholder: string;
  };
  setChosenPlatform: React.Dispatch<
    React.SetStateAction<{
      name: string;
      img: string;
      placeholder: string;
    }>
  >;
  onPlatformChange: (platfrom: string, img: string) => void;
}
