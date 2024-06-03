import data from "./themepacks-and-channel-data.json";

const testData = data;

// Component to test that data was entered correctly. Remove this component on final submission.
function TestData() {
  console.log(testData);
  return (
    <>
      <h1>{testData[0].themepack_name}</h1>
      <ul>
        {testData[0].channels.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.logo} alt={`${item.name} logo`} />
              <p>{item.featured_show.title}</p>
              <img
                src={item.featured_show.poster}
                alt={`${item.featured_show.title} poster`}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TestData;
