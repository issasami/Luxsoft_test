var static = [
        {"name":"root", "parentId":null, "id":100},
        {"name":"1stlevelChild1", "parentId":100, "id":201},
        {"name":"1stlevelChild2", "parentId":100, "id":202},
        {"name":"2ndlevelChild1", "parentId":201, "id":301},
        {"name":"2ndlevelChild2", "parentId":201, "id":301}
    ],
    newStatic = [];

for (var i = 0; i<static.length; i++){
    static[i].childs = [];

    if(static[i].parentId){
        if(static[i].parentId == 100) {
            static[0].childs.push(static[i])
        }
        else if (static[i].parentId == 201){
            static[0].childs[0].childs.push(static[i])
        }
    }
}

static = static[0];
console.log(static);


