#!/usr/bin/node

/**
* Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, children, classes, id) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes ?? [];
    // Array of children nodes.
    this.children = children ?? []; // All children are of type Node
    // unique id of the node
    this.id = id //unique id string
  }

  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */
  search(selector) {
    if (!selector) return 'Please provide selector';
    if (selector.startsWith(".") || selector.startsWith('#')) {
      selector = selector.slice(1);
    }
    var result = this.searchHelper(selector, this);
    // console.log(result);
    return result;
  }

  searchHelper(selector, node) {
    var result = [];
    if (node.tag === selector || node.id === selector || node.classes.includes(selector)) {
      result.push(node);
    }
    if (node.children) {
      node.children.forEach(child => {
        var arr = this.searchHelper(selector, child);
        arr.forEach(ele => result.push(ele));
      });
    }
    return result;
  }
}


// example 1
// var rootNode = new Node('div', [], [], '');
// var span1 = new Node('span', [], [], 'span-1');
// var span2 = new Node('span', [], [], 'span-2');
// var innerDiv = new Node('div', [], []);
// var span3 = new Node('span', [], [], 'span-3');
// innerDiv.children.push(span3);
// rootNode.children.push(span1, span2, innerDiv);
// rootNode.search('#span-1', rootNode);


/* DOM -
<body id="content">
  <div id="div-1" class="mainContainer">
    <span id="span-1" class="note"></span>
    <span id="span-2"></span>
    <div id="div-2" class="subContainer1">
      <p id="para-1" class="sub1-p1 note"></p>
      <span id="span-3" class="sub1-span3"></span>
    </div>
    <div id="div-3" class="subContainer2">
      <section id="sec-1">
        <label id="lbl-1"></label>
      </section>
    </div>
    <div id="div-4">
      <span id="span-4" class="mania"></span>
      <span id="span-5" class="note mania"></span>
    </div>
  </div>
  <span id="span-6" class="randomSpan"></span>
</body>
*/


// DOM based Nodes creation
var body = new Node('body', [], [], 'content');
var divNode1 = new Node('div', [], ['mainContainer'], 'div-1');
body.children.push(divNode1);
var span1 = new Node('span', [], ['note'], 'span-1');
divNode1.children.push(span1);
var span2 = new Node('span', [], [], 'span-2');
divNode1.children.push(span2);
var divNode2 = new Node('div', [], ['subContainer1'], 'div-2');
divNode1.children.push(divNode2);
var p1 = new Node('p', [], ['note', 'sub1-p1'], 'para-1');
divNode2.children.push(p1);
var span3 = new Node('span', [], ['sub1-span3'], 'span-3');
divNode2.children.push(span3);
var divNode3 = new Node('div', [], ['subContainer2'], 'div-3');
divNode1.children.push(divNode3);
var section = new Node('section', [], [], 'sec-1');
divNode3.children.push(section);
var label = new Node('label', [], [], 'lbl-1');
section.children.push(label);
var divNode4 = new Node('div', [], [], 'div-4');
divNode1.children.push(divNode4);
var span4 = new Node('span', [], ['mania'], 'span-4');
divNode4.children.push(span4);
var span5 = new Node('span', [], ['mania', 'note'], 'span-5');
divNode4.children.push(span5);
var span6 = new Node('span', [], ['randomSpan'], 'span-6');
body.children.push(span6);
var randomNode = new Node('title', [], [], ''); //for test case 6

// Testing 
console.log("Started...");
// Test case 1 -
console.log(divNode1.search("span"));
// Test case 2 -
console.log(divNode1.search(".note"));
// Test case 3 -
console.log(divNode1.search("label"));
// Test case 4 -
console.log(p1.search(".note"));
// Test case 5 -
console.log(divNode1.search("div"));
// Test case 6 -
console.log(randomNode.search("div"));
// Test case 7 -
console.log(divNode2.search("section"));
// Test case 8 -
console.log(body.search()); // Error conditions need to be handled
// Test case 9 -
console.log(body.search("section")); 
// Test case 10 -
console.log(divNode1.search(".randomSpan")); // randomSpan is some Span outside your divNode1
