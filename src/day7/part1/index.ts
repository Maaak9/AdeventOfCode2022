import puzzleData from "../puzzleData";

class FileSystemNode {
  name: string;
  parent: FileSystemNode | undefined;
  children: FileSystemNode[];
  size: number | undefined;

  constructor({ name, parent, children, size }){
    this.name = name;
    this.parent = parent;
    this.children = children;
    this.size = size;
  }
}

class FileSystem {
  public currentNode: FileSystemNode;
  public rootNode: FileSystemNode;

  constructor(currentNode: FileSystemNode) {
    this.currentNode = currentNode;
    this.rootNode = currentNode;
  }

  updateCurrentNode(node: FileSystemNode) { this.currentNode = node; }
  goToParent() { this.currentNode = this.currentNode.parent; }
  goToRoot() { this.currentNode = this.rootNode; }
  getChildren() { return this.currentNode.children; }
  getParent() { return this.currentNode.parent; }
  addChildNode(node: FileSystemNode) {
    this.currentNode.children = [...this.currentNode.children, node];
  }
  calculateSizes() {

  }
  print() {
    console.log(this.rootNode.name);
    let indent = 1;
    const traverseTree = (tree: FileSystemNode[]) => {
      tree.forEach((node: FileSystemNode) =>  {
        console.log('--' + Array(indent).join('--'), node.name, "  --- ", node.size);
        if(node.children && node.children.length > 0) {
          indent ++;
          traverseTree(node.children);
        }
        if(tree.indexOf(node) === tree.length - 1) {
          indent--;
        }
      })
    }
    traverseTree(this.rootNode.children);
  }
}

const buildFileSystem = (instructions: string[]) => {
  const rootNode = new FileSystemNode({
    name: "root",
    children: [],
    parent: undefined,
    size: undefined
  });
  
  const fileSystem = new FileSystem(rootNode);

  instructions.forEach((i) => {
    const data = i.trim().split("\n");
    const instruction = data[0];
    const output = data.slice(1, data.length);
    
    if (instruction.match(/cd \.\./)) {
      fileSystem.goToParent();
    }
    else if (instruction.match(/cd [^\/\.](\w*)/)) {
      // Check if folder exists
      const folderName = instruction.split(" ")[1];
      const children = fileSystem.getChildren();
      const childNode = children.filter((child) => child.name === folderName);

      if (childNode[0]) {
        fileSystem.updateCurrentNode(childNode[0]);
      } else {
        fileSystem.addChildNode(new FileSystemNode({
          name: folderName,
          parent: fileSystem.currentNode,
          children: [],
          size: undefined
        }));
      }
    }
    else if (instruction.match(/ls/)) {
      const children = fileSystem.getChildren();
      output.forEach((item) => {
        const itemName = item.split(" ")[1];
        if (children.filter((child) => child.name === itemName).length === 0) {
          // child dosen't exist in filesystem needs to be created.
          fileSystem.addChildNode(new FileSystemNode({
            name: itemName,
            parent: fileSystem.currentNode,
            children: [],
            size: item.split(" ")[0] === "dir" ? undefined : parseInt(item.split(" ")[0])
          }));
        }
      })
    }
    else if (instruction.match(/cd \//)) {
      fileSystem.goToRoot();
    }
    
  })
  return fileSystem;
}

const instructions = puzzleData.split("$");
const fileSystem = buildFileSystem(instructions);
fileSystem.print();


const getDirSizes = (node: FileSystemNode, sizes: number[]) => {
  if (node.size !== undefined) {
    return node.size;
  }
  const size = node.children.reduce((sum, child) => sum + getDirSizes(child, sizes), 0);
  sizes.push(size);
  return size;
}

let dirSizes = [];
getDirSizes(fileSystem.rootNode, dirSizes);



const sumOfDirs = dirSizes.reduce((sum, size) => {
  if (size <= 100000) return sum + size;
  return sum;
}, 0);

console.log('sumOfDirs', sumOfDirs);
