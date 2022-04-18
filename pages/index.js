import React from 'react';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const { API_URL } = publicRuntimeConfig;

export default () => (
  <div>
    <h1>Home page (API_URL: {API_URL})</h1>
<h1> This is my first CI&CD </h1>
<h1> CICD on kubernetes</h1>


<!DOCTYPE html>
<html>
<body>

<h2>The href Attribute</h2>

<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>

<a href="https://www.w3schools.com">Visit W3Schools</a>

</body>
</html>




  </div>
);
