/* eslint-disable react/jsx-key */
import styled from "styled-components";
import Heading from "../ui/Heading";
import Profile from "../ui/Profile";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 70%;
  }
`;
const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const P = styled.p`
  background-color: #ffffffcf;
  padding: 1rem 2rem;
  text-align: justify;
`;
const Container = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    display: flex;
  }
`;
function AboutUs() {
  const profiles = [
    {
      name: "John",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ullam. Quisquam ex voluptatibus maxime dignissimos tempore deleniti. Provident quidem sunt accusamus eos praesentium illum vel, qui ab totam asperiores vero!",
      photoUrl:
        "https://media.istockphoto.com/id/521573881/vector/unknown-person-silhouette-whith-tie.jpg?s=612x612&w=0&k=20&c=V9S3uOf99gGKjjHySFHHVr6aEcDiZyzLp5SNYhkjgDE=",
    },
    {
      name: "John",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ullam. Quisquam ex voluptatibus maxime dignissimos tempore deleniti. Provident quidem sunt accusamus eos praesentium illum vel, qui ab totam asperiores vero!",
      photoUrl:
        "https://media.istockphoto.com/id/521573881/vector/unknown-person-silhouette-whith-tie.jpg?s=612x612&w=0&k=20&c=V9S3uOf99gGKjjHySFHHVr6aEcDiZyzLp5SNYhkjgDE=",
    },
    {
      name: "John",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ullam. Quisquam ex voluptatibus maxime dignissimos tempore deleniti. Provident quidem sunt accusamus eos praesentium illum vel, qui ab totam asperiores vero!",
      photoUrl:
        "https://media.istockphoto.com/id/521573881/vector/unknown-person-silhouette-whith-tie.jpg?s=612x612&w=0&k=20&c=V9S3uOf99gGKjjHySFHHVr6aEcDiZyzLp5SNYhkjgDE=",
    },
  ];
  return (
    <Div>
      <Heading>Mission</Heading>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, numquam
        quaerat autem, explicabo, assumenda at in nulla aperiam sit aut quae
        cum! Laboriosam architecto reiciendis est deleniti autem corrupti
        aspernatur sequi cupiditate enim itaque saepe repellendus, tempore
        beatae ex facere ad a sed magnam pariatur dolorum quo alias assumenda
        quos? Distinctio voluptatem recusandae voluptatibus corrupti.
        Consequatur cupiditate repellat reiciendis impedit dicta quae. Deleniti
        laborum atque sequi, aut quia odit vero sunt recusandae sapiente soluta
        harum fugit veritatis quas tempore perferendis?
      </P>
      <Heading>Team</Heading>
      <ProfilesContainer>
        {profiles.map((person) => (
          <Container>
            <Profile
              key={person.name}
              name={person.name}
              description={person.description}
              photoUrl={person.photoUrl}
            />
          </Container>
        ))}
      </ProfilesContainer>
    </Div>
  );
}

export default AboutUs;
