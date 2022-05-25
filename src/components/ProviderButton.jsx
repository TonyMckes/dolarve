import Button from "components/Button";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import userSignInWithProvider from "services/userSignInWithProvider";

function ProviderButton({ provider, text }) {
  const navigate = useNavigate();

  const providers = {
    google: { icon: <BsGoogle />, instance: new GoogleAuthProvider() },
    facebook: { icon: <BsFacebook />, instance: new FacebookAuthProvider() },
    twitter: { icon: <BsTwitter />, instance: new TwitterAuthProvider() },
  };

  const handleClick = () => {
    userSignInWithProvider(providers[provider].instance)
      .then(() => navigate("/"))
      .catch(console.log);
  };

  return (
    <Button text={text} icon={providers[provider].icon} onClick={handleClick} />
  );
}

export default ProviderButton;
