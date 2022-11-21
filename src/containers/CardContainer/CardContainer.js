import Card from "../../components/CardComponent/Card";
import "./CardContainer.css";

// A container to hold various cards dynamically
// Note: there are at most 5 cards per row
const CardContainer = ({ cards }) => (
  <div className="card-container">
    {cards.map((card) => {
      // adjust data format
      let cardIntents = card.intents + " Intents";
      let date = new Date(card.dateUpdated);
      let formateDate =
        date.toDateString() +
        " @ " +
        date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
      return (
        <Card
          key={card.id}
          originType={card.originType}
          title={card.name}
          subtitle={cardIntents}
          date={formateDate}
        />
      );
    })}
  </div>
);

export default CardContainer;
