import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle";
import EventsWithPoster from "./EventsWithPoster";
import PastEvents from "./PastEvents";

function EventsPage({ events = "upcoming" }) {
  return (
    <>
      {events === "upcoming" ? (
        <>
          <SectionTitle command="ls">events/</SectionTitle>
          <EventsWithPoster />
        </>
      ) : (
        <>
          <SectionTitle command="ls">events/past/</SectionTitle>
          <PastEvents />
        </>
      )}
    </>
  );
}

EventsPage.propTypes = {
  events: PropTypes.string,
};

export default EventsPage;
