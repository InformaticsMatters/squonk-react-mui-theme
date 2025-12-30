/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: ["main", { name: "dev", channel: "dev", prerelease: "dev" }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "pnpm install --no-frozen-lockfile",
      },
    ],
    ["@semantic-release/npm", { npmPublish: true, provenance: true }],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          "chore: release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    [
      "@semantic-release/github",
      {
        releasedLabels: ["released"],
        failComment: false,
        successComment: false,
      },
    ],
  ],
};

export default config;
