import { useState } from "react";
import Button from "~/components/Button";
import Modal from "./Modal";
import Snippet from "./Snippet";

const SnippetWithModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Snippet title="initial and exit animation">
      <Button onClick={() => setIsOpen((c) => (c = !c))}>
        {!isOpen ? "Display square" : "Hidden square"}
      </Button>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <h2 style={{ textAlign: "center", color: "var(--theme-bg)" }}>Hello</h2>
      </Modal>
    </Snippet>
  );
};

export default SnippetWithModal;
