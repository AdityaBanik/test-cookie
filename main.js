import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
async function getQr(){
	const response = await fetch(`https://octopus-app-6hedy.ondigitalocean.app/api/v1/auth/2fa/generate-secret`, {
            method: 'GET',
            credentials: 'include',
            
        });

		const data = await response.json()
		console.log(data)
		return data
}
async function login(email, password) {
  try {
    const response = await fetch(`https://octopus-app-6hedy.ondigitalocean.app/api/v1/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login successful:', data);
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}

document.getElementById('btn').addEventListener('click', async () => {

  await login('xyz22@example.com', 'Tesattest0#');
})

document.getElementById('btn-qr').addEventListener('click', async () => {

  await getQr();
})


setupCounter(document.querySelector('#counter'))
