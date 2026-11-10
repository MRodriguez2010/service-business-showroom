import fs from 'node:fs';
import ts from 'typescript';
import assert from 'node:assert/strict';
const js=ts.transpileModule(fs.readFileSync('lib/demo-pricing.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const {estimatePlan}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const fixtures=[
 ['lawn-care',{size:'Medium · 2,500–5,000 sq ft',frequency:'Weekly',condition:'Regularly maintained',extras:[]},67],
 ['hvac',{issue:'Seasonal tune-up'},129],
 ['cleaning',{bedrooms:'2',bathrooms:'2',clean:'Regular reset',frequency:'Weekly'},144],
 ['janitorial',{facility:'Office',area:'7000',frequency:'Three times a week'},1170],
 ['pressure-washing',{surface:'Concrete driveway',area:'1000',condition:'General dirt'},220],
 ['handyman',{tasks:['Adjust a door','Hang shelves'],condition:'Straightforward installation'},125],
 ['painting',{scope:'Interior rooms',rooms:'2',condition:'Minor repairs needed'},780],
 ['detailing',{vehicle:'SUV / crossover',package:'The complete detail',condition:'Regularly maintained',extras:['Pet hair']},315],
 ['pet-grooming',{size:'Medium · 20–50 lb',service:'Full groom',coat:'Curly or wavy'},115],
 ['food-trucks',{guests:'50',menu:'Mixed favorites',extras:['Agua fresca']},800],
 ['catering',{guests:'40',menu:'The shared table',service:'Staffed buffet'},2320],
 ['barbershop',{service:'Cut & beard · 60 min'},52]
];
for(const [id,answers,total] of fixtures){const actual=estimatePlan(id,answers);assert.equal(actual.total,total,id);assert.equal(actual.lines.reduce((sum,l)=>sum+l.amount,0),total);assert.ok(actual.ready);assert.ok(actual.low<=total&&actual.high>=total);assert.equal(estimatePlan(id,{}).ready,false);}
assert.equal(estimatePlan('hvac',{issue:'Planning replacement'}).total,0);
assert.equal(estimatePlan('food-trucks',{guests:'10',menu:'Mixed favorites'}).total,350);
assert.equal(estimatePlan('cleaning',{bedrooms:'-1',bathrooms:'2',clean:'Deep clean'}).ready,false);
assert.equal(estimatePlan('painting',{rooms:'Infinity',scope:'Interior rooms'}).ready,false);
console.log(JSON.stringify({passed:28,industries:12,scope:'Known-price fixtures, itemization, readiness, event minimum, replacement assessment, invalid numeric input'}));
