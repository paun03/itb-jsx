// import {generateList, generateItem as generateListItem} from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js"

// let ul = generateList(document.body);

// generateListItem(ul, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
// generateListItem(ul, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
// generateListItem(ul, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);

// generateTableItem(tr, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
// generateTableItem(tr, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
// generateTableItem(tr, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);

List.generateItem(ul, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
List.generateItem(ul, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
List.generateItem(ul, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);

Table.generateItem(tr, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
Table.generateItem(tr, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
Table.generateItem(tr, "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg");
