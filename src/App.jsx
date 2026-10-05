import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** Detailed information about the selected puppy */
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Puppy Details</h2>
          <p>Select a puppy to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedPuppy.name}</h2>
        <p>
          {selectedPuppy.name} is age {selectedPuppy.age}.
        </p>
        {selectedPuppy.isCute && <p>{selectedPuppy.name} is very cute!</p>}
        <address>{selectedPuppy.email}</address>
      </section>
    );
  }

  /** List of puppies that a user can select from */
  function Roster() {
    return (
      <section className="episodes">
        <h2>Roster</h2>
        <ul className="episodes">
          {puppies.map((puppy) => (
            <li key={puppy.id} onClick={() => setSelectedPuppy(puppy)}>
              {puppy.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Puppy Pals</h1>
      </header>
      <main>
        <Roster />
        <PuppyDetails />
      </main>
    </>
  );
}
