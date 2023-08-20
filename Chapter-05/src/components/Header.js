const Title = () => (
  <a href="/">
    <img
      alt="Tasty Delights Logo"
      className="logo"
      src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/243074583_280245397287740_7524579202904818768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ibA-3TtEjBsAX9ru3Ny&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfAGXxnb5fpdWc9lZQD69DNVuhG36MBDbLoqnb8iROKGcQ&oe=64C2EE90"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
