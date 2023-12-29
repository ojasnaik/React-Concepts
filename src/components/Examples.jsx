
import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";

export default function () {
  const [example, setSelectedExample] = useState();

  function handleSelect(selected) {
    setSelectedExample(selected);
    console.log(selected);
  }

  let tabContent = <div>Please Select a Button</div>;
  if (example) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[example].title}</h3>
        <p>{EXAMPLES[example].description}</p>
        <pre>
          <code>{EXAMPLES[example].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={example === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={example === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={example === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={example === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
