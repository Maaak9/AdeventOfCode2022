"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puzzleData_1 = __importDefault(require("../puzzleData"));
var FileSystemNode = /** @class */ (function () {
    function FileSystemNode(_a) {
        var name = _a.name, parent = _a.parent, children = _a.children, size = _a.size;
        this.name = name;
        this.parent = parent;
        this.children = children;
        this.size = size;
    }
    return FileSystemNode;
}());
var FileSystem = /** @class */ (function () {
    function FileSystem(currentNode) {
        this.currentNode = currentNode;
        this.rootNode = currentNode;
    }
    FileSystem.prototype.updateCurrentNode = function (node) { this.currentNode = node; };
    FileSystem.prototype.goToParent = function () { this.currentNode = this.currentNode.parent; };
    FileSystem.prototype.goToRoot = function () { this.currentNode = this.rootNode; };
    FileSystem.prototype.getChildren = function () { return this.currentNode.children; };
    FileSystem.prototype.getParent = function () { return this.currentNode.parent; };
    FileSystem.prototype.addChildNode = function (node) {
        this.currentNode.children = this.currentNode.children.concat([node]);
    };
    FileSystem.prototype.calculateSizes = function () {
    };
    FileSystem.prototype.print = function () {
        console.log(this.rootNode.name);
        var indent = 1;
        var traverseTree = function (tree) {
            tree.forEach(function (node) {
                console.log('--' + Array(indent).join('--'), node.name, "  --- ", node.size);
                if (node.children && node.children.length > 0) {
                    indent++;
                    traverseTree(node.children);
                }
                if (tree.indexOf(node) === tree.length - 1) {
                    indent--;
                }
            });
        };
        traverseTree(this.rootNode.children);
    };
    return FileSystem;
}());
var buildFileSystem = function (instructions) {
    var rootNode = new FileSystemNode({
        name: "root",
        children: [],
        parent: undefined,
        size: undefined
    });
    var fileSystem = new FileSystem(rootNode);
    instructions.forEach(function (i) {
        var data = i.trim().split("\n");
        var instruction = data[0];
        var output = data.slice(1, data.length);
        if (instruction.match(/cd \.\./)) {
            fileSystem.goToParent();
        }
        else if (instruction.match(/cd [^\/\.](\w*)/)) {
            // Check if folder exists
            var folderName_1 = instruction.split(" ")[1];
            var children = fileSystem.getChildren();
            var childNode = children.filter(function (child) { return child.name === folderName_1; });
            if (childNode[0]) {
                fileSystem.updateCurrentNode(childNode[0]);
            }
            else {
                fileSystem.addChildNode(new FileSystemNode({
                    name: folderName_1,
                    parent: fileSystem.currentNode,
                    children: [],
                    size: undefined
                }));
            }
        }
        else if (instruction.match(/ls/)) {
            var children_1 = fileSystem.getChildren();
            output.forEach(function (item) {
                var itemName = item.split(" ")[1];
                if (children_1.filter(function (child) { return child.name === itemName; }).length === 0) {
                    // child dosen't exist in filesystem needs to be created.
                    fileSystem.addChildNode(new FileSystemNode({
                        name: itemName,
                        parent: fileSystem.currentNode,
                        children: [],
                        size: item.split(" ")[0] === "dir" ? undefined : parseInt(item.split(" ")[0])
                    }));
                }
            });
        }
        else if (instruction.match(/cd \//)) {
            fileSystem.goToRoot();
        }
    });
    return fileSystem;
};
var instructions = puzzleData_1["default"].split("$");
var fileSystem = buildFileSystem(instructions);
fileSystem.print();
var getDirSizes = function (node, sizes) {
    if (node.size !== undefined) {
        return node.size;
    }
    var size = node.children.reduce(function (sum, child) { return sum + getDirSizes(child, sizes); }, 0);
    sizes.push(size);
    return size;
};
var dirSizes = [];
getDirSizes(fileSystem.rootNode, dirSizes);
var sumOfDirs = dirSizes.reduce(function (sum, size) {
    if (size <= 100000)
        return sum + size;
    return sum;
}, 0);
console.log('sumOfDirs', sumOfDirs);
//# sourceMappingURL=index.js.map