/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'menu.rocket.js';
import { html, layout } from './recursive.data.js';
export { html, layout };
/* END - Rocket auto generated - do not touch */


import { PageTree,
  SiteMenu,
  IndexMenu,
  NextMenu,
  PreviousMenu,
  TableOfContentsMenu, } from '@rocket/engine';

export const pageTree = new PageTree();
await pageTree.restore(new URL('./pageTreeData.rocketGenerated.json', import.meta.url));
console.log("FUI")
export default () => html`
  <a href="/">back to root /</a><br>
  <h1>Menus</h1>
  <h3>SiteMenu</h3>
  <p>Note that the SiteMenu does produce the roots but formatting isn't something I know how to do correctly yet. </p>
  ${pageTree.renderMenu(new SiteMenu(), sourceRelativeFilePath)}
  <h3>IndexMenu</h3>
  <p>Note that nothing is showing for IndexMenu with the code given </p>
  ${pageTree.renderMenu(new IndexMenu(), sourceRelativeFilePath)}
  <h3>NextMenu</h3>
  <p>Note that nothing is showing for NextMenu with the code given </p>
  ${pageTree.renderMenu(new NextMenu(), sourceRelativeFilePath)}
  <h3>PreviousMenu</h3>
  ${pageTree.renderMenu(new PreviousMenu(), sourceRelativeFilePath)}
`;