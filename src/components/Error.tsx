import fail from "../images/expired.svg";
import { Button, TryAgain } from "../myStyles";

type Props = {
  getData?:
    | (() => Promise<void>)
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void);
};

const Error = ({ getData }: Props) => {
  return (
    <>
      <TryAgain>
        <img src={fail} alt="error" />
        <p>Network Error</p>
        <Button onClick={getData}>Try again</Button>
      </TryAgain>
    </>
  );
};

export default Error;
