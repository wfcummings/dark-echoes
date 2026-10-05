import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** Detailed information about the selected Episode */
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select a Episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}.</h3>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  /** List of puppies that a user can select from */
  function Roster() {
    return (
      <section className="episodes">
        <h2>Roster</h2>
        <ul className="episodes">
          {episodes.map((Episode) => (
            <li key={Episode.id} onClick={() => setSelectedEpisode(Episode)}>
              {Episode.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Episode Pals</h1>
      </header>
      <main>
        <Roster />
        <EpisodeDetails />
      </main>
    </>
  );
}
