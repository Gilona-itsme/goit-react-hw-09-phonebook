//import { ImSpinner } from "react-icons/im";
import Loader from 'react-loader-spinner';

export default function MoviesLoading() {
  return (
    <Loader
      role="alert"
      type="Circles"
      color="#9982af"
      width={10}
      height={10}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '5px',
      }}
    />
  );
}
