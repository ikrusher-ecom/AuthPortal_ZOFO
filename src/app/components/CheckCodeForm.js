"use client";
import { useState } from 'react';

export default function CheckCodeForm() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState("transparent");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null); // Reset message

    try {
      const response = await fetch('/api/check-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Success! Code is valid.');
        setMessageColor("green");
      } else {
        setMessage(data.message || 'An error occurred.');
        setMessageColor("red");
      }
    } catch (error) {
      setMessage('Failed to submit code.');
      setMessageColor("red");
      console.error(error.message);
    }
  }

  return (
    <div>
      <form className="codeForm" onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code here"
          required
        />
        <button className="submitBtn" type="submit">Submit</button>
      </form>
      {message && <p className={["message", messageColor === "red" ? "redColor" : "greenColor"].filter(Boolean).join(" ")}>{message}</p>}
    </div>
  );
}
