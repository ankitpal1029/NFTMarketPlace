import { useEffect, useRef } from "react";
import Message from "./message/message";
import "./messages.css";

interface IMessageFormat {
  user: string;
  text: string;
}

const Messages = ({
  messages,
  name,
}: {
  messages: IMessageFormat[];
  name: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current != null) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  });
  return (
    <div className="w-screen h-56 overflow-y-auto">
      {messages.map((msg, i) => (
        <div key={i}>
          <Message message={msg} name={name} />
        </div>
      ))}
      <div ref={divRef}></div>
    </div>
  );
};

export default Messages;
