// components/ContactCard.js
import './ContactCard.css';

const ContactCard = ({ phone }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <p>Contact</p>
        </div>
        <div className="card-back">
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
