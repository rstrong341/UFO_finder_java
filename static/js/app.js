// from data.js
const tableData = data;

// Create a variable for tbody
var tbody = d3.select("tbody");


var filters = {};

function UpdatedFilters(){
    var ChangeElement = d3.select(this).select("input");
    var ElementValue = ChangeElement.property("value");

    if(ElementValue){
        filters["datetime"] = ElementValue;
    }
    else {
        delete filters["datetime"];
    }
    FilterTable()
}

function FilterTable(){
    let FilteredData = tableData;

    Object.entries(filters).forEach(function([key,value]){
        FilteredData = FilteredData.filter((row) => row[key] === value);
    })

    buildTable(FilteredData);
}

function buildTable(data){
    tbody.html("");

    data.forEach(function(dataRow){
        var row = tbody.append("tr");

        Object.values(dataRow).forEach(function(val){
            var cell = row.append("td");
            cell.text(val);
        })

    })
}

d3.selectAll(".filter").on("change", UpdatedFilters);


buildTable(tableData)

console.log(filters);