'use strict';
import testModule from "module/module1";

// const testModule = require('module1');



console.log(name);

console.log(testModule.getName());

testModule.setName("TestSet");
console.log(testModule.getName());