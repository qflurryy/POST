const fetchGitHubJson = async (url) => {

  const rawUrl = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');

  try {
    const response = await fetch(rawUrl);
    
    if (!response.ok) throw new Error(`Status: ${response.status}`);

    const data = await response.json();
  
    console.log(data); 
  } catch (error) {
    console.error("err:", error.message);
  }
};

fetchGitHubJson('https://raw.githubusercontent.com/qflurryy/POST/refs/heads/main/amipretty.json');
