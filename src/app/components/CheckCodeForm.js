/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function CheckCodeForm() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState("transparent");
  const [count, setCount] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    setCount(null);

    try {
      const response = await fetch("/api/check-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      });

      const data = await response.json();
      console.log("data", data);

      if (response.ok) {
        setMessage("The security code you inquired about is correct.");
        setMessageColor("green");
        setCount(data.data.count);
      } else {
        setMessage(
          "The security code you inquired about is error." || data.message
        );
        setMessageColor("red");
      }
    } catch (error) {
      setMessage("Failed to submit code.");
      setMessageColor("red");
      console.error(error.message);
    }
  }

  return (
    <div className="formDiv">
      <form className="codeForm" onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter security code here"
          required
        />
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
      {message && (
        <div className="msgDiv">
          <img
            alt="zofo message"
            width="60"
            height="60"
            src={
              messageColor === "red"
                ? "https://cdn.shopify.com/s/files/1/0646/4133/5465/files/error-icon.png?v=1733529782"
                : "https://cdn.shopify.com/s/files/1/0646/4133/5465/files/success-icon.png?v=1733529782"
            }
          />
          <p
            className={[
              "message",
              messageColor === "red" ? "redColor" : "greenColor",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {message}
          </p>
          {messageColor === "green" && (
            <p>
              The code has been checked {count + 1} time{count > 1 ? "s" : ""}.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
