import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import Heading from "../ui/Heading";
import styled from "styled-components";

const Day = styled.p`
  font-weight: 400;
`;
const Hour = styled.p`
  font-weight: 800;
`;
const DaySection = styled.div`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Days = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  width: 70%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <Div>
      <Heading as="h1">Open hours</Heading>
      <Days>
        <DaySection>
          <Day>Monday</Day>
          <Hour>12-24</Hour>
        </DaySection>
        <DaySection>
          <Day>Tuesday</Day>
          <Hour>12-24</Hour>
        </DaySection>
        <DaySection>
          <Day>Wendsday</Day>
          <Hour>12-24</Hour>
        </DaySection>
        <DaySection>
          <Day>Thursday</Day>
          <Hour>12-24</Hour>
        </DaySection>
        <DaySection>
          <Day>Friday</Day>

          <Hour>10-24</Hour>
        </DaySection>
        <DaySection>
          <Day>Saturday</Day>

          <Hour>10-24</Hour>
        </DaySection>
        <DaySection>
          <Day>Sunday</Day>
          <Hour>10-24</Hour>
        </DaySection>
      </Days>
      <Heading as="h1">You sure about address?</Heading>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </Div>
  );
}

export default Contact;
