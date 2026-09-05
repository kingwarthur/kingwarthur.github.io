# WilliamDanialArthur.me (WDA.me)
## Early-2000s Web Portal Portfolio

An authentic, bespoke 2002 Nick.com-inspired personal portfolio designed for **William Danial Arthur** showcasing:
- 🎮 **Games** (Godot, Unity, WebGL, itch.io)
- 📱 **Mobile Apps** (iOS TestFlight, Android APKs, React Native, Swift)
- 💻 **Web & Software** (Full-stack, Web Audio API, Canvas, TypeScript)
- 🖨️ **3D Print Lab** (Fusion 360, Bambu Lab, STL downloads)
- 🎵 **Music & Audio** (Ableton Live, acoustic guitar, sound design, audio previews)

---

## 🚀 Quick Local Preview

To preview the website locally on your machine:

```powershell
python -m http.server 8000
```
Then open your browser to: **http://localhost:8000**

---

## 🛠️ How to Add / Edit Projects

All projects are organized cleanly in [`script.js`](file:///c:/Users/carcr/Documents/antigravity/excited-hawking/script.js). To add or change a project, simply update the `PROJECTS_DATA` array:

```javascript
{
  id: "game-1",
  category: "games", // "games", "mobile", "software", "3d", or "music"
  categoryLabel: "Games",
  categoryClass: "strip-games",
  title: "Your Game Title",
  desc: "1-2 sentence description of what makes it cool.",
  tags: ["Godot", "C#", "Blender"],
  image: "path/to/screenshot.png",
  actionLabel: "Play Now!",
  liveUrl: "https://your-game-link.com",
  codeUrl: "https://github.com/your-repo"
}
```

---

## 🌐 Deploying to GitHub Pages (`williamdanialarthur.me`)

1. **Commit and push this folder to your GitHub repository:**
   ```powershell
   git add .
   git commit -m "Initial 2002 portal portfolio release"
   git push origin main
   ```

2. **Verify GitHub Pages:**
   * Go to your repository on GitHub: **Settings > Pages**.
   * Under **Build and deployment**, ensure Source is set to **Deploy from a branch** (`main` / `/root`).
   * Verify **Custom domain** displays `williamdanialarthur.me` (the `CNAME` file in the repo handles this automatically).
   * Check **Enforce HTTPS**.

3. **Namecheap DNS Settings:**
   * In your Namecheap Dashboard, navigate to **Domain List > Manage > Advanced DNS**.
   * Add 4 **A Records** for `@` pointing to:
     * `185.199.108.153`
     * `185.199.109.153`
     * `185.199.110.153`
     * `185.199.111.153`
   * Add 1 **CNAME Record** for `www` pointing to:
     * `<your-github-username>.github.io.`
