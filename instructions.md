# Local Development Instructions

## Starting the Development Server

First, install dependencies (only needed once):

```bash
npm install
```

Then start the development server:

```bash
npm start
```

This will:
- Start a local HTTP server on port 3000
- Disable caching to always serve fresh content
- Navigate to `http://localhost:3000` in your browser to view the documentation

## Alternative: Direct Command

If you prefer not to install dependencies, you can run the server directly:

```bash
npx http-server -p 3000 -c-1
```

Then manually navigate to `http://localhost:3000` in your browser.

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running to stop it.

## Clearing Browser Cache

### Quick Method: Hard Refresh
If you still see old content, perform a hard refresh in your browser:
- **Mac:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + Shift + F5` or `Ctrl + Shift + R`

### Complete Cache Clear (Chrome)
1. Open Chrome DevTools: `Cmd + Option + I` (Mac) or `F12` (Windows/Linux)
2. Right-click the refresh button in the browser toolbar
3. Select "Empty Cache and Hard Reload"

### Complete Cache Clear (Firefox)
1. Open Developer Tools: `Cmd + Option + I` (Mac) or `F12` (Windows/Linux)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### Manual Cache Clear (Any Browser)
1. Go to browser settings
2. Find "Clear browsing data" or "Clear cache"
3. Select "Cached images and files"
4. Clear cache for "All time" or specific site

## Note on Caching

The `-c-1` flag disables caching, ensuring you always see the latest changes after the initial cache clear.
