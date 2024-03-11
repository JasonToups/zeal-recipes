// Write the Procfile for Heroku deployment
const procfile = `web: yarn workspaces foreach -Apiv -j 2 run start`
fs.writeFileSync(path.join(__dirname, "build", "Procfile"), procfile)
