import './Profile.css';

// 子要素で分割代入をするときは{}を忘れない
const Profile = ({ name = 'John Doe', age = '??', country = 'Japan' }) => {
  return (
    <div className="profile">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
};

export default Profile;
