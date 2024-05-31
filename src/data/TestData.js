import data from "./themepacks-and-channel-data.json";
// import testIMG from "./primetime-data/AE.png";

const testData = data;
//component to test that data was entered correctly. remove this componennt on final submission
function TestData() {
    console.log(testData);
    // console.log(testData.channels[0].featured_show.poster);
    return (
        <>
            <h1>{testData.themepack_name}</h1>
            {/* <img src={testIMG} /> */}
            <ul>
                {testData[0].channels.map((item) => {
                    return (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.logo}></img>
                        {/* <p>{item.feature_show.title}</p> */}
                        {/* <img src={item.feature_show.poster}></img> */}
                    </li>
                );
            }
            )}
            </ul>
        </>
    );
}

export default TestData;
