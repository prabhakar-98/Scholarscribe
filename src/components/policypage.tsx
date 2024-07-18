import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from './footer';
import DarkMode from './dmprovider';
interface PolicyPageProps {
  title: string;
  content: React.ReactNode;
}


const PolicyPage: React.FC<PolicyPageProps> = ({ title, content }) => {
  const navigate = useNavigate();

const handleGoBack = () => {
  navigate("/", { state: { skipIntro: true } });
  setTimeout(() => {
    navigate("/", { state: { skipIntro: false } });
  }, 100); // Adjust this delay as needed
};
  return (
    <>
    <DarkMode/>
    <div className="policy-page">
      <button className="close-button" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1 className="policy-page-title">{title}</h1>
      <div className="policy-page-content">
        {content}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PolicyPage;
