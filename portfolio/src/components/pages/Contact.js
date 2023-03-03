import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        <li>Email - walleric23@gmail.com</li>
        <li>Github - walleric23</li>
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" email="email" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
