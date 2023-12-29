import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data-with-examples";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      {/*<img src={reactImg} alt="Core Concepts"/>*/}
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            {...conceptItem}
          />
        ))}
      </ul>
    </section>
  );
}
