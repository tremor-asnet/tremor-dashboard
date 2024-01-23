# Tremor Dashboard

Please refactor Datatable common component so that can be used in many places

```jsx
const DataTable = ({ data, columnsDef, ...other-config }) => {
    // Handle logics here

    // Please using Tremor Datatable component
    const renderTableHead = () => { ... }
    const renderTableBody = () => { ... }
    const renderTableFooter = () => { ... }

    return (<>
        {
            renderTableHead()
            renderTableBody()
            renderTableFooter()
        }
    </>);
}

/***************/
const ProductDataTable = ({ productData }) => {
    const productColumnsDef = [
        { ... }, // column 1
        { ... }, // column 2
        { ... }, // column n
    ];

    const otherConfigs = {.....};

    return <DataTable data={productData} columnsDef={productColumnsDef} {...otherConfigs} />
}
```

## Overview

- README: Could we organize command lines in a table? We need a tidy README file [Evernote link](https://www.evernote.com/shard/s511/sh/ce382942-6a2e-4a9d-ad05-d45c093049ff/cB86wRFV30q01gBbkdu3qlUrIO4Hxco97KnmjS9wlU7RA-s9TEbqZjC97A)
- We need `robots.txt` and `sitemap` from scratch as well.
- The number from mock data `230,900` should be number `230900` and we will write util to format it from Front-end.
- Cursor pointer on Link, clickable area, button, sidebar...
- Please check outline-focus while press `tab` keyboard. (imagine: using web without using mouse.)
- Please truncate test and apply [CSS defensive](https://defensivecss.dev/)
- There are lack of configuration next.config.js. Could you double check [next.config.js Options](https://nextjs.org/docs/app/api-reference/next-config-js?)
- What are difference between `actions/` and `services/`?
- `src/` is optional but it contains as `root` folder and wrap `app/` now. Did you check [Project structure](https://nextjs.org/docs/getting-started/project-structure)
- What are difference between `common.ts` and `commons.ts`?
- Which port to run Storybook locally?

## React Overview

- Type/interface naming still inconsistent
- Using useMemo, useCallback, checking rerender.
- Naming, please use apparent name: example: `isSwitchOn`?? it should be relevent to the action on the form instead of how UI display; `isRememberMe` is better.
- Please collect all images paths in a constant file, don't use everywhere
- Check props default value. Some is useless, some don't have
- Checkbox component shows warning 'onKeyPress' is deprecated.
- Theme is not good at all, colors and metrics are using everywhere in code. Folder 'themes' is empty now. Please split theme.
- Please apply code splitting.
- In file `getUserByEmail`, did you check length or valid data from response before interfering it? I can’t see return users[0] without checking length.
- Why do we need `SidebarContextProvider`?
- In SignInForm, why do we need these variables? isEmailError, isPasswordError? We need to based on emailErrorMessage or passwordErrorMessage, right?
- Why do we need to dispatch in SignInForm? Please build it on context.

## Next.js Overview

- I can’t see `Error` and `Loading` for each page
- How about code splitting? `Suspense` and `Lazy load`?
- Did you check data-cache for `actions/`?

## Style config

- Theming for `dark` + `light`
- Splitting theme into small files
- How can we switch theme with this code `bg-[linear-gradient(195deg,#42424A,#191919)]`?

## Storybook

- Please correct + Code snippet + document for Components
  - Missing docs /snippet of code for Loading Indicator
  - Some component docs are showing incorrectly
- Do we need folder src/story/


## Components

- `<Checkbox />`

    - onKeyPress? autoFocus?
    - `id`, `checked`, `onChange`… already in `{...props}`

- `<ProfileInfo />`
    - Naming:
        - `isOnHeader` ⇒ Should be `size`
        - `info` ⇒ should be `role`
        - `src` ⇒ should be `avatarUrl`
    - Missing storybook
    - Please refactor

        ```html
        {isOnHeader ? (
          <Avatar
            alt="Avatar medium"
            className="shadow-lg"
            height={74}
            priority
            src={src}
            width={74}
          />
        ) : (
          <Avatar
            alt="Avatar medium"
            className="shadow-md"
            height={48}
            priority
            src={src}
            width={48}
          />
        )}
        ```

    - Please refactor

        ```html
        {isOnHeader ? (
          <div className="ml-6" data-testid="profile-info-lg">
            <Title className="font-semibold text-xl">{name}</Title>
            <Text>{info}</Text>
          </div>
        ) : (
          <div className="ml-4" data-testid="profile-info-md">
            <Title className="font-semibold">{name}</Title>
            <Text className="text-xs font-light truncate max-w-[165px]">
              {info}
            </Text>
          </div>
        )}
        ```

- `<BreadCrumb />`

    - Please rename into: **Breadcrumb**
    - `pathname` should be come from props
    - Don’t handle logic inside component
    - Please using constant for name
    - Why did we use <div aria-hidden=“true”, could you use SEMANTIC HTML correctly?
    - Regarding links, why didn’t use object instead? Same issue for pageName

- `<ConverstionItem />`

    - What is `src`?
    - `alt` for avatar should be name of person
    - `name` ?? Please update
    - `description` ?? ⇒ `LastConversation`

- `<ProfileConversation />`

    - Should be `UserConversationHistory`. Conversation is not relative to the profile
    - `profileList` ⇒ conversations
    - `onClick` ⇒ Please remove unused props

- `<DashboardHeader />`

    - Please rearrange, this is not common component. This is for Dashboard layout and should be in the Dashboard
    - Too much logic + duplicate code

- `<Input />`

    - This is more complicate than an input. Should rename to FormInput or FormTextControl or sth similar.
    - Btw, the classname is a nightmare. Please use tailwind `@apply`

- `<PlatformSetting />`

    - Please rearrange, this is not common component.
    - ACCOUNT_SWITCH, APPLICATION_SWITCH: check naming here.
    - `title`? meaningless
    - Missing test

- `<ContactCard />`

    - `title`? meaningless
    - SOCIAL_LINK? this one is not constant. Please pulling from API

- `<ProfileConversation />`

    - `title`? meaningless
    - ProfileConversation rename to **ConversationHistory**
    - `key={[profile.name](http://profile.name/)}` → It’s totally wrong. Please using `id` from API

- `<ProfileInfo />`

    - `isOnHeader` why I need to know where it be placed? Please find other ways!
    - `src`? meaningless
    - `const isProjectPage = ....` why I care this?
    - Duplicate code on condition

- `<ProfileProjectCard />`
    - Please find other name
    - Please check unused `<>`
    - ROUTES.HOME → Link of project is not a constant

- `<Sidebar />`

    - It’s a layout
    - Please split into smaller
    - Make link surrounder area clickable

- `<Tabs />`

    - Component is plural but filename is not. Please make both consistent.
    - Missing test + storybook
    - Please check unused `<>`

- `<Toast />`

    - `id="toast-success”` why id is a constant?
    - Split svg into a component like the other

- `<ProfileItem />`

    - Should be `ConversationItem`
    - `src` ⇒ `avatarUrl`
    - `alt` ⇒ get from user name
    - `name` ⇒ `userName`
    - `description` ⇒ `lastConversation`

- `<ProfileProjectCard />`

    - Missing storybook
    - Missing test
    - props name `links`  ?
    - using [Array.map](http://Array.map) for render <Avatar … />

- Image lazyload + fallback


## **Page Layout**

- Messy between tremor component example: <Flex /> + div className from tailwind
- Authentication
    - Page layout for form wrapper
- Dashboard
    - Create `layout.tsx` for `pages/profile/all-project`
    - Create `layout.tsx` for `pages/profile/profile-overview`
    - Create layouts for other pages
- Don’t forget modified the page title + metadata: [Routing: Pages and Layouts | Next.js (nextjs.org)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#modifying-head)
- Add Loading state into page (Spinner or skeleton) while fetching the API: [Routing: Loading UI and Streaming | Next.js (nextjs.org)](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states)
- Still missing error handling right? [Routing: Error Handling | Next.js (nextjs.org)](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
    - Please handle error correct 2 use cases: [in nested layout](https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-layouts) and [in root layout](https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-root-layouts)
- We don’t need sidebar-context (sidebarprovider). Sidebar is on layout and can be trigger within main page-dashboard layout.
