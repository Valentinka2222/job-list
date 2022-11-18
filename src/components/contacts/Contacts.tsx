import { ContactsProps} from '../../types';

const Contacts: React.FC<ContactsProps> = ({ address, phone, email, name }) => {
  return (
    <div className="contacts__info ">
      <span className="flex">Depatment name.</span>
      <span> {name}.</span>
      <div className="flex flex-col text-lg">
        <div>
          <i className="fa fa-map-marker text-lg" />
          <span> {address}.</span>
        </div>
        <span> {phone},</span>
        <span> {email}</span>
      </div>
    </div>
  );
};
export default Contacts;
