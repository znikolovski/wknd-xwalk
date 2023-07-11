export default async function decorate(block) {
  const row = block.firstElementChild;
  const bg = row.querySelector('picture');
  const bgP = bg.closest('p');
  cloneAttributes(bg, bgP);
  block.append(bg);
  bgP.remove();
  row.classList.add('hero-body');
}

function cloneAttributes(target, source) {
  [...source.attributes].forEach( attr => { 
    if (attr.nodeName !== 'itemtype') target.setAttribute(attr.nodeName ,attr.nodeValue) 
  })
}