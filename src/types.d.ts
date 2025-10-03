interface ILinkData {
  id: string;
  url: string;
  platform: string;
  img: string;
}

interface ILinkItem {
  url: string;
}

interface ILinkForm {
  links: ILinkItem[];
}

interface LinkInputProps {
  id: string;
  index: number;
  chosenPlatform: { name: string; img: string; placeholder: string };
  setChosenPlatform: React.Dispatch<
    React.SetStateAction<{
      name: string;
      img: string;
      placeholder: string;
    }>
  >;
  register: UseFormRegisterReturn;
  error?: string;
  value: string;
  setLinkData: React.Dispatch<React.SetStateAction<ILinkData[]>>;
}
