# Tremor Dashboard Web App
- Design: [link](https://demos.creative-tim.com/nextjs-material-dashboard-pro/dashboards/analytics)
- Requirements and Estimate: [link](https://docs.google.com/document/d/1Qiz9K69akpvoF_JJfTmk8pMrpDvHDYRFWhENPoXS2f0/edit?usp=sharing)

## Prerequisite

- [Node](https://nodejs.org/): 18.14.x
- [Pnpm](https://pnpm.io/)

## Install app

1. Pull code from the repo.
2. Install the dependencies:

```bash
pnpm i
```

## Integrate with your tools
- [Set up project integrations](https://gitlab.asoft-python.com/van.nguyenthi/tremor-dashboard/-/settings/integrations)

## Collaborate with your team
- [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### How to build app

1. To build the app:

  ```bash
  pnpm run build
  ```

2. To start the build on local:

  ```bash
  pnpm start
  ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### How to run Storybook

1. Start Storybook
  
  ```bash
  pnpm run storybook
  ```

2. Build Storybook

  ```bash
  pnpm run build-storybook
  ```