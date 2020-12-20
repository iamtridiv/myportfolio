import React from 'react';
import './App.css';


function Projects() {
  return (
    <div>
      <h1 className="heading1">Project Details</h1>
      <br />
      <h4>Symmetric and Asymmetric Key Cryptography</h4>
      <ul>
        <li>Developed and Implemented a data Cryptography algorithm that uses both Symmetric and Asymmetric
encryption and decryption methods for confidential data transfer from client to server.</li>
        <li>It uses RSA algorithm as public key cryptography.</li>
        <li>It uses a self made symmetric algorithm for encryption. (Made of combination of logic gates).</li>

      </ul>
      <br />
      <h4>Home Automation System using Raspberry Pi</h4>
      <ul>
        <li>Using Raspberry Pi, developed a Home Automation system based on image processing, Voice recognition.</li>
        <li>The main objective is to process the image and also recognize the voice and show the desired output.</li>
        <li>Finally, the model has been tested and shown the desired output.</li>
      </ul>
      <ul></ul>
      

    </div>
  );
}

export default Projects;
