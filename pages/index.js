import React from 'react';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const { API_URL } = publicRuntimeConfig;

export default () => (
  <div>
    <h1>Home page (API_URL: {API_URL})</h1>
<h1> This is my first CI&CD </h1>
<h1> CICD on kubernetes my cicd does not work properly please help me out</h1>
<h1> We are in devops training session  </h1>
<h1> lftechnology.com.np </h1>
<h2> Devops Engineer </h2>
  </div>
);
