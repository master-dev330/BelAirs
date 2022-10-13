import TopSlider from "./TopSlider";
import Search from "./Search";
import EventGroup from "./EventGroup";

const Home = ({events}) => {
  return (
    <div className="container">
      <TopSlider />
      <Search />
      {
        Object.keys(events).map((k,i) => (
          <EventGroup key={i} dateRange={k} events={events[k]} />
        ))
      }
    </div>
  );
}

export default Home;
