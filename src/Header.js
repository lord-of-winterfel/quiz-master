function Header({iconUrl, topic}) {
  console.log("imageUrl--", iconUrl);
  console.log("topic--", topic);
  return (
    <header className='app-header' style={{siaplay:"flex", justifyContent:"center"}}>
      <img src={iconUrl} alt={topic} />
      {/* <h1>The {topic} Quiz</h1> */}
    </header>
  );
}

export default Header;
