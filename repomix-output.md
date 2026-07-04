This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  ISSUE_TEMPLATE/
    bug_report.md
    feature_request.md
  workflows/
    npm.yml
    stale.yml
  CODE_OF_CONDUCT.md
  COMMIT_CONVENTION.md
  CONTRIBUTING.md
  FUNDING.yml
  SUPPORT.md
public/
  favicon.ico
  manifest.json
src/
  assets/
    brand/
      logo.jsx
      sygnet.jsx
    images/
      avatars/
        1.jpg
        2.jpg
        3.jpg
        4.jpg
        5.jpg
        6.jpg
        7.jpg
        8.jpg
        9.jpg
      angular.jpg
      components.webp
      icons.webp
      react.jpg
      vue.jpg
  components/
    header/
      AppHeaderDropdown.jsx
      index.js
    AppBreadcrumb.jsx
    AppContent.jsx
    AppFooter.jsx
    AppHeader.jsx
    AppSidebar.jsx
    AppSidebarNav.jsx
    DocsComponents.jsx
    DocsExample.jsx
    DocsIcons.jsx
    DocsLink.jsx
    index.js
  layout/
    DefaultLayout.jsx
  scss/
    vendors/
      simplebar.scss
    examples.scss
    style.scss
  views/
    base/
      accordion/
        Accordion.jsx
      breadcrumbs/
        Breadcrumbs.jsx
      cards/
        Cards.jsx
      carousels/
        Carousels.jsx
      chip/
        Chip.jsx
      collapses/
        Collapses.jsx
      list-groups/
        ListGroups.jsx
      navs/
        Navs.jsx
      paginations/
        Paginations.jsx
      placeholders/
        Placeholders.jsx
      popovers/
        Popovers.jsx
      progress/
        Progress.jsx
      spinners/
        Spinners.jsx
      tables/
        Tables.jsx
      tabs/
        Tabs.jsx
      tooltips/
        Tooltips.jsx
      index.js
    buttons/
      button-groups/
        ButtonGroups.jsx
      buttons/
        Buttons.jsx
      dropdowns/
        Dropdowns.jsx
      index.js
    charts/
      Charts.jsx
    dashboard/
      Dashboard.jsx
      MainChart.jsx
    forms/
      checks-radios/
        ChecksRadios.jsx
      chip-input/
        ChipInput.jsx
      floating-labels/
        FloatingLabels.jsx
      form-control/
        FormControl.jsx
      input-group/
        InputGroup.jsx
      layout/
        Layout.jsx
      range/
        Range.jsx
      select/
        Select.jsx
      validation/
        Validation.jsx
    icons/
      brands/
        Brands.jsx
      coreui-icons/
        CoreUIIcons.jsx
      flags/
        Flags.jsx
      index.js
    notifications/
      alerts/
        Alerts.jsx
      badges/
        Badges.jsx
      modals/
        Modals.jsx
      toasts/
        Toasts.jsx
      index.js
    pages/
      login/
        Login.jsx
      page404/
        Page404.jsx
      page500/
        Page500.jsx
      register/
        Register.jsx
    theme/
      colors/
        Colors.jsx
      typography/
        Typography.jsx
    widgets/
      Widgets.jsx
      WidgetsBrand.jsx
      WidgetsDropdown.jsx
  _nav.jsx
  App.jsx
  index.jsx
  routes.js
  store.js
.browserslistrc
.cursorrules
.editorconfig
.gitattributes
.gitignore
.prettierignore
.prettierrc.js
ARCHITECTURE.md
DEVELOPMENT.md
eslint.config.mjs
index.html
LICENSE
package.json
README.md
vite.config.mjs
```

# Files

## File: .github/ISSUE_TEMPLATE/bug_report.md
````markdown
---
name: Bug report
about: Tell us about a bug you may have identified in CoreUI Free React Admin Template.
title: ''
labels: ''
assignees: ''

---

Before opening:

- [Search for duplicate or closed issues](https://github.com/coreui/coreui-free-react-admin-template/issues?utf8=%E2%9C%93&q=is%3Aissue)
- [Validate](https://html5.validator.nu/) any HTML to avoid common problems
- Read the [contributing guidelines](https://github.com/coreui/coreui-free-react-admin-template/blob/v4-dev/.github/CONTRIBUTING.md)

Bug reports must include:

- Operating system and version (Windows, macOS, Android, iOS)
- Browser and version (Chrome, Firefox, Safari, Microsoft Edge, Opera, Android Browser)
- A [reduced test case](https://css-tricks.com/reduced-test-cases/) or suggested fix using [CodePen](https://codepen.io/) or [JS Bin](https://jsbin.com/)
````

## File: .github/ISSUE_TEMPLATE/feature_request.md
````markdown
---
name: Feature request
about: Suggest an idea for a new feature in CoreUI Free React Admin Template.
title: ''
labels: feature
assignees: ''

---

Before opening:

- [Search for duplicate or closed issues](https://github.com/coreui/coreui-free-react-admin-template/issues?utf8=%E2%9C%93&q=is%3Aissue)
- Read the [contributing guidelines](https://github.com/coreui/coreui-free-react-admin-template/blob/main/.github/CONTRIBUTING.md)

Feature requests must include:

- As much detail as possible for what we should add and why it's important to Bootstrap
- Relevant links to prior art, screenshots, or live demos whenever possible
````

## File: .github/workflows/npm.yml
````yaml
name: NPM Installation

on:
  push:
    branches-ignore:
      - "dependabot/**"
  schedule:
  - cron: '0 0 * * *'

env:
  FORCE_COLOR: 2
  NODE: 16

jobs:
  build:
    strategy:
      matrix:
        platform: [ubuntu-latest, windows-latest]
        node-version: [16.x, 17.x, 18.x]
    runs-on: ${{ matrix.platform }}
    steps:
      - name: Clone repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.node-version }}

      - name: Install npm dependencies
        run: npm install

      - name: Run build
        run: npm run build
````

## File: .github/workflows/stale.yml
````yaml
# This workflow warns and then closes issues and PRs that have had no activity for a specified amount of time.
#
# You can adjust the behavior by modifying this file.
# For more information, see:
# https://github.com/actions/stale
name: Mark stale issues and pull requests

on:
  schedule:
  - cron: '15 14 * * *'

jobs:
  stale:

    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write

    steps:
    - uses: actions/stale@v3
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        stale-issue-message: 'This issue has been automatically marked as stale because it has not had recent activity. It will be closed if no further activity occurs. Thank you for your contributions'
        stale-pr-message: 'This PR has been automatically marked as stale because it has not had recent activity. It will be closed if no further activity occurs. Thank you for your contributions'
        stale-issue-label: 'no-issue-activity'
        stale-pr-label: 'no-pr-activity'
````

## File: .github/CODE_OF_CONDUCT.md
````markdown
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

## Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

## Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at . The project team will review and investigate all complaints, and will respond in a way that it deems appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4, available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
````

## File: .github/COMMIT_CONVENTION.md
````markdown
## Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/convention.md).

#### Examples

Appears under "Features" header, `compiler` subheader:

```
feat(compiler): add 'comments' option
```

Appears under "Bug Fixes" header, `sidebar` subheader, with a link to issue #28:

```
fix(sidebar): handle events on blur

close #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```
perf(core): improve vdom diffing by removing 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: feat(compiler): add 'comments' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

### Full Message Format

A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are `docs`, `chore`, `style`, `refactor`, and `test` for non-changelog related tasks.

### Scope

The scope could be anything specifying place of the commit change. For example `core`, `compiler`, `ssr`, `v-model`, `transition` etc...

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
````

## File: .github/CONTRIBUTING.md
````markdown
# Contributing to CoreUI

Looking to contribute something to CoreUI? **Here's how you can help.**

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing
patches and features.

## Using the issue tracker

The [issue tracker](https://github.com/coreui/coreui-free-react-admin-template/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** use the issue tracker for personal support requests.

* Please **do not** post comments consisting solely of "+1" or ":thumbsup:".
  Use [GitHub's "reactions" feature](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments)
  instead.

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

0. **Validate and lint your code** &mdash; to ensure your problem isn't caused by a simple error in your own code.

1. **Use the GitHub issue search** &mdash; check if the issue has already been reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test case](https://css-tricks.com/reduced-test-cases/) and a live example. [This JS Bin](http://jsbin.com/lefey/1/edit?html,output) is a helpful template.


A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome. Before opening a feature request, please take a
moment to find out whether your idea fits with the scope and aims of the
project. It's up to *you* to make a strong case to convince the project's
developers of the merits of this feature. Please provide as much detail
and context as possible.


## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/coreui-react.git
   # Navigate to the newly cloned directory
   cd coreui
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/coreui/coreui-react.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely to be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description against the `master` branch.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [MIT License](LICENSE).

### Semantic Git commit messages

Inspired by Sparkbox's awesome article on
[semantic commit messages](http://seesparkbox.com/foundry/semantic_commit_messages).
Please use following commit message format.

* chore (updating npm tasks etc; no production code change) -> ```git test -m 'chore: commit-message-here'```
* docs (changes to documentation) -> ```git commit -m 'docs: commit-message-here'```
* feat (new feature) -> ```git commit -m 'feat: commit-message-here'```
* fix (bug fix) -> ```git commit -m 'fix: commit-message-here'```
* refactor (refactoring production code) -> ```git commit -m 'refactor: commit-message-here'```
* style (formatting, missing semi colons, etc; no code change) -> ```git commit -m 'style: commit-message-here'```
* test (adding missing tests, refactoring tests; no production code change) -> ```git test -m 'refactor: commit-message-here'```

## Code guidelines

### HTML

[Adhere to the Code Guide.](http://codeguide.co/#html)

- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags).
- Use CDNs and HTTPS for third-party JS when possible. We don't use protocol-relative URLs in this case because they break when viewing the page locally via `file://`.
- Use [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes in documentation examples to promote accessibility.

### CSS

[Adhere to the Code Guide.](http://codeguide.co/#css)

- When feasible, default color palettes should comply with [WCAG color contrast guidelines](http://www.w3.org/TR/WCAG20/#visual-audio-contrast).
- Except in rare cases, don't remove default `:focus` styles (via e.g. `outline: none;`) without providing alternative styles. See [this A11Y Project post](http://a11yproject.com/posts/never-remove-css-outlines) for more details.

### JS

- No semicolons (in client-side JS)
- 2 spaces (no tabs)
- strict mode
- "Attractive"
- Don't use [jQuery event alias convenience methods](https://github.com/jquery/jquery/blob/master/src/event/alias.js) (such as `$().focus()`). Instead, use [`$().trigger(eventType, ...)`](http://api.jquery.com/trigger/) or [`$().on(eventType, ...)`](http://api.jquery.com/on/), depending on whether you're firing an event or listening for an event. (For example, `$().trigger('focus')` or `$().on('focus', function (event) { /* handle focus event */ })`) We do this to be compatible with custom builds of jQuery where the event aliases module has been excluded.

## License

By contributing your code, you agree to license your contribution under the [MIT License](LICENSE).
````

## File: .github/FUNDING.yml
````yaml
# These are supported funding model platforms

custom: "https://coreui.io/pricing?support=react"
open_collective: coreui
````

## File: .github/SUPPORT.md
````markdown
### Bug reports

See the [contributing guidelines](CONTRIBUTING.md) for sharing bug reports.

### How-to

For general troubleshooting or help getting started:

- Search or start a new discussion on [GitHub Discussions](https://github.com/coreui/coreui-free-react-admin-template/discussions).
````

## File: public/manifest.json
````json
{
  "short_name": "CoreUI-React",
  "name": "CoreUI-React sample",
  "icons": [
    {
      "src": "./assets/img/favicon.png",
      "sizes": "100x100",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
````

## File: src/components/header/index.js
````javascript
import AppHeaderDropdown from './AppHeaderDropdown'

export { AppHeaderDropdown }
````

## File: src/views/base/index.js
````javascript
import Breadcrumbs from './Breadcrumbs'
import Cards from './Cards'
import Carousels from './Carousels'
import Collapses from './Collapses'
import Dropdowns from './Dropdowns'
import Jumbotrons from './Jumbotrons'
import ListGroups from './ListGroups'
import Navbars from './Navbars'
import Navs from './Navs'
import Paginations from './Paginations'
import Popovers from './Popovers'
import ProgressBar from './ProgressBar'
import Tabs from './Tabs'
import Tooltips from './Tooltips'

export {
  Breadcrumbs,
  Cards,
  Carousels,
  Collapses,
  Dropdowns,
  Jumbotrons,
  ListGroups,
  Navbars,
  Navs,
  Popovers,
  ProgressBar,
  Tabs,
  Tooltips,
  Paginations,
}
````

## File: src/views/buttons/index.js
````javascript
import ButtonDropdowns from './ButtonDropdowns'
import ButtonGroups from './ButtonGroups'
import Buttons from './Buttons'

export { ButtonDropdowns, ButtonGroups, Buttons }
````

## File: src/views/icons/index.js
````javascript
import CoreUIIcons from './coreui-icons'
import Flags from './flags'
import Brands from './brands'

export { CoreUIIcons, Flags, Brands }
````

## File: src/views/notifications/index.js
````javascript
import Alerts from './Alerts'
import Badges from './Badges'
import Modals from './Modals'
import Toaster from './toasts'

export { Alerts, Badges, Modals, Toaster }
````

## File: .browserslistrc
````
# https://github.com/browserslist/browserslist#readme

[production]
>0.2%
not dead
not op_mini all

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version
````

## File: .editorconfig
````
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
````

## File: .gitattributes
````
# Enforce Unix newlines
* text=auto eol=lf
````

## File: .gitignore
````
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
/node_modules
package-lock.json
yarn.lock

# testing
/coverage

# production
/build

# misc
.eslintcache
.DS_Store
.idea
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
````

## File: src/assets/brand/logo.jsx
````javascript
export const logo = [
  '599 116',
  `<g>
    <g fill="none" fill-rule="nonzero">
      <g style="fill:#80d0ff;">
        <path d="m358.773 79.151-8.768-20.736a.25.25 0 0 0-.255-.191h-9.985a.226.226 0 0 0-.256.255v20.543a.566.566 0 0 1-.64.641h-1.216a.565.565 0 0 1-.64-.64v-43.52a.566.566 0 0 1 .64-.64h12.544a9.979 9.979 0 0 1 7.744 3.23 12.204 12.204 0 0 1 2.944 8.546 12.439 12.439 0 0 1-2.24 7.584 9.37 9.37 0 0 1-6.08 3.744c-.17.086-.214.191-.127.32l8.704 20.608.064.255c0 .342-.192.512-.576.512h-1.152a.703.703 0 0 1-.705-.51Zm-19.264-41.793v18.496a.226.226 0 0 0 .256.257h10.304a7.669 7.669 0 0 0 6.017-2.592 9.878 9.878 0 0 0 2.303-6.816 10.286 10.286 0 0 0-2.272-6.976 7.601 7.601 0 0 0-6.048-2.624h-10.304a.226.226 0 0 0-.256.255ZM398.082 37.102H378.05a.226.226 0 0 0-.256.256v18.496a.226.226 0 0 0 .256.257h13.824a.566.566 0 0 1 .64.64v.96a.566.566 0 0 1-.64.64H378.05a.226.226 0 0 0-.256.256v18.56a.226.226 0 0 0 .256.256h20.032a.567.567 0 0 1 .64.64v.96a.566.566 0 0 1-.64.64h-22.144a.566.566 0 0 1-.64-.64v-43.52a.566.566 0 0 1 .64-.64h22.144a.566.566 0 0 1 .64.64v.96a.566.566 0 0 1-.64.64ZM435.802 79.151l-2.431-8.832a.296.296 0 0 0-.32-.192h-16.768a.295.295 0 0 0-.32.192l-2.368 8.768a.658.658 0 0 1-.704.576h-1.216a.588.588 0 0 1-.48-.191.582.582 0 0 1-.096-.513l12.031-43.584a.644.644 0 0 1 .704-.512h1.6a.644.644 0 0 1 .704.512l12.16 43.584.065.192c0 .342-.214.512-.64.512h-1.217a.643.643 0 0 1-.704-.512ZM416.7 67.92a.303.303 0 0 0 .223.096h15.489a.304.304 0 0 0 .223-.096c.065-.065.075-.117.033-.16l-7.873-28.928c-.043-.085-.085-.128-.127-.128-.042 0-.086.043-.128.128l-7.872 28.928c-.043.043-.033.095.032.16ZM453.357 76.911a11.637 11.637 0 0 1-3.328-8.704V46.19a11.414 11.414 0 0 1 3.36-8.575 12.09 12.09 0 0 1 8.8-3.265 12.253 12.253 0 0 1 8.865 3.233 11.39 11.39 0 0 1 3.36 8.607v.64a.566.566 0 0 1-.641.641l-1.28.064c-.427 0-.64-.192-.64-.576v-.833a9.287 9.287 0 0 0-2.656-6.912 10.67 10.67 0 0 0-14.016 0 9.284 9.284 0 0 0-2.656 6.913v22.272a9.282 9.282 0 0 0 2.656 6.912 10.673 10.673 0 0 0 14.016 0 9.286 9.286 0 0 0 2.656-6.912v-.768c0-.384.213-.576.64-.575l1.28.063a.566.566 0 0 1 .64.64v.511a11.498 11.498 0 0 1-3.36 8.64 13.626 13.626 0 0 1-17.696 0v.001ZM511.193 35.503v.96a.565.565 0 0 1-.64.64H499.8a.226.226 0 0 0-.256.256v41.663a.566.566 0 0 1-.64.641h-1.216a.565.565 0 0 1-.64-.64V37.357a.227.227 0 0 0-.256-.255h-10.176a.565.565 0 0 1-.64-.64v-.96a.566.566 0 0 1 .64-.64h23.936a.566.566 0 0 1 .64.64ZM518.822 78.51a2.835 2.835 0 0 1-.8-2.047 2.923 2.923 0 0 1 .8-2.112c.544-.56 1.3-.862 2.08-.832a2.847 2.847 0 0 1 2.944 2.944c.03.78-.273 1.536-.832 2.08a2.921 2.921 0 0 1-2.112.8 2.754 2.754 0 0 1-2.08-.832ZM539.16 77.007a11.31 11.31 0 0 1-3.2-8.416v-5.44a.566.566 0 0 1 .64-.64h1.217a.567.567 0 0 1 .64.64v5.504a9.144 9.144 0 0 0 2.528 6.72 8.974 8.974 0 0 0 6.687 2.56 8.79 8.79 0 0 0 9.28-9.28V35.504a.565.565 0 0 1 .64-.64h1.217a.566.566 0 0 1 .64.64V68.59a11.252 11.252 0 0 1-3.233 8.416 13.062 13.062 0 0 1-17.055 0ZM577.106 77.102a10.482 10.482 0 0 1-3.36-8.127v-1.792a.565.565 0 0 1 .64-.64h1.088a.566.566 0 0 1 .64.64v1.6a8.544 8.544 0 0 0 2.752 6.655 10.536 10.536 0 0 0 7.36 2.496 9.876 9.876 0 0 0 6.976-2.367 8.215 8.215 0 0 0 2.56-6.336 8.397 8.397 0 0 0-1.12-4.416 11.383 11.383 0 0 0-3.328-3.392 71.626 71.626 0 0 0-6.176-3.712 71.302 71.302 0 0 1-6.24-3.84 12.174 12.174 0 0 1-3.424-3.68 10.257 10.257 0 0 1-1.28-5.345 9.86 9.86 0 0 1 3.072-7.744 12.012 12.012 0 0 1 8.32-2.752c3.796 0 6.783 1.035 8.96 3.105a10.823 10.823 0 0 1 3.264 8.224v1.6a.566.566 0 0 1-.64.64h-1.152a.565.565 0 0 1-.64-.64v-1.471a8.865 8.865 0 0 0-2.624-6.689 9.994 9.994 0 0 0-7.232-2.528 9.365 9.365 0 0 0-6.528 2.144 7.822 7.822 0 0 0-2.368 6.112 7.8 7.8 0 0 0 1.024 4.16 10.376 10.376 0 0 0 3.008 3.04 62.829 62.829 0 0 0 5.952 3.488 71.058 71.058 0 0 1 6.72 4.256 13.454 13.454 0 0 1 3.648 3.936 10.049 10.049 0 0 1 1.28 5.184 10.714 10.714 0 0 1-3.264 8.191c-2.175 2.05-5.12 3.073-8.832 3.073-3.798 0-6.817-1.024-9.057-3.073Z"/>
      </g>
      <g style="fill:currentColor;">
        <path d="m96.59 25.058-39-22.517a12 12 0 0 0-12 0l-39 22.517a12.034 12.034 0 0 0-6 10.392v45.033a12.033 12.033 0 0 0 6 10.393l39 22.516a12 12 0 0 0 12 0l39-22.516a12.033 12.033 0 0 0 6-10.393V35.45a12.034 12.034 0 0 0-6-10.392Zm-2 55.425a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0l-39-22.517a4 4 0 0 1-2-3.464V35.45a4 4 0 0 1 2-3.464l39-22.517a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464v45.033Z"/>
        <path d="M74.612 71.005h-2.866c-.673 0-1.335.17-1.925.493l-17.28 9.485L32.59 69.465V46.487L52.54 34.97l17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.712a2 2 0 0 0-1.04-1.754L56.383 27.952a8.039 8.039 0 0 0-7.842.09L28.59 39.56a8.025 8.025 0 0 0-4 6.929v22.976a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.087l19.19-10.53a2 2 0 0 0 1.038-1.754v-2.71a2 2 0 0 0-1.999-2Z"/>
        <g transform="translate(118 34)">
          <path d="M51.335.362c-8.28.009-14.99 6.719-15 15v17.277c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V15.36c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.36a7 7 0 0 1 14 0V32.64ZM14.67 8.421a7.01 7.01 0 0 1 7.867 6.075.99.99 0 0 0 .985.865h6.03a1.01 1.01 0 0 0 .998-1.097C29.945 6.14 22.971-.02 14.834.381 6.751.932.504 7.696.59 15.796v16.407C.503 40.305 6.752 47.068 14.835 47.62c8.137.401 15.11-5.76 15.716-13.884a1.01 1.01 0 0 0-.999-1.097h-6.03a.99.99 0 0 0-.984.865 7.01 7.01 0 0 1-7.868 6.075 7.164 7.164 0 0 1-6.08-7.184v-16.79a7.164 7.164 0 0 1 6.08-7.184ZM97.513 27.928a12.158 12.158 0 0 0 7.184-11.077v-3.702C104.697 6.44 99.257 1 92.547 1H75.59a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V29h6.621l7.916 17.414a1 1 0 0 0 .91.586h6.591a1 1 0 0 0 .91-1.414l-8.025-17.658Zm-.816-11.077A4.154 4.154 0 0 1 92.547 21h-9.85V9h9.85a4.154 4.154 0 0 1 4.15 4.15v3.7ZM139.59 1h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19V27h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13V9h19a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM177.59 1h-6a1 1 0 0 0-1 1v22.648a7.007 7.007 0 1 1-14 0V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.648a15.003 15.003 0 1 0 30 0V2a1 1 0 0 0-1-1Z"/>
          <rect width="8" height="38" x="186.59" y="1" rx="1"/>
        </g>
      </g>
    </g>
  </g>`,
]
````

## File: src/assets/brand/sygnet.jsx
````javascript
export const sygnet = [
  '102 115',
  `<g style="fill: currentColor">
    <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"/>
    <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"/>
  </g>`,
]
````

## File: src/components/header/AppHeaderDropdown.jsx
````javascript
import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
````

## File: src/components/AppFooter.jsx
````javascript
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ms-1">&copy; 2026 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
````

## File: src/components/AppHeader.jsx
````javascript
/**
 * AppHeader Component
 *
 * Main application header with navigation, theme switcher, and user menu.
 * Features include:
 * - Sidebar toggle button
 * - Primary navigation links
 * - Notification and action icons
 * - Theme switcher (light/dark/auto)
 * - User dropdown menu
 * - Breadcrumb navigation
 * - Sticky positioning with scroll shadow effect
 *
 * @component
 * @example
 * return (
 *   <AppHeader />
 * )
 */

import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

/**
 * AppHeader functional component
 *
 * Manages header UI including:
 * - Redux integration for sidebar state
 * - Theme management with CoreUI useColorModes hook
 * - Scroll-based shadow effect
 * - Responsive navigation
 *
 * @returns {React.ReactElement} Header component with navigation and controls
 */
const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink to="/dashboard" as={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
````

## File: src/components/AppSidebar.jsx
````javascript
/**
 * AppSidebar Component
 *
 * Collapsible navigation sidebar with branding, menu items, and toggle controls.
 *
 * Features:
 * - Redux-controlled visibility state
 * - Unfoldable/narrow mode for more screen space
 * - Brand logo with full and narrow variants
 * - Close button for mobile devices
 * - Footer with toggle button
 * - Dark color scheme
 * - Fixed positioning
 *
 * @component
 * @example
 * return (
 *   <AppSidebar />
 * )
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'

/**
 * AppSidebar functional component
 *
 * Manages sidebar state with Redux:
 * - sidebarShow: Controls sidebar visibility
 * - sidebarUnfoldable: Controls narrow/wide mode
 *
 * Renders navigation from _nav.js configuration file.
 * Memoized to prevent unnecessary re-renders.
 *
 * @returns {React.ReactElement} Sidebar with navigation
 */
const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
````

## File: src/components/AppSidebarNav.jsx
````javascript
import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto" size="sm">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink
            {...(rest.to && { as: NavLink })}
            {...(rest.href && { target: '_blank', rel: 'noopener noreferrer' })}
            {...rest}
          >
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const { component, name, icon, items, to, ...rest } = item
    const Component = component
    return (
      <Component compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
        {items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true),
        )}
      </Component>
    )
  }

  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </CSidebarNav>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
````

## File: src/components/DocsExample.jsx
````javascript
import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'

const DocsExample = (props) => {
  const { children, href, tabContentClassName } = props

  const _href = `https://coreui.io/react/docs/${href}`

  return (
    <div className="example">
      <CNav variant="underline-border">
        <CNavItem>
          <CNavLink href="#" active>
            <CIcon icon={cilMediaPlay} className="me-2" />
            Preview
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href={_href} target="_blank">
            <CIcon icon={cilCode} className="me-2" />
            Code
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className={`rounded-bottom ${tabContentClassName ? tabContentClassName : ''}`}>
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(DocsExample)
````

## File: src/components/DocsIcons.jsx
````javascript
import React from 'react'

import IconsImg from 'src/assets/images/icons.webp'

const DocsIcons = () => (
  <div className="bg-warning bg-opacity-10 border border-2 border-warning rounded mb-4">
    <div className="row d-flex align-items-center p-3 px-xl-4 flex-xl-nowrap">
      <div className="col-xl-auto col-12 d-none d-xl-block p-0">
        <img className="img-fluid" src={IconsImg} width="160px" height="160px" alt="CoreUI Icons" />
      </div>
      <div className="col-md col-12 px-lg-4">
        CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG,
        and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You
        can use them in your digital products for web or mobile app. For more information please
        visit our documentation.
      </div>
      <div className="col-md-auto col-12 mt-3 mt-lg-0">
        <a
          className="btn btn-warning text-nowrap text-white"
          href="https://coreui.io/react/docs/components/icon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Documentation
        </a>
      </div>
    </div>
  </div>
)

export default DocsIcons
````

## File: src/components/DocsLink.jsx
````javascript
import PropTypes from 'prop-types'
import React from 'react'
import { CLink } from '@coreui/react'

const DocsLink = (props) => {
  const { href, name, text, ...rest } = props

  const _href = name ? `https://coreui.io/react/docs/components/${name}` : href

  return (
    <div className="float-end">
      <CLink
        {...rest}
        href={_href}
        rel="noreferrer noopener"
        target="_blank"
        className="card-header-action"
      >
        <small className="text-body-secondary">{text || 'docs'}</small>
      </CLink>
    </div>
  )
}

DocsLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}

export default React.memo(DocsLink)
````

## File: src/components/index.js
````javascript
import AppBreadcrumb from './AppBreadcrumb'
import AppContent from './AppContent'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppHeaderDropdown from './header/AppHeaderDropdown'
import AppSidebar from './AppSidebar'
import DocsComponents from './DocsComponents'
import DocsIcons from './DocsIcons'
import DocsLink from './DocsLink'
import DocsExample from './DocsExample'

export {
  AppBreadcrumb,
  AppContent,
  AppFooter,
  AppHeader,
  AppHeaderDropdown,
  AppSidebar,
  DocsComponents,
  DocsIcons,
  DocsLink,
  DocsExample,
}
````

## File: src/layout/DefaultLayout.jsx
````javascript
/**
 * DefaultLayout Component
 *
 * Main application layout wrapper that composes the primary UI structure
 * for authenticated/protected routes.
 *
 * Layout structure:
 * - AppSidebar: Collapsible navigation sidebar
 * - AppHeader: Top navigation bar with user menu and theme switcher
 * - AppContent: Main content area with route rendering
 * - AppFooter: Footer with links and copyright
 *
 * This layout is used for all routes defined in routes.js, providing
 * a consistent structure across the application.
 *
 * @component
 * @example
 * // Used in App.js for protected routes
 * <Route path="*" element={<DefaultLayout />} />
 */

import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

/**
 * DefaultLayout functional component
 *
 * Renders the main application layout with:
 * - Fixed sidebar navigation
 * - Sticky header
 * - Flexible content area
 * - Footer at bottom
 *
 * Uses flexbox for proper content stretching and footer positioning.
 *
 * @returns {React.ReactElement} Complete application layout
 */
const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
````

## File: src/scss/vendors/simplebar.scss
````scss
.simplebar-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
````

## File: src/views/base/accordion/Accordion.jsx
````javascript
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/accordion/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Click the accordions below to expand/collapse the accordion content.
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>flush</code> to remove the default <code>background-color</code>, some
              borders, and some rounded corners to render accordions edge-to-edge with their parent
              container.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Always open</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>alwaysOpen</code> property to make accordion items stay open when another
              item is opened.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
````

## File: src/views/base/breadcrumbs/Breadcrumbs.jsx
````javascript
import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/breadcrumb/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Breadcrumb</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The breadcrumb navigation provides links back to each previous page the user navigated
              through and shows the current location in a website or an application. You don’t have
              to add separators, because they automatically added in CSS through{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
                {' '}
                <code>::before</code>
              </a>{' '}
              and{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
                {' '}
                <code>content</code>
              </a>
              .
            </p>
            <DocsExample href="components/breadcrumb">
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Library</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">Library</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Data</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink href="#">Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">Library</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink href="#">Data</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Bootstrap</CBreadcrumbItem>
              </CBreadcrumb>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
````

## File: src/views/base/cards/Cards.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/card/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Cards are built with as little markup and styles as possible but still manage to
              deliver a bunch of control and customization. Built with flexbox, they offer easy
              alignment and mix well with other CoreUI components. Cards have no top, left, and
              right margins by default, so use{' '}
              <a href="https://coreui.io/docs/utilities/spacing">spacing utilities</a> as needed.
              They have no fixed width to start, so they&#39;ll fill the full width of its parent.
            </p>
            <p className="text-body-secondary small">
              Below is an example of a basic card with mixed content and a fixed width. Cards have
              no fixed width to start, so they&#39;ll naturally fill the full width of its parent
              element.
            </p>
            <DocsExample href="components/card">
              <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card&#39;s content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The main block of a card is the <code>&lt;CCardBody&gt;</code>. Use it whenever you
              need a padded section within a card.
            </p>
            <DocsExample href="components/card/#body">
              <CCard>
                <CCardBody>This is some text within a card body.</CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Titles, text, and links</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Card titles are managed by <code>&lt;CCardTitle&gt;</code> component. Identically,
              links are attached and collected next to each other by <code>&lt;CCardLink&gt;</code>{' '}
              component.
            </p>
            <p className="text-body-secondary small">
              Subtitles are managed by <code>&lt;CCardSubtitle&gt;</code> component. If the{' '}
              <code>&lt;CCardTitle&gt;</code> also, the <code>&lt;CCardSubtitle&gt;</code> items are
              stored in a <code>&lt;CCardBody&gt;</code> item, the card title, and subtitle are
              arranged rightly.
            </p>
            <DocsExample href="components/card/#titles-text-and-links">
              <CCard style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardSubtitle className="mb-2 text-body-secondary">Card subtitle</CCardSubtitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card&#39;s content.
                  </CCardText>
                  <CCardLink href="#">Card link</CCardLink>
                  <CCardLink href="#">Another link</CCardLink>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Images</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              <code>.card-img-top</code> places a picture to the top of the card. With{' '}
              <code>.card-text</code>, text can be added to the card. Text within{' '}
              <code>.card-text</code> can additionally be styled with the regular HTML tags.
            </p>
            <DocsExample href="components/card/#images">
              <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card&#39;s content.
                  </CCardText>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>List groups</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create lists of content in a card with a flush list group.
            </p>
            <DocsExample href="components/card/#list-groups">
              <CRow>
                <CCol lg={4}>
                  <CCard>
                    <CListGroup flush>
                      <CListGroupItem>Cras justo odio</CListGroupItem>
                      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                      <CListGroupItem>Vestibulum at eros</CListGroupItem>
                    </CListGroup>
                  </CCard>
                </CCol>
                <CCol lg={4}>
                  <CCard>
                    <CCardHeader>Header</CCardHeader>
                    <CListGroup flush>
                      <CListGroupItem>Cras justo odio</CListGroupItem>
                      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                      <CListGroupItem>Vestibulum at eros</CListGroupItem>
                    </CListGroup>
                  </CCard>
                </CCol>
                <CCol lg={4}>
                  <CCard>
                    <CListGroup flush>
                      <CListGroupItem>Cras justo odio</CListGroupItem>
                      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                      <CListGroupItem>Vestibulum at eros</CListGroupItem>
                    </CListGroup>
                    <CCardFooter>Footer</CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Kitchen sink</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Combine and match many content types to build the card you need, or throw everything
              in there. Shown below are image styles, blocks, text styles, and a list group—all
              wrapped in a fixed-width card.
            </p>
            <DocsExample href="components/card/#kitchen-sink">
              <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card&#39;s content.
                  </CCardText>
                </CCardBody>
                <CListGroup flush>
                  <CListGroupItem>Cras justo odio</CListGroupItem>
                  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                  <CListGroupItem>Vestibulum at eros</CListGroupItem>
                </CListGroup>
                <CCardBody>
                  <CCardLink href="#">Card link</CCardLink>
                  <CCardLink href="#">Another link</CCardLink>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Header and footer</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add an optional header and/or footer within a card.
            </p>
            <DocsExample href="components/card/#header-and-footer">
              <CCard>
                <CCardHeader>Header</CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
            <p className="text-body-secondary small">
              Card headers can be styled by adding ex. <code>as=&#34;h5&#34;</code>.
            </p>
            <DocsExample href="components/card/#header-and-footer">
              <CCard>
                <CCardHeader as="h5">Header</CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
            <DocsExample href="components/card/#header-and-footer">
              <CCard>
                <CCardHeader>Quote</CCardHeader>
                <CCardBody>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                      a ante.
                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CCardBody>
              </CCard>
            </DocsExample>
            <DocsExample href="components/card/#header-and-footer">
              <CCard className="text-center">
                <CCardHeader>Header</CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
                <CCardFooter className="text-body-secondary">2 days ago</CCardFooter>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Cards assume no specific <code>width</code> to start, so they&#39;ll be 100% wide
              unless otherwise stated. You can adjust this as required with custom CSS, grid
              classes, grid Sass mixins, or services.
            </p>
            <h3>Using grid markup</h3>
            <p className="text-body-secondary small">
              Using the grid, wrap cards in columns and rows as needed.
            </p>
            <DocsExample href="components/card/#sizing">
              <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Special title treatment</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Special title treatment</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CCardText>
                      <CButton color="primary" href="#">
                        Go somewhere
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
            <h3>Using utilities</h3>
            <p className="text-body-secondary small">
              Use some of{' '}
              <a href="https://coreui.io/docs/utilities/sizing/">available sizing utilities</a> to
              rapidly set a card&#39;s width.
            </p>
            <DocsExample href="components/card/#sizing">
              <CCard className="w-75">
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
              <CCard className="w-50">
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
            <strong>Using custom CSS</strong>
            <p className="text-body-secondary small">
              Use custom CSS in your stylesheets or as inline styles to set a width.
            </p>
            <DocsExample href="components/card/#sizing">
              <CCard style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Text alignment</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can instantly change the text arrangement of any card—in its whole or specific
              parts—with{' '}
              <a href="https://coreui.io/docs/utilities/text/#text-alignment">text align classes</a>
              .
            </p>
            <DocsExample href="components/card/#text-alignment">
              <CCard style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
              <CCard className="text-center" style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
              <CCard className="text-end" style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Navigation</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add some navigation to a <code>&lt;CCardHeader&gt;</code> with our{' '}
              <code>&lt;CNav&gt;</code> component.
            </p>
            <DocsExample href="components/card/##navigation">
              <CCard className="text-center">
                <CCardHeader>
                  <CNav variant="tabs" className="card-header-tabs">
                    <CNavItem>
                      <CNavLink href="#" active>
                        Active
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#" disabled>
                        Disabled
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
            <DocsExample href="components/card/##navigation">
              <CCard className="text-center">
                <CCardHeader>
                  <CNav variant="pills" className="card-header-pills">
                    <CNavItem>
                      <CNavLink href="#" active>
                        Active
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#" disabled>
                        Disabled
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton color="primary" href="#">
                    Go somewhere
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Image caps</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Similar to headers and footers, cards can include top and bottom &#34;image
              caps&#34;—images at the top or bottom of a card.
            </p>
            <DocsExample href="components/card/#image-caps">
              <CRow>
                <CCol lg={6}>
                  <CCard className="mb-3">
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                      <CCardText>
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol lg={6}>
                  <CCard className="mb-3">
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                      <CCardText>
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                      </CCardText>
                    </CCardBody>
                    <CCardImage orientation="bottom" src={ReactImg} />
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Card styles</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Cards include various options for customizing their backgrounds, borders, and color.
            </p>
            <h3>Background and color</h3>
            <p className="text-body-secondary small">
              Use <code>color</code> property to change the appearance of a card.
            </p>
            <DocsExample href="components/card/#background-and-color">
              <CRow>
                {[
                  { color: 'primary', textColor: 'white' },
                  { color: 'secondary', textColor: 'white' },
                  { color: 'success', textColor: 'white' },
                  { color: 'danger', textColor: 'white' },
                  { color: 'warning' },
                  { color: 'info', textColor: 'white' },
                  { color: 'light' },
                  { color: 'dark', textColor: 'white' },
                ].map((item, index) => (
                  <CCol lg={4} key={index}>
                    <CCard color={item.color} textColor={item.textColor} className="mb-3">
                      <CCardHeader>Header</CCardHeader>
                      <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&#39;s content.
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </DocsExample>
            <h3>Border</h3>
            <p className="text-body-secondary small">
              Use <a href="https://coreui.io/docs/utilities/borders/">border utilities</a> to change
              just the <code>border-color</code> of a card. Note that you can set{' '}
              <code>textColor</code> property on the <code>&lt;CCard&gt;</code> or a subset of the
              card&#39;s contents as shown below.
            </p>
            <DocsExample href="components/card/#border">
              <CRow>
                {[
                  { color: 'primary', textColor: 'primary' },
                  { color: 'secondary', textColor: 'secondary' },
                  { color: 'success', textColor: 'success' },
                  { color: 'danger', textColor: 'danger' },
                  { color: 'warning', textColor: 'warning' },
                  { color: 'info', textColor: 'info' },
                  { color: 'light' },
                  { color: 'dark' },
                ].map((item, index) => (
                  <CCol lg={4} key={index}>
                    <CCard textColor={item.textColor} className={`mb-3 border-${item.color}`}>
                      <CCardHeader>Header</CCardHeader>
                      <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&#39;s content.
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </DocsExample>
            <h3>Top border</h3>
            <p className="text-body-secondary small">
              Use <a href="https://coreui.io/docs/utilities/borders/">border utilities</a> to change
              just the <code>border-color</code> of a card. Note that you can set{' '}
              <code>textColor</code> property on the <code>&lt;CCard&gt;</code> or a subset of the
              card&#39;s contents as shown below.
            </p>
            <DocsExample href="components/card/#top-border">
              <CRow>
                {[
                  { color: 'primary', textColor: 'primary' },
                  { color: 'secondary', textColor: 'secondary' },
                  { color: 'success', textColor: 'success' },
                  { color: 'danger', textColor: 'danger' },
                  { color: 'warning', textColor: 'warning' },
                  { color: 'info', textColor: 'info' },
                  { color: 'light' },
                  { color: 'dark' },
                ].map((item, index) => (
                  <CCol lg={4} key={index}>
                    <CCard
                      textColor={item.textColor}
                      className={`mb-3 border-top-${item.color} border-top-3`}
                    >
                      <CCardHeader>Header</CCardHeader>
                      <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&#39;s content.
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Card groups</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use card groups to render cards as a single, attached element with equal width and
              height columns. Card groups start off stacked and use <code>display: flex;</code> to
              become attached with uniform dimensions starting at the <code>sm</code> breakpoint.
            </p>
            <DocsExample href="components/card/#card-groups">
              <CCardGroup>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </CCardText>
                    <CCardText>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </CCardText>
                    <CCardText>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </CCardText>
                    <CCardText>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </DocsExample>
            <p className="text-body-secondary small">
              When using card groups with footers, their content will automatically line up.
            </p>
            <DocsExample href="components/card/#card-groups">
              <CCardGroup>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
              </CCardGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Grid cards</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>CRow</code> component and set{' '}
              <code>&#123;xs|sm|md|lg|xl|xxl&#125;=&#123;&#123; cols: * &#125;&#125;</code> property
              to control how many grid columns (wrapped around your cards) you show per row. For
              example, here&#39;s <code>xs=&#123;&#123;cols: 1&#125;&#125;</code> laying out the
              cards on one column, and <code>md=&#123;&#123;cols: 1&#125;&#125;</code> splitting
              four cards to equal width across multiple rows, from the medium breakpoint up.
            </p>
            <DocsExample href="components/card/#grid-cards">
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
            <p className="text-body-secondary small">
              Change it to <code>md=&#123;&#123; cols: 3&#125;&#125;</code> and you&#39;ll see the
              fourth card wrap.
            </p>
            <DocsExample href="components/card/#grid-cards">
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
````

## File: src/views/base/carousels/Carousels.jsx
````javascript
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const slidesLight = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]

const Carousels = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/carousel/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>Slide only</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">Here’s a carousel with slides</p>
            <DocsExample href="components/carousel">
              <CCarousel>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With controls</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Adding in the previous and next controls by <code>controls</code> property.
            </p>
            <DocsExample href="components/carousel/#with-controls">
              <CCarousel controls>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With indicators</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can attach the indicators to the carousel, lengthwise the controls, too.
            </p>
            <DocsExample href="components/carousel/#with-indicators">
              <CCarousel controls indicators>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With captions</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can add captions to slides with the <code>&lt;CCarouselCaption&gt;</code> element
              within any <code>&lt;CCarouselItem&gt;</code>. They can be immediately hidden on
              smaller viewports, as shown below, with optional{' '}
              <a href="https://coreui.io//utilities/display">display utilities</a>. We hide them
              with <code>.d-none</code> and draw them back on medium-sized devices with{' '}
              <code>.d-md-block</code>.
            </p>
            <DocsExample href="components/carousel/#with-captions">
              <CCarousel controls indicators>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>Crossfade</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>transition=&#34;crossfade&#34;</code> to your carousel to animate slides
              with a fade transition instead of a slide.
            </p>
            <DocsExample href="components/carousel/#crossfade">
              <CCarousel controls transition="crossfade">
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>Dark variant</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>dark</code> property to the <code>CCarousel</code> for darker controls,
              indicators, and captions. Controls have been inverted from their default white fill
              with the <code>filter</code> CSS property. Captions and controls have additional Sass
              variables that customize the <code>color</code> and <code>background-color</code>.
            </p>
            <DocsExample href="components/carousel/#dark-variant">
              <CCarousel controls indicators dark>
                <CCarouselItem>
                  <img className="d-block w-100" src={slidesLight[0]} alt="slide 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slidesLight[1]} alt="slide 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slidesLight[2]} alt="slide 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Carousels
````

## File: src/views/base/collapses/Collapses.jsx
````javascript
import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Collapses = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/collapse/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">You can use a link or a button component.</p>
            <DocsExample href="components/collapse">
              <CButton
                color="primary"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setVisible(!visible)
                }}
              >
                Link
              </CButton>
              <CButton color="primary" onClick={() => setVisible(!visible)}>
                Button
              </CButton>
              <CCollapse visible={visible}>
                <CCard className="mt-3">
                  <CCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident.
                  </CCardBody>
                </CCard>
              </CCollapse>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong> <small> Horizontal</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">You can use a link or a button component.</p>
            <DocsExample href="components/collapse#horizontal">
              <CButton
                className="mb-3"
                color="primary"
                onClick={() => setVisibleHorizontal(!visibleHorizontal)}
                aria-expanded={visibleHorizontal}
                aria-controls="collapseWidthExample"
              >
                Button
              </CButton>
              <div style={{ minHeight: '120px' }}>
                <CCollapse id="collapseWidthExample" horizontal visible={visibleHorizontal}>
                  <CCard style={{ width: '300px' }}>
                    <CCardBody>
                      This is some placeholder content for a horizontal collapse. It&#39;s hidden by
                      default and shown when triggered.
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong> <small> multi target</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              A <code>&lt;CButton&gt;</code> can show and hide multiple elements.
            </p>
            <DocsExample href="components/collapse#multiple-targets">
              <CButton color="primary" onClick={() => setVisibleA(!visibleA)}>
                Toggle first element
              </CButton>
              <CButton color="primary" onClick={() => setVisibleB(!visibleB)}>
                Toggle second element
              </CButton>
              <CButton
                color="primary"
                onClick={() => {
                  setVisibleA(!visibleA)
                  setVisibleB(!visibleB)
                }}
              >
                Toggle both elements
              </CButton>
              <CRow>
                <CCol xs={6}>
                  <CCollapse visible={visibleA}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
                <CCol xs={6}>
                  <CCollapse visible={visibleB}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Collapses
````

## File: src/views/base/list-groups/ListGroups.jsx
````javascript
import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/list-group/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The default list group is an unordered list with items and the proper CSS classes.
              Build upon it with the options that follow, or with your CSS as required.
            </p>
            <DocsExample href="components/list-group">
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Active items</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>active</code> boolean property to a <code>&lt;CListGroupItem&gt;</code> to
              show the current active selection.
            </p>
            <DocsExample href="components/list-group/#active-items">
              <CListGroup>
                <CListGroupItem active>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Disabled items</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>disabled</code> boolean property to a <code>&lt;CListGroupItem&gt;</code> to
              make it appear disabled.
            </p>
            <DocsExample href="components/list-group/#disabled-items">
              <CListGroup>
                <CListGroupItem disabled>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Links and buttons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create{' '}
              <em>actionable</em> list group items with hover, disabled, and active states by adding{' '}
              <code>as=&#34;a|button&#34;</code>. We separate these pseudo-classes to ensure list
              groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or{' '}
              <code>&lt;div&gt;</code>
              s) don&#39;tprovide a click or tap affordance.
            </p>
            <DocsExample href="components/list-group/#links-and-buttons">
              <CListGroup>
                <CListGroupItem as="a" href="#" active>
                  Cras justo odio
                </CListGroupItem>
                <CListGroupItem as="a" href="#">
                  Dapibus ac facilisis in
                </CListGroupItem>
                <CListGroupItem as="a" href="#">
                  Morbi leo risus
                </CListGroupItem>
                <CListGroupItem as="a" href="#">
                  Porta ac consectetur ac
                </CListGroupItem>
                <CListGroupItem as="a" href="#" disabled>
                  Vestibulum at eros
                </CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>flush</code> boolean property to remove some borders and rounded corners to
              render list group items edge-to-edge in a parent container (e.g., cards).
            </p>
            <DocsExample href="components/list-group/#flush">
              <CListGroup flush>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Horizontal</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>layout=&#34;horizontal&#34;</code> to change the layout of list group items
              from vertical to horizontal across all breakpoints. Alternatively, choose a responsive
              variant <code>.layout=&#34;horizontal-&#123;sm | md | lg | xl | xxl&#125;&#34;</code>{' '}
              to make a list group horizontal starting at that breakpoint&#39;s{' '}
              <code>min-width</code>. Currently{' '}
              <strong>horizontal list groups cannot be combined with flush list groups.</strong>
            </p>
            <DocsExample href="components/list-group/#flush">
              {['', '-sm', '-md', '-lg', '-xl', '-xxl'].map((breakpoint, index) => (
                <CListGroup className="mb-2" layout={`horizontal${breakpoint}`} key={index}>
                  <CListGroupItem>Cras justo odio</CListGroupItem>
                  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                  <CListGroupItem>Morbi leo risus</CListGroupItem>
                </CListGroup>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Contextual classes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use contextual classes to style list items with a stateful background and color.
            </p>
            <DocsExample href="components/list-group/#contextual-classes">
              <CListGroup>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                {[
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark',
                ].map((color, index) => (
                  <CListGroupItem color={color} key={index}>
                    A simple {color} list group item
                  </CListGroupItem>
                ))}
              </CListGroup>
            </DocsExample>
            <p className="text-body-secondary small">
              Contextual classes also work with <code>&lt;a&gt;</code>s or{' '}
              <code>&lt;button&gt;</code>s. Note the addition of the hover styles here not present
              in the previous example. Also supported is the <code>active</code> state; apply it to
              indicate an active selection on a contextual list group item.
            </p>
            <DocsExample href="components/list-group/#contextual-classes">
              <CListGroup>
                <CListGroupItem as="a" href="#">
                  Dapibus ac facilisis in
                </CListGroupItem>
                {[
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark',
                ].map((color, index) => (
                  <CListGroupItem as="a" href="#" color={color} key={index}>
                    A simple {color} list group item
                  </CListGroupItem>
                ))}
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>With badges</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add badges to any list group item to show unread counts, activity, and more.
            </p>
            <DocsExample href="components/list-group/#with-badges">
              <CListGroup>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <CBadge color="primary" shape="rounded-pill">
                    14
                  </CBadge>
                </CListGroupItem>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <CBadge color="primary" shape="rounded-pill">
                    2
                  </CBadge>
                </CListGroupItem>
                <CListGroupItem className="d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <CBadge color="primary" shape="rounded-pill">
                    1
                  </CBadge>
                </CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Custom content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add nearly any HTML within, even for linked list groups like the one below, with the
              help of <a href="https://coreui.io/docs/utilities/flex/">flexbox utilities</a>.
            </p>
            <DocsExample href="components/list-group/#custom-content">
              <CListGroup>
                <CListGroupItem as="a" href="#" active>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                    varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </CListGroupItem>
                <CListGroupItem as="a" href="#">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                    varius blandit.
                  </p>
                  <small className="text-body-secondary">Donec id elit non mi porta.</small>
                </CListGroupItem>
                <CListGroupItem as="a" href="#">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                    varius blandit.
                  </p>
                  <small className="text-body-secondary">Donec id elit non mi porta.</small>
                </CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Checkboxes and radios</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Place CoreUI&#39;s checkboxes and radios within list group items and customize as
              needed.
            </p>
            <DocsExample href="components/list-group/#checkboxes-and-radios">
              <CListGroup>
                <CListGroupItem>
                  <CFormCheck label="Cras justo odio" />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="Dapibus ac facilisis in" defaultChecked />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="Morbi leo risus" defaultChecked />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="orta ac consectetur ac" />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="Vestibulum at eros" />
                </CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListGroups
````

## File: src/views/base/navs/Navs.jsx
````javascript
import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Navs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/nav-tabs/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Base navs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The base <code>.nav</code> component is built with flexbox and provide a strong
              foundation for building all types of navigation components. It includes some style
              overrides (for working with lists), some link padding for larger hit areas, and basic
              disabled styling.
            </p>
            <DocsExample href="components/nav-tabs#base-nav">
              <CNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
            <p className="text-body-secondary small">
              Classes are used throughout, so your markup can be super flexible. Use{' '}
              <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if the order of your
              items is important, or roll your own with a <code>&lt;nav&gt;</code> element. Because
              the .nav uses display: flex, the nav links behave the same as nav items would, but
              without the extra markup.
            </p>
            <DocsExample href="components/nav-tabs#base-nav">
              <CNav as="nav">
                <CNavLink href="#" active>
                  Active
                </CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Horizontal alignment</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Change the horizontal alignment of your nav with{' '}
              <a href="https://coreui.io/docs/layout/grid/#horizontal-alignment">
                flexbox utilities
              </a>
              . By default, navs are left-aligned, but you can easily change them to center or right
              aligned.
            </p>
            <p className="text-body-secondary small">
              Centered with <code>.justify-content-center</code>:
            </p>
            <DocsExample href="components/nav-tabs#horizontal-alignment">
              <CNav className="justify-content-center">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
            <p className="text-body-secondary small">
              Right-aligned with <code>.justify-content-end</code>:
            </p>
            <DocsExample href="components/nav-tabs#base-nav">
              <CNav className="justify-content-end">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Vertical</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Stack your navigation by changing the flex item direction with the{' '}
              <code>.flex-column</code> utility. Need to stack them on some viewports but not
              others? Use the responsive versions (e.g., <code>.flex-sm-column</code>).
            </p>
            <DocsExample href="components/nav-tabs#vertical">
              <CNav className="flex-column">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Tabs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Takes the basic nav from above and adds the <code>variant=&#34;tabs&#34;</code> class
              to generate a tabbed interface
            </p>
            <DocsExample href="components/nav-tabs#tabs">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Pills</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Take that same HTML, but use <code>variant=&#34;pills&#34;</code> instead:
            </p>
            <DocsExample href="components/nav-tabs#pills">
              <CNav variant="pills">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Fill and justify</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Force your <code>.nav</code>&#39;s contents to extend the full available width one of
              two modifier classes. To proportionately fill all available space with your{' '}
              <code>.nav-item</code>s, use <code>layout=&#34;fill&#34;</code>. Notice that all
              horizontal space is occupied, but not every nav item has the same width.
            </p>
            <DocsExample href="components/nav-tabs#fill-and-justify">
              <CNav variant="pills" layout="fill">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
            <p className="text-body-secondary small">
              For equal-width elements, use <code>layout=&#34;justified&#34;</code>. All horizontal
              space will be occupied by nav links, but unlike the .nav-fill above, every nav item
              will be the same width.
            </p>
            <DocsExample href="components/nav-tabs#fill-and-justify">
              <CNav variant="pills" layout="justified">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Working with flex utilities</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you need responsive nav variations, consider using a series of{' '}
              <a href="https://coreui.io/docs/utilities/flex">flexbox utilities</a>. While more
              verbose, these utilities offer greater customization across responsive breakpoints. In
              the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
              horizontal layout that fills the available width starting from the small breakpoint.
            </p>
            <DocsExample href="components/nav-tabs#working-with-flex-utilities">
              <CNav as="nav" variant="pills" className="flex-column flex-sm-row">
                <CNavLink href="#" active>
                  Active
                </CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Tabs with dropdowns</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/nav-tabs#tabs-with-dropdowns">
              <CNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Pills with dropdowns</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/nav-tabs#pills-with-dropdowns">
              <CNav variant="pills">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Navs
````

## File: src/views/base/paginations/Paginations.jsx
````javascript
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/pagination/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              We use a large block of connected links for our pagination, making links hard to miss
              and easily scalable—all while providing large hit areas. Pagination is built with list
              HTML elements so screen readers can announce the number of available links. Use a
              wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation section to
              screen readers and other assistive technologies.
            </p>
            <p className="text-body-secondary small">
              In addition, as pages likely have more than one such navigation section, it&#39;s
              advisable to provide a descriptive <code>aria-label</code> for the{' '}
              <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination
              component is used to navigate between a set of search results, an appropriate label
              could be <code>aria-label=&#34;Search results pages&#34;</code>.
            </p>
            <DocsExample href="components/pagination">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Working with icons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Looking to use an icon or symbol in place of text for some pagination links? Be sure
              to provide proper screen reader support with <code>aria</code> attributes.
            </p>
            <DocsExample href="components/pagination#working-with-icons">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Disabled and active states</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Pagination links are customizable for different circumstances. Use{' '}
              <code>disabled</code> for links that appear un-clickable and <code>.active</code> to
              indicate the current page.
            </p>
            <p className="text-body-secondary small">
              While the <code>disabled</code> prop uses <code>pointer-events: none</code> to{' '}
              <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS
              property is not yet standardized and doesn&#39;taccount for keyboard navigation. As
              such, we always add <code>tabindex=&#34;-1&#34;</code> on disabled links and use
              custom JavaScript to fully disable their functionality.
            </p>
            <DocsExample href="components/pagination#disabled-and-active-states">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Fancy larger or smaller pagination? Add <code>size=&#34;lg&#34;</code> or{' '}
              <code>size=&#34;sm&#34;</code> for additional sizes.
            </p>
            <DocsExample href="components/pagination#sizing">
              <CPagination size="lg" aria-label="Page navigation example">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </DocsExample>
            <DocsExample href="components/pagination#sizing">
              <CPagination size="sm" aria-label="Page navigation example">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Alignment</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Change the alignment of pagination components with{' '}
              <a href="https://coreui.io/docs/utilities/flex/">flexbox utilities</a>.
            </p>
            <DocsExample href="components/pagination#aligment">
              <CPagination className="justify-content-center" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </DocsExample>
            <DocsExample href="components/pagination#aligment">
              <CPagination className="justify-content-end" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Paginations
````

## File: src/views/base/placeholders/Placeholders.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CPlaceholder,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Placeholders = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/placeholder/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              In the example below, we take a typical card component and recreate it with
              placeholders applied to create a &#34;loading card&#34;. Size and proportions are the
              same between the two.
            </p>
            <DocsExample href="components/placeholder">
              <div className="d-flex justify-content-around p-3">
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&#39;s content.
                    </CCardText>
                    <CButton color="primary" href="#">
                      Go somewhere
                    </CButton>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }}>
                  <svg
                    className="card-img-top"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                  </svg>
                  <CCardBody>
                    <CPlaceholder as={CCardTitle} animation="glow" xs={7}>
                      <CPlaceholder xs={6} />
                    </CPlaceholder>
                    <CPlaceholder as={CCardText} animation="glow">
                      <CPlaceholder xs={7} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={6} />
                      <CPlaceholder xs={8} />
                    </CPlaceholder>
                    <CPlaceholder
                      color="primary"
                      as={CButton}
                      disabled
                      href="#"
                      tabIndex={-1}
                      xs={6}
                    ></CPlaceholder>
                  </CCardBody>
                </CCard>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create placeholders with the <code>&lt;CPlaceholder&gt;</code> component and a grid
              column propx (e.g., <code>xs={6}</code>) to set the <code>width</code>. They can
              replace the text inside an element or be added as a modifier class to an existing
              component.
            </p>
            <DocsExample href="components/placeholder">
              <p aria-hidden="true">
                <CPlaceholder xs={6} />
              </p>
              <CPlaceholder
                color="primary"
                as={CButton}
                aria-hidden="true"
                disabled
                href="#"
                tabIndex={-1}
                xs={4}
              ></CPlaceholder>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Width</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can change the <code>width</code> through grid column classes, width utilities, or
              inline styles.
            </p>
            <DocsExample href="components/placeholder#width">
              <CPlaceholder xs={6} />
              <CPlaceholder className="w-75" />
              <CPlaceholder style={{ width: '30%' }} />
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Color</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              By default, the <code>&lt;CPlaceholder&gt;</code> uses <code>currentColor</code>. This
              can be overridden with a custom color or utility class.
            </p>
            <DocsExample href="components/placeholder#color">
              <CPlaceholder xs={12} />

              <CPlaceholder color="primary" xs={12} />
              <CPlaceholder color="secondary" xs={12} />
              <CPlaceholder color="success" xs={12} />
              <CPlaceholder color="danger" xs={12} />
              <CPlaceholder color="warning" xs={12} />
              <CPlaceholder color="info" xs={12} />
              <CPlaceholder color="light" xs={12} />
              <CPlaceholder color="dark" xs={12} />
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The size of <code>&lt;CPlaceholder&gt;</code>s are based on the typographic style of
              the parent element. Customize them with <code>size</code> prop: <code>lg</code>,{' '}
              <code>sm</code>, or <code>xs</code>.
            </p>
            <DocsExample href="components/placeholder#sizing">
              <CPlaceholder xs={12} size="lg" />
              <CPlaceholder xs={12} />
              <CPlaceholder xs={12} size="sm" />
              <CPlaceholder xs={12} size="xs" />
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Placeholder</strong> <small> Animation</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Animate placeholders with <code>animation=&#34;glow&#34;</code> or{' '}
              <code>animation=&#34;wave&#34;</code> to better convey the perception of something
              being <em>actively</em> loaded.
            </p>
            <DocsExample href="components/placeholder#animation">
              <CPlaceholder as="p" animation="glow">
                <CPlaceholder xs={12} />
              </CPlaceholder>

              <CPlaceholder as="p" animation="wave">
                <CPlaceholder xs={12} />
              </CPlaceholder>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Placeholders
````

## File: src/views/base/popovers/Popovers.jsx
````javascript
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CPopover, CRow, CCol } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Popovers = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/popover/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Popover</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/popover">
              <CPopover
                title="Popover title"
                content="And here’s some amazing content. It’s very engaging. Right?"
                placement="right"
              >
                <CButton color="danger" size="lg">
                  Click to toggle popover
                </CButton>
              </CPopover>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Popover</strong> <small>Four directions</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Four options are available: top, right, bottom, and left aligned. Directions are
              mirrored when using CoreUI for React in RTL.
            </p>
            <DocsExample href="components/popover#four-directions">
              <CPopover
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="top"
              >
                <CButton color="secondary">Popover on top</CButton>
              </CPopover>
              <CPopover
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="right"
              >
                <CButton color="secondary">Popover on right</CButton>
              </CPopover>
              <CPopover
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="bottom"
              >
                <CButton color="secondary">Popover on bottom</CButton>
              </CPopover>
              <CPopover
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="left"
              >
                <CButton color="secondary">Popover on left</CButton>
              </CPopover>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Popovers
````

## File: src/views/base/progress/Progress.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CProgress, CProgressBar, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Progress = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/progress/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Progress components are built with two HTML elements, some CSS to set the width, and a
              few attributes. We don&#39;tuse{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">
                the HTML5 <code>&lt;progress&gt;</code> element
              </a>
              , ensuring you can stack progress bars, animate them, and place text labels over them.
            </p>
            <DocsExample href="components/progress">
              <CProgress className="mb-3">
                <CProgressBar value={0} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Labels</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add labels to your progress bars by placing text within the{' '}
              <code>&lt;CProgressBar&gt;</code>.
            </p>
            <DocsExample href="components/progress#labels">
              <CProgress className="mb-3">
                <CProgressBar value={25}>25%</CProgressBar>
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Height</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              We only set a <code>height</code> value on the <code>&lt;CProgress&gt;</code>, so if
              you change that value the inner <code>&lt;CProgressBar&gt;</code> will automatically
              resize accordingly.
            </p>
            <DocsExample href="components/progress#height">
              <CProgress height={1} className="mb-3">
                <CProgressBar value={25}></CProgressBar>
              </CProgress>
              <CProgress height={20} className="mb-3">
                <CProgressBar value={25}></CProgressBar>
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Backgrounds</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use <code>color</code> prop to change the appearance of individual progress bars.
            </p>
            <DocsExample href="components/progress#backgrounds">
              <CProgress className="mb-3">
                <CProgressBar color="success" value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Multiple bars</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Include multiple progress bars in a progress component if you need.
            </p>
            <DocsExample href="components/progress#multiple-bars">
              <CProgress className="mb-3">
                <CProgressBar value={15} />
                <CProgressBar color="success" value={30} />
                <CProgressBar color="info" value={20} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Striped</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>variant=&#34;striped&#34;</code> to any <code>&lt;CProgressBar&gt;</code> to
              apply a stripe via CSS gradient over the progress bar&#39;s background color.
            </p>
            <DocsExample href="components/progress#striped">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Animated stripes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The striped gradient can also be animated. Add <code>animated</code> property to{' '}
              <code>&lt;CProgressBar&gt;</code> to animate the stripes right to left via CSS3
              animations.
            </p>
            <DocsExample href="components/progress#animated-stripes">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" animated value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" animated value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" animated value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" animated value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Progress
````

## File: src/views/base/spinners/Spinners.jsx
````javascript
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CSpinner, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Spinners = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/spinner/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Spinner</strong> <small>Border</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <DocsExample href="components/spinner">
              <CSpinner />
            </DocsExample>
            <p className="text-body-secondary small">
              The border spinner uses <code>currentColor</code> for its <code>border-color</code>.
              You can use any of our text color utilities on the standard spinner.
            </p>
            <DocsExample href="components/spinner#colors">
              <CSpinner color="primary" />
              <CSpinner color="secondary" />
              <CSpinner color="success" />
              <CSpinner color="danger" />
              <CSpinner color="warning" />
              <CSpinner color="info" />
              <CSpinner color="light" />
              <CSpinner color="dark" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Spinner</strong> <small>Growing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you don&#39;tfancy a border spinner, switch to the grow spinner. While it
              doesn&#39;t technically spin, it does repeatedly grow!
            </p>
            <DocsExample href="components/spinner#growing-spinner">
              <CSpinner variant="grow" />
            </DocsExample>
            <p className="text-body-secondary small">
              Once again, this spinner is built with <code>currentColor</code>, so you can easily
              change its appearance. Here it is in blue, along with the supported variants.
            </p>
            <DocsExample href="components/spinner#growing-spinner">
              <CSpinner color="primary" variant="grow" />
              <CSpinner color="secondary" variant="grow" />
              <CSpinner color="success" variant="grow" />
              <CSpinner color="danger" variant="grow" />
              <CSpinner color="warning" variant="grow" />
              <CSpinner color="info" variant="grow" />
              <CSpinner color="light" variant="grow" />
              <CSpinner color="dark" variant="grow" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Spinner</strong> <small>Size</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>size=&#34;sm&#34;</code> property to make a smaller spinner that can quickly
              be used within other components.
            </p>
            <DocsExample href="components/spinner#size">
              <CSpinner size="sm" />
              <CSpinner size="sm" variant="grow" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Spinner</strong> <small>Buttons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use spinners within buttons to indicate an action is currently processing or taking
              place. You may also swap the text out of the spinner element and utilize button text
              as needed.
            </p>
            <DocsExample href="components/spinner#buttons">
              <CButton color="primary" disabled>
                <CSpinner as="span" size="sm" aria-hidden="true" />
              </CButton>
              <CButton color="primary" disabled>
                <CSpinner as="span" size="sm" aria-hidden="true" />
                Loading...
              </CButton>
            </DocsExample>
            <DocsExample href="components/spinner#buttons">
              <CButton color="primary" disabled>
                <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" />
              </CButton>
              <CButton color="primary" disabled>
                <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" />
                Loading...
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Spinners
````

## File: src/views/base/tables/Tables.jsx
````javascript
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/table/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based
              tables look in CoreUI.
            </p>
            <DocsExample href="components/table">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Variants</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use contextual classes to color tables, table rows or individual cells.
            </p>
            <DocsExample href="components/table#variants">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="primary">
                    <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="secondary">
                    <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="success">
                    <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="danger">
                    <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="warning">
                    <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="info">
                    <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="light">
                    <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="dark">
                    <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Striped rows</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
              <code>&lt;CTableBody&gt;</code>.
            </p>
            <DocsExample href="components/table#striped-rows">
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <p className="text-body-secondary small">
              These classes can also be added to table variants:
            </p>
            <DocsExample href="components/table#striped-rows">
              <CTable color="dark" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#striped-rows">
              <CTable color="success" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Hoverable rows</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use <code>hover</code> property to enable a hover state on table rows within a{' '}
              <code>&lt;CTableBody&gt;</code>.
            </p>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#hoverable-rows">
              <CTable color="dark" hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#hoverable-rows">
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Active tables</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#active-tables">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow active>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2} active>
                      Larry the Bird
                    </CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#active-tables">
              <CTable color="dark">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow active>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2} active>
                      Larry the Bird
                    </CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Bordered tables</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>bordered</code> property for borders on all sides of the table and cells.
            </p>
            <DocsExample href="components/table#bordered-tables">
              <CTable bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <p className="text-body-secondary small">
              <a href="https://coreui.io/docs/utilities/borders#border-color">
                Border color utilities
              </a>{' '}
              can be added to change colors:
            </p>
            <DocsExample href="components/table#bordered-tables">
              <CTable bordered borderColor="primary">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Tables without borders</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>borderless</code> property for a table without borders.
            </p>
            <DocsExample href="components/table#tables-without-borders">
              <CTable borderless>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#tables-without-borders">
              <CTable color="dark" borderless>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Small tables</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>small</code> property to make any <code>&lt;CTable&gt;</code> more compact
              by cutting all cell <code>padding</code> in half.
            </p>
            <DocsExample href="components/table#small-tables">
              <CTable small>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Vertical alignment</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Table cells of <code>&lt;CTableHead&gt;</code> are always vertical aligned to the
              bottom. Table cells in <code>&lt;CTableBody&gt;</code> inherit their alignment from{' '}
              <code>&lt;CTable&gt;</code> and are aligned to the the top by default. Use the align
              property to re-align where needed.
            </p>
            <DocsExample href="components/table#vertical-alignment">
              <CTable align="middle" responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 1
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 2
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 3
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 4
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This here is some placeholder text, intended to take up quite a bit of
                      vertical space, to demonsCTableRowate how the vertical alignment works in the
                      preceding cells.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow align="bottom">
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: bottom;</code> from the table row
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: bottom;</code> from the table row
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: bottom;</code> from the table row
                    </CTableDataCell>
                    <CTableDataCell>
                      This here is some placeholder text, intended to take up quite a bit of
                      vertical space, to demonsCTableRowate how the vertical alignment works in the
                      preceding cells.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
                    <CTableDataCell>
                      This here is some placeholder text, intended to take up quite a bit of
                      vertical space, to demonsCTableRowate how the vertical alignment works in the
                      preceding cells.
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Nesting</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Border styles, active styles, and table variants are not inherited by nested tables.
            </p>
            <DocsExample href="components/table#nesting">
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell colSpan={4}>
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">A</CTableHeaderCell>
                            <CTableDataCell>First</CTableDataCell>
                            <CTableDataCell>Last</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">B</CTableHeaderCell>
                            <CTableDataCell>First</CTableDataCell>
                            <CTableDataCell>Last</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">C</CTableHeaderCell>
                            <CTableDataCell>First</CTableDataCell>
                            <CTableDataCell>Last</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Table head</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Similar to tables and dark tables, use the modifier prop{' '}
              <code>color=&#34;light&#34;</code> or <code>color=&#34;dark&#34;</code> to make{' '}
              <code>&lt;CTableHead&gt;</code>s appear light or dark gray.
            </p>
            <DocsExample href="components/table#table-head">
              <CTable>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry</CTableDataCell>
                    <CTableDataCell>the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#table-head">
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Table foot</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#table-foot">
              <CTable>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
                <CTableHead>
                  <CTableRow>
                    <CTableDataCell>Footer</CTableDataCell>
                    <CTableDataCell>Footer</CTableDataCell>
                    <CTableDataCell>Footer</CTableDataCell>
                    <CTableDataCell>Footer</CTableDataCell>
                  </CTableRow>
                </CTableHead>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Captions</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              A <code>&lt;CTableCaption&gt;</code> functions like a heading for a table. It helps
              users with screen readers to find a table and understand what it&#39;s about and
              decide if they want to read it.
            </p>
            <DocsExample href="components/table#captions">
              <CTable>
                <CTableCaption>List of users</CTableCaption>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry</CTableDataCell>
                    <CTableDataCell>the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <p className="text-body-secondary small">
              You can also put the <code>&lt;CTableCaption&gt;</code> on the top of the table with{' '}
              <code>caption=&#34;top&#34;</code>.
            </p>
            <DocsExample href="components/table#captions">
              <CTable caption="top">
                <CTableCaption>List of users</CTableCaption>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry</CTableDataCell>
                    <CTableDataCell>the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
````

## File: src/views/base/tabs/Tabs.jsx
````javascript
import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Navs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/tabs/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The basic React tabs example uses the <code>variant=&#34;tabs&#34;</code> props to
              generate a tabbed interface.
            </p>
            <DocsExample href="components/tabs/#example">
              <CTabs activeItemKey="profile">
                <CTabList variant="tabs">
                  <CTab itemKey="home">Home</CTab>
                  <CTab itemKey="profile">Profile</CTab>
                  <CTab itemKey="contact">Contact</CTab>
                  <CTab disabled itemKey="disabled">
                    Disabled
                  </CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="p-3" itemKey="home">
                    Home tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="profile">
                    Profile tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="contact">
                    Contact tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="disabled">
                    Disabled tab content
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong> <small>Unstyled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you don’t provide the <code>variant</code> prop, the component will default to a
              basic style.
            </p>
            <DocsExample href="components/tabs/#unstyled">
              <CTabs activeItemKey="profile">
                <CTabList>
                  <CTab itemKey="home">Home</CTab>
                  <CTab itemKey="profile">Profile</CTab>
                  <CTab itemKey="contact">Contact</CTab>
                  <CTab disabled itemKey="disabled">
                    Disabled
                  </CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="p-3" itemKey="home">
                    Home tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="profile">
                    Profile tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="contact">
                    Contact tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" itemKey="disabled">
                    Disabled tab content
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong> <small>Pills</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Take that same code, but use <code>variant=&#34;pills&#34;</code> instead:
            </p>
            <DocsExample href="components/tabs/#unstyled">
              <CTabs activeItemKey={2}>
                <CTabList variant="pills">
                  <CTab aria-controls="home-tab-pane" itemKey={1}>
                    Home
                  </CTab>
                  <CTab aria-controls="profile-tab-pane" itemKey={2}>
                    Profile
                  </CTab>
                  <CTab aria-controls="contact-tab-pane" itemKey={3}>
                    Contact
                  </CTab>
                  <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
                    Disabled
                  </CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
                    Home tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={2}>
                    Profile tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" aria-labelledby="contact-tab-pane" itemKey={3}>
                    Contact tab content
                  </CTabPanel>
                  <CTabPanel className="p-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
                    Disabled tab content
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong> <small>Underline</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Take that same code, but use <code>variant=&#34;underline&#34;</code> instead:
            </p>
            <DocsExample href="components/tabs/#unstyled">
              <CTabs activeItemKey={2}>
                <CTabList variant="underline">
                  <CTab aria-controls="home-tab-pane" itemKey={1}>
                    Home
                  </CTab>
                  <CTab aria-controls="profile-tab-pane" itemKey={2}>
                    Profile
                  </CTab>
                  <CTab aria-controls="contact-tab-pane" itemKey={3}>
                    Contact
                  </CTab>
                  <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
                    Disabled
                  </CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
                    Home tab content
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
                    Profile tab content
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
                    Contact tab content
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
                    Disabled tab content
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tabs</strong> <small>Underline border</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Take that same code, but use <code>variant=&#34;underline-border&#34;</code> instead:
            </p>
            <DocsExample href="components/tabs/#unstyled">
              <CTabs activeItemKey={2}>
                <CTabList variant="underline-border">
                  <CTab aria-controls="home-tab-pane" itemKey={1}>
                    Home
                  </CTab>
                  <CTab aria-controls="profile-tab-pane" itemKey={2}>
                    Profile
                  </CTab>
                  <CTab aria-controls="contact-tab-pane" itemKey={3}>
                    Contact
                  </CTab>
                  <CTab aria-controls="disabled-tab-pane" disabled itemKey={4}>
                    Disabled
                  </CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
                    Home tab content
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
                    Profile tab content
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
                    Contact tab content
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
                    Disabled tab content
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Navs
````

## File: src/views/base/tooltips/Tooltips.jsx
````javascript
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CLink, CTooltip, CRow, CCol } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/tooltip/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tooltip</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">Hover over the links below to see tooltips:</p>
            <DocsExample href="components/tooltip">
              <p className="text-body-secondary">
                Tight pants next level keffiyeh
                <CTooltip content="Tooltip text">
                  <CLink> you probably </CLink>
                </CTooltip>
                haven&#39;theard of them. Photo booth beard raw denim letterpress vegan messenger
                bag stumptown. Farm-to-table seitan, mcsweeney&#39;s fixie sustainable quinoa 8-bit
                american apparel
                <CTooltip content="Tooltip text">
                  <CLink> have a </CLink>
                </CTooltip>
                terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
                thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney&#39;&#39;s
                cleanse vegan chambray. A really ironic artisan
                <CTooltip content="Tooltip text">
                  <CLink> whatever keytar </CLink>
                </CTooltip>
                scenester farm-to-table banksy Austin
                <CTooltip content="Tooltip text">
                  <CLink> twitter handle </CLink>
                </CTooltip>
                freegan cred raw denim single-origin coffee viral.
              </p>
            </DocsExample>
            <p className="text-body-secondary small">
              Hover over the buttons below to see the four tooltips directions: top, right, bottom,
              and left. Directions are mirrored when using CoreUI in RTL.
            </p>
            <DocsExample href="components/tooltip">
              <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="top"
              >
                <CButton color="secondary">Tooltip on top</CButton>
              </CTooltip>
              <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="right"
              >
                <CButton color="secondary">Tooltip on right</CButton>
              </CTooltip>
              <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="bottom"
              >
                <CButton color="secondary">Tooltip on bottom</CButton>
              </CTooltip>
              <CTooltip
                content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                placement="left"
              >
                <CButton color="secondary">Tooltip on left</CButton>
              </CTooltip>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tooltips
````

## File: src/views/buttons/button-groups/ButtonGroups.jsx
````javascript
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButtonGroup,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/button-group/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Basic example</span>
          </CCardHeader>
          <CCardBody>
            <p>
              Wrap a series of <code>&lt;CButton&gt;</code> components in{' '}
              <code>&lt;CButtonGroup&gt;</code>.{' '}
            </p>
            <DocsExample href="components/button-group">
              <CButtonGroup role="group" aria-label="Basic example">
                <CButton color="primary">Left</CButton>
                <CButton color="primary">Middle</CButton>
                <CButton color="primary">Right</CButton>
              </CButtonGroup>
            </DocsExample>
            <p>
              These classes can also be added to groups of links, as an alternative to the{' '}
              <code>&lt;CNav&gt;</code> components.
            </p>
            <DocsExample href="components/button-group">
              <CButtonGroup>
                <CButton href="#" color="primary" active>
                  Active link
                </CButton>
                <CButton href="#" color="primary">
                  Link
                </CButton>
                <CButton href="#" color="primary">
                  Link
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Mixed styles</span>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/button-group#mixed-styles">
              <CButtonGroup role="group" aria-label="Basic mixed styles example">
                <CButton color="danger">Left</CButton>
                <CButton color="warning">Middle</CButton>
                <CButton color="success">Right</CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Outlined styles</span>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/button-group#outlined-styles">
              <CButtonGroup role="group" aria-label="Basic outlined example">
                <CButton color="primary" variant="outline">
                  Left
                </CButton>
                <CButton color="primary" variant="outline">
                  Middle
                </CButton>
                <CButton color="primary" variant="outline">
                  Right
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Checkbox and radio button groups</span>
          </CCardHeader>
          <CCardBody>
            <p>
              Combine button-like checkbox and radio toggle buttons into a seamless looking button
              group.
            </p>
            <DocsExample href="components/button-group#checkbox-and-radio-button-groups">
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  button={{ variant: 'outline' }}
                  id="btncheck1"
                  autoComplete="off"
                  label="Checkbox 1"
                />
                <CFormCheck
                  button={{ variant: 'outline' }}
                  id="btncheck2"
                  autoComplete="off"
                  label="Checkbox 2"
                />
                <CFormCheck
                  button={{ variant: 'outline' }}
                  id="btncheck3"
                  autoComplete="off"
                  label="Checkbox 3"
                />
              </CButtonGroup>
            </DocsExample>
            <DocsExample href="components/button-group#checkbox-and-radio-button-groups">
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ variant: 'outline' }}
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  label="Radio 1"
                />
                <CFormCheck
                  type="radio"
                  button={{ variant: 'outline' }}
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  label="Radio 2"
                />
                <CFormCheck
                  type="radio"
                  button={{ variant: 'outline' }}
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  label="Radio 3"
                />
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Button toolbar</span>
          </CCardHeader>
          <CCardBody>
            <p>
              Join sets of button groups into button toolbars for more complicated components. Use
              utility classes as needed to space out groups, buttons, and more.
            </p>
            <DocsExample href="components/button-group#button-toolbar">
              <CButtonToolbar role="group" aria-label="Toolbar with button groups">
                <CButtonGroup className="me-2" role="group" aria-label="First group">
                  <CButton color="primary">1</CButton>
                  <CButton color="primary">2</CButton>
                  <CButton color="primary">3</CButton>
                  <CButton color="primary">4</CButton>
                </CButtonGroup>
                <CButtonGroup className="me-2" role="group" aria-label="Second group">
                  <CButton color="secondary">5</CButton>
                  <CButton color="secondary">6</CButton>
                  <CButton color="secondary">7</CButton>
                </CButtonGroup>
                <CButtonGroup className="me-2" role="group" aria-label="Third group">
                  <CButton color="info">8</CButton>
                </CButtonGroup>
              </CButtonToolbar>
            </DocsExample>
            <p>
              Feel free to combine input groups with button groups in your toolbars. Similar to the
              example above, you’ll likely need some utilities through to space items correctly.
            </p>
            <DocsExample href="components/button-group#button-toolbar">
              <CButtonToolbar className="mb-3" role="group" aria-label="Toolbar with button groups">
                <CButtonGroup className="me-2" role="group" aria-label="First group">
                  <CButton color="secondary" variant="outline">
                    1
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    2
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    3
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    4
                  </CButton>
                </CButtonGroup>
                <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </CInputGroup>
              </CButtonToolbar>
              <CButtonToolbar
                className="justify-content-between"
                role="group"
                aria-label="Toolbar with button groups"
              >
                <CButtonGroup className="me-2" role="group" aria-label="First group">
                  <CButton color="secondary" variant="outline">
                    1
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    2
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    3
                  </CButton>
                  <CButton color="secondary" variant="outline">
                    4
                  </CButton>
                </CButtonGroup>
                <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </CInputGroup>
              </CButtonToolbar>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Sizing</span>
          </CCardHeader>
          <CCardBody>
            <p>
              Alternatively, of implementing button sizing classes to each button in a group, set{' '}
              <code>size</code> property to all <code>&lt;CButtonGroup&gt;</code>&#39;s, including
              each one when nesting multiple groups.
            </p>
            <DocsExample href="components/button-group#sizing">
              <CButtonGroup size="lg" role="group" aria-label="Large button group">
                <CButton color="dark" variant="outline">
                  Left
                </CButton>
                <CButton color="dark" variant="outline">
                  Middle
                </CButton>
                <CButton color="dark" variant="outline">
                  Right
                </CButton>
              </CButtonGroup>
              <br />
              <CButtonGroup role="group" aria-label="Default button group">
                <CButton color="dark" variant="outline">
                  Left
                </CButton>
                <CButton color="dark" variant="outline">
                  Middle
                </CButton>
                <CButton color="dark" variant="outline">
                  Right
                </CButton>
              </CButtonGroup>
              <br />
              <CButtonGroup size="sm" role="group" aria-label="Small button group">
                <CButton color="dark" variant="outline">
                  Left
                </CButton>
                <CButton color="dark" variant="outline">
                  Middle
                </CButton>
                <CButton color="dark" variant="outline">
                  Right
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Nesting</span>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Put a <code>&lt;CButtonGroup&gt;</code> inside another{' '}
              <code>&lt;CButtonGroup&gt;</code> when you need dropdown menus combined with a series
              of buttons.
            </p>
            <DocsExample href="components/button-group#nesting">
              <CButtonGroup role="group" aria-label="Button group with nested dropdown">
                <CButton color="primary">1</CButton>
                <CButton color="primary">2</CButton>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Vertical variation</span>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create a set of buttons that appear vertically stacked rather than horizontally.{' '}
              <strong>Split button dropdowns are not supported here.</strong>
            </p>
            <DocsExample href="components/button-group/#vertical-variation">
              <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <CButton color="dark">Button</CButton>
                <CButton color="dark">Button</CButton>
                <CButton color="dark">Button</CButton>
                <CButton color="dark">Button</CButton>
                <CButton color="dark">Button</CButton>
                <CButton color="dark">Button</CButton>
                <CButton color="dark">Button</CButton>
              </CButtonGroup>
            </DocsExample>
            <DocsExample href="components/button-group/#vertical-variation">
              <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <CButton color="primary">Button</CButton>
                <CButton color="primary">Button</CButton>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CButton color="primary">Button</CButton>
                <CButton color="primary">Button</CButton>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CButtonGroup>
            </DocsExample>
            <DocsExample href="components/button-group/#vertical-variation">
              <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="vbtnradio"
                  id="vbtnradio1"
                  autoComplete="off"
                  label="Radio 1"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="vbtnradio"
                  id="vbtnradio2"
                  autoComplete="off"
                  label="Radio 2"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="vbtnradio"
                  id="vbtnradio3"
                  autoComplete="off"
                  label="Radio 3"
                />
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ButtonGroups
````

## File: src/views/buttons/dropdowns/Dropdowns.jsx
````javascript
import React from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Dropdowns = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/dropdown/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Single button</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Here&#39;s how you can put them to work with either <code>&lt;button&gt;</code>{' '}
              elements:
            </p>
            <DocsExample href="components/dropdown#single-button">
              <CDropdown>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <p className="text-body-secondary small">
              The best part is you can do this with any button variant, too:
            </p>
            <DocsExample href="components/dropdown#single-button">
              <>
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
                  (color, index) => (
                    <CDropdown variant="btn-group" key={index}>
                      <CDropdownToggle color={color}>{color}</CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  ),
                )}
              </>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Split button</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Similarly, create split button dropdowns with virtually the same markup as single
              button dropdowns, but with the addition of boolean prop <code>split</code> for proper
              spacing around the dropdown caret.
            </p>
            <p className="text-body-secondary small">
              We use this extra class to reduce the horizontal <code>padding</code> on either side
              of the caret by 25% and remove the <code>margin-left</code> that&#39;s attached for
              normal button dropdowns. Those additional changes hold the caret centered in the split
              button and implement a more properly sized hit area next to the main button.
            </p>
            <DocsExample href="components/dropdown#split-button">
              <>
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
                  (color, index) => (
                    <CDropdown variant="btn-group" key={index}>
                      <CButton color={color}>{color}</CButton>
                      <CDropdownToggle color={color} split />
                      <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  ),
                )}
              </>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Button dropdowns work with buttons of all sizes, including default and split dropdown
              buttons.
            </p>
            <DocsExample href="components/dropdown#sizing">
              <CDropdown variant="btn-group">
                <CDropdownToggle color="secondary" size="lg">
                  Large button
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group">
                <CButton color="secondary" size="lg">
                  Large split button
                </CButton>
                <CDropdownToggle color="secondary" size="lg" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <DocsExample href="components/dropdown#sizing">
              <CDropdown variant="btn-group">
                <CDropdownToggle color="secondary" size="sm">
                  Small button
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group">
                <CButton color="secondary" size="sm">
                  Small split button
                </CButton>
                <CDropdownToggle color="secondary" size="sm" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Single button</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Opt into darker dropdowns to match a dark navbar or custom style by set{' '}
              <code>dark</code> property. No changes are required to the dropdown items.
            </p>
            <DocsExample href="components/dropdown#dark-dropdowns">
              <CDropdown dark>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <p className="text-body-secondary small">And putting it to use in a navbar:</p>
            <DocsExample href="components/dropdown#dark-dropdowns">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="https://coreui.io/react/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-coreui-toggle="collapse"
                    data-coreui-target="#navbarNavDarkDropdown"
                    aria-controls="navbarNavDarkDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                      <CDropdown dark as="li" variant="nav-item">
                        <CDropdownToggle>Dropdown</CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem href="#">Action</CDropdownItem>
                          <CDropdownItem href="#">Another action</CDropdownItem>
                          <CDropdownItem href="#">Something else here</CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </ul>
                  </div>
                </div>
              </nav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Dropup</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Trigger dropdown menus above elements by adding{' '}
              <code>direction=&#34;dropup&#34;</code> to the <code>&lt;CDropdown&gt;</code>{' '}
              component.
            </p>
            <DocsExample href="components/dropdown#dropup">
              <CDropdown variant="btn-group" direction="dropup">
                <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group" direction="dropup">
                <CButton color="secondary">Small split button</CButton>
                <CDropdownToggle color="secondary" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Dropright</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Trigger dropdown menus at the right of the elements by adding{' '}
              <code>direction=&#34;dropend&#34;</code> to the <code>&lt;CDropdown&gt;</code>{' '}
              component.
            </p>
            <DocsExample href="components/dropdown#dropright">
              <CDropdown variant="btn-group" direction="dropend">
                <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group" direction="dropend">
                <CButton color="secondary">Small split button</CButton>
                <CDropdownToggle color="secondary" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Dropleft</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Trigger dropdown menus at the left of the elements by adding{' '}
              <code>direction=&#34;dropstart&#34;</code> to the <code>&lt;CDropdown&gt;</code>{' '}
              component.
            </p>
            <DocsExample href="components/dropdown#dropleft">
              <CButtonGroup>
                <CDropdown variant="btn-group" direction="dropstart">
                  <CDropdownToggle color="secondary" split />
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CButton color="secondary">Small split button</CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dropdowns
````

## File: src/views/charts/Charts.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}></CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Bar Chart <DocsLink name="chart" />
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Line Chart <DocsLink name="chart" />
          </CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Doughnut Chart <DocsLink name="chart" />
          </CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Pie Chart <DocsLink name="chart" />{' '}
          </CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Polar Area Chart
            <DocsLink name="chart" />
          </CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Radar Chart <DocsLink name="chart" />
          </CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: [
                  'Eating',
                  'Drinking',
                  'Sleeping',
                  'Designing',
                  'Coding',
                  'Cycling',
                  'Running',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
````

## File: src/views/dashboard/Dashboard.jsx
````javascript
import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsBrand className="mb-4" withCharts />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-body-secondary small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Payment Method
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
````

## File: src/views/dashboard/MainChart.jsx
````javascript
import React, { useEffect, useRef } from 'react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const MainChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
          chartRef.current.options.scales.y.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color')
          chartRef.current.update()
        })
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
    return () =>
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
  }, [chartRef])

  const random = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <>
      <CChartLine
        ref={chartRef}
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
              borderColor: getStyle('--cui-info'),
              pointHoverBackgroundColor: getStyle('--cui-info'),
              borderWidth: 2,
              data: [
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
              ],
              fill: true,
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-success'),
              pointHoverBackgroundColor: getStyle('--cui-success'),
              borderWidth: 2,
              data: [
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
              ],
            },
            {
              label: 'My Third dataset',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-danger'),
              pointHoverBackgroundColor: getStyle('--cui-danger'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: [65, 65, 65, 65, 65, 65, 65],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle('--cui-border-color-translucent'),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
            y: {
              beginAtZero: true,
              border: {
                color: getStyle('--cui-border-color-translucent'),
              },
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              max: 250,
              ticks: {
                color: getStyle('--cui-body-color'),
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </>
  )
}

export default MainChart
````

## File: src/views/forms/checks-radios/ChecksRadios.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormCheck, CFormSwitch, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const ChecksRadios = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/checks-radios/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checkbox</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/checks-radios">
              <CFormCheck id="flexCheckDefault" label="Default checkbox" />
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checkbox</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s
              are automatically styled to match with a lighter color to help indicate the
              input&#39;s state.
            </p>
            <DocsExample href="forms/checks-radios#disabled">
              <CFormCheck label="Disabled checkbox" disabled />
              <CFormCheck label="Disabled checked checkbox" defaultChecked disabled />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Radio</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s
              are automatically styled to match with a lighter color to help indicate the
              input&#39;s state.
            </p>
            <DocsExample href="forms/checks-radios#radios">
              <CFormCheck
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Default radio"
              />
              <CFormCheck
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Checked radio"
                defaultChecked
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Radio</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/checks-radios#disabled-1">
              <CFormCheck
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
                label="Disabled radio"
                disabled
              />
              <CFormCheck
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioCheckedDisabled"
                label="Disabled checked radio"
                defaultChecked
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Switches</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              A switch has the markup of a custom checkbox but uses the <code>switch</code> boolean
              properly to render a toggle switch. Switches also support the <code>disabled</code>{' '}
              attribute.
            </p>
            <DocsExample href="forms/checks-radios#switches">
              <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
              <CFormSwitch
                label="Checked switch checkbox input"
                id="formSwitchCheckChecked"
                defaultChecked
              />
              <CFormSwitch
                label="Disabled switch checkbox input"
                id="formSwitchCheckDisabled"
                disabled
              />
              <CFormSwitch
                label="Disabled checked switch checkbox input"
                id="formSwitchCheckCheckedDisabled"
                defaultChecked
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Switches</strong> <small>Sizes</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/checks-radios#sizes">
              <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
              <CFormSwitch
                size="lg"
                label="Large switch checkbox input"
                id="formSwitchCheckDefaultLg"
              />
              <CFormSwitch
                size="xl"
                label="Extra large switch checkbox input"
                id="formSwitchCheckDefaultXL"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checks and Radios</strong> <small>Default layout (stacked)</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              By default, any number of checkboxes and radios that are immediate sibling will be
              vertically stacked and appropriately spaced.
            </p>
            <DocsExample href="forms/checks-radios#default-stacked">
              <CFormCheck id="defaultCheck1" label="Default checkbox" />
              <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
            </DocsExample>
            <DocsExample href="forms/checks-radios#default-stacked">
              <CFormCheck
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                label="Default radio"
                defaultChecked
              />
              <CFormCheck
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                label="Second default radio"
              />
              <CFormCheck
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                label="Disabled radio"
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checks and Radios</strong> <small>Inline</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Group checkboxes or radios on the same horizontal row by adding <code>inline</code>{' '}
              boolean property to any <code>&lt;CFormCheck&gt;</code>.
            </p>
            <DocsExample href="forms/checks-radios#inline">
              <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
              <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
              <CFormCheck
                inline
                id="inlineCheckbox3"
                value="option3"
                label="3 (disabled)"
                disabled
              />
            </DocsExample>
            <DocsExample href="forms/checks-radios#inline">
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="option1"
                label="1"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                label="2"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox3"
                value="option3"
                label="3 (disabled)"
                disabled
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Checks and Radios</strong> <small>Without labels</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Remember to still provide some form of accessible name for assistive technologies (for
              instance, using <code>aria-label</code>).
            </p>
            <DocsExample href="forms/checks-radios#without-labels">
              <div>
                <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
              </div>
              <div>
                <CFormCheck
                  type="radio"
                  name="radioNoLabel"
                  id="radioNoLabel"
                  value=""
                  aria-label="..."
                />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Toggle buttons</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create button-like checkboxes and radio buttons by using <code>button</code> boolean
              property on the <code>&lt;CFormCheck&gt;</code> component. These toggle buttons can
              further be grouped in a button group if needed.
            </p>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'primary ' }}
                id="btn-check"
                autoComplete="off"
                label="Single toggle"
              />
            </DocsExample>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'primary ' }}
                id="btn-check-2"
                autoComplete="off"
                label="Checked"
                defaultChecked
              />
            </DocsExample>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'primary ' }}
                id="btn-check-3"
                autoComplete="off"
                label="Disabled"
                disabled
              />
            </DocsExample>
            <h3>Radio toggle buttons</h3>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                label="Checked"
                defaultChecked
              />
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
                label="Radio"
              />
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
                label="Radio"
                disabled
              />
              <CFormCheck
                button={{ color: 'secondary' }}
                type="radio"
                name="options"
                id="option4"
                autoComplete="off"
                label="Radio"
              />
            </DocsExample>
            <h3>Outlined styles</h3>
            <p className="text-body-secondary small">
              Different variants of button, such at the various outlined styles, are supported.
            </p>
            <DocsExample href="forms/checks-radios#toggle-buttons">
              <div>
                <CFormCheck
                  button={{ color: 'primary', variant: 'outline' }}
                  id="btn-check-outlined"
                  autoComplete="off"
                  label="Single toggle"
                />
              </div>
              <div>
                <CFormCheck
                  button={{ color: 'secondary', variant: 'outline' }}
                  id="btn-check-2-outlined"
                  autoComplete="off"
                  label="Checked"
                  defaultChecked
                />
              </div>
              <div>
                <CFormCheck
                  button={{ color: 'success', variant: 'outline' }}
                  type="radio"
                  name="options-outlined"
                  id="success-outlined"
                  autoComplete="off"
                  label="Radio"
                  defaultChecked
                />
                <CFormCheck
                  button={{ color: 'danger', variant: 'outline' }}
                  type="radio"
                  name="options-outlined"
                  id="danger-outlined"
                  autoComplete="off"
                  label="Radio"
                />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ChecksRadios
````

## File: src/views/forms/floating-labels/FloatingLabels.jsx
````javascript
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/floating-labels/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Floating labels</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Wrap a pair of <code>&lt;CFormInput&gt;</code> and <code>&lt;CFormLabel&gt;</code>{' '}
              elements in <code>CFormFloating</code> to enable floating labels with textual form
              fields. A <code>placeholder</code> is required on each <code>&lt;CFormInput&gt;</code>{' '}
              as our method of CSS-only floating labels uses the <code>:placeholder-shown</code>{' '}
              pseudo-element. Also note that the <code>&lt;CFormInput&gt;</code> must come first so
              we can utilize a sibling selector (e.g., <code>~</code>).
            </p>
            <DocsExample href="forms/floating-labels">
              <CFormFloating className="mb-3">
                <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
                <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
              </CFormFloating>
              <CFormFloating>
                <CFormInput type="password" id="floatingPassword" placeholder="Password" />
                <CFormLabel htmlFor="floatingPassword">Password</CFormLabel>
              </CFormFloating>
            </DocsExample>
            <p className="text-body-secondary small">
              When there&#39;s a <code>value</code> already defined, <code>&lt;CFormLabel&gt;</code>
              s will automatically adjust to their floated position.
            </p>
            <DocsExample href="forms/floating-labels">
              <CFormFloating>
                <CFormInput
                  type="email"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  defaultValue="test@example.com"
                />
                <CFormLabel htmlFor="floatingInputValue">Input with value</CFormLabel>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Floating labels</strong> <small>Textareas</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              By default, <code>&lt;CFormTextarea&gt;</code>s will be the same height as{' '}
              <code>&lt;CFormInput&gt;</code>s.
            </p>
            <DocsExample href="forms/floating-labels#textareas">
              <CFormFloating>
                <CFormTextarea
                  id="floatingTextarea"
                  placeholder="Leave a comment here"
                ></CFormTextarea>
                <CFormLabel htmlFor="floatingTextarea">Comments</CFormLabel>
              </CFormFloating>
            </DocsExample>
            <p className="text-body-secondary small">
              To set a custom height on your <code>&lt;CFormTextarea;&gt;</code>, do not use the{' '}
              <code>rows</code> attribute. Instead, set an explicit <code>height</code> (either
              inline or via custom CSS).
            </p>
            <DocsExample href="forms/floating-labels#textareas">
              <CFormFloating>
                <CFormTextarea
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: '100px' }}
                ></CFormTextarea>
                <CFormLabel htmlFor="floatingTextarea2">Comments</CFormLabel>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Floating labels</strong> <small>Selects</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Other than <code>&lt;CFormInput&gt;</code>, floating labels are only available on{' '}
              <code>&lt;CFormSelect&gt;</code>s. They work in the same way, but unlike{' '}
              <code>&lt;CFormInput&gt;</code>s, they&#39;ll always show the{' '}
              <code>&lt;CFormLabel&gt;</code> in its floated state.{' '}
              <strong>
                Selects with <code>size</code> and <code>multiple</code> are not supported.
              </strong>
            </p>
            <DocsExample href="forms/floating-labels#selects">
              <CFormFloating>
                <CFormSelect id="floatingSelect" aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CFormLabel htmlFor="floatingSelect">Works with selects</CFormLabel>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Floating labels</strong> <small>Layout</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              When working with the CoreUI for Bootstrap grid system, be sure to place form elements
              within column classes.
            </p>
            <DocsExample href="forms/floating-labels#layout">
              <CRow xs={{ gutter: 2 }}>
                <CCol md>
                  <CFormFloating>
                    <CFormInput
                      type="email"
                      id="floatingInputGrid"
                      placeholder="name@example.com"
                      defaultValue="email@example.com"
                    />
                    <CFormLabel htmlFor="floatingInputGrid">Email address</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol md>
                  <CFormFloating>
                    <CFormSelect id="floatingSelectGrid" aria-label="Floating label select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                    <CFormLabel htmlFor="floatingSelectGrid">Works with selects</CFormLabel>
                  </CFormFloating>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FloatingLabels
````

## File: src/views/forms/form-control/FormControl.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const FormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/form-control/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Set heights using <code>size</code> property like <code>size=&#34;lg&#34;</code> and{' '}
              <code>size=&#34;sm&#34;</code>.
            </p>
            <DocsExample href="forms/form-control#sizing">
              <CFormInput
                type="text"
                size="lg"
                placeholder="Large input"
                aria-label="lg input example"
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Default input"
                aria-label="default input example"
              />
              <br />
              <CFormInput
                type="text"
                size="sm"
                placeholder="Small input"
                aria-label="sm input example"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> boolean attribute on an input to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/form-control#disabled">
              <CFormInput
                type="text"
                placeholder="Disabled input"
                aria-label="Disabled input example"
                disabled
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Disabled readonly input"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              <br />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Readonly</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>readOnly</code> boolean attribute on an input to prevent modification of
              the input&#39;s value. Read-only inputs appear lighter (just like disabled inputs),
              but retain the standard cursor.
            </p>
            <DocsExample href="forms/form-control#readonly">
              <CFormInput
                type="text"
                placeholder="Readonly input here..."
                aria-label="readonly input example"
                readOnly
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Readonly plain text</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you want to have <code>&lt;input readonly&gt;</code> elements in your form styled
              as plain text, use the <code>plainText</code> boolean property to remove the default
              form field styling and preserve the correct margin and padding.
            </p>
            <DocsExample href="components/accordion">
              <CRow className="mb-3">
                <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="staticEmail"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="password" id="inputPassword" />
                </div>
              </CRow>
            </DocsExample>
            <DocsExample href="components/accordion">
              <CForm className="row g-3">
                <div className="col-auto">
                  <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="staticEmail2"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
                <div className="col-auto">
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Password
                  </CFormLabel>
                  <CFormInput type="password" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                  <CButton color="primary" type="submit" className="mb-3">
                    Confirm identity
                  </CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>File input</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control#file-input">
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Default file input example</CFormLabel>
                <CFormInput type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileMultiple">Multiple files input example</CFormLabel>
                <CFormInput type="file" id="formFileMultiple" multiple />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileDisabled">Disabled file input example</CFormLabel>
                <CFormInput type="file" id="formFileDisabled" disabled />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileSm">Small file input example</CFormLabel>
                <CFormInput type="file" size="sm" id="formFileSm" />
              </div>
              <div>
                <CFormLabel htmlFor="formFileLg">Large file input example</CFormLabel>
                <CFormInput type="file" size="lg" id="formFileLg" />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Color</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control#color">
              <CFormLabel htmlFor="exampleColorInput">Color picker</CFormLabel>
              <CFormInput
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
````

## File: src/views/forms/input-group/InputGroup.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const InputGroup = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/input-group/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Place one add-on or button on either side of an input. You may also place one on both
              sides of an input. Remember to place <code>&lt;CFormLabel&gt;</code>s outside the
              input group.
            </p>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">@</CInputGroupText>
                <CFormInput
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient&#39;s username"
                  aria-label="Recipient&#39;s username"
                  aria-describedby="basic-addon2"
                />
                <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
              </CInputGroup>
              <CFormLabel htmlFor="basic-url">Your vanity URL</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
                <CFormInput id="basic-url" aria-describedby="basic-addon3" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput aria-label="Amount (to the nearest dollar)" />
                <CInputGroupText>.00</CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Username" aria-label="Username" />
                <CInputGroupText>@</CInputGroupText>
                <CFormInput placeholder="Server" aria-label="Server" />
              </CInputGroup>
              <CInputGroup>
                <CInputGroupText>With textarea</CInputGroupText>
                <CFormTextarea aria-label="With textarea"></CFormTextarea>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Wrapping</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate
              custom form field validation within an input group. You may disable this with{' '}
              <code>.flex-nowrap</code>.
            </p>
            <DocsExample href="forms/input-group#wrapping">
              <CInputGroup className="flex-nowrap">
                <CInputGroupText id="addon-wrapping">@</CInputGroupText>
                <CFormInput
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the relative form sizing classes to the <code>&lt;CInputGroup&gt;</code> itself
              and contents within will automatically resize—no need for repeating the form control
              size classes on each element.
            </p>
            <p className="text-body-secondary small">
              <strong>Sizing on the individual input group elements isn&#39;tsupported.</strong>
            </p>
            <DocsExample href="forms/input-group#sizing">
              <CInputGroup size="sm" className="mb-3">
                <CInputGroupText id="inputGroup-sizing-sm">Small</CInputGroupText>
                <CFormInput
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText id="inputGroup-sizing-default">Default</CInputGroupText>
                <CFormInput
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </CInputGroup>
              <CInputGroup size="lg">
                <CInputGroupText id="inputGroup-sizing-lg">Large</CInputGroupText>
                <CFormInput
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Checkboxes and radios</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Place any checkbox or radio option within an input group&#39;s addon instead of text.
            </p>
            <DocsExample href="forms/input-group#checkboxes-and-radios">
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CFormCheck
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </CInputGroupText>
                <CFormInput aria-label="Text input with checkbox" />
              </CInputGroup>
              <CInputGroup>
                <CInputGroupText>
                  <CFormCheck
                    type="radio"
                    value=""
                    aria-label="Radio button for following text input"
                  />
                </CInputGroupText>
                <CFormInput aria-label="Text input with radio button" />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Multiple inputs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              While multiple <code>&lt;CFormInput&gt;</code>s are supported visually, validation
              styles are only available for input groups with a single{' '}
              <code>&lt;CFormInput&gt;</code>.
            </p>
            <DocsExample href="forms/input-group#multiple-inputs">
              <CInputGroup>
                <CInputGroupText>First and last name</CInputGroupText>
                <CFormInput aria-label="First name" />
                <CFormInput aria-label="Last name" />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Multiple addons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Multiple add-ons are supported and can be mixed with checkbox and radio input
              versions..
            </p>
            <DocsExample href="forms/input-group#multiple-addons">
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CInputGroupText>0.00</CInputGroupText>
                <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
              </CInputGroup>
              <CInputGroup>
                <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
                <CInputGroupText>$</CInputGroupText>
                <CInputGroupText>0.00</CInputGroupText>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Button addons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Multiple add-ons are supported and can be mixed with checkbox and radio input
              versions..
            </p>
            <DocsExample href="forms/input-group#button-addons">
              <CInputGroup className="mb-3">
                <CButton type="button" color="secondary" variant="outline" id="button-addon1">
                  Button
                </CButton>
                <CFormInput
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <CButton type="button" color="secondary" variant="outline" id="button-addon2">
                  Button
                </CButton>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton type="button" color="secondary" variant="outline">
                  Button
                </CButton>
                <CButton type="button" color="secondary" variant="outline">
                  Button
                </CButton>
                <CFormInput placeholder="" aria-label="Example text with two button addons" />
              </CInputGroup>
              <CInputGroup>
                <CFormInput
                  placeholder="Recipient's username"
                  aria-label="Recipient's username with two button addons"
                />
                <CButton type="button" color="secondary" variant="outline">
                  Button
                </CButton>
                <CButton type="button" color="secondary" variant="outline">
                  Button
                </CButton>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Buttons with dropdowns</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#buttons-with-dropdowns">
              <CInputGroup className="mb-3">
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    Dropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with dropdown button" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput aria-label="Text input with dropdown button" />
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    Dropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
              <CInputGroup>
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    Dropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with 2 dropdown buttons" />
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    Dropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Segmented buttons</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#segmented-buttons">
              <CInputGroup className="mb-3">
                <CDropdown variant="input-group">
                  <CButton type="button" color="secondary" variant="outline">
                    Action
                  </CButton>
                  <CDropdownToggle color="secondary" variant="outline" split />
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with segmented dropdown button" />
              </CInputGroup>
              <CInputGroup>
                <CFormInput aria-label="Text input with segmented dropdown button" />
                <CDropdown alignment="end" variant="input-group">
                  <CButton type="button" color="secondary" variant="outline">
                    Action
                  </CButton>
                  <CDropdownToggle color="secondary" variant="outline" split />
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Custom select</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#custom-select">
              <CInputGroup className="mb-3">
                <CInputGroupText as="label" htmlFor="inputGroupSelect01">
                  Options
                </CInputGroupText>
                <CFormSelect id="inputGroupSelect01">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect id="inputGroupSelect02">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CInputGroupText as="label" htmlFor="inputGroupSelect02">
                  Options
                </CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton type="button" color="secondary" variant="outline">
                  Button
                </CButton>
                <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup>
                <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CButton type="button" color="secondary" variant="outline">
                  Button
                </CButton>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Custom file input</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#custom-file-input">
              <CInputGroup className="mb-3">
                <CInputGroupText as="label" htmlFor="inputGroupFile01">
                  Upload
                </CInputGroupText>
                <CFormInput type="file" id="inputGroupFile01" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput type="file" id="inputGroupFile02" />
                <CInputGroupText as="label" htmlFor="inputGroupFile02">
                  Upload
                </CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton
                  type="button"
                  color="secondary"
                  variant="outline"
                  id="inputGroupFileAddon03"
                >
                  Button
                </CButton>
                <CFormInput
                  type="file"
                  id="inputGroupFile03"
                  aria-describedby="inputGroupFileAddon03"
                  aria-label="Upload"
                />
              </CInputGroup>
              <CInputGroup>
                <CFormInput
                  type="file"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
                <CButton
                  type="button"
                  color="secondary"
                  variant="outline"
                  id="inputGroupFileAddon04"
                >
                  Button
                </CButton>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default InputGroup
````

## File: src/views/forms/layout/Layout.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Layout = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/layout/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Form grid</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              More complex forms can be built using our grid classes. Use these for form layouts
              that require multiple columns, varied widths, and additional alignment options.
            </p>
            <DocsExample href="forms/layout#form-grid">
              <CRow>
                <CCol xs>
                  <CFormInput placeholder="First name" aria-label="First name" />
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Gutters</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              By adding <a href="https://coreui.io/docs/layout/gutters/">gutter modifier classes</a>
              , you can have control over the gutter width in as well the inline as block direction.
            </p>
            <DocsExample href="forms/layout#gutters">
              <CRow className="g-3">
                <CCol xs>
                  <CFormInput placeholder="First name" aria-label="First name" />
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
            </DocsExample>
            <p className="text-body-secondary small">
              More complex layouts can also be created with the grid system.
            </p>
            <DocsExample href="forms/layout#gutters">
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Email</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
                  <CFormInput type="password" id="inputPassword4" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="1234 Main St" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAddress2">Address 2</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputCity">City</CFormLabel>
                  <CFormInput id="inputCity" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">State</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
                  <CFormInput id="inputZip" />
                </CCol>
                <CCol xs={12}>
                  <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Sign in
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Horizontal form</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create horizontal forms with the grid by adding the <code>.row</code> class to form
              groups and using the <code>.col-*-*</code> classes to specify the width of your labels
              and controls. Be sure to add <code>.col-form-label</code> to your{' '}
              <code>&lt;CFormLabel&gt;</code>s as well so they&#39;re vertically centered with their
              associated form controls.
            </p>
            <p className="text-body-secondary small">
              At times, you maybe need to use margin or padding utilities to create that perfect
              alignment you need. For example, we&#39;ve removed the <code>padding-top</code> on our
              stacked radio inputs label to better align the text baseline.
            </p>
            <DocsExample href="forms/layout#horizontal-form">
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Password
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="password" id="inputPassword3" />
                  </CCol>
                </CRow>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <CCol sm={10}>
                    <CFormCheck
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      label="First radio"
                      defaultChecked
                    />
                    <CFormCheck
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                      label="Second radio"
                    />
                    <CFormCheck
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option3"
                      label="Third disabled radio"
                      disabled
                    />
                  </CCol>
                </fieldset>
                <CRow className="mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
                  </div>
                </CRow>
                <CButton color="primary" type="submit">
                  Sign in
                </CButton>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Horizontal form label sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Be sure to use <code>.col-form-label-sm</code> or <code>.col-form-label-lg</code> to
              your <code>&lt;CFormLabel&gt;</code>s or <code>&lt;legend&gt;</code>s to correctly
              follow the size of <code>.form-control-lg</code> and <code>.form-control-sm</code>.
            </p>
            <DocsExample href="forms/layout#horizontal-form-label-sizing">
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="colFormLabelSm"
                  className="col-sm-2 col-form-label col-form-label-sm"
                >
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="email"
                    className="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="col-form-label-sm"
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="email" id="colFormLabel" placeholder="col-form-label" />
                </CCol>
              </CRow>
              <CRow>
                <CFormLabel
                  htmlFor="colFormLabelLg"
                  className="col-sm-2 col-form-label col-form-label-lg"
                >
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="email"
                    className="form-control form-control-lg"
                    id="colFormLabelLg"
                    placeholder="col-form-label-lg"
                  />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Column sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              As shown in the previous examples, our grid system allows you to place any number of{' '}
              <code>&lt;CCol&gt;</code>s within a <code>&lt;CRow&gt;</code>. They&#39;ll split the
              available width equally between them. You may also pick a subset of your columns to
              take up more or less space, while the remaining <code>&lt;CCol&gt;</code>s equally
              split the rest, with specific column classes like{' '}
              <code>&lt;CCol sm=&#34;7&#34;&gt;</code>.
            </p>
            <DocsExample href="forms/layout#column-sizing">
              <CRow className="g-3">
                <CCol sm={7}>
                  <CFormInput placeholder="City" aria-label="City" />
                </CCol>
                <CCol sm>
                  <CFormInput placeholder="State" aria-label="State" />
                </CCol>
                <CCol sm>
                  <CFormInput placeholder="Zip" aria-label="Zip" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Auto-sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The example below uses a flexbox utility to vertically center the contents and changes{' '}
              <code>&lt;CCol&gt;</code> to <code>&lt;CCol xs=&#34;auto&#34;&gt;</code> so that your
              columns only take up as much space as needed. Put another way, the column sizes itself
              based on the contents.
            </p>
            <DocsExample href="forms/layout#auto-sizing">
              <CForm className="row gy-2 gx-3 align-items-center">
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                    Name
                  </CFormLabel>
                  <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
                </CCol>
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
                    Username
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="autoSizingInputGroup" placeholder="Username" />
                  </CInputGroup>
                </CCol>
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">
                    Preference
                  </CFormLabel>
                  <CFormSelect id="autoSizingSelect">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
                </CCol>
                <CCol xs="auto">
                  <CButton color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
            <p className="text-body-secondary small">
              You can then remix that once again with size-specific column classes.
            </p>
            <DocsExample href="forms/layout#auto-sizing">
              <CForm className="row gx-3 gy-2 align-items-center">
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
                    Name
                  </CFormLabel>
                  <CFormInput id="specificSizeInputName" placeholder="Jane Doe" />
                </CCol>
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
                    Username
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="specificSizeInputGroupUsername" placeholder="Username" />
                  </CInputGroup>
                </CCol>
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">
                    Preference
                  </CFormLabel>
                  <CFormSelect id="specificSizeSelect">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me" />
                </CCol>
                <CCol xs="auto">
                  <CButton color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Inline forms</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>&lt;CCol xs=&#34;auto&#34;&gt;</code> class to create horizontal
              layouts. By adding{' '}
              <a href="https://coreui.io/docs/layout/gutters/">gutter modifier classes</a>, we will
              have gutters in horizontal and vertical directions. The{' '}
              <code>.align-items-center</code> aligns the form elements to the middle, making the{' '}
              <code>&lt;CFormCheck&gt;</code> align properly.
            </p>
            <DocsExample href="forms/layout#inline-forms">
              <CForm className="row row-cols-lg-auto g-3 align-items-center">
                <CCol xs={12}>
                  <CFormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
                    Username
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="inlineFormInputGroupUsername" placeholder="Username" />
                  </CInputGroup>
                </CCol>
                <CCol xs={12}>
                  <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
                    Preference
                  </CFormLabel>
                  <CFormSelect id="inlineFormSelectPref">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me" />
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Layout
````

## File: src/views/forms/range/Range.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormLabel, CFormRange, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Range = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/range/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create custom <code>&lt;input type=&#34;range&#34;&gt;</code> controls with{' '}
              <code>&lt;CFormRange&gt;</code>.
            </p>
            <DocsExample href="forms/range" tabContentClassName="bg-opacity-10">
              <CFormLabel htmlFor="customRange1">Example range</CFormLabel>
              <CFormRange id="customRange1" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> boolean attribute on an input to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/range#disabled" tabContentClassName="bg-opacity-10">
              <CFormLabel htmlFor="disabledRange">Disabled range</CFormLabel>
              <CFormRange id="disabledRange" disabled />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Min and max</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Range inputs have implicit values for <code>min</code> and <code>max</code>—
              <code>0</code> and <code>100</code>, respectively. You may specify new values for
              those using the <code>min</code> and <code>max</code> attributes.
            </p>
            <DocsExample href="forms/range#min-and-max" tabContentClassName="bg-opacity-10">
              <CFormLabel htmlFor="customRange2">Example range</CFormLabel>
              <CFormRange min={0} max={5} defaultValue="3" id="customRange2" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Steps</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              By default, range inputs &#34;snap&#34; to integer values. To change this, you can
              specify a <code>step</code> value. In the example below, we double the number of steps
              by using <code>step=&#34;0.5&#34;</code>.
            </p>
            <DocsExample href="forms/range#steps" tabContentClassName="bg-opacity-10">
              <CFormLabel htmlFor="customRange3">Example range</CFormLabel>
              <CFormRange min={0} max={5} step={0.5} defaultValue="3" id="customRange3" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Range
````

## File: src/views/forms/select/Select.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormSelect, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Select = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/select/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Default</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/select">
              <CFormSelect aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You may also choose from small and large custom selects to match our similarly sized
              text inputs.
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
              <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            <p className="text-body-secondary small">
              The <code>multiple</code> attribute is also supported:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
            <p className="text-body-secondary small">
              As is the <code>htmlSize</code> property:
            </p>
            <DocsExample href="forms/select#sizing">
              <CFormSelect size="lg" multiple aria-label="Multiple select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Select</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> boolean attribute on a select to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/select#disabled">
              <CFormSelect aria-label="Disabled select example" disabled>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Select
````

## File: src/views/forms/validation/Validation.jsx
````javascript
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <CFormSelect id="validationDefault04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
        <CFormInput type="text" id="validationTooltip01" defaultValue="Mark" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Email</CFormLabel>
        <CFormInput type="text" id="validationTooltip02" defaultValue="Otto" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
        <CFormSelect id="validationTooltip04" required>
          <option disabled defaultValue="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip05" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Validation = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/validation/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Custom styles</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              For custom CoreUI form validation messages, you&#39;ll need to add the{' '}
              <code>noValidate</code> boolean property to your <code>&lt;CForm&gt;</code>. This
              disables the browser default feedback tooltips, but still provides access to the form
              validation APIs in JavaScript. Try to submit the form below; our JavaScript will
              intercept the submit button and relay feedback to you. When attempting to submit,
              you&#39;ll see the <code>:invalid</code> and <code>:valid</code> styles applied to
              your form controls.
            </p>
            <p className="text-body-secondary small">
              Custom feedback styles apply custom colors, borders, focus styles, and background
              icons to better communicate feedback.{' '}
            </p>
            <DocsExample href="forms/validation">{CustomStyles()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Browser defaults</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Not interested in custom validation feedback messages or writing JavaScript to change
              form behaviors? All good, you can use the browser defaults. Try submitting the form
              below. Depending on your browser and OS, you&#39;ll see a slightly different style of
              feedback.
            </p>
            <p className="text-body-secondary small">
              While these feedback styles cannot be styled with CSS, you can still customize the
              feedback text through JavaScript.
            </p>
            <DocsExample href="forms/validation#browser-defaults">{BrowserDefaults()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Server side</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              We recommend using client-side validation, but in case you require server-side
              validation, you can indicate invalid and valid form fields with <code>invalid</code>{' '}
              and <code>valid</code> boolean properties.
            </p>
            <p className="text-body-secondary small">
              For invalid fields, ensure that the invalid feedback/error message is associated with
              the relevant form field using <code>aria-describedby</code> (noting that this
              attribute allows more than one <code>id</code> to be referenced, in case the field
              already points to additional form text).
            </p>
            <DocsExample href="forms/validation#server-side">
              <CForm className="row g-3 needs-validation">
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServer01">Email</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationServer01"
                    defaultValue="Mark"
                    valid
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationServer02"
                    defaultValue="Otto"
                    valid
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
                    <CFormInput
                      type="text"
                      id="validationServerUsername"
                      defaultValue=""
                      aria-describedby="inputGroupPrepend03"
                      invalid
                      required
                    />
                    <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationServer03">City</CFormLabel>
                  <CFormInput type="text" id="validationServer03" invalid required />
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="validationServer04">City</CFormLabel>
                  <CFormSelect id="validationServer04" invalid>
                    <option disabled>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="validationServer05">City</CFormLabel>
                  <CFormInput type="text" id="validationServer05" invalid required />
                  <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    invalid
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Supported elements</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Validation styles are available for the following form controls and components:
            </p>
            <ul>
              <li>
                <code>&lt;CFormInput&gt;</code>s
              </li>
              <li>
                <code>&lt;CFormSelect&gt;</code>s
              </li>
              <li>
                <code>&lt;CFormCheck&gt;</code>s
              </li>
            </ul>
            <DocsExample href="forms/validation#supported-elements">
              <CForm validated={true}>
                <div className="mb-3">
                  <CFormLabel htmlFor="validationTextarea" className="form-label">
                    Textarea
                  </CFormLabel>
                  <CFormTextarea
                    id="validationTextarea"
                    placeholder="Required example textarea"
                    invalid
                    required
                  ></CFormTextarea>
                  <CFormFeedback invalid>Please enter a message in the textarea.</CFormFeedback>
                </div>
                <CFormCheck
                  className="mb-3"
                  id="validationFormCheck1"
                  label="Check this checkbox"
                  required
                />
                <CFormFeedback invalid>Example invalid feedback text</CFormFeedback>

                <CFormCheck
                  type="radio"
                  name="radio-stacked"
                  id="validationFormCheck2"
                  label="Check this checkbox"
                  required
                />

                <CFormCheck
                  className="mb-3"
                  type="radio"
                  name="radio-stacked"
                  id="validationFormCheck3"
                  label="Or toggle this other radio"
                  required
                />
                <CFormFeedback invalid>More example invalid feedback text</CFormFeedback>

                <div className="mb-3">
                  <CFormSelect required aria-label="select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Example invalid select feedback</CFormFeedback>
                </div>

                <div className="mb-3">
                  <CFormInput
                    type="file"
                    id="validationTextarea"
                    aria-label="file example"
                    required
                  />
                  <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                </div>

                <div className="mb-3">
                  <CButton type="submit" color="primary" disabled>
                    Submit form
                  </CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Tooltips</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If your form layout allows it, you can swap the text for the tooltip to display
              validation feedback in a styled tooltip. Be sure to have a parent with{' '}
              <code>position: relative</code> on it for tooltip positioning. In the example below,
              our column classes have this already, but your project may require an alternative
              setup.
            </p>
            <DocsExample href="forms/validation#tooltips">{Tooltips()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
````

## File: src/views/icons/brands/Brands.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { brandSet } from '@coreui/icons'
import { DocsIcons } from 'src/components'

const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const getIconsView = (iconset) => {
  return Object.entries(iconset).map(([name, value]) => (
    <CCol className="mb-5" xs={6} sm={4} md={3} xl={2} key={name}>
      <CIcon icon={value} size="xxl" />
      <div>{toKebabCase(name)}</div>
    </CCol>
  ))
}

const CoreUIIcons = () => {
  return (
    <>
      <DocsIcons />
      <CCard className="mb-4">
        <CCardHeader>Brand Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(brandSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
````

## File: src/views/icons/coreui-icons/CoreUIIcons.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { getIconsView } from '../brands/Brands.jsx'
import { DocsIcons } from 'src/components'

const CoreUIIcons = () => {
  return (
    <>
      <DocsIcons />
      <CCard className="mb-4">
        <CCardHeader>Free Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(freeSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
````

## File: src/views/icons/flags/Flags.jsx
````javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { getIconsView } from '../brands/Brands.jsx'
import { flagSet } from '@coreui/icons'
import { DocsIcons } from 'src/components'

const CoreUIIcons = () => {
  return (
    <>
      <DocsIcons />
      <CCard className="mb-4">
        <CCardHeader>Flag Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(flagSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
````

## File: src/views/notifications/alerts/Alerts.jsx
````javascript
import React from 'react'
import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/alert/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              React Alert is prepared for any length of text, as well as an optional close button.
              For a styling, use one of the <strong>required</strong> contextual <code>color</code>{' '}
              props (e.g., <code>primary</code>). For inline dismissal, use the{' '}
              <a href="https://coreui.io/react/docs/components/alert#dismissing">dismissing prop</a>
              .
            </p>
            <DocsExample href="components/alert">
              <CAlert color="primary">A simple primary alert—check it out!</CAlert>
              <CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
              <CAlert color="success">A simple success alert—check it out!</CAlert>
              <CAlert color="danger">A simple danger alert—check it out!</CAlert>
              <CAlert color="warning">A simple warning alert—check it out!</CAlert>
              <CAlert color="info">A simple info alert—check it out!</CAlert>
              <CAlert color="light">A simple light alert—check it out!</CAlert>
              <CAlert color="dark">A simple dark alert—check it out!</CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong> <small>Link color</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>&lt;CAlertLink&gt;</code> component to immediately give matching colored
              links inside any alert.
            </p>
            <DocsExample href="components/alert#link-color">
              <CAlert color="primary">
                A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="secondary">
                A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="success">
                A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="danger">
                A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="warning">
                A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give
                it a click if you like.
              </CAlert>
              <CAlert color="info">
                A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it
                a click if you like.
              </CAlert>
              <CAlert color="light">
                A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it
                a click if you like.
              </CAlert>
              <CAlert color="dark">
                A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it
                a click if you like.
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong> <small>Additional content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Alert can also incorporate supplementary components &amp; elements like heading,
              paragraph, and divider.
            </p>
            <DocsExample href="components/alert#additional-content">
              <CAlert color="success">
                <CAlertHeading as="h4">Well done!</CAlertHeading>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is
                  going to run a bit longer so that you can see how spacing within an alert works
                  with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and
                  tidy.
                </p>
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Alert</strong> <small>Dismissing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Alerts can also be easily dismissed. Just add the <code>dismissible</code> prop.
            </p>
            <DocsExample href="components/alert#dismissing">
              <CAlert
                color="warning"
                dismissible
                onClose={() => {
                  alert('👋 Well, hi there! Thanks for dismissing me.')
                }}
              >
                <strong>Go right ahead</strong> and click that dimiss over there on the right.
              </CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Alerts
````

## File: src/views/notifications/badges/Badges.jsx
````javascript
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CBadge, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const Badges = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/badge/" />
      </CCol>
      <CCol lg={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Badges</strong> <small>Dismissing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Bootstrap badge scale to suit the size of the parent element by using relative font
              sizing and <code>em</code> units.
            </p>
            <DocsExample href="components/badge">
              <h1>
                Example heading <CBadge color="secondary">New</CBadge>
              </h1>
              <h2>
                Example heading <CBadge color="secondary">New</CBadge>
              </h2>
              <h3>
                Example heading <CBadge color="secondary">New</CBadge>
              </h3>
              <h4>
                Example heading <CBadge color="secondary">New</CBadge>
              </h4>
              <h5>
                Example heading <CBadge color="secondary">New</CBadge>
              </h5>
              <h6>
                Example heading <CBadge color="secondary">New</CBadge>
              </h6>
            </DocsExample>
            <p className="text-body-secondary small">
              Badges can be used as part of links or buttons to provide a counter.
            </p>
            <DocsExample href="components/badge">
              <CButton color="primary">
                Notifications <CBadge color="secondary">4</CBadge>
              </CButton>
            </DocsExample>
            <p className="text-body-secondary small">
              Remark that depending on how you use them, badges may be complicated for users of
              screen readers and related assistive technologies.
            </p>
            <p className="text-body-secondary small">
              Unless the context is clear, consider including additional context with a visually
              hidden piece of additional text.
            </p>
            <DocsExample href="components/badge">
              <CButton color="primary">
                Profile <CBadge color="secondary">9</CBadge>
                <span className="visually-hidden">unread messages</span>
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Badges</strong> <small>Contextual variations</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add any of the below-mentioned <code>color</code> props to modify the presentation of
              a badge.
            </p>
            <DocsExample href="components/badge#contextual-variations">
              <CBadge color="primary">primary</CBadge>
              <CBadge color="success">success</CBadge>
              <CBadge color="danger">danger</CBadge>
              <CBadge color="warning">warning</CBadge>
              <CBadge color="info">info</CBadge>
              <CBadge color="light">light</CBadge>
              <CBadge color="dark">dark</CBadge>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Badges</strong> <small>Pill badges</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Apply the <code>shape=&#34;rounded-pill&#34;</code> prop to make badges rounded.
            </p>
            <DocsExample href="components/badge#pill-badges">
              <CBadge color="primary" shape="rounded-pill">
                primary
              </CBadge>
              <CBadge color="success" shape="rounded-pill">
                success
              </CBadge>
              <CBadge color="danger" shape="rounded-pill">
                danger
              </CBadge>
              <CBadge color="warning" shape="rounded-pill">
                warning
              </CBadge>
              <CBadge color="info" shape="rounded-pill">
                info
              </CBadge>
              <CBadge color="light" shape="rounded-pill">
                light
              </CBadge>
              <CBadge color="dark" shape="rounded-pill">
                dark
              </CBadge>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Badges
````

## File: src/views/notifications/modals/Modals.jsx
````javascript
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CRow,
  CTooltip,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const LiveDemo = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>Woohoo, you&#39;re reading this text in a modal!</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const StaticBackdrop = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch static backdrop modal
      </CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          I will not close if you click outside me. Don&#39;teven try to press escape key.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const ScrollingLongContent = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const ScrollingLongContent2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Vertically centered modal
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const VerticallyCentered2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Vertically centered scrollable modal
      </CButton>
      <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const TooltipsPopovers = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5>Popover in a modal</h5>
          <p>
            This
            <CPopover title="Popover title" content="Popover body content is set in this property.">
              <CButton color="primary">button</CButton>
            </CPopover>{' '}
            triggers a popover on click.
          </p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p>
            <CTooltip content="Tooltip">
              <CLink>This link</CLink>
            </CTooltip>{' '}
            and
            <CTooltip content="Tooltip">
              <CLink>that link</CLink>
            </CTooltip>{' '}
            have tooltips on hover.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const OptionalSizes = () => {
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Extra large modal
      </CButton>
      <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>
        Large modal
      </CButton>
      <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>
        Small large modal
      </CButton>
      <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>Extra large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
        <CModalHeader>
          <CModalTitle>Small modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}

const FullscreenModal = () => {
  const [visible, setVisible] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  const [visibleMd, setVisibleMd] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleXXL, setVisibleXXL] = useState(false)

  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Full screen
      </CButton>
      <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>
        Full screen below sm
      </CButton>
      <CButton color="primary" onClick={() => setVisibleMd(!visibleMd)}>
        Full screen below md
      </CButton>
      <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>
        Full screen below lg
      </CButton>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Full screen below xl
      </CButton>
      <CButton color="primary" onClick={() => setVisibleXXL(!visibleXXL)}>
        Full screen below xxl
      </CButton>
      <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Full screen</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
        <CModalHeader>
          <CModalTitle>Full screen below sm</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="md" visible={visibleMd} onClose={() => setVisibleMd(false)}>
        <CModalHeader>
          <CModalTitle>Full screen below md</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Full screen below lg</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>Full screen below xl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal fullscreen="xxl" visible={visibleXXL} onClose={() => setVisibleXXL(false)}>
        <CModalHeader>
          <CModalTitle>Full screen below xxl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}

const Modals = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/modal/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Below is a static modal example (meaning its <code>position</code> and{' '}
              <code>display</code> have been overridden). Included are the modal header, modal body
              (required for <code>padding</code>), and modal footer (optional). We ask that you
              include modal headers with dismiss actions whenever possible, or provide another
              explicit dismiss action.
            </p>
            <DocsExample href="components/modal">
              <CModal
                className="show d-block position-static"
                backdrop={false}
                keyboard={false}
                portal={false}
                visible
              >
                <CModalHeader>
                  <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>Modal body text goes here.</CModalBody>
                <CModalFooter>
                  <CButton color="secondary">Close</CButton>
                  <CButton color="primary">Save changes</CButton>
                </CModalFooter>
              </CModal>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Live demo</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Toggle a working modal demo by clicking the button below. It will slide down and fade
              in from the top of the page.
            </p>
            <DocsExample href="components/modal#live-demo">{LiveDemo()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Static backdrop</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you don’t provide an <code>onDimsiss</code> handler to the Modal component, your
              modal will behave as though the backdrop is static, meaning it will not close when
              clicking outside it. Click the button below to try it.
            </p>
            <DocsExample href="components/modal#static-backdrop">{StaticBackdrop()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Scrolling long content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you don’t provide an <code>onDimsiss</code> handler to the Modal component, your
              modal will behave as though the backdrop is static, meaning it will not close when
              clicking outside it. Click the button below to try it.
            </p>
            <DocsExample href="components/modal#scrolling-long-content">
              {ScrollingLongContent()}
            </DocsExample>
            <p className="text-body-secondary small">
              You can also create a scrollable modal that allows scroll the modal body by adding{' '}
              <code>scrollable</code> prop.
            </p>
            <DocsExample href="components/modal#scrolling-long-content">
              {ScrollingLongContent2()}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Vertically centered</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add <code>alignment=&#34;center&#34;</code> to <code>&lt;CModal&gt;</code> to
              vertically center the modal.
            </p>
            <DocsExample href="components/modal#vertically-centered">
              {VerticallyCentered()}
            </DocsExample>
            <DocsExample href="components/modal#vertically-centered">
              {VerticallyCentered2()}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Tooltips and popovers</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              <code>&lt;CTooltips&gt;</code> and <code>&lt;CPopovers&gt;</code> can be placed within
              modals as needed. When modals are closed, any tooltips and popovers within are also
              automatically dismissed.
            </p>
            <DocsExample href="components/modal#tooltips-and-popovers">
              {TooltipsPopovers()}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Optional sizes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modals have three optional sizes, available via modifier classes to be placed on a{' '}
              <code>&lt;CModal&gt;</code>. These sizes kick in at certain breakpoints to avoid
              horizontal scrollbars on narrower viewports.
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Property size</th>
                  <th>Modal max-width</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Small</td>
                  <td>
                    <code>&#39;sm&#39;</code>
                  </td>
                  <td>
                    <code>300px</code>
                  </td>
                </tr>
                <tr>
                  <td>Default</td>
                  <td className="text-body-secondary">None</td>
                  <td>
                    <code>500px</code>
                  </td>
                </tr>
                <tr>
                  <td>Large</td>
                  <td>
                    <code>&#39;lg&#39;</code>
                  </td>
                  <td>
                    <code>800px</code>
                  </td>
                </tr>
                <tr>
                  <td>Extra large</td>
                  <td>
                    <code>&#39;xl&#39;</code>
                  </td>
                  <td>
                    <code>1140px</code>
                  </td>
                </tr>
              </tbody>
            </table>
            <DocsExample href="components/modal#optional-sizes">{OptionalSizes()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Fullscreen Modal</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Another override is the option to pop up a modal that covers the user viewport,
              available via property <code>fullscrean</code>.
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Property fullscrean</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>true</code>
                  </td>
                  <td>Always</td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;sm&#39;</code>
                  </td>
                  <td>
                    Below <code>576px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;md&#39;</code>
                  </td>
                  <td>
                    Below <code>768px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;lg&#39;</code>
                  </td>
                  <td>
                    Below <code>992px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;xl&#39;</code>
                  </td>
                  <td>
                    Below <code>1200px</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>&#39;xxl&#39;</code>
                  </td>
                  <td>
                    Below <code>1400px</code>
                  </td>
                </tr>
              </tbody>
            </table>
            <DocsExample href="components/modal#fullscreen-modal">{FullscreenModal()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Modals
````

## File: src/views/notifications/toasts/Toasts.jsx
````javascript
import React, { useRef, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const ExampleToast = () => {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  return (
    <>
      <CButton color="primary" onClick={() => addToast(exampleToast)}>
        Send a toast
      </CButton>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

const Toasts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/toast/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Toasts are as flexible as you need and have very little required markup. At a minimum,
              we require a single element to contain your “toasted” content and strongly encourage a
              dismiss button.
            </p>
            <DocsExample href="components/toast">
              <CToast autohide={false} visible={true}>
                <CToastHeader closeButton>
                  <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>
                  <strong className="me-auto">CoreUI for React.js</strong>
                  <small>7 min ago</small>
                </CToastHeader>
                <CToastBody>Hello, world! This is a toast message.</CToastBody>
              </CToast>
            </DocsExample>
            <DocsExample href="components/toast">{ExampleToast()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Translucent</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Toasts are slightly translucent to blend in with what&#39;s below them.
            </p>
            <DocsExample href="components/toast#translucent" tabContentClassName="bg-dark">
              <CToast autohide={false} visible={true}>
                <CToastHeader closeButton>
                  <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>
                  <strong className="me-auto">CoreUI for React.js</strong>
                  <small>7 min ago</small>
                </CToastHeader>
                <CToastBody>Hello, world! This is a toast message.</CToastBody>
              </CToast>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Stacking</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can stack toasts by wrapping them in a toast container, which will vertically add
              some spacing.
            </p>
            <DocsExample href="components/toast#stacking">
              <CToaster className="position-static">
                <CToast autohide={false} visible={true}>
                  <CToastHeader closeButton>
                    <svg
                      className="rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="me-auto">CoreUI for React.js</strong>
                    <small>7 min ago</small>
                  </CToastHeader>
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                </CToast>
                <CToast autohide={false} visible={true}>
                  <CToastHeader closeButton>
                    <svg
                      className="rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="me-auto">CoreUI for React.js</strong>
                    <small>7 min ago</small>
                  </CToastHeader>
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                </CToast>
              </CToaster>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Custom content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Customize your toasts by removing sub-components, tweaking them with{' '}
              <a href="https://coreui.io/docs/utilities/api">utilities</a>, or by adding your own
              markup. Here we&#39;ve created a simpler toast by removing the default{' '}
              <code>&lt;CToastHeader&gt;</code>, adding a custom hide icon from{' '}
              <a href="https://coreui.io/icons/">CoreUI Icons</a>, and using some{' '}
              <a href="https://coreui.io/docs/utilities/flex">flexbox utilities</a> to adjust the
              layout.
            </p>
            <DocsExample href="components/toast#custom-content">
              <CToast autohide={false} className="align-items-center" visible={true}>
                <div className="d-flex">
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                  <CToastClose className="me-2 m-auto" />
                </div>
              </CToast>
            </DocsExample>
            <p className="text-body-secondary small">
              Alternatively, you can also add additional controls and components to toasts.
            </p>
            <DocsExample href="components/toast#custom-content">
              <CToast autohide={false} visible={true}>
                <CToastBody>
                  Hello, world! This is a toast message.
                  <div className="mt-2 pt-2 border-top">
                    <CButton type="button" color="primary" size="sm">
                      Take action
                    </CButton>
                    <CToastClose as={CButton} color="secondary" size="sm" className="ms-1">
                      Close
                    </CToastClose>
                  </div>
                </CToastBody>
              </CToast>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Custom content</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Building on the above example, you can create different toast color schemes with our{' '}
              <a href="https://coreui.io/docs/utilities/colors">color</a> and{' '}
              <a href="https://coreui.io/docs/utilities/background">background</a> utilities. Here
              we&#39;ve set <code>color=&#34;primary&#34;</code> and added <code>.text-white</code>{' '}
              class to the <code>&lt;Ctoast&gt;</code>, and then set <code>white</code> property to
              our close button. For a crisp edge, we remove the default border with{' '}
              <code>.border-0</code>.
            </p>
            <DocsExample href="components/toast#color-schemes">
              <CToast
                autohide={false}
                color="primary"
                className="text-white align-items-center"
                visible={true}
              >
                <div className="d-flex">
                  <CToastBody>Hello, world! This is a toast message.</CToastBody>
                  <CToastClose className="me-2 m-auto" white />
                </div>
              </CToast>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Toasts
````

## File: src/views/pages/login/Login.jsx
````javascript
import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
````

## File: src/views/pages/page404/Page404.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const Page404 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-body-secondary float-start">
                The page you are looking for was not found.
              </p>
            </div>
            <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />
              </CInputGroupText>
              <CFormInput type="text" placeholder="What are you looking for?" />
              <CButton color="info">Search</CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
````

## File: src/views/pages/page500/Page500.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const Page500 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-body-secondary float-start">
                The page you are looking for is temporarily unavailable.
              </p>
            </span>
            <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />
              </CInputGroupText>
              <CFormInput type="text" placeholder="What are you looking for?" />
              <CButton color="info">Search</CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500
````

## File: src/views/pages/register/Register.jsx
````javascript
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
````

## File: src/views/theme/colors/Colors.jsx
````javascript
import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-body-secondary">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-primary">
              <h6>Brand Primary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-secondary">
              <h6>Brand Secondary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Brand Success Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Brand Danger Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Brand Warning Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Brand Info Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Brand Light Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Brand Dark Color</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
````

## File: src/views/theme/typography/Typography.jsx
````javascript
import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Headings
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>
          <p>
            Documentation and examples for Bootstrap typography, including global settings,
            headings, body text, lists, and more.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Heading</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h1">h1. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h2">h2. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h3">h3. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h4">h4. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h5">h5. Bootstrap heading</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code>
                  </p>
                </td>
                <td>
                  <span className="h6">h6. Bootstrap heading</span>
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Headings</CCardHeader>
        <CCardBody>
          <p>
            <code className="highlighter-rouge">.h1</code> through
            <code className="highlighter-rouge">.h6</code>
            classes are also available, for when you want to match the font styling of a heading but
            cannot use the associated HTML element.
          </p>
          <div className="bd-example">
            <p className="h1">h1. Bootstrap heading</p>
            <p className="h2">h2. Bootstrap heading</p>
            <p className="h3">h3. Bootstrap heading</p>
            <p className="h4">h4. Bootstrap heading</p>
            <p className="h5">h5. Bootstrap heading</p>
            <p className="h6">h6. Bootstrap heading</p>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <div className="card-header">Display headings</div>
        <div className="card-body">
          <p>
            Traditional heading elements are designed to work best in the meat of your page content.
            When you need a heading to stand out, consider using a <strong>display heading</strong>
            —a larger, slightly more opinionated heading style.
          </p>
          <div className="bd-example bd-example-type">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="display-1">Display 1</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="display-2">Display 2</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="display-3">Display 3</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="display-4">Display 4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Inline text elements</CCardHeader>
        <CCardBody>
          <p>
            Traditional heading elements are designed to work best in the meat of your page content.
            When you need a heading to stand out, consider using a <strong>display heading</strong>
            —a larger, slightly more opinionated heading style.
          </p>
          <div className="bd-example">
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>This line of text is meant to be treated as deleted text.</del>
            </p>
            <p>
              <s>This line of text is meant to be treated as no longer accurate.</s>
            </p>
            <p>
              <ins>This line of text is meant to be treated as an addition to the document.</ins>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <small>This line of text is meant to be treated as fine print.</small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Description list alignment</CCardHeader>
        <CCardBody>
          <p>
            Align terms and descriptions horizontally by using our grid system’s predefined classes
            (or semantic mixins). For longer terms, you can optionally add a{' '}
            <code className="highlighter-rouge">.text-truncate</code> class to truncate the text
            with an ellipsis.
          </p>
          <div className="bd-example">
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

              <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
````

## File: src/views/widgets/Widgets.jsx
````javascript
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CLink,
  CRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const Widgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <CCard className="mb-4">
      <CCardHeader>Widgets</CCardHeader>
      <CCardBody>
        <DocsExample href="components/widgets/#cwidgetstatsa">
          <WidgetsDropdown />
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsb">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                progress={{ color: 'success', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
                title="Widget title"
                value="89.9%"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                value="12.124"
                title="Widget title"
                progress={{ color: 'info', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                value="$98.111,00"
                title="Widget title"
                progress={{ color: 'warning', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                value="2 TB"
                title="Widget title"
                progress={{ color: 'primary', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsb">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                color="success"
                inverse
                value="89.9%"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                color="info"
                inverse
                value="12.124"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                color="warning"
                inverse
                value="$98.111,00"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsB
                color="primary"
                inverse
                value="2 TB"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatse">
          <CRow xs={{ gutter: 4 }}>
            <CCol sm={4} md={3} xl={2}>
              <CWidgetStatsE
                chart={
                  <CChartBar
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-danger'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                }
                title="title"
                value="1,123"
              />
            </CCol>
            <CCol sm={4} md={3} xl={2}>
              <CWidgetStatsE
                chart={
                  <CChartBar
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-primary'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                }
                title="title"
                value="1,123"
              />
            </CCol>
            <CCol sm={4} md={3} xl={2}>
              <CWidgetStatsE
                chart={
                  <CChartBar
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-success'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                }
                title="title"
                value="1,123"
              />
            </CCol>
            <CCol sm={4} md={3} xl={2}>
              <CWidgetStatsE
                chart={
                  <CChartLine
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-danger'),
                          borderWidth: 2,
                          data: [
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                }
                title="title"
                value="1,123"
              />
            </CCol>
            <CCol sm={4} md={3} xl={2}>
              <CWidgetStatsE
                chart={
                  <CChartLine
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-success'),
                          borderWidth: 2,
                          data: [
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                }
                title="title"
                value="1,123"
              />
            </CCol>
            <CCol sm={4} md={3} xl={2}>
              <CWidgetStatsE
                chart={
                  <CChartLine
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-info'),
                          borderWidth: 2,
                          data: [
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                            random(40, 100),
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                }
                title="title"
                value="1,123"
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsf">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilSettings} size="xl" />}
                title="income"
                value="$1.999,50"
                color="primary"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilUser} size="xl" />}
                title="income"
                value="$1.999,50"
                color="info"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilMoon} size="xl" />}
                title="income"
                value="$1.999,50"
                color="warning"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilBell} size="xl" />}
                title="income"
                value="$1.999,50"
                color="danger"
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsf">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilSettings} size="xl" />}
                title="income"
                value="$1.999,50"
                color="primary"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilLaptop} size="xl" />}
                title="income"
                value="$1.999,50"
                color="info"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilMoon} size="xl" />}
                title="income"
                value="$1.999,50"
                color="warning"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilBell} size="xl" />}
                title="income"
                value="$1.999,50"
                color="danger"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-body-secondary"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsf">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilSettings} size="xl" />}
                padding={false}
                title="income"
                value="$1.999,50"
                color="primary"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilUser} size="xl" />}
                padding={false}
                title="income"
                value="$1.999,50"
                color="info"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilMoon} size="xl" />}
                padding={false}
                title="income"
                value="$1.999,50"
                color="warning"
              />
            </CCol>
            <CCol xs={12} sm={6} xl={4} xxl={3}>
              <CWidgetStatsF
                icon={<CIcon width={24} icon={cilBell} size="xl" />}
                padding={false}
                title="income"
                value="$1.999,50"
                color="danger"
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsd">
          <WidgetsBrand />
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsd">
          <WidgetsBrand withCharts />
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsc">
          <CCardGroup className="mb-4">
            <CWidgetStatsC
              icon={<CIcon icon={cilPeople} height={36} />}
              value="87.500"
              title="Visitors"
              progress={{ color: 'info', value: 75 }}
            />
            <CWidgetStatsC
              icon={<CIcon icon={cilUserFollow} height={36} />}
              value="385"
              title="New Clients"
              progress={{ color: 'success', value: 75 }}
            />
            <CWidgetStatsC
              icon={<CIcon icon={cilBasket} height={36} />}
              value="1238"
              title="Products sold"
              progress={{ color: 'warning', value: 75 }}
            />
            <CWidgetStatsC
              icon={<CIcon icon={cilChartPie} height={36} />}
              value="28%"
              title="Returning Visitors"
              progress={{ color: 'primary', value: 75 }}
            />
            <CWidgetStatsC
              icon={<CIcon icon={cilSpeedometer} height={36} />}
              value="5:34:11"
              title="Avg. Time"
              progress={{ color: 'danger', value: 75 }}
            />
          </CCardGroup>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsc">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilPeople} height={36} />}
                value="87.500"
                title="Visitors"
                progress={{ color: 'info', value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilUserFollow} height={36} />}
                value="385"
                title="New Clients"
                progress={{ color: 'success', value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilBasket} height={36} />}
                value="1238"
                title="Products sold"
                progress={{ color: 'warning', value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilChartPie} height={36} />}
                value="28%"
                title="Returning Visitors"
                progress={{ color: 'primary', value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilSpeedometer} height={36} />}
                value="5:34:11"
                title="Avg. Time"
                progress={{ color: 'danger', value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilSpeech} height={36} />}
                value="972"
                title="Comments"
                progress={{ color: 'info', value: 75 }}
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="components/widgets/#cwidgetstatsc">
          <CRow xs={{ gutter: 4 }}>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                color="info"
                icon={<CIcon icon={cilPeople} height={36} />}
                value="87.500"
                title="Visitors"
                inverse
                progress={{ value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                color="success"
                icon={<CIcon icon={cilUserFollow} height={36} />}
                value="385"
                title="New Clients"
                inverse
                progress={{ value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                color="warning"
                icon={<CIcon icon={cilBasket} height={36} />}
                value="1238"
                title="Products sold"
                inverse
                progress={{ value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                color="primary"
                icon={<CIcon icon={cilChartPie} height={36} />}
                value="28%"
                title="Returning Visitors"
                inverse
                progress={{ value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                color="danger"
                icon={<CIcon icon={cilSpeedometer} height={36} />}
                value="5:34:11"
                title="Avg. Time"
                inverse
                progress={{ value: 75 }}
              />
            </CCol>
            <CCol xs={6} lg={4} xxl={2}>
              <CWidgetStatsC
                color="info"
                icon={<CIcon icon={cilSpeech} height={36} />}
                value="972"
                title="Comments"
                inverse
                progress={{ value: 75 }}
              />
            </CCol>
          </CRow>
        </DocsExample>
      </CCardBody>
    </CCard>
  )
}

export default Widgets
````

## File: src/views/widgets/WidgetsBrand.jsx
````javascript
import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibFacebook} height={52} className="my-4 text-white" />}
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [1, 13, 9, 17, 34, 41, 38],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibTwitter} height={52} className="my-4 text-white" />}
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibLinkedin} height={52} className="my-4 text-white" />}
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          color="warning"
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [35, 23, 56, 22, 97, 23, 64],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilCalendar} height={52} className="my-4 text-white" />}
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
````

## File: src/views/widgets/WidgetsDropdown.jsx
````javascript
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="primary"
          value={
            <>
              26K{' '}
              <span className="fs-6 fw-normal">
                (-12.4% <CIcon icon={cilArrowBottom} />)
              </span>
            </>
          }
          title="Users"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              ref={widgetChartRef1}
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="info"
          value={
            <>
              $6.200{' '}
              <span className="fs-6 fw-normal">
                (40.9% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Income"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              ref={widgetChartRef2}
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
          value={
            <>
              2.49%{' '}
              <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Conversion Rate"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="danger"
          value={
            <>
              44K{' '}
              <span className="fs-6 fw-normal">
                (-23.6% <CIcon icon={cilArrowBottom} />)
              </span>
            </>
          }
          title="Sessions"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                  'January',
                  'February',
                  'March',
                  'April',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
````

## File: src/App.jsx
````javascript
/**
 * App Component
 *
 * Root application component that sets up routing, theme management,
 * and lazy-loaded page components with suspense boundaries.
 *
 * Features:
 * - Client-side routing with HashRouter
 * - Theme detection from URL parameters and Redux state
 * - Lazy loading for all routes with loading spinner fallback
 * - Public routes (login, register, error pages)
 * - Protected routes wrapped in DefaultLayout
 *
 * @module App
 */

import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

/**
 * Main Application Component
 *
 * Manages application-wide concerns:
 * - Theme initialization and persistence
 * - Client-side routing configuration
 * - Lazy loading with suspense fallbacks
 * - Theme detection from URL query parameters
 *
 * Theme priority:
 * 1. URL parameter (?theme=dark)
 * 2. Redux stored theme
 * 3. Browser/system preference (auto)
 *
 * @component
 * @returns {React.ReactElement} Application root with routing
 *
 * @example
 * // Standard usage in index.js
 * import App from './App'
 * ReactDOM.render(<App />, document.getElementById('root'))
 */
const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
````

## File: src/index.jsx
````javascript
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
````

## File: .prettierignore
````
build/
````

## File: .prettierrc.js
````javascript
module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
}
````

## File: eslint.config.mjs
````javascript
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  { ignores: ['eslint.config.mjs'] },
  {
    ...eslintPluginReact.configs.flat.recommended,
    ...eslintPluginReact.configs.flat['jsx-runtime'],
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  eslintPluginPrettierRecommended,
]
````

## File: src/components/AppBreadcrumb.jsx
````javascript
import React from 'react'
import { useLocation } from 'react-router-dom'

import { routes } from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
````

## File: src/components/AppContent.jsx
````javascript
/**
 * AppContent Component
 *
 * Main content area that renders routes defined in routes.js.
 * Handles lazy loading with Suspense and provides a loading spinner
 * while components are being loaded.
 *
 * Features:
 * - Dynamic route rendering from routes configuration
 * - Suspense boundary for lazy-loaded components
 * - Automatic redirect from root to dashboard
 * - Loading spinner fallback during component load
 *
 * @component
 * @example
 * return (
 *   <AppContent />
 * )
 */

import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import { routes } from '../routes'

/**
 * AppContent functional component
 *
 * Renders all application routes within a container with:
 * - Suspense for lazy-loaded route components
 * - Spinner shown during component loading
 * - Default redirect to dashboard
 *
 * Memoized to prevent unnecessary re-renders when parent updates.
 *
 * @returns {React.ReactElement} Content container with routed views
 */
const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
````

## File: src/views/base/chip/Chip.jsx
````javascript
import { CCard, CCardBody, CCardHeader, CChip, CCol, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'

const Chip = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/chip/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip</strong> <small>Basic and outline</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Chips are compact UI elements for labels, filters, and quick selections. Use the{' '}
              <code>CChip</code> component with optional <code>variant</code> prop.
            </p>
            <DocsExample href="components/chip/#basic-chips">
              <div className="d-flex flex-wrap gap-2">
                <CChip>Basic chip</CChip>
                <CChip>Frontend</CChip>
                <CChip>Design system</CChip>
                <CChip>Documentation</CChip>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              Add <code>variant=&#34;outline&#34;</code> to create a lighter, bordered appearance.
            </p>
            <DocsExample href="components/chip/#outline-chips">
              <div className="d-flex flex-wrap gap-2">
                <CChip variant="outline">Outline chip</CChip>
                <CChip variant="outline">Product</CChip>
                <CChip variant="outline">Marketing</CChip>
                <CChip variant="outline">Analytics</CChip>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip</strong> <small>With icons and avatars</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Chips can include icons, user avatars, or avatar components to make tags easier to
              scan.
            </p>
            <DocsExample href="components/chip/#chips-with-icons">
              <div className="d-flex flex-wrap gap-2">
                <CChip>
                  <span className="chip-icon">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-5 12s0-3 5-3 5 3 5 3v1H3v-1Z" />
                    </svg>
                  </span>{' '}
                  Team member
                </CChip>
                <CChip>
                  <span className="chip-icon">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M2 2h12v2H2V2Zm0 5h8v2H2V7Zm0 5h12v2H2v-2Z" />
                    </svg>
                  </span>{' '}
                  Backlog item
                </CChip>
              </div>
            </DocsExample>
            <DocsExample href="components/chip/#chips-with-avatars">
              <div className="d-flex flex-wrap gap-2">
                <CChip>
                  <img className="chip-img" src={avatar1} width="16" height="16" alt="" /> Olivia
                  Martin
                </CChip>
                <CChip>
                  <img className="chip-img" src={avatar4} width="16" height="16" alt="" /> Ethan
                  Carter
                </CChip>
                <CChip>
                  <span className="avatar avatar-sm bg-primary text-white">A</span> Account manager
                </CChip>
                <CChip>
                  <span className="avatar avatar-sm bg-success text-white">Q</span> QA owner
                </CChip>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip</strong> <small>Variants and sizes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>color</code> prop for contextual variants and the <code>size</code> prop
              for different sizes.
            </p>
            <DocsExample href="components/chip/#variants">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <CChip color="primary" clickable>
                  Product
                </CChip>
                <CChip color="primary" active>
                  Active product
                </CChip>
                <CChip color="success" clickable>
                  Published
                </CChip>
                <CChip color="success" active>
                  Live
                </CChip>
                <CChip color="warning" clickable>
                  Review
                </CChip>
                <CChip color="danger" active>
                  Blocked
                </CChip>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <CChip size="sm">Small chip</CChip>
                <CChip>Default chip</CChip>
                <CChip size="lg">Large chip</CChip>
                <CChip variant="outline" color="primary" clickable>
                  Outline primary
                </CChip>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip</strong> <small>Interactive examples</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Chips support selection, removal, and disabled states using props like{' '}
              <code>selectable</code>, <code>removable</code>, and <code>disabled</code>.
            </p>
            <DocsExample href="components/chip/#interactive">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <CChip selectable>Selectable</CChip>
                <CChip selectable selected>
                  Selected
                </CChip>
                <CChip removable>Removable</CChip>
                <CChip disabled>Disabled</CChip>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <CChip size="lg" removable>
                  Team Alpha
                </CChip>
                <CChip variant="outline" color="info" selectable>
                  Filter: Priority
                </CChip>
                <CChip variant="outline" color="success" selectable selected>
                  Filter: Ready
                </CChip>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Chip
````

## File: src/views/buttons/buttons/Buttons.jsx
````javascript
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import { DocsComponents, DocsExample } from 'src/components'

const Buttons = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/buttons/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              CoreUI includes a bunch of predefined buttons components, each serving its own
              semantic purpose. Buttons show what action will happen when the user clicks or touches
              it. CoreUI buttons are used to initialize operations, both in the background or
              foreground of an experience.
            </p>
            <DocsExample href="components/buttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
                      (color, index) => (
                        <CButton
                          color={color}
                          key={index}
                          active={state === 'active'}
                          disabled={state === 'disabled'}
                        >
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </CButton>
                      ),
                    )}
                    <CButton color="link">Link</CButton>
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>with icons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can combine button with our <a href="https://coreui.io/icons/">CoreUI Icons</a>.
            </p>
            <DocsExample href="components/buttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
                      (color, index) => (
                        <CButton
                          color={color}
                          key={index}
                          active={state === 'active'}
                          disabled={state === 'disabled'}
                        >
                          <CIcon icon={cilBell} className="me-2" />
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </CButton>
                      ),
                    )}
                    <CButton color="link">
                      <CIcon icon={cilBell} className="me-2" />
                      Link
                    </CButton>
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Button components</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The <code>&lt;CButton&gt;</code> component are designed for{' '}
              <code>&lt;button&gt;</code> , <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code>{' '}
              elements (though some browsers may apply a slightly different rendering).
            </p>
            <p className="text-body-secondary small">
              If you&#39;re using <code>&lt;CButton&gt;</code> component as <code>&lt;a&gt;</code>{' '}
              elements that are used to trigger functionality ex. collapsing content, these links
              should be given a <code>role=&#34;button&#34;</code> to adequately communicate their
              meaning to assistive technologies such as screen readers.
            </p>
            <DocsExample href="components/buttons#button-components">
              <CButton as="a" color="primary" href="#" role="button">
                Link
              </CButton>
              <CButton type="submit" color="primary">
                Button
              </CButton>
              <CButton as="input" type="button" color="primary" value="Input" />
              <CButton as="input" type="submit" color="primary" value="Submit" />
              <CButton as="input" type="reset" color="primary" value="Reset" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>outline</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you need a button, but without the strong background colors. Set{' '}
              <code>variant=&#34;outline&#34;</code> prop to remove all background colors.
            </p>
            <DocsExample href="components/buttons#outline-buttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
                      (color, index) => (
                        <CButton
                          color={color}
                          variant="outline"
                          key={index}
                          active={state === 'active'}
                          disabled={state === 'disabled'}
                        >
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </CButton>
                      ),
                    )}
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>ghost</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you need a ghost variant of button, set <code>variant=&#34;ghost&#34;</code> prop
              to remove all background colors.
            </p>
            <DocsExample href="components/buttons#ghost-buttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
                      (color, index) => (
                        <CButton
                          color={color}
                          variant="ghost"
                          key={index}
                          active={state === 'active'}
                          disabled={state === 'disabled'}
                        >
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </CButton>
                      ),
                    )}
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Sizes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Larger or smaller buttons? Add <code>size=&#34;lg&#34;</code> or{' '}
              <code>size=&#34;sm&#34;</code> for additional sizes.
            </p>
            <DocsExample href="components/buttons#sizes">
              <CButton color="primary" size="lg">
                Large button
              </CButton>
              <CButton color="secondary" size="lg">
                Large button
              </CButton>
            </DocsExample>
            <DocsExample href="components/buttons#sizes">
              <CButton color="primary" size="sm">
                Small button
              </CButton>
              <CButton color="secondary" size="sm">
                Small button
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Pill</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/buttons#pill-buttons">
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((color, index) => (
                <CButton color={color} shape="rounded-pill" key={index}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </CButton>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Square</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/buttons#square">
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((color, index) => (
                <CButton color={color} shape="rounded-0" key={index}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </CButton>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Disabled state</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> boolean prop to any <code>&lt;CButton&gt;</code>{' '}
              component to make buttons look inactive. Disabled button has{' '}
              <code>pointer-events: none</code> applied to, disabling hover and active states from
              triggering.
            </p>
            <DocsExample href="components/buttons#disabled-state">
              <CButton color="primary" size="lg" disabled>
                Primary button
              </CButton>
              <CButton color="secondary" size="lg" disabled>
                Button
              </CButton>
            </DocsExample>
            <p className="text-body-secondary small">
              Disabled buttons using the <code>&lt;a&gt;</code> component act a little different:
            </p>
            <p className="text-body-secondary small">
              <code>&lt;a&gt;</code>s don&#39;tsupport the <code>disabled</code> attribute, so
              CoreUI has to add <code>.disabled</code> className to make buttons look inactive.
              CoreUI also has to add to the disabled button component{' '}
              <code>aria-disabled=&#34;true&#34;</code> attribute to show the state of the component
              to assistive technologies.
            </p>
            <DocsExample href="components/buttons#disabled-state">
              <CButton as="a" href="#" color="primary" size="lg" disabled>
                Primary link
              </CButton>
              <CButton as="a" href="#" color="secondary" size="lg" disabled>
                Link
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Block buttons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create buttons that span the full width of a parent—by using utilities.
            </p>
            <DocsExample href="components/buttons#block-buttons">
              <div className="d-grid gap-2">
                <CButton color="primary">Button</CButton>
                <CButton color="primary">Button</CButton>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              Here we create a responsive variation, starting with vertically stacked buttons until
              the <code>md</code> breakpoint, where <code>.d-md-block</code> replaces the{' '}
              <code>.d-grid</code> class, thus nullifying the <code>gap-2</code> utility. Resize
              your browser to see them change.
            </p>
            <DocsExample href="components/buttons#block-buttons">
              <div className="d-grid gap-2 d-md-block">
                <CButton color="primary">Button</CButton>
                <CButton color="primary">Button</CButton>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              You can adjust the width of your block buttons with grid column width classes. For
              example, for a half-width &#34;block button&#34;, use <code>.col-6</code>. Center it
              horizontally with <code>.mx-auto</code>, too.
            </p>
            <DocsExample href="components/buttons#block-buttons">
              <div className="d-grid gap-2 col-6 mx-auto">
                <CButton color="primary">Button</CButton>
                <CButton color="primary">Button</CButton>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              Additional utilities can be used to adjust the alignment of buttons when horizontal.
              Here we&#39;ve taken our previous responsive example and added some flex utilities and
              a margin utility on the button to right align the buttons when they&#39;re no longer
              stacked.
            </p>
            <DocsExample href="components/buttons#block-buttons">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary" className="me-md-2">
                  Button
                </CButton>
                <CButton color="primary">Button</CButton>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Buttons
````

## File: src/views/forms/chip-input/ChipInput.jsx
````javascript
import {
  CCard,
  CCardBody,
  CCardHeader,
  CChipInput,
  CCol,
  CFormLabel,
  CFormText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const ChipInput = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/chip-input/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip Input</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Chip input lets users enter multiple values in one field. Use the{' '}
              <code>CChipInput</code> component with props like <code>placeholder</code> and{' '}
              <code>defaultValue</code>.
            </p>
            <DocsExample href="forms/chip-input/#basic-example">
              <CChipInput
                label="Skills:"
                name="skills"
                placeholder="Add a skill..."
                defaultValue={['JavaScript', 'TypeScript', 'Accessibility']}
              />
            </DocsExample>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip Input</strong> <small>Variants</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>chipClassName</code> prop to apply contextual chip styles, which is
              handy for labels, issue types, or priorities.
            </p>
            <DocsExample href="forms/chip-input/#variants">
              <CChipInput
                name="issues"
                placeholder="Add label..."
                defaultValue={['Feature', 'Approved', 'Needs review', 'Blocking']}
                chipClassName={(value) => {
                  const colorMap = {
                    Feature: 'chip-primary',
                    Approved: 'chip-success',
                    'Needs review': 'chip-warning',
                    Blocking: 'chip-danger',
                  }
                  return colorMap[value] || ''
                }}
              />
            </DocsExample>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip Input</strong> <small>Sizes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>size</code> prop with <code>&#34;sm&#34;</code> or{' '}
              <code>&#34;lg&#34;</code> to align the field with surrounding form controls.
            </p>
            <DocsExample href="forms/chip-input/#sizes">
              <CChipInput
                label="Small"
                size="sm"
                placeholder="Add small tag..."
                defaultValue={['HTML']}
                className="mb-3"
              />
              <CChipInput
                label="Default"
                placeholder="Add default tag..."
                defaultValue={['JavaScript']}
                className="mb-3"
              />
              <CChipInput
                label="Large"
                size="lg"
                placeholder="Add large tag..."
                defaultValue={['TypeScript']}
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip Input</strong> <small>Empty state and label</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can start with an empty field or use a separate <code>CFormLabel</code> for
              clearer form structure and accessibility.
            </p>
            <DocsExample href="forms/chip-input/#empty-state">
              <CChipInput name="tags" placeholder="Start typing tags..." className="mb-3" />
              <div className="mb-0">
                <CFormLabel htmlFor="techStackInput">Tech stack</CFormLabel>
                <CChipInput
                  id="techStackInput"
                  name="techStack"
                  placeholder="Add package..."
                  defaultValue={['Vue', 'Vite']}
                />
                <CFormText>Press Enter or comma to add a value.</CFormText>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip Input</strong> <small>Disabled and readonly</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Use the <code>disabled</code> prop to block interaction entirely, or{' '}
              <code>readOnly</code> to keep values visible while preventing changes.
            </p>
            <DocsExample href="forms/chip-input/#disabled">
              <CChipInput
                disabled
                removable={false}
                placeholder="Input disabled"
                defaultValue={['Read only', 'Locked']}
                className="mb-3"
              />
              <CChipInput
                readOnly
                placeholder="Read-only values"
                defaultValue={['JavaScript', 'TypeScript']}
              />
            </DocsExample>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Chip Input</strong> <small>Form-friendly examples</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The component integrates well with ordinary forms, including helper text and
              predefined values.
            </p>
            <DocsExample href="forms/chip-input/#with-label">
              <form className="row g-3">
                <div className="col-12">
                  <CFormLabel htmlFor="recipientsInput">Recipients</CFormLabel>
                  <CChipInput
                    id="recipientsInput"
                    name="recipients"
                    placeholder="Add email..."
                    defaultValue={['olivia@coreui.io', 'ethan@coreui.io']}
                  />
                  <CFormText>Add one address at a time and press Enter.</CFormText>
                </div>
                <div className="col-12">
                  <CFormLabel htmlFor="categoriesInput">Categories</CFormLabel>
                  <CChipInput
                    id="categoriesInput"
                    name="categories"
                    placeholder="Add category..."
                    defaultValue={['Product', 'Design', 'Docs']}
                    chipClassName="chip-outline"
                  />
                </div>
              </form>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ChipInput
````

## File: src/_nav.jsx
````javascript
/**
 * Sidebar Navigation Configuration
 *
 * Defines the structure and content of the sidebar navigation menu.
 * Supports multiple navigation component types from CoreUI React:
 * - CNavItem: Single navigation link
 * - CNavGroup: Collapsible group of links
 * - CNavTitle: Section title/divider
 *
 * @module _nav
 */

import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

/**
 * Navigation menu structure array
 *
 * @type {Array<Object>}
 * @property {React.ComponentType} component - CoreUI nav component (CNavItem, CNavGroup, CNavTitle)
 * @property {string} name - Display text for the nav item
 * @property {string} [to] - Internal route path (for CNavItem with routing)
 * @property {string} [href] - External URL (for CNavItem with external links)
 * @property {React.ReactNode} [icon] - Icon element to display
 * @property {Object} [badge] - Optional badge configuration
 * @property {string} badge.color - Badge color (info, danger, success, etc.)
 * @property {string} badge.text - Badge text content
 * @property {Array<Object>} [items] - Child items for CNavGroup
 *
 * @example
 * // Simple navigation item
 * {
 *   component: CNavItem,
 *   name: 'Dashboard',
 *   to: '/dashboard',
 *   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
 * }
 *
 * @example
 * // Navigation group with children
 * {
 *   component: CNavGroup,
 *   name: 'Base',
 *   to: '/base',
 *   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
 *   items: [
 *     {
 *       component: CNavItem,
 *       name: 'Cards',
 *       to: '/base/cards',
 *     },
 *   ],
 * }
 *
 * @example
 * // Section title
 * {
 *   component: CNavTitle,
 *   name: 'Theme',
 * }
 */
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Calendar'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/calendar/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Chip',
        to: '/base/chip',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Smart Pagination',
        href: 'https://coreui.io/react/docs/components/smart-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Smart Table'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/smart-table/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Virtual Scroller'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/virtual-scroller/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Loading Button'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/loading-button/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Autocomplete'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/autocomplete/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Chip Input',
        to: '/forms/chip-input',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Date Picker'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Multi Select'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'OTP Input'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/one-time-password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Password Input'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Range Slider'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Rating'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/rating/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Stepper'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/stepper/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Time Picker'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/time-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
````

## File: src/store.js
````javascript
/**
 * Redux Store Configuration
 *
 * Simple Redux store managing global application state.
 * Handles sidebar visibility and theme preferences.
 *
 * @module store
 */

import { legacy_createStore as createStore } from 'redux'

/**
 * Initial state for the Redux store
 * @type {Object}
 * @property {boolean} sidebarShow - Controls sidebar visibility (true = visible, false = hidden)
 * @property {string} theme - Current theme mode ('light', 'dark', or 'auto')
 */
const initialState = {
  sidebarShow: true,
  theme: 'light',
}

/**
 * Root reducer function that handles all state changes
 *
 * @param {Object} state - Current state (defaults to initialState)
 * @param {Object} action - Action object with type and payload
 * @param {string} action.type - Action type ('set' to update state)
 * @param {...*} rest - Additional properties to merge into state
 * @returns {Object} New state object
 *
 * @example
 * // Update sidebar visibility
 * dispatch({ type: 'set', sidebarShow: false })
 *
 * @example
 * // Update theme
 * dispatch({ type: 'set', theme: 'dark' })
 *
 * @example
 * // Update multiple properties
 * dispatch({ type: 'set', sidebarShow: true, theme: 'light' })
 */
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

/**
 * Redux store instance
 * @type {import('redux').Store}
 */
const store = createStore(changeState)
export default store
````

## File: .cursorrules
````
# CoreUI Free React Admin Template - AI Assistant Rules

You are working with the CoreUI Free React Admin Template, a professional admin dashboard built with React 19, CoreUI React components, and modern build tools. This project uses Vite for development and building, React Router for navigation, Redux for state management, and Sass for styling.

## Critical Rules

**Component Library**: ALWAYS use CoreUI React components from https://coreui.io/react/docs/. NEVER use Tailwind CSS, Material-UI, or other component libraries. This project is built on Bootstrap 5 and CoreUI React components exclusively.

**Technology Stack**: This project uses:
- React 19 with functional components and Hooks
- JSX for component markup
- CoreUI React 5.x and @coreui/coreui 5.x
- React Router 7.x for client-side routing
- Redux 5.x with React-Redux for state management
- Vite 8.x for development server and building
- Sass/SCSS for styling with Bootstrap 5 variables
- Chart.js 4.x with @coreui/react-chartjs for data visualization

## Code Conventions

**JavaScript/React Standards**:
- Use functional components with Hooks (useState, useEffect, useSelector, etc.)
- Follow React Hooks rules (only call at top level, only in React functions)
- Use Prettier formatting: no semicolons, single quotes, 2-space indentation
- Enforce ESLint rules with React and Prettier plugins
- Use PropTypes for component prop validation
- Prefer const arrow functions: `const Component = () => { }`
- Use destructuring for props: `const { prop1, prop2 } = props`

**File Organization**:
- `src/` - All source code
  - `components/` - Reusable UI components (AppHeader, AppSidebar, etc.)
  - `views/` - Page components organized by feature (dashboard, forms, charts, etc.)
  - `layout/` - Layout wrapper components (DefaultLayout)
  - `assets/` - Static assets (images, brand logos)
  - `scss/` - Global styles and theme customization
  - `routes.js` - Route definitions
  - `_nav.js` - Navigation/sidebar menu configuration
  - `store.js` - Redux store configuration
  - `App.js` - Main application component with routing
  - `index.js` - Application entry point

**React/JSX Practices**:
- Use React.lazy() for code splitting and lazy loading
- Wrap lazy components in <Suspense> with fallback UI
- Use semantic component names (e.g., DefaultLayout, AppHeader)
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks when appropriate
- Use React.memo() for performance optimization when needed

**CSS/Sass Practices**:
- Import global styles in App.js: `import './scss/style.scss'`
- Use Bootstrap utilities first before custom CSS
- Leverage CoreUI CSS custom properties for theming
- Support dark mode through CoreUI's color mode system
- File: `src/scss/style.scss` - main stylesheet importing CoreUI and Bootstrap
- File: `src/scss/_custom.scss` - custom style overrides
- Use SCSS variables from Bootstrap and CoreUI when possible

**Routing Conventions**:
- Use HashRouter for client-side routing (GitHub Pages compatible)
- Define routes in routes.js as array of objects
- Lazy load route components for better performance
- Use exact path matching where needed
- Public routes (login, register, 404, 500) defined in App.js
- Protected routes handled in DefaultLayout with AppContent

**State Management**:
- Use Redux for global state (theme, sidebar visibility)
- Use Redux Toolkit pattern with actions and reducers
- Connect components with useSelector and useDispatch hooks
- Keep component-level state in useState when state is local
- File: `src/store.js` - Redux store configuration

**Naming Conventions**:
- PascalCase for component files and component names (AppHeader.js, DefaultLayout.js)
- camelCase for variables, functions, and hooks (useState, useEffect)
- UPPER_SNAKE_CASE for constants (API_URL, MAX_ITEMS)
- kebab-case for CSS classes (following Bootstrap/CoreUI conventions)
- Descriptive names that indicate purpose (AppHeaderDropdown vs Dropdown)

## Project Structure

```
coreui-free-react-admin-template/
├── public/              # Static assets served directly
├── src/
│   ├── assets/         # Images, logos, icons
│   │   ├── brand/     # Logo components
│   │   └── images/    # Image files
│   ├── components/     # Reusable UI components
│   │   ├── AppHeader.js
│   │   ├── AppSidebar.js
│   │   ├── AppFooter.js
│   │   ├── AppContent.js
│   │   ├── AppBreadcrumb.js
│   │   └── header/    # Header sub-components
│   ├── layout/         # Layout components
│   │   └── DefaultLayout.js
│   ├── views/          # Page components
│   │   ├── dashboard/ # Dashboard page
│   │   ├── base/      # Base UI components examples
│   │   ├── buttons/   # Button examples
│   │   ├── forms/     # Form examples
│   │   ├── charts/    # Chart examples
│   │   ├── icons/     # Icon examples
│   │   ├── notifications/ # Notification examples
│   │   ├── widgets/   # Widget examples
│   │   └── pages/     # Auth & error pages
│   ├── scss/           # Stylesheets
│   │   ├── style.scss # Main stylesheet
│   │   └── _custom.scss # Custom overrides
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│   ├── routes.js       # Route definitions
│   ├── _nav.js         # Navigation config
│   └── store.js        # Redux store
├── build/              # Build utilities
├── index.html          # HTML template
├── vite.config.mjs     # Vite configuration
├── eslint.config.mjs   # ESLint configuration
├── package.json        # Dependencies
└── README.md           # Documentation
```

## Development Workflow

**Starting Development**:
```bash
npm install          # Install dependencies
npm start            # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run serve        # Preview production build
npm run lint         # Run ESLint
```

**Adding a New Page**:
1. Create component in `src/views/[feature]/ComponentName.js`
2. Add route to `src/routes.js`
3. Add navigation item to `src/_nav.js` (if needed)
4. Import and use CoreUI components from '@coreui/react'

**Creating Components**:
```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const MyComponent = ({ title, children }) => {
  return (
    <CCard>
      <CCardHeader>{title}</CCardHeader>
      <CCardBody>{children}</CCardBody>
    </CCard>
  )
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default MyComponent
```

**Using Hooks**:
```javascript
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const [data, setData] = useState([])
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch data or side effects
  }, [])

  return <div>Content</div>
}
```

## Code Quality

**Linting**:
- ESLint configuration in `eslint.config.mjs`
- Prettier integration for code formatting
- React-specific rules with eslint-plugin-react
- React Hooks rules with eslint-plugin-react-hooks
- Run `npm run lint` before committing

**Best Practices**:
- Always validate props with PropTypes
- Use meaningful component and variable names
- Keep components small and focused
- Extract complex logic into custom hooks
- Use React DevTools for debugging
- Test in both light and dark themes
- Ensure responsive design works on all screen sizes

**Git Commits**:
Follow conventional commit format:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting)
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks

## Common Patterns

**Lazy Loading Routes**:
```javascript
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
```

**Theme Management**:
```javascript
import { useColorModes } from '@coreui/react'

const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
```

**Navigation Configuration** (`_nav.js`):
```javascript
export default [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]
```

## AI Assistant Guidelines

**What AI Should Do**:
- Generate code using CoreUI React components
- Follow existing code style and conventions
- Use functional components with Hooks
- Implement responsive designs
- Add PropTypes for new components
- Follow the project's file organization
- Use existing utility functions and helpers
- Suggest performance optimizations when appropriate

**What AI Should NOT Do**:
- Use class components (use functional components instead)
- Import components from libraries other than CoreUI/React
- Suggest Tailwind CSS or other CSS frameworks
- Ignore ESLint/Prettier rules
- Create files outside the src/ directory structure
- Modify build configuration without clear reason
- Use deprecated React patterns (componentWillMount, etc.)

## External Dependencies

**Core Libraries**:
- @coreui/coreui: ^5.6.1 - CoreUI CSS framework
- @coreui/react: ^5.10.0 - CoreUI React components
- @coreui/icons-react: ^2.3.0 - CoreUI icons for React
- react: ^19.2.4 - React library
- react-dom: ^19.2.4 - React DOM rendering
- react-router-dom: ^7.13.2 - Routing library
- redux: 5.0.1 - State management
- react-redux: ^9.2.0 - React bindings for Redux

**Additional Libraries**:
- chart.js: ^4.5.1 - Charting library
- @coreui/react-chartjs: ^3.0.0 - CoreUI Chart.js wrapper
- simplebar-react: ^3.3.2 - Custom scrollbars
- classnames: ^2.5.1 - Conditional class names utility
- prop-types: ^15.8.1 - Runtime type checking

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Resources

- CoreUI React Documentation: https://coreui.io/react/docs/
- CoreUI Components: https://coreui.io/react/docs/components/
- React Documentation: https://react.dev/
- React Router: https://reactrouter.com/
- Redux: https://redux.js.org/
- Vite: https://vitejs.dev/

---

Remember: This is a React application using CoreUI React components. Always check CoreUI React documentation for component APIs and usage examples. Keep the code clean, maintainable, and following React best practices.
````

## File: DEVELOPMENT.md
````markdown
# CoreUI Free React Admin Template - Development Guide

A comprehensive guide for developers working with the CoreUI Free React Admin Template. This guide covers setup, development workflows, common patterns, and best practices.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Creating Components](#creating-components)
- [Adding New Pages](#adding-new-pages)
- [Working with Routes](#working-with-routes)
- [State Management](#state-management)
- [Styling Components](#styling-components)
- [Working with Forms](#working-with-forms)
- [Data Visualization](#data-visualization)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Build and Deployment](#build-and-deployment)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## Prerequisites

### Required Software

- **Node.js**: Version 16 or higher (18+ recommended)
- **npm**: Version 7+ or **yarn**: Version 1.22+
- **Git**: For version control

### Recommended Tools

- **Visual Studio Code** with extensions:
  - ESLint
  - Prettier
  - ES7+ React/Redux/React-Native snippets
  - Auto Import
  - GitLens
- **React Developer Tools** browser extension
- **Redux DevTools** browser extension

### Knowledge Requirements

- JavaScript ES6+ features (arrow functions, destructuring, modules)
- React fundamentals (components, hooks, props, state)
- HTML5 and CSS3
- Sass/SCSS basics
- Git version control

## Getting Started

### Installation

1. **Clone the repository** (or download the source):
```bash
git clone https://github.com/coreui/coreui-free-react-admin-template.git
cd coreui-free-react-admin-template
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Start the development server**:
```bash
npm start
# or
yarn start
```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000)

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Automatic browser refresh on file changes
- Error overlay for compile-time and runtime errors

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm run serve` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

### Source Code Organization

**IMPORTANT**: Always edit source files in `src/`, never modify compiled files in `build/`.

```
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable UI components
├── layout/          # Layout wrapper components
├── views/           # Page/route components
├── scss/            # Global styles and themes
├── App.jsx          # Root component with routing
├── index.jsx        # Application entry point
├── routes.js        # Route definitions
├── _nav.jsx         # Navigation menu configuration
└── store.js         # Redux store setup
```

### Key Files

- **`App.jsx`**: Main application component, routing setup, theme initialization
- **`index.jsx`**: ReactDOM render, Provider setup, store connection
- **`routes.js`**: Array of route configurations for protected routes
- **`_nav.jsx`**: Navigation menu structure for sidebar
- **`store.js`**: Redux store with global state (theme, sidebar)

## Development Workflow

### Daily Development Process

1. **Start development server**: `npm start`
2. **Make changes** to source files in `src/`
3. **View changes** instantly in browser (HMR)
4. **Check console** for errors or warnings
5. **Run linter** before committing: `npm run lint`
6. **Test in both themes** (light and dark)
7. **Commit changes** with conventional commit messages

### Hot Module Replacement (HMR)

Vite provides instant feedback:
- **JavaScript/JSX changes**: Component updates without page reload
- **CSS/SCSS changes**: Style updates without reload
- **Configuration changes**: Require server restart

### Development Server Features

**Port**: 3000 (configurable in `vite.config.mjs`)

**Features**:
- Fast cold start (~500ms)
- Instant HMR (<50ms)
- Error overlay with stack traces
- Network access for mobile testing

**Access from mobile**:
```bash
# Find your local IP
# Windows: ipconfig
# Mac/Linux: ifconfig

# Access from mobile device:
http://192.168.1.X:3000
```

## Creating Components

### Component Structure

**Functional components with Hooks**:

```javascript
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

/**
 * UserCard component displays user information in a card format
 * @param {Object} props - Component props
 * @param {string} props.name - User's full name
 * @param {string} props.email - User's email address
 * @param {string} [props.avatar] - Optional avatar URL
 */
const UserCard = ({ name, email, avatar }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Component lifecycle logic
    console.log('UserCard mounted')

    return () => {
      // Cleanup logic
      console.log('UserCard unmounted')
    }
  }, [])

  return (
    <CCard>
      <CCardHeader>{name}</CCardHeader>
      <CCardBody>
        {avatar && <img src={avatar} alt={name} />}
        <p>{email}</p>
      </CCardBody>
    </CCard>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
}

UserCard.defaultProps = {
  avatar: null,
}

export default UserCard
```

### Component Best Practices

1. **Keep components focused**: One responsibility per component
2. **Use PropTypes**: Validate all props for runtime type checking
3. **Provide default props**: Define sensible defaults
4. **Add JSDoc comments**: Document component purpose and props
5. **Extract logic**: Use custom hooks for reusable logic
6. **Name meaningfully**: Clear, descriptive component names

### Custom Hooks

Extract reusable logic into custom hooks:

```javascript
import { useState, useEffect } from 'react'

/**
 * Custom hook for fetching data from an API
 * @param {string} url - API endpoint URL
 * @returns {Object} { data, loading, error }
 */
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
```

**Usage**:
```javascript
const MyComponent = () => {
  const { data, loading, error } = useFetch('/api/users')

  if (loading) return <CSpinner />
  if (error) return <div>Error: {error}</div>

  return <div>{JSON.stringify(data)}</div>
}
```

## Adding New Pages

### Step-by-Step Process

**1. Create the page component** in `src/views/[feature]/`:

```javascript
// src/views/products/Products.js
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const Products = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Products</strong>
          </CCardHeader>
          <CCardBody>
            {/* Your content here */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Products
```

**2. Add route to `src/routes.js`**:

```javascript
import React from 'react'

const Products = React.lazy(() => import('./views/products/Products'))

const routes = [
  // ... existing routes
  { path: '/products', name: 'Products', element: Products },
]

export default routes
```

**3. Add navigation item to `src/_nav.jsx`** (optional):

```javascript
import { cilBasket } from '@coreui/icons'

export default [
  // ... existing items
  {
    component: CNavItem,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
  },
]
```

**4. Test the page**:
- Navigate to `http://localhost:3000/#/products`
- Check that navigation highlights correctly
- Verify breadcrumb displays properly

### Page Templates

**List Page**:
```javascript
const ListPage = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    // Fetch items
  }, [])

  return (
    <CCard>
      <CCardHeader>Items</CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {items.map(item => (
              <CTableRow key={item.id}>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>{item.status}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}
```

**Detail Page**:
```javascript
const DetailPage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    // Fetch item by id
  }, [id])

  if (!item) return <CSpinner />

  return (
    <CCard>
      <CCardHeader>{item.name}</CCardHeader>
      <CCardBody>
        <p>{item.description}</p>
      </CCardBody>
    </CCard>
  )
}
```

## Working with Routes

### Route Configuration

Routes are defined in `src/routes.js`:

```javascript
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/users', name: 'Users', element: Users, exact: true },
  { path: '/users/:id', name: 'User Details', element: UserDetail },
]
```

### Dynamic Routes

**With URL parameters**:

```javascript
// Route definition
{ path: '/products/:id', name: 'Product Detail', element: ProductDetail }

// Component usage
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()

  return <div>Product ID: {id}</div>
}
```

### Programmatic Navigation

**Using useNavigate hook**:

```javascript
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()

  const goToProducts = () => {
    navigate('/products')
  }

  const goBack = () => {
    navigate(-1) // Go back one page
  }

  return (
    <>
      <CButton onClick={goToProducts}>View Products</CButton>
      <CButton onClick={goBack}>Go Back</CButton>
    </>
  )
}
```

### Protected Routes

Add authentication logic in `DefaultLayout.js`:

```javascript
const DefaultLayout = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div>
      {/* Layout content */}
    </div>
  )
}
```

## State Management

### Using Redux

**Reading state** with useSelector:

```javascript
import { useSelector } from 'react-redux'

const MyComponent = () => {
  const theme = useSelector((state) => state.theme)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return <div>Theme: {theme}</div>
}
```

**Updating state** with useDispatch:

```javascript
import { useDispatch } from 'react-redux'

const MyComponent = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: 'set', theme: 'dark' })
  }

  return <CButton onClick={handleClick}>Dark Mode</CButton>
}
```

### Local Component State

**useState for simple state**:

```javascript
const [count, setCount] = useState(0)
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({ name: '', email: '' })
```

**useReducer for complex state**:

```javascript
const initialState = { count: 0, step: 1 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return { ...state, count: state.count - state.step }
    case 'setStep':
      return { ...state, step: action.payload }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <p>Count: {state.count}</p>
      <CButton onClick={() => dispatch({ type: 'increment' })}>+</CButton>
      <CButton onClick={() => dispatch({ type: 'decrement' })}>-</CButton>
    </>
  )
}
```

## Styling Components

### Using CoreUI Components

**ALWAYS use CoreUI React components** from `@coreui/react`:

```javascript
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const MyComponent = () => (
  <CRow>
    <CCol md={6}>
      <CCard>
        <CCardHeader>Card Title</CCardHeader>
        <CCardBody>
          <CButton color="primary">Click Me</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
)
```

### Bootstrap Utilities

Use Bootstrap utility classes for quick styling:

```javascript
<CCard className="mb-4 shadow-sm">
  <CCardBody className="p-4 d-flex justify-content-between align-items-center">
    <span className="text-muted">Left</span>
    <span className="fw-bold">Right</span>
  </CCardBody>
</CCard>
```

**Common utilities**:
- Spacing: `m-3`, `mt-2`, `mb-4`, `p-3`, `px-4`, `py-2`
- Display: `d-flex`, `d-none`, `d-block`, `d-inline`
- Flexbox: `justify-content-between`, `align-items-center`
- Text: `text-center`, `text-muted`, `fw-bold`, `fs-5`

### Custom Styles

**Component-level SCSS**:

```javascript
// MyComponent.js
import './MyComponent.scss'

const MyComponent = () => (
  <div className="my-component">
    <h1 className="my-component__title">Title</h1>
  </div>
)
```

```scss
// MyComponent.scss
.my-component {
  padding: 1rem;
  background-color: var(--cui-light);

  &__title {
    color: var(--cui-primary);
    font-size: 1.5rem;
  }
}
```

### CSS Custom Properties

Use CoreUI CSS variables for theming:

```javascript
<div style={{
  backgroundColor: 'var(--cui-primary)',
  color: 'var(--cui-white)',
  padding: 'var(--cui-spacer-3)',
}}>
  Styled with CSS variables
</div>
```

**Common variables**:
- Colors: `--cui-primary`, `--cui-secondary`, `--cui-success`, `--cui-danger`
- Background: `--cui-body-bg`, `--cui-light`, `--cui-dark`
- Text: `--cui-body-color`, `--cui-text-muted`
- Spacing: `--cui-spacer-1` through `--cui-spacer-5`

### Conditional Styling

Use the `classnames` utility:

```javascript
import classNames from 'classnames'

const MyComponent = ({ isActive, isPrimary }) => {
  const buttonClass = classNames('btn', {
    'btn-primary': isPrimary,
    'btn-secondary': !isPrimary,
    'active': isActive,
  })

  return <button className={buttonClass}>Button</button>
}
```

## Working with Forms

### Form Component Example

```javascript
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    // Submit form data
    console.log('Form data:', formData)
  }

  return (
    <CCard>
      <CCardHeader>Contact Form</CCardHeader>
      <CCardBody>
        <CForm
          className="row g-3"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CCol md={6}>
            <CFormLabel htmlFor="name">Name</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="email">Email</CFormLabel>
            <CFormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="message">Message</CFormLabel>
            <CFormTextarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol xs={12}>
            <CButton color="primary" type="submit">
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default MyForm
```

### Form Validation

**HTML5 validation**:
```javascript
<CFormInput
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
```

**Custom validation**:
```javascript
const [errors, setErrors] = useState({})

const validate = () => {
  const newErrors = {}

  if (!formData.name) {
    newErrors.name = 'Name is required'
  }

  if (!formData.email.includes('@')) {
    newErrors.email = 'Invalid email address'
  }

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = (e) => {
  e.preventDefault()

  if (validate()) {
    // Submit form
  }
}
```

## Data Visualization

### Using Chart.js with CoreUI

```javascript
import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'

const Dashboard = () => {
  return (
    <CCard>
      <CCardHeader>Sales Overview</CCardHeader>
      <CCardBody>
        <CChartLine
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Sales 2024',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderColor: 'rgba(220, 53, 69, 1)',
                data: [40, 20, 12, 39, 10, 40, 39],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
              },
            },
          }}
          style={{ height: '300px' }}
        />
      </CCardBody>
    </CCard>
  )
}
```

### Chart Types

CoreUI provides React wrappers for Chart.js:

- `CChartLine` - Line charts
- `CChartBar` - Bar charts
- `CChartDoughnut` - Doughnut charts
- `CChartPie` - Pie charts
- `CChartPolarArea` - Polar area charts
- `CChartRadar` - Radar charts

## Code Quality

### ESLint Configuration

The project uses ESLint with React and Prettier plugins:

```bash
# Check for issues
npm run lint

# Auto-fix issues (when possible)
npm run lint -- --fix
```

### Code Style Guidelines

**JavaScript**:
- No semicolons (enforced by Prettier)
- Single quotes for strings
- 2-space indentation
- Arrow functions preferred
- Destructuring when possible

**React**:
- Functional components only
- Hooks at top level
- PropTypes for all components
- Meaningful component names

**File naming**:
- PascalCase for components: `UserCard.js`
- camelCase for utilities: `dateHelper.js`
- kebab-case for styles: `user-card.scss`

### Pre-commit Checks

**Recommended**: Set up pre-commit hooks with Husky:

```bash
npm install --save-dev husky lint-staged

# Add to package.json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## Testing

### Manual Testing Checklist

Before committing changes:

- [ ] Test in both light and dark themes
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check browser console for errors
- [ ] Verify all links and navigation work
- [ ] Test form validation and submission
- [ ] Check accessibility (keyboard navigation, screen readers)

### Browser Testing

Test in modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Test at common breakpoints:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1366px, 1920px

**Tip**: Use Chrome DevTools device toolbar (Cmd/Ctrl + Shift + M)

## Build and Deployment

### Production Build

Create optimized production build:

```bash
npm run build
```

Output in `build/` directory:
- Minified JavaScript bundles
- Extracted and minified CSS
- Optimized assets
- Source maps

### Build Analysis

Check bundle size:

```bash
npm run build

# Output shows:
# - Total bundle size
# - Individual chunk sizes
# - Asset sizes
```

### Preview Production Build

Test production build locally:

```bash
npm run serve
```

Opens preview server at `http://localhost:4173`

### Deployment Platforms

**Static hosting** (builds to static files):

1. **Netlify**:
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`

2. **Vercel**:
   - Import Git repository
   - Framework preset: Vite
   - Build command: `npm run build`

3. **GitHub Pages**:
   - Build locally: `npm run build`
   - Push `build/` folder to `gh-pages` branch

4. **AWS S3 + CloudFront**:
   - Upload `build/` contents to S3 bucket
   - Configure CloudFront distribution

### Environment Variables

Create `.env` file (not committed to Git):

```bash
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

**Usage in code**:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

**IMPORTANT**: Only variables prefixed with `VITE_` are exposed to the app.

## Troubleshooting

### Common Issues

**Problem**: Port 3000 already in use

**Solution**:
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.mjs
```

---

**Problem**: Module not found errors

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

**Problem**: Styles not updating

**Solution**:
- Clear browser cache
- Hard refresh (Cmd/Ctrl + Shift + R)
- Restart dev server

---

**Problem**: HMR not working

**Solution**:
- Check file is saved
- Restart dev server
- Check for syntax errors in console

---

**Problem**: Build fails with memory error

**Solution**:
```bash
# Increase Node memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Debugging Tips

**React DevTools**:
- Inspect component hierarchy
- View props and state
- Profile component renders

**Redux DevTools**:
- Inspect Redux state
- Time-travel debugging
- Action history

**Console logging**:
```javascript
console.log('Variable:', variable)
console.table(arrayOfObjects)
console.error('Error:', error)
```

**React error boundaries**:
```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
```

## Best Practices

### Performance

1. **Lazy load routes**: Use React.lazy() for code splitting
2. **Memoize expensive calculations**: Use useMemo()
3. **Optimize re-renders**: Use React.memo() for pure components
4. **Virtualize long lists**: Use libraries like react-window
5. **Optimize images**: Use WebP format, lazy loading

### Accessibility

1. **Semantic HTML**: Use proper heading hierarchy (h1-h6)
2. **ARIA labels**: Add aria-label for icon buttons
3. **Keyboard navigation**: Ensure all interactive elements are keyboard-accessible
4. **Color contrast**: Meet WCAG AA standards (4.5:1 for text)
5. **Form labels**: Associate all form inputs with labels

### Security

1. **Validate input**: Sanitize user input before rendering
2. **Use HTTPS**: Always serve over HTTPS in production
3. **Content Security Policy**: Configure CSP headers
4. **Dependency audits**: Run `npm audit` regularly
5. **Environment variables**: Never commit secrets to Git

### Code Organization

1. **Single Responsibility**: One component does one thing well
2. **DRY Principle**: Don't Repeat Yourself - extract reusable code
3. **Consistent naming**: Follow naming conventions throughout
4. **File organization**: Group related files together
5. **Documentation**: Comment complex logic and add JSDoc

### Git Workflow

**Commit messages** (Conventional Commits):
```
feat: add user profile page
fix: resolve navigation bug on mobile
docs: update README with deployment instructions
style: format code with Prettier
refactor: extract form validation logic
test: add tests for UserCard component
chore: update dependencies
```

**Branch naming**:
```
feature/user-profile
fix/navigation-bug
refactor/form-validation
docs/deployment-guide
```

---

This guide covers the essential workflows and patterns for developing with the CoreUI Free React Admin Template. For additional questions, consult the [CoreUI React Documentation](https://coreui.io/react/docs/) or the [React Documentation](https://react.dev/).

Happy coding! 🚀
````

## File: src/components/DocsComponents.jsx
````javascript
import PropTypes from 'prop-types'
import React from 'react'

import ComponentsImg from 'src/assets/images/components.webp'

const DocsComponents = (props) => (
  <div className="bg-primary bg-opacity-10 border border-2 border-primary rounded mb-4">
    <div className="row d-flex align-items-center p-3 px-xl-4 flex-xl-nowrap">
      <div className="col-xl-auto col-12 d-none d-xl-block p-0">
        <img
          className="img-fluid"
          src={ComponentsImg}
          width="160px"
          height="160px"
          alt="CoreUI PRO hexagon"
        />
      </div>
      <div className="col-md col-12 px-lg-4">
        Our Admin Panel isn’t just a mix of third-party components. It’s{' '}
        <strong>
          the only open-source React dashboard built on a professional, enterprise-grade UI
          Components Library
        </strong>
        . This component is part of this library, and we present only the basic usage of it here. To
        explore extended examples, detailed API documentation, and customization options, refer to
        our docs.
      </div>
      <div className="col-md-auto col-12 mt-3 mt-lg-0 d-flex flex-column">
        <a
          className="btn btn-primary text-nowrap text-white"
          href={`https://coreui.io/react/docs/${props.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Documentation
        </a>
        <div className="text-center my-1">or</div>
        <a
          className="btn btn-danger text-nowrap text-white"
          href="https://coreui.io/pricing/?framework=react&src=free-react-admin-template-docs-banner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get CoreUI PRO →
        </a>
      </div>
    </div>
  </div>
)

DocsComponents.propTypes = {
  href: PropTypes.string,
}

export default DocsComponents
````

## File: LICENSE
````
The MIT License (MIT)

Copyright (c) 2026 creativeLabs Łukasz Holeczek.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
````

## File: src/scss/examples.scss
````scss
/* stylelint-disable scss/selector-no-redundant-nesting-selector */
@use "@coreui/coreui/scss/variables" as * with (
  $enable-deprecation-messages: false
);
@use "@coreui/coreui/scss/mixins/breakpoints" as *;
@use "@coreui/coreui/scss/mixins/color-mode" as *;

.example {
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  .tab-content {
    background-color: rgba(var(--#{$prefix}tertiary-bg-rgb), .75);
  }

  & + p {
    margin-top: 1.5rem;
  }

  // Components examples
  .preview {
    + p {
      margin-top: 2rem;
    }

    > .form-control {
      + .form-control {
        margin-top: .5rem;
      }
    }

    > .nav + .nav,
    > .alert + .alert,
    > .navbar + .navbar,
    > .progress + .progress {
      margin-top: 1rem;
    }

    > .dropdown-menu {
      position: static;
      display: block;
    }

    > :last-child {
      margin-bottom: 0;
    }

    // Images
    > svg + svg,
    > img + img {
      margin-left: .5rem;
    }

    // Buttons
    .col > .btn,
    .col-auto > .btn,
    > .btn,
    > .btn-group {
      margin: .25rem .125rem;
    }
    > .btn-toolbar + .btn-toolbar {
      margin-top: .5rem;
    }

    // List groups
    > .list-group {
      max-width: 400px;
    }

    > [class*="list-group-horizontal"] {
      max-width: 100%;
    }

    // Navbars
    .fixed-top,
    .sticky-top {
      position: static;
      margin: -1rem -1rem 1rem;
    }

    .fixed-bottom {
      position: static;
      margin: 1rem -1rem -1rem;
    }

    @include media-breakpoint-up(sm) {
      .fixed-top,
      .sticky-top {
        margin: -1.5rem -1.5rem 1rem;
      }
      .fixed-bottom {
        margin: 1rem -1.5rem -1.5rem;
      }
    }

    // Pagination
    .pagination {
      margin-top: .5rem;
      margin-bottom: .5rem;
    }

    .docs-example-modal {
      .modal {
        position: static;
        display: block;
      }
    }
  }
}
````

## File: src/scss/style.scss
````scss
@use "@coreui/coreui/scss/coreui" as * with ( 
  $enable-deprecation-messages: false,
);
@use "@coreui/chartjs/scss/coreui-chartjs";
@use "vendors/simplebar";

body {
  background-color: var(--cui-tertiary-bg);
}

.wrapper {
  width: 100%;
  padding-inline: var(--cui-sidebar-occupy-start, 0) var(--cui-sidebar-occupy-end, 0);
  will-change: auto;
  @include transition(padding .15s);
}

.header > .container-fluid,
.sidebar-header {
  min-height: calc(4rem + 1px); // stylelint-disable-line function-disallowed-list
}

.sidebar-brand-full {
  margin-left: 3px;
}

.sidebar-header {
  .nav-underline-border {
    --cui-nav-underline-border-link-padding-x: 1rem;
    --cui-nav-underline-border-gap: 0;
  }

  .nav-link {
    display: flex;
    align-items: center;
    min-height: calc(4rem + 1px); // stylelint-disable-line function-disallowed-list
  }
}

.sidebar-toggler {
  margin-inline-start: auto;
}

.sidebar-narrow,
.sidebar-narrow-unfoldable:not(:hover) {
  .sidebar-toggler {
    margin-inline-end: auto;
  }
}

.header > .container-fluid + .container-fluid {
  min-height: 3rem;
}

.footer {
  min-height: calc(3rem + 1px); // stylelint-disable-line function-disallowed-list
}

@include color-mode(dark) {
  body {
    background-color: var(--cui-dark-bg-subtle);
  }

  .footer {
    --cui-footer-bg: var(--cui-body-bg);
  }
}
````

## File: src/routes.js
````javascript
/**
 * Application Routes Configuration
 *
 * Defines all protected routes in the application using React lazy loading
 * for code splitting and performance optimization.
 *
 * Each route object contains:
 * - path: URL path for the route
 * - name: Human-readable name for breadcrumbs
 * - element: Lazy-loaded React component
 * - exact: (optional) Requires exact path match
 *
 * @module routes
 */

import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Chip = React.lazy(() => import('./views/base/chip/Chip'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const ChipInput = React.lazy(() => import('./views/forms/chip-input/ChipInput'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

/**
 * Array of route configuration objects
 *
 * @type {Array<Object>}
 * @property {string} path - URL path pattern
 * @property {string} name - Display name for breadcrumbs and navigation
 * @property {React.LazyExoticComponent} element - Lazy-loaded component
 * @property {boolean} [exact] - Whether to match path exactly
 *
 * @example
 * // Route renders when URL matches '/dashboard'
 * { path: '/dashboard', name: 'Dashboard', element: Dashboard }
 *
 * @example
 * // Route with exact match required
 * { path: '/base', name: 'Base', element: Cards, exact: true }
 */
export const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/chip', name: 'Chip', element: Chip },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/chip-input', name: 'Chip Input', element: ChipInput },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
````

## File: ARCHITECTURE.md
````markdown
# CoreUI Free React Admin Template - Architecture

This document provides a comprehensive overview of the CoreUI Free React Admin Template architecture, design patterns, and technical implementation details.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Architectural Pattern](#architectural-pattern)
- [Directory Structure](#directory-structure)
- [Core Components](#core-components)
- [Routing System](#routing-system)
- [State Management](#state-management)
- [Styling Architecture](#styling-architecture)
- [Build System](#build-system)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)

## Project Overview

The CoreUI Free React Admin Template is a professional admin dashboard built on React 19, CoreUI React components, and Bootstrap 5. It follows modern React patterns with functional components, Hooks, and a component-based architecture.

**Key Features**:
- Single Page Application (SPA) with client-side routing
- Responsive design with Bootstrap 5 grid system
- Dark/Light theme support with automatic detection
- Lazy loading and code splitting for optimal performance
- Redux-based state management
- Modular and extensible component architecture

## Technology Stack

### Frontend Core

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.4 | UI library for building component-based interfaces |
| React DOM | 19.2.4 | DOM rendering and manipulation |
| React Router DOM | 7.13.2 | Client-side routing and navigation |
| Redux | 5.0.1 | Predictable state container |
| React-Redux | 9.2.0 | React bindings for Redux |

### UI Framework

| Library | Version | Purpose |
|---------|---------|---------|
| @coreui/coreui | 5.6.1 | CoreUI CSS framework based on Bootstrap 5 |
| @coreui/react | 5.10.0 | CoreUI React components |
| @coreui/icons | 3.0.1 | CoreUI icon set |
| @coreui/icons-react | 2.3.0 | CoreUI icons as React components |
| @coreui/utils | 2.0.2 | Utility functions for CoreUI |
| simplebar-react | 3.3.2 | Custom scrollbar component |

### Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| Chart.js | 4.5.1 | HTML5 charting library |
| @coreui/chartjs | 4.2.0 | CoreUI Chart.js themes and defaults |
| @coreui/react-chartjs | 3.0.0 | React wrapper for Chart.js with CoreUI styling |

### Build Tools & Development

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8.0.3 | Fast build tool and dev server with HMR |
| @vitejs/plugin-react | 6.0.1 | Vite plugin for React Fast Refresh |
| Sass | 1.98.0 | CSS preprocessor for styling |
| PostCSS | 8.5.8 | CSS transformation with autoprefixer |
| Autoprefixer | 10.4.27 | Automatic vendor prefixing |
| ESLint | 9.39.2 | JavaScript linting and code quality |
| Prettier | 3.8.1 | Code formatting |

### Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| classnames | 2.5.1 | Conditional CSS class management |
| prop-types | 15.8.1 | Runtime type checking for React props |
| core-js | 3.49.0 | Polyfills for JavaScript features |
| @popperjs/core | 2.11.8 | Tooltip and popover positioning |

## Architectural Pattern

### Component-Based Architecture

The application follows a **functional component architecture** with React Hooks:

```
┌──────────────────────────────────────────┐
│           Application (App.jsx)          │
│  - HashRouter                            │
│  - Theme Management                      │
│  - Route Configuration                   │
└──────────────────────────────────────────┘
                    ↓
    ┌───────────────┴────────────────┐
    │                                │
┌───▼────┐                  ┌────────▼───────┐
│ Public │                  │   Protected    │
│ Routes │                  │     Routes     │
│        │                  │ (DefaultLayout)│
│ Login  │                  └───────┬────────┘
│Register│                          │
│ 404    │              ┌───────────┼────────────┐
│ 500    │              │           │            │
└────────┘         ┌────▼────┐ ┌────▼─────┐ ┌────▼─────┐
                   │AppHeader│ │AppSidebar│ │AppContent│
                   └─────────┘ └──────────┘ └────┬─────┘
                                                 │
                                         ┌───────▼─────────┐
                                         │ View Components │
                                         │ (Dashboard,     │
                                         │  Forms, etc.)   │
                                         └─────────────────┘
```

### Single Page Application (SPA) Pattern

The template uses client-side routing with HashRouter:
1. **Initial Load**: HTML shell loads, React initializes
2. **Route Matching**: React Router matches URL to component
3. **Lazy Loading**: Component bundles load on-demand
4. **Rendering**: Component renders with layout wrapper
5. **Navigation**: Client-side transitions without page reload

### State Management Pattern

Redux manages global application state:

```javascript
Store (store.js)
  ├── theme (light/dark/auto)
  ├── sidebarShow (boolean)
  └── sidebarUnfoldable (boolean)
```

Component-level state uses React Hooks (useState, useReducer).

## Directory Structure

```
coreui-free-react-admin-template/
│
├── public/                      # Static assets (served as-is)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/                         # Source code
│   │
│   ├── assets/                  # Application assets
│   │   ├── brand/              # Logo components (logo.jsx, sygnet.jsx)
│   │   └── images/             # Image files (avatars, etc.)
│   │
│   ├── components/              # Reusable UI components
│   │   ├── AppBreadcrumb.jsx   # Breadcrumb navigation
│   │   ├── AppContent.jsx      # Main content area wrapper
│   │   ├── AppFooter.jsx       # Footer component
│   │   ├── AppHeader.jsx       # Header component
│   │   ├── AppSidebar.jsx      # Sidebar navigation
│   │   ├── AppSidebarNav.jsx   # Sidebar navigation renderer
│   │   ├── DocsComponents.jsx  # Documentation component showcase
│   │   ├── DocsExample.jsx     # Code example wrapper
│   │   ├── DocsIcons.jsx       # Icon showcase
│   │   ├── DocsLink.jsx        # Documentation link
│   │   ├── header/             # Header sub-components
│   │   │   └── AppHeaderDropdown.jsx  # User dropdown menu
│   │   └── index.js            # Component barrel export
│   │
│   ├── layout/                  # Layout wrapper components
│   │   └── DefaultLayout.jsx   # Main application layout
│   │
│   ├── views/                   # Page/view components
│   │   ├── dashboard/          # Dashboard page
│   │   │   └── Dashboard.jsx
│   │   ├── base/               # Base UI component examples
│   │   │   ├── accordion/
│   │   │   ├── breadcrumbs/
│   │   │   ├── cards/
│   │   │   ├── carousels/
│   │   │   ├── collapses/
│   │   │   ├── list-groups/
│   │   │   ├── navs/
│   │   │   ├── paginations/
│   │   │   ├── placeholders/
│   │   │   ├── popovers/
│   │   │   ├── progress/
│   │   │   ├── spinners/
│   │   │   ├── tables/
│   │   │   ├── tabs/
│   │   │   └── tooltips/
│   │   ├── buttons/            # Button examples
│   │   ├── charts/             # Chart examples
│   │   ├── forms/              # Form examples
│   │   ├── icons/              # Icon examples
│   │   ├── notifications/      # Notification examples
│   │   ├── widgets/            # Widget examples
│   │   └── pages/              # Special pages
│   │       ├── login/          # Login page
│   │       ├── register/       # Registration page
│   │       ├── page404/        # 404 error page
│   │       └── page500/        # 500 error page
│   │
│   ├── scss/                    # Global stylesheets
│   │   ├── style.scss          # Main stylesheet (imports CoreUI)
│   │   ├── _custom.scss        # Custom style overrides
│   │   ├── examples.scss       # Documentation example styles
│   │   └── vendors/            # Third-party style overrides
│   │
│   ├── App.jsx                  # Root application component
│   ├── index.jsx                # Application entry point
│   ├── routes.js                # Route definitions
│   ├── _nav.jsx                 # Sidebar navigation configuration
│   └── store.js                 # Redux store configuration
│
├── build/                       # Build utilities (optional)
├── node_modules/                # Dependencies
├── index.html                   # HTML entry point
├── vite.config.mjs              # Vite build configuration
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Project metadata and dependencies
├── .prettierrc.js               # Prettier configuration
├── .browserslistrc              # Browser compatibility targets
├── .editorconfig                # Editor configuration
└── README.md                    # Project documentation
```

## Core Components

### Application Component (App.jsx)

The root component that:
- Sets up HashRouter for client-side routing
- Manages theme initialization and persistence
- Provides Suspense boundaries for lazy-loaded routes
- Defines top-level route structure

**Key Features**:
- Theme detection from URL parameters
- Redux integration for theme state
- Fallback spinner during component loading

### Layout System

#### DefaultLayout (layout/DefaultLayout.jsx)

The main application layout wrapper that composes:
- **AppSidebar**: Collapsible navigation sidebar
- **AppHeader**: Top navigation bar with breadcrumbs and user menu
- **AppContent**: Main content area with routing
- **AppFooter**: Footer with version and links

**Responsibility**: Provides consistent layout structure for authenticated views.

#### Navigation Components

**AppSidebar** (`components/AppSidebar.jsx`):
- Renders collapsible sidebar
- Integrates with Redux for show/hide state
- Uses AppSidebarNav for menu rendering
- Includes branding section

**AppSidebarNav** (`components/AppSidebarNav.jsx`):
- Recursive navigation renderer
- Supports nested menu items
- Renders CoreUI nav components (CNavItem, CNavGroup, CNavTitle)
- Handles active state based on current route

**AppHeader** (`components/AppHeader.jsx`):
- Fixed top navigation bar
- Sidebar toggle button
- Breadcrumb navigation
- User dropdown menu
- Theme switcher

### View Components

View components are page-level components that:
- Render specific application features (Dashboard, Forms, Charts)
- Use CoreUI React components for UI
- Connect to Redux when needed for global state
- Implement business logic and data fetching

**Example Structure**:
```javascript
const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch dashboard data
  }, [])

  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          {/* Dashboard content */}
        </CCardBody>
      </CCard>
    </>
  )
}
```

## Routing System

### React Router DOM v7

The application uses React Router DOM for declarative routing:

**Configuration** (`App.jsx`):
```javascript
<HashRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/404" element={<Page404 />} />
    <Route path="/500" element={<Page500 />} />
    <Route path="*" element={<DefaultLayout />} />
  </Routes>
</HashRouter>
```

**Protected Routes** (`DefaultLayout.jsx` + `routes.js`):
```javascript
// routes.js - Route definitions
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  // ... more routes
]

// DefaultLayout.jsx - Route rendering
<Suspense fallback={<CSpinner />}>
  <Routes>
    {routes.map((route, idx) => (
      <Route
        key={idx}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.element />}
      />
    ))}
  </Routes>
</Suspense>
```

### Lazy Loading & Code Splitting

All routes use React.lazy() for dynamic imports:

```javascript
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
```

**Benefits**:
- Smaller initial bundle size
- Faster first page load
- Components load only when navigated to
- Automatic code splitting by Vite

### Navigation Configuration

Navigation structure defined in `_nav.jsx`:

```javascript
export default [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Base',
    icon: <CIcon icon={cilPuzzle} />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      // ... nested items
    ],
  },
]
```

## State Management

### Redux Store Architecture

**Store Configuration** (`store.js`):

```javascript
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
```

### State Usage in Components

**Reading State** (useSelector):
```javascript
import { useSelector } from 'react-redux'

const MyComponent = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const theme = useSelector((state) => state.theme)

  return <div>Sidebar: {sidebarShow ? 'Visible' : 'Hidden'}</div>
}
```

**Updating State** (useDispatch):
```javascript
import { useDispatch } from 'react-redux'

const MyComponent = () => {
  const dispatch = useDispatch()

  const toggleSidebar = () => {
    dispatch({ type: 'set', sidebarShow: false })
  }

  return <button onClick={toggleSidebar}>Hide Sidebar</button>
}
```

### Theme Management

CoreUI provides `useColorModes` hook for theme control:

```javascript
import { useColorModes } from '@coreui/react'

const App = () => {
  const { colorMode, setColorMode } = useColorModes('coreui-theme-key')

  // Set theme: 'light', 'dark', or 'auto'
  setColorMode('dark')

  return <div>Current theme: {colorMode}</div>
}
```

Theme persists in localStorage and syncs with Redux state.

## Styling Architecture

### Sass/SCSS Structure

**Main Stylesheet** (`src/scss/style.scss`):
```scss
@use "@coreui/coreui/scss/coreui" as * with (
  $enable-deprecation-messages: false
);

// Custom variables and overrides
@import 'custom';
```

**Custom Overrides** (`src/scss/_custom.scss`):
```scss
// Override CoreUI/Bootstrap variables
$primary: #321fdb;
$secondary: #ced2d8;

// Custom styles
.my-custom-class {
  // styles
}
```

### CSS Custom Properties (CSS Variables)

CoreUI uses CSS custom properties for theming:

```css
:root {
  --cui-primary: #321fdb;
  --cui-secondary: #ced2d8;
  --cui-body-bg: #ebedef;
  --cui-body-color: #4f5d73;
}

[data-coreui-theme="dark"] {
  --cui-body-bg: #2b3035;
  --cui-body-color: #b4bac0;
}
```

**Usage in Components**:
```javascript
<div style={{ backgroundColor: 'var(--cui-primary)' }}>Content</div>
```

### Component Styling

**Inline Styles**:
```javascript
<CCard style={{ marginBottom: '1rem' }}>
```

**Class Names** (with classnames utility):
```javascript
import classNames from 'classnames'

const buttonClass = classNames({
  'btn': true,
  'btn-primary': isPrimary,
  'btn-disabled': isDisabled,
})

<button className={buttonClass}>Click</button>
```

**Bootstrap Utilities**:
```javascript
<CCard className="mb-4 shadow-sm">
  <CCardBody className="p-4 d-flex justify-content-between">
```

## Build System

### Vite Configuration

**File**: `vite.config.mjs`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      'src/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 3000,
  },
})
```

### Build Process

**Development Build**:
1. Vite starts dev server on port 3000
2. ESBuild compiles JSX to JavaScript
3. PostCSS processes Sass/SCSS with autoprefixer
4. Hot Module Replacement (HMR) for instant updates

**Production Build**:
1. `vite build` command
2. Code minification and tree-shaking
3. Asset optimization (images, fonts)
4. CSS extraction and minification
5. Source maps generation
6. Output to `build/` directory

**Build Output**:
```
build/
├── assets/
│   ├── index-[hash].js      # Main bundle
│   ├── [component]-[hash].js # Lazy-loaded chunks
│   └── index-[hash].css     # Extracted CSS
├── index.html               # HTML entry
└── favicon.ico              # Static assets
```

### Code Splitting Strategy

**Automatic Splitting**:
- Each lazy-loaded route becomes a separate chunk
- Vendor libraries (React, CoreUI) in separate vendor chunk
- Dynamic imports create split points

**Manual Splitting** (if needed):
```javascript
const HeavyComponent = React.lazy(() =>
  import(/* webpackChunkName: "heavy" */ './HeavyComponent')
)
```

## Performance Optimizations

### Implemented Optimizations

1. **Lazy Loading**: All routes lazy-loaded with React.lazy()
2. **Code Splitting**: Separate bundles per route
3. **Tree Shaking**: Unused code eliminated by Vite
4. **Asset Optimization**: Images and fonts optimized
5. **CSS Extraction**: Separate CSS bundle for caching
6. **Hash-based Caching**: File names include content hash

### Component Optimization

**React.memo** for expensive renders:
```javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Heavy rendering */}</div>
})
```

**useMemo** for computed values:
```javascript
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value)
}, [data])
```

**useCallback** for stable function references:
```javascript
const handleClick = useCallback(() => {
  console.log('Clicked')
}, [])
```

### Bundle Size Management

**Strategies**:
- Use named imports: `import { CButton } from '@coreui/react'`
- Avoid importing entire libraries
- Check bundle size with `npm run build`
- Use Vite's rollup visualizer for analysis

## Browser Support

### Target Browsers

Defined in `.browserslistrc`:
```
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 11
```

### Polyfills

`core-js` provides polyfills for:
- ES6+ features
- Promise, Array methods
- Object methods
- Modern JavaScript APIs

### Progressive Enhancement

- Modern features with fallbacks
- CSS Grid with flexbox fallback
- Modern color modes with theme classes

## Security Considerations

### Best Practices

1. **Content Security Policy**: Configure CSP headers
2. **XSS Prevention**: React escapes content by default
3. **Dependency Auditing**: Run `npm audit` regularly
4. **Environment Variables**: Use `.env` files (not committed)
5. **HTTPS**: Serve over HTTPS in production

### React Security

- Avoid `dangerouslySetInnerHTML` unless necessary
- Validate user input before rendering
- Use PropTypes for type safety
- Keep dependencies updated

## Deployment

### Static Hosting

The application builds to static files suitable for:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static file server

### Build for Production

```bash
npm run build
```

Output in `build/` directory ready for deployment.

### HashRouter for Static Hosts

Uses HashRouter for GitHub Pages compatibility:
- URLs: `https://example.com/#/dashboard`
- No server-side routing configuration needed
- Works with any static host

---

This architecture provides a solid foundation for building modern, performant admin dashboards with React and CoreUI. The modular structure allows for easy extension and customization while maintaining code quality and best practices.
````

## File: vite.config.mjs
````javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: 'build',
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // add options if needed
        ],
      },
    },
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: 'src/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    },
    server: {
      port: 3000,
      proxy: {
        // https://vitejs.dev/config/server-options.html
      },
    },
  }
})
````

## File: index.html
````html
<!DOCTYPE html>
<!--
* CoreUI Free React.js Admin Template
* @version v5.6.0
* @link https://coreui.io/product/free-react-admin-template/
* Copyright (c) 2026 creativeLabs Łukasz Holeczek
* Licensed under MIT (https://github.com/coreui/coreui-free-react-admin-template/blob/main/LICENSE)
-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="CoreUI for React - Open Source Bootstrap Admin Template">
    <meta name="author" content="Łukasz Holeczek">
    <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,CSS,SCSS,HTML,RWD,Dashboard,React">
    <title>CoreUI Free React.js Admin Template</title>
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app
    </noscript>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
````

## File: README.md
````markdown
# CoreUI Free React Admin Template - Built for AI-Assisted Development [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?text=CoreUI%20-%20Free%React%204%20Admin%20Template%20&url=https://coreui.io&hashtags=bootstrap,admin,template,dashboard,panel,free,angular,react,vue)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![@coreui coreui](https://img.shields.io/badge/@coreui%20-coreui-lightgrey.svg?style=flat-square)](https://github.com/coreui/coreui)
[![npm package][npm-coreui-badge]][npm-coreui]
[![NPM downloads][npm-coreui-download]][npm-coreui]
[![@coreui react](https://img.shields.io/badge/@coreui%20-react-lightgrey.svg?style=flat-square)](https://github.com/coreui/react)
[![npm package][npm-coreui-react-badge]][npm-coreui-react]
[![NPM downloads][npm-coreui-react-download]][npm-coreui-react]  

[npm-coreui]: https://www.npmjs.com/package/@coreui/coreui
[npm-coreui-badge]: https://img.shields.io/npm/v/@coreui/coreui.png?style=flat-square
[npm-coreui-download]: https://img.shields.io/npm/dm/@coreui/coreui.svg?style=flat-square
[npm-coreui-react]: https://www.npmjs.com/package/@coreui/react
[npm-coreui-react-badge]: https://img.shields.io/npm/v/@coreui/react.png?style=flat-square
[npm-coreui-react-download]: https://img.shields.io/npm/dm/@coreui/react.svg?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/react

[![Bootstrap Admin Template](https://assets.coreui.io/products/coreui-free-bootstrap-admin-template-light-dark.webp)](https://coreui.io/product/free-react-admin-template/)

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The CoreUI Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – CoreUI covers them all!

## Table of Contents

* [Versions](#versions)
* [CoreUI PRO](#coreui-pro)
* [CoreUI PRO React Admin Templates](#coreui-pro-react-admin-templates)
* [Quick Start](#quick-start)
* [Installation](#installation)
* [Basic usage](#basic-usage)
* [What's included](#whats-included)
* [AI-Friendly Development](#ai-friendly-development)
* [Documentation](#documentation)
* [Components](#components)
* [Versioning](#versioning)
* [Creators](#creators)
* [Community](#community)
* [Support CoreUI Development](#support-coreui-development)
* [Copyright and License](#copyright-and-license)

## Versions

* [CoreUI Free Bootstrap Admin Template](https://github.com/coreui/coreui-free-bootstrap-admin-template)
* [CoreUI Free Angular Admin Template](https://github.com/coreui/coreui-free-angular-admin-template)
* [CoreUI Free React.js Admin Template (Vite)](https://github.com/coreui/coreui-free-react-admin-template)
* [CoreUI Free React.js Admin Template (Create React App)](https://github.com/coreui/coreui-free-react-admin-template-cra)
* [CoreUI Free Vue.js Admin Template](https://github.com/coreui/coreui-free-vue-admin-template)

## CoreUI PRO

* 💪  [CoreUI PRO Angular Admin Template](https://coreui.io/product/angular-dashboard-template/)
* 💪  [CoreUI PRO Bootstrap Admin Template](https://coreui.io/product/bootstrap-dashboard-template/)
* 💪  [CoreUI PRO Next.js Admin Template](https://coreui.io/product/next-js-dashboard-template/)
* 💪  [CoreUI PRO React Admin Template](https://coreui.io/product/react-dashboard-template/)
* 💪  [CoreUI PRO Vue Admin Template](https://coreui.io/product/vue-dashboard-template/)

## CoreUI PRO React Admin Templates

| Default Theme | Light Theme |
| --- | --- |
| [![CoreUI PRO React Admin Template](https://coreui.io/images/templates/coreui_pro_default_light_dark.webp)](https://coreui.io/product/react-dashboard-template/?theme=default) | [![CoreUI PRO React Admin Template](https://coreui.io/images/templates/coreui_pro_light_light_dark.webp)](https://coreui.io/product/react-dashboard-template/?theme=light)|

| Modern Theme | Bright Theme |
| --- | --- |
| [![CoreUI PRO React Admin Template](https://coreui.io/images/templates/coreui_pro_default_v3_light_dark.webp)](https://coreui.io/product/react-dashboard-template/?theme=modern) | [![CoreUI PRO React Admin Template](https://coreui.io/images/templates/coreui_pro_light_v3_light_dark.webp)](https://coreui.io/product/react-dashboard-template/?theme=bright)|

## Quick Start

- [Download the latest release](https://github.com/coreui/coreui-free-react-admin-template/archive/refs/heads/main.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-free-react-admin-template.git`

### Installation

``` bash
$ npm install
```

or

``` bash
$ yarn install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 
```

or 

``` bash
# dev server with hot reload at http://localhost:3000
$ yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

or

```bash
# build for production with minification
$ yarn build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
coreui-free-react-admin-template
├── public/          # static files
│   ├── favicon.ico
│   └── manifest.json
│
├── src/             # project root
│   ├── assets/      # images, icons, etc.
│   ├── components/  # common components - header, footer, sidebar, etc.
│   ├── layouts/     # layout containers
│   ├── scss/        # scss styles
│   ├── views/       # application views
│   ├── _nav.jsx     # sidebar navigation config
│   ├── App.jsx
│   ├── index.jsx
│   ├── routes.js    # routes config
│   └── store.js     # template state example 
│
├── index.html       # html template
├── ...
├── package.json
├── ...
└── vite.config.mjs  # vite config
```

## AI-Friendly Development

This template is optimized for AI-assisted development with comprehensive context files and documentation:

### Context Files
- **`.cursorrules`** - Comprehensive AI context file with project conventions, patterns, and guidelines for working with React, CoreUI, and the template architecture
- **`ARCHITECTURE.md`** - Detailed technical documentation covering the project structure, component hierarchy, routing system, state management, and build pipeline
- **`DEVELOPMENT.md`** - Practical developer guide with setup instructions, development workflows, code examples, and best practices

### Code Documentation
- All React components include detailed JSDoc comments with parameter types and descriptions
- Inline documentation explaining complex logic and patterns
- PropTypes definitions for runtime type checking

### Benefits for AI Coding Assistants

When using AI coding assistants like Cursor, Claude Code, or GitHub Copilot, these context files help the AI to:

- **Understand the Stack**: Recognize that this is a React 19 application using CoreUI React components (not Tailwind CSS or other frameworks)
- **Follow Patterns**: Generate code that matches the project's component structure and conventions
- **Use Correct Components**: Suggest appropriate CoreUI React components from `@coreui/react`
- **Maintain Code Style**: Follow ESLint and Prettier rules automatically
- **Respect Architecture**: Work within the established routing, state management, and styling patterns

Simply open the project in your AI-enabled IDE, and the assistant will automatically have context about the React architecture, CoreUI React component usage, development workflows, and coding standards.

## Documentation

The documentation for the CoreUI Admin Template is hosted at our website [CoreUI for React](https://coreui.io/react/docs/templates/installation/)

## Components

CoreUI React.js Admin Templates are built on top of CoreUI and CoreUI PRO UI components libraries, including all of these components.

- [React Accordion](https://coreui.io/react/docs/components/accordion/)
- [React Alert](https://coreui.io/react/docs/components/alert/)
- [React Autocomplete](https://coreui.io/react/docs/forms/autocomplete/) **PRO**
- [React Avatar](https://coreui.io/react/docs/components/avatar/)
- [React Badge](https://coreui.io/react/docs/components/badge/)
- [React Breadcrumb](https://coreui.io/react/docs/components/breadcrumb/)
- [React Button](https://coreui.io/react/docs/components/button/)
- [React Button Group](https://coreui.io/react/docs/components/button-group/)
- [React Callout](https://coreui.io/react/docs/components/callout/)
- [React Card](https://coreui.io/react/docs/components/card/)
- [React Carousel](https://coreui.io/react/docs/components/carousel/)
- [React Checkbox](https://coreui.io/react/docs/forms/checkbox/)
- [React Close Button](https://coreui.io/react/docs/components/close-button/)
- [React Collapse](https://coreui.io/react/docs/components/collapse/)
- [React Date Picker](https://coreui.io/react/docs/forms/date-picker/) **PRO**
- [React Date Range Picker](https://coreui.io/react/docs/forms/date-range-picker/) **PRO**
- [React Dropdown](https://coreui.io/react/docs/components/dropdown/)
- [React Floating Labels](https://coreui.io/react/docs/forms/floating-labels/)
- [React Footer](https://coreui.io/react/docs/components/footer/)
- [React Header](https://coreui.io/react/docs/components/header/)
- [React Image](https://coreui.io/react/docs/components/image/)
- [React Input](https://coreui.io/react/docs/forms/input/)
- [React Input Group](https://coreui.io/react/docs/forms/input-group/)
- [React List Group](https://coreui.io/react/docs/components/list-group/)
- [React Loading Button](https://coreui.io/react/docs/components/loading-button/) **PRO**
- [React Modal](https://coreui.io/react/docs/components/modal/)
- [React Multi Select](https://coreui.io/react/docs/forms/multi-select/) **PRO**
- [React Navs & Tabs](https://coreui.io/react/docs/components/navs-tabs/)
- [React Navbar](https://coreui.io/react/docs/components/navbar/)
- [React Offcanvas](https://coreui.io/react/docs/components/offcanvas/)
- [React One Time Password Input](https://coreui.io/react/docs/forms/one-time-password-input/) **PRO**
- [React Pagination](https://coreui.io/react/docs/components/pagination/)
- [React Password Input](https://coreui.io/react/docs/forms/password-input/) **PRO**
- [React Placeholder](https://coreui.io/react/docs/components/placeholder/)
- [React Popover](https://coreui.io/react/docs/components/popover/)
- [React Progress](https://coreui.io/react/docs/components/progress/)
- [React Radio](https://coreui.io/react/docs/forms/radio/)
- [React Range](https://coreui.io/react/docs/forms/range/)
- [React Range Slider](https://coreui.io/react/docs/forms/range-slider/) **PRO**
- [React Rating](https://coreui.io/react/docs/forms/rating/)
- [React Select](https://coreui.io/react/docs/forms/select/)
- [React Sidebar](https://coreui.io/react/docs/components/sidebar/)
- [React Smart Pagination](https://coreui.io/react/docs/components/smart-pagination/) **PRO**
- [React Smart Table](https://coreui.io/react/docs/components/smart-table/) **PRO**
- [React Spinner](https://coreui.io/react/docs/components/spinner/)
- [React Stepper](https://coreui.io/react/docs/forms/stepper/) **PRO**
- [React Switch](https://coreui.io/react/docs/forms/switch/)
- [React Table](https://coreui.io/react/docs/components/table/)
- [React Textarea](https://coreui.io/react/docs/forms/textarea/)
- [React Time Picker](https://coreui.io/react/docs/forms/time-picker/) **PRO**
- [React Toast](https://coreui.io/react/docs/components/toast/)
- [React Tooltip](https://coreui.io/react/docs/components/tooltip/)

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI Free Admin Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-free-react-admin-template/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>

**CoreUI Team**

* <https://twitter.com/core_ui>
* <https://github.com/coreui>
* <https://github.com/orgs/coreui/people>

## Community

Get updates on CoreUI's development and chat with the project maintainers and community members.

- Follow [@core_ui on Twitter](https://twitter.com/core_ui).
- Read and subscribe to [CoreUI Blog](https://coreui.ui/blog/).

## Support CoreUI Development

CoreUI is an MIT-licensed open source project and is completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying the [CoreUI PRO](https://coreui.io/pricing/?framework=react&src=github-coreui-free-react-admin-template) or by becoming a sponsor via [Open Collective](https://opencollective.com/coreui/).

## Copyright and License

copyright 2026 creativeLabs Łukasz Holeczek.   

Code released under [the MIT license](https://github.com/coreui/coreui-free-react-admin-template/blob/main/LICENSE).
````

## File: package.json
````json
{
  "name": "@coreui/coreui-free-react-admin-template",
  "version": "5.6.0",
  "description": "CoreUI Free React Admin Template",
  "homepage": ".",
  "bugs": {
    "url": "https://github.com/coreui/coreui-free-react-admin-template/issues"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:coreui/coreui-free-react-admin-template.git"
  },
  "license": "MIT",
  "author": "The CoreUI Team (https://github.com/orgs/coreui/people)",
  "scripts": {
    "build": "vite build",
    "lint": "eslint",
    "serve": "vite preview",
    "start": "vite"
  },
  "dependencies": {
    "@coreui/chartjs": "^4.2.0",
    "@coreui/coreui": "^5.6.1",
    "@coreui/icons": "^3.0.1",
    "@coreui/icons-react": "^2.3.0",
    "@coreui/react": "^5.10.0",
    "@coreui/react-chartjs": "^3.0.0",
    "@coreui/utils": "^2.0.2",
    "@popperjs/core": "^2.11.8",
    "chart.js": "^4.5.1",
    "classnames": "^2.5.1",
    "core-js": "^3.49.0",
    "prop-types": "^15.8.1",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.13.2",
    "redux": "5.0.1",
    "simplebar-react": "^3.3.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.4.27",
    "eslint": "^9.39.2",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.5",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "globals": "^16.5.0",
    "postcss": "^8.5.8",
    "prettier": "3.8.1",
    "sass": "^1.98.0",
    "vite": "^8.0.3"
  }
}
````
