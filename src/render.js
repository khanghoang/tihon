function render(el, rootDOM) {
  if (typeof el === 'string') {
    const domEl = document.createTextNode(el);
    rootDOM.appendChild(domEl);
    return;
  }

  const { type, props = { children: [] } } = el;
  const domEl = type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(type);
  const isAttribute = name => name !== "children";
  Object.keys(props)
  .filter(isAttribute)
  .forEach(propName => domEl[propName] = props[propName])

  const childrenElements = props.children;
  childrenElements.forEach(childEl => render(childEl, domEl))

  rootDOM.appendChild(domEl);
}

module.exports = {
  render,
}
